import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Security",
  description: "How PayslipIQ secures pay stub data: TLS, encryption at rest, security headers, vulnerability disclosure, sub-processors.",
  alternates: { canonical: "/security" },
};

const FAQS = [{"q": "Does PayslipIQ store my Social Security Number?", "a": "No. The pay stub explainer detects and redacts SSNs before processing. We do not store SSNs."}, {"q": "How can I report a security vulnerability?", "a": "Email security@payslipiq.com. We acknowledge within 5 business days. Good-faith research is welcomed."}, {"q": "Is my pay stub encrypted at rest?", "a": "Yes. Pay stub files are encrypted at rest during processing. Free tier files are auto-purged within 24 hours. Premium saved reports are encrypted for the lifetime of the report."}, {"q": "Does PayslipIQ run third-party trackers?", "a": "No. Only Plausible Analytics, which is cookieless and does not collect PII. No Google Analytics, no Facebook Pixel, no advertising trackers."}];
const RELATED = [{"label": "Trust Center", "href": "/trust"}, {"label": "Privacy Policy", "href": "/privacy"}, {"label": "AI Transparency", "href": "/ai-transparency"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "Trust", "url": "/trust"}, {"name": "Security", "url": "/security"}];

export default function Page() {
  return (
    <RichArticle
      title="Security"
      url="/security"
      description="How PayslipIQ secures pay stub data: TLS, encryption at rest, security headers, vulnerability disclosure, sub-processors."
      intro={<>What we do to protect your pay stub, your data, and your trust. The technical baseline plus the operational practices that surround it.</>}
      body={<><h2>Transport, storage, and headers</h2>
<table>
<thead><tr><th>Layer</th><th>Control</th></tr></thead>
<tbody>
<tr><td>Transport</td><td>TLS 1.2+ enforced. HSTS preloaded (max-age=63072000; includeSubDomains; preload).</td></tr>
<tr><td>Headers</td><td>Content-Security-Policy locked to first-party plus Plausible and Vercel scripts. X-Frame-Options DENY. X-Content-Type-Options nosniff. Referrer-Policy strict-origin-when-cross-origin. Permissions-Policy revoking camera, microphone, geolocation, payment, USB, sensors, clipboard.</td></tr>
<tr><td>Hosting</td><td>Vercel, global edge with DDoS mitigation.</td></tr>
<tr><td>Storage</td><td>Encrypted at rest. Pay stub processing storage is short-lived.</td></tr>
<tr><td>Authentication</td><td>OAuth and email magic-link for premium accounts. No plaintext passwords stored.</td></tr>
<tr><td>Secrets</td><td>Environment-scoped secret managers. Rotated on a published schedule.</td></tr>
</tbody>
</table>
<h2>Data minimization</h2>
<p>The pay stub explainer does not require an account. Saved reports require an email and magic-link. We collect only what is needed for the feature you are using.</p>
<h2>Vulnerability disclosure</h2>
<p>Email security@payslipiq.com with: a description of the issue, repro steps, the affected URL or endpoint, your name (optional, for credit). We acknowledge within 5 business days. We do not pursue legal action against good-faith research that follows our disclosure policy.</p>
<h2>What we do not do</h2>
<ul>
<li>Store credit card data on our servers (premium subscriptions use a PCI-compliant processor).</li>
<li>Store Social Security Numbers (the explainer redacts SSNs detected on uploads, before storage).</li>
<li>Run third-party advertising scripts. Zero third-party trackers beyond Plausible (privacy-friendly, cookieless).</li>
</ul>
<h2>Sub-processors</h2>
<table>
<thead><tr><th>Provider</th><th>Role</th><th>Region</th></tr></thead>
<tbody>
<tr><td>Vercel</td><td>Hosting and edge</td><td>Global, US-primary</td></tr>
<tr><td>Plausible Analytics</td><td>Privacy-friendly analytics, no cookies, no PII</td><td>EU</td></tr>
<tr><td>Email magic-link provider</td><td>Transactional auth email</td><td>US</td></tr>
<tr><td>Payment processor</td><td>Premium tier billing</td><td>US</td></tr>
<tr><td>LLM provider</td><td>AI summarization (no training on user data)</td><td>US</td></tr>
</tbody>
</table>
<p>List updates on this page when sub-processors change.</p>
<h2>Incident response</h2>
<p>We maintain an internal incident response runbook. In the event of a confirmed security incident affecting user data, we notify affected users per applicable state law (typically within 72 hours of confirmation, faster where required).</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
