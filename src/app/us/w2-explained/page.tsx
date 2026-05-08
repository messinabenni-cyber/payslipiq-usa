import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "How to Read a W-2, Box-by-Box Plain-English Guide",
  description: "What every W-2 box means: Box 1 wages, Box 2 federal withholding, Box 3-6 FICA, Box 12 codes, state boxes. Educational only.",
  alternates: { canonical: '/us/w2-explained' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">How to Read a W-2</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>The W-2 is the form your employer sends you (and the IRS) each January reporting your annual wages and tax withholdings. The most-asked-about boxes:</p>
        <ul><li><strong>Box 1:</strong> Wages, tips, other compensation (federal income tax wages, already reduced by pre-tax 401(k), HSA, etc.)</li><li><strong>Box 2:</strong> Federal income tax withheld</li><li><strong>Box 3:</strong> Social Security wages (capped at the annual wage base)</li><li><strong>Box 4:</strong> Social Security tax withheld</li><li><strong>Box 5:</strong> Medicare wages (uncapped)</li><li><strong>Box 6:</strong> Medicare tax withheld</li><li><strong>Box 12:</strong> Coded items, D = 401(k), DD = employer-paid health, W = HSA, etc.</li><li><strong>Boxes 15-20:</strong> State and local tax info</li></ul>
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
