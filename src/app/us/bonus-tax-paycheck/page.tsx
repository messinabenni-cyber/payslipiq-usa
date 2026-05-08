import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Why Is My Bonus Taxed at 22%?, Supplemental Wages Explained",
  description: "Bonus tax explained: 22% federal supplemental rate vs aggregate method. The 'high tax' on bonuses is over-withholding, not over-taxing. Educational only.",
  alternates: { canonical: '/us/bonus-tax-paycheck' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Why Is My Bonus Taxed at 22%?</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>The 22% on a typical US bonus is not a tax, it is <strong>withholding</strong>. Your actual tax owed is determined when you file your return.</p>
        <h2>Two methods</h2>
        <ul><li><strong>Percentage method:</strong> 22% federal flat (37% on amounts above $1M annually). Most employers use this.</li><li><strong>Aggregate method:</strong> bonus added to your regular wages, withholding calculated on the combined total.</li></ul>
        <h2>What this means</h2>
        <p>If your effective tax rate is below 22%, the over-withheld amount comes back via your refund. FICA still applies normally to bonuses.</p>
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
