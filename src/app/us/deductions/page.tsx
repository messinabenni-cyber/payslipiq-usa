import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Paycheck Deductions Explained (US)",
  description: "Every type of paycheck deduction explained. Federal, FICA, state, local, pre-tax, post-tax. Educational only.",
  alternates: { canonical: '/us/deductions' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Paycheck Deductions Explained</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>See the dedicated guides:</p>
        <ul><li><a href="/us/pre-tax-vs-post-tax-deductions">Pre-tax vs post-tax</a></li><li><a href="/us/401k-deductions">401(k)</a></li><li><a href="/us/health-insurance-deductions">Health insurance, HSA, FSA</a></li><li><a href="/us/fica-explained">FICA (Social Security + Medicare)</a></li><li><a href="/us/federal-tax-withholding">Federal income tax</a></li></ul>
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
