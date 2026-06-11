import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: "Paycheck Deductions Explained (US)",
  description: "Every type of paycheck deduction explained. Federal, FICA, state, local, pre-tax, post-tax. Educational only.",
  alternates: { canonical: '/us/deductions' },
};

const BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Deductions', url: '/us/deductions' },
];

const FAQS = [
  { q: 'What is the difference between a pre-tax and a post-tax deduction?', a: 'A pre-tax deduction (such as a traditional 401(k) or Section 125 health premium) comes out of pay before income tax is calculated, lowering taxable wages. A post-tax deduction (such as a Roth 401(k) or union dues) comes out after tax, so it does not reduce taxable wages.' },
  { q: 'Do 401(k) contributions reduce my FICA taxes?', a: 'No. Pre-tax traditional 401(k) contributions reduce your federal income tax wages, but they do not reduce Social Security or Medicare (FICA) wages. Section 125 health premiums, by contrast, usually reduce both.' },
  { q: 'Which deductions are mandatory?', a: 'Federal income tax withholding and FICA (Social Security and Medicare) apply to nearly every paycheck, and state or local income tax applies where the state levies it. Voluntary deductions like 401(k) or health insurance appear only if you elect them.' },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ArticleSchema
        headline="Paycheck Deductions Explained (US)"
        description="Every type of US paycheck deduction explained: federal income tax, FICA, state and local tax, and pre-tax versus post-tax deductions."
        url="https://payslipiq.com/us/deductions"
      />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-slate-700">Deductions</span>
      </nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Paycheck Deductions Explained</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        The gap between your gross pay and your take-home pay is made up of deductions. Some are mandatory taxes, some
        are benefits you chose, and the order they come out in changes how much tax you owe. The dedicated guides below
        explain each type.
      </p>
      <section className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">In short</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          US paycheck deductions fall into a few groups: mandatory taxes (federal income tax withholding, FICA for
          Social Security and Medicare, and state or local income tax where it applies), and voluntary deductions you
          elect. Voluntary deductions are either pre-tax (like a traditional 401(k) or Section 125 health premium,
          which lower taxable wages) or post-tax (like a Roth 401(k), which do not).
        </p>
      </section>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>See the dedicated guides:</p>
        <ul><li><a href="/us/pre-tax-vs-post-tax-deductions">Pre-tax vs post-tax</a></li><li><a href="/us/401k-deductions">401(k)</a></li><li><a href="/us/health-insurance-deductions">Health insurance, HSA, FSA</a></li><li><a href="/us/fica-explained">FICA (Social Security + Medicare)</a></li><li><a href="/us/federal-tax-withholding">Federal income tax</a></li></ul>
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
