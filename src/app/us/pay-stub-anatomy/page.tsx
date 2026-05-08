import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "How to Read a US Pay Stub, Line by Line",
  description: "Decode every line on your US pay stub: gross, withholdings, FICA, state, local, deductions, YTD, employer contributions, net. Educational only.",
  alternates: { canonical: '/us/pay-stub-anatomy' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">How to Read a Pay Stub</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>A typical US pay stub has six sections: <strong>Earnings</strong><strong>Taxes</strong><strong>Pre-tax deductions</strong><strong>Post-tax deductions</strong><strong>Employer contributions</strong> (informational), and <strong>Net pay</strong>.</p>
        <p>Each section usually shows a <strong>current period</strong> column and a <strong>year-to-date (YTD)</strong> column. YTD lets you check your tax accumulation against the W-2 you will receive in January.</p>
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
