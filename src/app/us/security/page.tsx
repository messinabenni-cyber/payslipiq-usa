import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Security | PayslipIQ',
  description: 'How PayslipIQ secures user data, pay-stub uploads, and the platform. Encryption, retention, vendor list, disclosure policy.',
  alternates: { canonical: 'https://payslipiq.com/us/security' }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Security', url: 'https://payslipiq.com/us/security' }
      ]} />
      <ArticleSchema
        headline="PayslipIQ Security"
        description="Security and data-handling practices for PayslipIQ pay-stub uploads, calculator inputs, and account information."
        url="https://payslipiq.com/us/security"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Security</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Pay stubs are sensitive. We treat them that way.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        PayslipIQ is a stateless explainer in most flows. We do not require an account, we do not sell data, and we minimize what we store. This page documents how the platform is secured and how you can report a finding.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Encryption</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li><strong>In transit:</strong> TLS 1.3 across the entire site, HSTS preload enabled with a 2-year max-age.</li>
          <li><strong>At rest:</strong> Vercel-managed encryption on edge cache and storage. Pay-stub images processed by the AI pipeline are deleted within 24 hours of processing.</li>
          <li><strong>Secrets:</strong> Never in source. Held in Vercel Environment Variables, scoped per environment, accessed only by the server-side endpoints that need them.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Data minimization</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li>The Pay Stub Checker reminds users to redact SSN, bank account, and personal identifiers before upload.</li>
          <li>The AI vision pipeline runs under a no-training agreement: uploads are not used to improve any model.</li>
          <li>The original image is deleted within 24 hours of processing. The structured extract may be retained for 30 days for the user to access via the same browser session.</li>
          <li>The Paycheck Calculator is fully client-side. Numbers entered never leave your browser.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Headers and platform hardening</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li>Content-Security-Policy: scripts limited to first-party plus Vercel and analytics, no inline scripts beyond JSON-LD, no third-party ad networks.</li>
          <li>X-Frame-Options: DENY (no embedding).</li>
          <li>Permissions-Policy: camera, microphone, geolocation, payment, USB, sensors, fullscreen, clipboard all disabled.</li>
          <li>Strict-Transport-Security with preload.</li>
          <li>Referrer-Policy: strict-origin-when-cross-origin.</li>
          <li>X-Content-Type-Options: nosniff.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Vendor list</h2>
        <p className="mt-3 text-[15px] text-slate-700 leading-relaxed">
          PayslipIQ uses the following sub-processors. All are bound by contracts that match or exceed our security posture.
        </p>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li><strong>Vercel</strong>, hosting and edge CDN (SOC 2 Type 2).</li>
          <li><strong>Anthropic</strong>, Claude vision model for pay-stub extraction. No-training agreement on enterprise tier.</li>
          <li><strong>GitHub</strong>, source control.</li>
          <li><strong>Plausible</strong> (or alternative), privacy-first analytics, no cookies, no personal identifier transmission.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Reporting a vulnerability</h2>
        <p className="mt-3 text-[15px] text-slate-700 leading-relaxed">
          We welcome reports from security researchers and the public. Email{' '}
          <a href="mailto:security@payslipiq.com" className="text-blue-600 font-semibold hover:underline">security@payslipiq.com</a>{' '}
          with a description of the issue, reproduction steps, and any proof-of-concept. We acknowledge within 72 hours and respond with a remediation plan within 14 days.
        </p>
        <p className="mt-3 text-[15px] text-slate-700 leading-relaxed">
          A machine-readable contact is published at{' '}
          <Link href="/.well-known/security.txt" className="text-blue-600 hover:underline">/.well-known/security.txt</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">In progress</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li>SOC 2 Type 1 audit (planned). PayslipIQ is committed to running on auditor-ready process and tooling.</li>
          <li>Independent penetration test (annual cycle starting Q3 2026).</li>
          <li>Bug bounty program (under review).</li>
        </ul>
        <p className="mt-3 text-[14px] text-slate-500">
          Last updated: May 2026.
        </p>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
