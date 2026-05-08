import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Paycheck Problems, Common Issues Explained (US)",
  description: "Common US paycheck problems: lower than expected, overtime not paid, missing 401(k) match, wrong state tax. Educational only.",
  alternates: { canonical: '/us/problems' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Paycheck Problems</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <ul><li><a href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</a></li><li><a href="/us/pay-stub-mistakes">Common pay stub mistakes</a></li><li><a href="/us/bonus-tax-paycheck">Why is my bonus taxed at 22%?</a></li><li><a href="/us/overtime-paycheck">How is overtime taxed?</a></li><li><a href="/us/paycheck-comparison">Why did my net pay change?</a></li></ul>
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
