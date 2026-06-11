import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: "Paycheck Problems, Common Issues Explained (US)",
  description: "Common US paycheck problems: lower than expected, overtime not paid, missing 401(k) match, wrong state tax. Educational only.",
  alternates: { canonical: '/us/problems' },
};

const BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Problems', url: '/us/problems' },
];

const FAQS = [
  { q: 'Why is my paycheck lower than I expected?', a: 'The most common reasons are pre-tax and FICA deductions you may have overlooked, a higher tax bracket as year-to-date pay rises, a new or changed benefit election, or a W-4 update. The dedicated guide above walks through each cause.' },
  { q: 'Why was my bonus taxed at 22%?', a: 'Bonuses are treated as supplemental wages, which employers commonly withhold at the flat 22% federal rate (37% on amounts above $1,000,000 a year). It is a withholding rule, not your final tax rate — your actual liability is settled when you file.' },
  { q: 'My net pay changed even though my salary did not. Why?', a: 'Net pay can shift when Social Security stops at the annual wage base, when a benefit cost or 401(k) rate changes, when you cross a tax threshold, or when a one-off item like a bonus or correction lands in that period.' },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ArticleSchema
        headline="Paycheck Problems, Common Issues Explained (US)"
        description="Common US paycheck problems explained: pay lower than expected, bonus tax, overtime, and net pay changes between periods."
        url="https://payslipiq.com/us/problems"
      />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-slate-700">Problems</span>
      </nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Paycheck Problems</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        When a paycheck looks wrong, there is usually a specific, explainable reason behind it. These guides cover the
        questions US workers ask most often — why net pay dropped, why a bonus seemed to be taxed heavily, how overtime
        is handled, and what to check on a pay stub.
      </p>
      <section className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">In short</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          Most paycheck surprises trace back to a handful of causes: pre-tax and FICA deductions, the flat 22%
          supplemental withholding on bonuses, Social Security stopping once you hit the annual wage base, a changed
          benefit or W-4, or a one-off item in that pay period. The guides below explain each one so you can match the
          symptom on your stub to its cause.
        </p>
      </section>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <ul><li><a href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</a></li><li><a href="/us/pay-stub-mistakes">Common pay stub mistakes</a></li><li><a href="/us/bonus-tax-paycheck">Why is my bonus taxed at 22%?</a></li><li><a href="/us/overtime-paycheck">How is overtime taxed?</a></li><li><a href="/us/paycheck-comparison">Why did my net pay change?</a></li></ul>
      </article>
      <FAQSchema items={FAQS} />
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
