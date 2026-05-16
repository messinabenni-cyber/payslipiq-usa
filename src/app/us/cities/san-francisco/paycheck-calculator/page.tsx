import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/san-francisco/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'San Francisco Paycheck Calculator (2026) — No SF Employee Withholding',
  description:
    'San Francisco paycheck calculator. Federal, FICA, California progressive + CA SDI 1.3%. SF Payroll Expense Tax is employer-paid, no employee withholding. 2026. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'San Francisco Paycheck Calculator (2026)',
    description: 'Federal + FICA + CA + CA SDI. No SF employee withholding (employer-paid only).',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does San Francisco have a city income tax?', a: 'No. San Francisco does not have an employee-side city income tax. There is no SF line on your paycheck. The SF Payroll Expense Tax / Gross Receipts Tax is paid by employers, not withheld from worker paychecks.' },
  { q: 'So my SF paycheck is just federal + CA tax + FICA?', a: 'Yes — plus CA SDI (1.3% of all wages, no cap as of 2024 under SB 951). The PayslipIQ Paycheck Calculator pre-set to California handles every line that appears on an SF paycheck.' },
  { q: 'What about the SF Gross Receipts Tax I keep hearing about?', a: 'That is a business-side tax on the employer, not an employee paycheck deduction. The legacy SF Payroll Expense Tax was largely phased out and replaced by the Gross Receipts Tax for most businesses (administered by the SF Treasurer). It does not affect your take-home.' },
  { q: 'What about Prop F (Real Estate Transfer Tax) etc?', a: 'Various SF measures affect businesses or property owners. None create a deduction line on a worker paycheck. Your stub has federal income tax, Social Security, Medicare, CA state tax, and CA SDI.' },
  { q: 'I work in SF but live in Oakland — anything different?', a: 'CA state withholding applies wherever your work is. No SF city tax. Oakland has no city income tax either. So your paycheck math is identical whether you live in SF or Oakland, all CA layers apply.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'San Francisco', url: PAGE_URL },
];

export default function SanFranciscoPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="San Francisco Paycheck Calculator (2026)" description="Federal + FICA + CA + CA SDI. SF has no employee-side city income tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ San Francisco Paycheck Calculator"
        description="San Francisco paycheck breakdown. Federal + FICA + California state + CA SDI. SF has no employee-side city income tax (the SF Payroll Expense Tax is employer-paid)."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/california/" className="hover:underline">California</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">San Francisco</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · SAN FRANCISCO · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">San Francisco Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Good news for SF workers: <strong>no employee-side SF city income tax</strong>. Your
            paycheck math is federal + FICA + California (progressive brackets) + CA SDI (1.3% of
            all wages). The SF Payroll Expense Tax / Gross Receipts Tax is employer-paid, not
            withheld from your paycheck.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + California + CA SDI</h2>
          <PaycheckCalculator defaultStateSlug="california" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            San Francisco does not levy an employee-side city income tax. The legacy SF Payroll
            Expense Tax has been phased out for most businesses and replaced by the Gross Receipts
            Tax (employer-paid). Source:{' '}
            <a href="https://sftreasurer.org/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              SF Treasurer &amp; Tax Collector
            </a>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Common questions</h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-slate-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Related</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/california/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">California Paycheck Guide</div>
              <div className="text-sm text-slate-500">CA progressive brackets + SDI + PFL explained.</div>
            </Link>
            <Link href="/us/california/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">California Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + CA + CA SDI in one tool.</div>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
    </>
  );
}
