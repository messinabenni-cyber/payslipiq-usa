import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Compare Two Paychecks — Why Did My Net Pay Change?",
  description: "Compare two US paychecks line by line. Educational only — PayslipIQ explains, you verify with payroll.",
  alternates: { canonical: '/us/paycheck-comparison' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Paycheck Comparison</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Paste the line items from two paychecks. The most useful comparison: same gross, different net. The differences usually come from one of: a new pre-tax deduction, a benefits-enrollment date, a YTD wage-base crossover (Social Security cap), or a supplemental wage withholding.</p>
        <p>Comparison tool is in private beta — request access via the <a href="/contact">contact</a> page.</p>
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
