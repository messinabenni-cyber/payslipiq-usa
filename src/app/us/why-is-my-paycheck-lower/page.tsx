import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Why Is My Paycheck Lower Than Expected?",
  description: "Common reasons US workers see less take-home: W-4 changes, mid-year benefits, FICA cap, supplemental withholding, garnishments. Educational only.",
  alternates: { canonical: '/us/why-is-my-paycheck-lower' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Why is my paycheck lower than expected?</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Common causes:</p>
        <ul><li>Mid-year W-4 change (you increased withholding)</li><li>Newly enrolled in benefits (health, 401(k), HSA)</li><li>YTD wages crossed Social Security wage base mid-year, then reset January 1</li><li>Bonus withheld at the 22% supplemental rate</li><li>Wage garnishment</li><li>State tax change</li><li>Annual federal/state tax-table refresh in January</li></ul>
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
