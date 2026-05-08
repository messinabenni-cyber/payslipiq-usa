import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const FOREIGN = ['/uk', '/ie', '/ca', '/au', '/countries', '/global'] as const;

const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), serial=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'X-XSS-Protection': '0',
  'Origin-Agent-Cluster': '?1',
  'Content-Security-Policy':
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://plausible.io; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data: https://fonts.gstatic.com; " +
    "connect-src 'self' https://va.vercel-scripts.com https://plausible.io https://vitals.vercel-insights.com; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "object-src 'none'; " +
    'upgrade-insecure-requests',
};

function applySecurity(res: NextResponse): NextResponse {
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) res.headers.set(k, v);
  return res;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (FOREIGN.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.search = '';
    return applySecurity(NextResponse.redirect(url, 308));
  }
  return applySecurity(NextResponse.next());
}

export const config = {
  matcher: [
    // Apply security headers + foreign-locale redirects on all routes EXCEPT static assets
    '/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
  ],
};
