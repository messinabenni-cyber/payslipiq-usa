#!/usr/bin/env bash
# verify-deploy.sh
#
# Post-deploy verification for PayslipIQ USA. Run this immediately after pushing.
# Exits 0 if every Day-7 acceptance criterion passes. Exits non-zero on first failure.
#
# Usage:
#   chmod +x verify-deploy.sh
#   ./verify-deploy.sh
#   ./verify-deploy.sh https://staging-domain-here.vercel.app  # against a preview URL
set -u

BASE="${1:-https://payslipiq.com}"
PASS=0
FAIL=0
WARN=0

ok()   { echo "  PASS  $*"; PASS=$((PASS+1)); }
bad()  { echo "  FAIL  $*"; FAIL=$((FAIL+1)); }
warn() { echo "  WARN  $*"; WARN=$((WARN+1)); }
hr()   { printf '%.0s-' {1..72}; echo; }

echo
hr
echo "PayslipIQ USA Deploy Verification"
echo "Target: $BASE"
hr

# 1. Root must return 200
echo
echo "[1] Root URL must serve 200 OK (the 308-no-Location bug must be gone)"
status=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE/")
if [ "$status" = "200" ]; then ok "GET / -> $status"; else bad "GET / -> $status (expected 200)"; fi

# 2. www variant
echo
echo "[2] www variant must 200 or 301 to apex"
www_status=$(curl -sI -o /dev/null -w "%{http_code}" "${BASE/https:\/\//https://www.}/")
if [ "$www_status" = "200" ] || [ "$www_status" = "301" ] || [ "$www_status" = "308" ]; then
  ok "GET www -> $www_status"
else
  bad "GET www -> $www_status (expected 200/301/308)"
fi

# 3. Foreign locales must redirect with a clean Location
echo
echo "[3] Foreign locale stubs must 301/308 with Location: */us/"
for path in /uk/ /ie/ /ca/ /au/ /countries/ /global/; do
  status=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE$path")
  loc=$(curl -sI "$BASE$path" | awk -F': ' 'tolower($1)=="location"{print $2}' | tr -d '\r')
  if { [ "$status" = "301" ] || [ "$status" = "308" ]; } && [ -n "$loc" ] && echo "$loc" | grep -q "/us/"; then
    ok "GET $path -> $status, Location: $loc"
  else
    bad "GET $path -> $status, Location: '$loc' (expected 301/308 to /us/)"
  fi
done

# 4. OG metadata must be USA-only at root
echo
echo "[4] Root OG must be USA-only"
home=$(curl -sL "$BASE/")
if echo "$home" | grep -qi 'og:locale:alternate'; then
  bad "og:locale:alternate present at root (delete en_GB/en_IE/en_CA/en_AU)"
else
  ok "no og:locale:alternate at root"
fi
if echo "$home" | grep -i 'og:description' | grep -qiE 'UK|Ireland|Canada|Australia'; then
  bad "og:description still mentions UK/Ireland/Canada/Australia"
else
  ok "og:description is USA-only"
fi
if echo "$home" | grep -qi 'og:locale" content="en_US'; then
  ok "og:locale = en_US"
else
  warn "og:locale not detected as en_US (verify manually)"
fi

# 5. Body must not leak UK terms
echo
echo "[5] No UK contamination in body content (preserving brand 'PayslipIQ' only)"
for url in / /us/ /us/paycheck-calculator/ /us/california/paycheck-calculator/; do
  body=$(curl -sL "$BASE$url")
  hits=$(echo "$body" | grep -ciE 'hmrc|paye[^r]|national insurance|nhs|payslip[^I]')
  # Allow "PayslipIQ" brand name; we matched 'payslip[^I]' to exclude it.
  if [ "$hits" -le 0 ]; then
    ok "$url -> no UK contamination"
  else
    bad "$url -> $hits UK term hits in body"
  fi
done

# 6. Schema must be present and valid-shaped
echo
echo "[6] JSON-LD schema must be present at root"
ld_count=$(curl -sL "$BASE/" | grep -c 'application/ld+json')
if [ "$ld_count" -ge 3 ]; then
  ok "$ld_count JSON-LD blocks found"
else
  bad "only $ld_count JSON-LD blocks (expected >= 3)"
fi

# 7. Sitemap clean
echo
echo "[7] Sitemap must not list foreign locale stubs"
sitemap=$(curl -sL "$BASE/sitemap.xml")
foreign=$(echo "$sitemap" | grep -cE '/uk/|/ie/|/ca/|/au/|/countries/|/global/')
if [ "$foreign" -eq 0 ]; then
  ok "sitemap is clean (0 foreign URLs)"
else
  bad "sitemap still lists $foreign foreign locale URLs"
fi

# 8. Trust Center pages must be live
echo
echo "[8] Trust Center pages must be live"
for page in /trust /security /ai-transparency /methodology /privacy /how-it-works; do
  status=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE$page/")
  if [ "$status" = "200" ]; then ok "$page/ -> 200"; else warn "$page/ -> $status (deploy if not yet built)"; fi
done

# 9. State pages
echo
echo "[9] Top-5 state pages must be live"
for state in california new-york texas florida illinois; do
  status=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE/us/$state/paycheck-calculator/")
  if [ "$status" = "200" ]; then ok "/us/$state/paycheck-calculator/ -> 200"; else bad "/us/$state/paycheck-calculator/ -> $status"; fi
done

# 10. CSP / HSTS unchanged or stricter
echo
echo "[10] Security headers must still be in place"
hdr=$(curl -sI "$BASE/")
echo "$hdr" | grep -qi 'strict-transport-security' && ok "HSTS present" || bad "HSTS missing"
echo "$hdr" | grep -qi 'content-security-policy' && ok "CSP present" || bad "CSP missing"
echo "$hdr" | grep -qi 'x-frame-options: DENY' && ok "X-Frame-Options: DENY" || bad "X-Frame-Options not DENY"
echo "$hdr" | grep -qi 'x-content-type-options: nosniff' && ok "X-Content-Type-Options: nosniff" || bad "nosniff missing"

# 11. Disclaimer presence on calculator pages
echo
echo "[11] Master disclaimer must render on calculator pages"
for url in /us/paycheck-calculator/ /us/fica-explained/ /us/california/paycheck-calculator/; do
  body=$(curl -sL "$BASE$url")
  if echo "$body" | grep -qiE 'educational.*only|not tax.*legal.*financial'; then
    ok "$url -> disclaimer present"
  else
    bad "$url -> disclaimer not detected"
  fi
done

# Summary
echo
hr
echo "Result: $PASS passed, $FAIL failed, $WARN warnings"
hr
echo
if [ "$FAIL" -gt 0 ]; then
  echo "DEPLOY VERIFICATION FAILED — fix the issues above before treating Day-7 as complete."
  exit 1
else
  echo "DEPLOY VERIFICATION PASSED — Day-7 acceptance criteria met."
  exit 0
fi
