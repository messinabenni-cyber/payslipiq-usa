import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Pre-Tax vs Post-Tax Deductions Explained",
  description: "Difference between pre-tax and post-tax deductions on a US paycheck. Which reduce taxable wages, which reduce FICA. Educational only.",
  alternates: { canonical: '/us/pre-tax-vs-post-tax-deductions' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Pre-Tax vs Post-Tax Deductions</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Pre-tax</h2>
        <p>Comes out of gross before federal (and most state) income tax is calculated. Examples: traditional 401(k), traditional HSA, FSA, most employer-sponsored health insurance under Section 125.</p>
        <h2>Post-tax</h2>
        <p>Comes out after taxes are withheld. Examples: Roth 401(k), wage garnishments, charitable contributions via payroll, some life insurance.</p>
        <h2>Special note on FICA</h2>
        <p>Most pre-tax deductions reduce FICA wages, but 401(k) does NOT. FICA is calculated on gross before 401(k).</p>
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
