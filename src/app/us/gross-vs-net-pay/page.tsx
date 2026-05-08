import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Gross Pay vs Net Pay, What Is the Difference?",
  description: "Gross pay vs net pay (take-home) explained. What goes in, what comes out, why net is much smaller. Educational only.",
  alternates: { canonical: '/us/gross-vs-net-pay' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Gross Pay vs Net Pay</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p><strong>Gross pay</strong> is the amount you earned before any deductions. <strong>Net pay</strong> (also called take-home pay) is what lands in your bank account after federal income tax, FICA, state and local tax, and any voluntary deductions.</p>
        <p>The math: <code>Net = Gross − Federal tax − FICA − State tax − Local tax − Pre-tax deductions − Post-tax deductions</code>.</p>
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
