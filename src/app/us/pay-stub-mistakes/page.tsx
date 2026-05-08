import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Common Pay Stub Mistakes — How to Spot Payroll Errors",
  description: "Twelve common US payroll errors and how to spot them. Educational only — PayslipIQ does not adjudicate any specific employer.",
  alternates: { canonical: '/us/pay-stub-mistakes' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Common Pay Stub Mistakes</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <ol><li>Missing overtime on a non-exempt worker who exceeded 40 hours.</li><li>Wrong filing status applied (W-4 says single but withholding looks MFJ).</li><li>YTD mismatch with prior pay stub.</li><li>Pre-tax deduction not reducing taxable wages.</li><li>Doubled deduction in one period.</li><li>Missing 401(k) employer match per plan rules.</li><li>State tax withheld for a state you do not work in.</li><li>No FICA on a bonus.</li><li>Pay rate mismatch with offer letter.</li><li>PTO accrual disappearing without payout.</li><li>Wage garnishment without prior notice.</li><li>Final paycheck delayed past state deadline.</li></ol>
      </article>
      <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related tools</p>
        <ul className="mt-2 space-y-1 text-sm text-blue-700">
          <li><Link href="/us/paycheck-calculator">Paycheck calculator →</Link></li>
          <li><Link href="/us/pay-stub-checker">AI pay stub explainer →</Link></li>
          <li><Link href="/us/learn">All paycheck topics →</Link></li>
        </ul>
      </div>
    </main>
  );
}
