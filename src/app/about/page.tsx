import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "About PayslipIQ",
  description: "PayslipIQ helps American workers understand their paycheck. Plain-English. Privacy-first. Educational only.",
  alternates: { canonical: '/about' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">About PayslipIQ</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>PayslipIQ is the plain-English paycheck intelligence platform for American workers. Pay stubs, federal and state withholding, FICA, deductions, overtime, 401(k), benefits, take-home pay — explained clearly so you can spot what looks right, what looks off, and what to ask payroll.</p>
        <p>We are independent. Educational only. Not advice. Always verify with payroll, a CPA, the IRS, or your state tax authority.</p>
        <h2>Contact</h2>
        <p>General: hello@payslipiq.com · Privacy: privacy@payslipiq.com · Security: security@payslipiq.com · Press: press@payslipiq.com</p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
