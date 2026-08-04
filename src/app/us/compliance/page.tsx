import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Compliance | PayslipIQ',
  description: 'PayslipIQ compliance posture: SOC 2 readiness, FCRA boundary, CCPA, GDPR, HIPAA-equivalent privacy posture for sensitive payroll data.',
  alternates: { canonical: 'https://payslipiq.com/us/compliance' }
};

const POSTURE = [
  {
    framework: 'SOC 2 Type 1',
    status: 'In progress',
    detail: 'PayslipIQ is operating to SOC 2 Common Criteria. A formal Type 1 audit is planned in 2026. Internal controls documentation is maintained on the same standard reviewers expect.'
  },
  {
    framework: 'FCRA (Fair Credit Reporting Act)',
    status: 'Not applicable, by design',
    detail: 'PayslipIQ outputs are not consumer reports. PayslipIQ is not a consumer reporting agency. Outputs must not be used for employment screening, tenant screening, credit decisions, insurance underwriting, or any FCRA-regulated purpose.'
  },
  {
    framework: 'CCPA / CPRA (California)',
    status: 'Compliant',
    detail: 'PayslipIQ does not sell personal information. CA residents may request access, deletion, or correction by emailing privacy@payslipiq.com. The Pay Stub Checker upload flow is opt-in. Analytics use cookie-less tooling.'
  },
  {
    framework: 'GDPR (EU/UK residents)',
    status: 'Compliant where applicable',
    detail: 'PayslipIQ is a US-only service. EU/UK residents who voluntarily use the site have access, deletion, and correction rights. Email privacy@payslipiq.com.'
  },
  {
    framework: 'HIPAA',
    status: 'Not in scope',
    detail: 'PayslipIQ does not handle Protected Health Information (PHI) covered by HIPAA. Health insurance premium amounts on a pay stub are not PHI in this context.'
  },
  {
    framework: 'PCI DSS',
    status: 'Out of scope (Stripe-handled)',
    detail: 'Card data is processed by Stripe. PayslipIQ never touches a primary account number. Stripe is PCI DSS Level 1 certified.'
  }
];

const SUBPROCESSORS = [
  { name: 'Vercel', purpose: 'Hosting and edge CDN', cert: 'SOC 2 Type 2', region: 'United States' },
  { name: 'Anthropic', purpose: 'Claude vision model for pay-stub extraction', cert: 'No-training agreement', region: 'United States' },
  { name: 'GitHub', purpose: 'Source control', cert: 'SOC 2 Type 2', region: 'United States' },
  { name: 'Stripe', purpose: 'Payment processing for premium products', cert: 'PCI DSS Level 1', region: 'United States' },
  { name: 'Resend', purpose: 'Transactional email (lead magnets, receipts)', cert: 'SOC 2 Type 2', region: 'United States' },
  { name: 'Plausible', purpose: 'Cookie-less analytics', cert: 'EU GDPR-aligned', region: 'European Union' },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Compliance', url: 'https://payslipiq.com/us/compliance' }
      ]} />
      <ArticleSchema
        headline="PayslipIQ Compliance"
        description="SOC 2 readiness, FCRA boundary, CCPA, GDPR, sub-processor list."
        url="https://payslipiq.com/us/compliance"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Compliance</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Compliance posture.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        PayslipIQ runs on auditor-ready process and tooling. The frameworks below are the ones that apply to a US-only educational paycheck explainer. Items marked "in progress" are tracked toward formal certification.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Frameworks</h2>
        <ul className="mt-5 grid gap-3">
          {POSTURE.map((p) => (
            <li key={p.framework} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-slate-900">{p.framework}</h3>
                <span className={
                  'text-[11px] uppercase tracking-[0.14em] font-semibold px-2 py-1 rounded ' +
                  (p.status === 'Compliant' || p.status === 'Compliant where applicable' ? 'bg-emerald-100 text-emerald-800' :
                   p.status === 'In progress' ? 'bg-amber-100 text-amber-800' :
                   'bg-slate-100 text-slate-700')
                }>
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-700">{p.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Sub-processor list</h2>
        <p className="mt-2 text-[14px] text-slate-600">All sub-processors are bound by contract with security obligations equal to or stronger than ours. Last reviewed: May 2026.</p>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-[14px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-3 py-2 text-left font-semibold text-slate-900">Vendor</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-900">Purpose</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-900">Certification</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-900">Region</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((s) => (
                <tr key={s.name} className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium text-slate-900">{s.name}</td>
                  <td className="px-3 py-2 text-slate-700">{s.purpose}</td>
                  <td className="px-3 py-2 text-slate-700">{s.cert}</td>
                  <td className="px-3 py-2 text-slate-700">{s.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Data Processing Addendum (DPA)</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          B2B partners (HR platforms, payroll software, financial wellness vendors) requiring a signed DPA can request the standard PayslipIQ DPA from{' '}
          <a href="mailto:legal@payslipiq.com" className="text-blue-600 font-semibold hover:underline">legal@payslipiq.com</a>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Reporting concerns</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          Privacy or data-handling concerns:{' '}
          <a href="mailto:privacy@payslipiq.com" className="text-blue-600 hover:underline">privacy@payslipiq.com</a><br />
          Security findings:{' '}
          <a href="mailto:security@payslipiq.com" className="text-blue-600 hover:underline">security@payslipiq.com</a> (or{' '}
          <Link href="/.well-known/security.txt" className="text-blue-600 hover:underline">/.well-known/security.txt</Link>)<br />
          Legal:{' '}
          <a href="mailto:legal@payslipiq.com" className="text-blue-600 hover:underline">legal@payslipiq.com</a>
        </p>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
