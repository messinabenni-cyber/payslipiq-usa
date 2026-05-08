import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Security at PayslipIQ",
  description: "How PayslipIQ secures pay stub data: TLS, encryption at rest, security headers, vulnerability disclosure, sub-processors. Educational only.",
  alternates: { canonical: '/security' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Security at PayslipIQ</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Transport, storage, and headers</h2>
        <ul><li>TLS 1.2+ enforced. HSTS preloaded.</li><li>Strict CSP, X-Frame-Options DENY, X-Content-Type-Options nosniff, Permissions-Policy locking down sensors.</li><li>Encrypted at rest. Pay stub processing storage is short-lived.</li><li>OAuth + email magic-link for premium accounts. No plaintext passwords stored.</li></ul>
        <h2>Vulnerability disclosure</h2>
        <p>Email security@payslipiq.com with a description, repro steps, affected URL, and your name (optional). We acknowledge within 5 business days. We do not pursue legal action against good-faith research that follows our policy.</p>
        <h2>What we do not do</h2>
        <ul><li>Store credit card data.</li><li>Store Social Security Numbers (we redact when detected on uploads).</li><li>Run third-party advertising scripts.</li></ul>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
