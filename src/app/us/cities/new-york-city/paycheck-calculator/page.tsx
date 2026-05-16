import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';
import { LocalTaxCalculator } from '@/components/LocalTaxCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/new-york-city/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'NYC Paycheck Calculator (2026) — Federal + NY State + NYC Resident Tax',
  description:
    'NYC resident paycheck calculator. Federal, FICA, NY state tax, NY SDI + PFL, plus NYC resident income tax (3.078% to 3.876%). 2026 tables. Educational only, not advice.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'NYC Paycheck Calculator (2026) — federal + NY + NYC resident tax',
    description: 'Federal + FICA + NY state + NY SDI + NY PFL + NYC resident income tax stacked, with verified 2026 rates.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does NYC have its own income tax?', a: 'Yes. NYC residents pay a separate NYC resident income tax on top of federal and NY state tax. Rates 3.078% to 3.876% across four brackets (top bracket above $50,000 single / $90,000 married jointly). Non-residents who work in NYC do not pay NYC income tax (the non-resident commuter tax was abolished in 1999).' },
  { q: 'Does this calculator include the NYC line?', a: 'The PayslipIQ Paycheck Calculator estimates federal, FICA, and NY state tax with NY SDI + PFL. For the NYC top-marginal resident line specifically, use the Local Tax Estimator below: select "New York City resident" and it returns the NYC piece, which you add on top of the state-tax line from the main calculator.' },
  { q: 'Why does the NYC line vary so much by income?', a: 'NYC uses progressive brackets, just like NY state and federal. At the top bracket the marginal rate is 3.876%; at the bottom it is 3.078%. The "average" NYC worker earning $80,000 sits around 3.7% effective on the NYC line alone.' },
  { q: 'Are there other NYC payroll lines I should expect?', a: 'NY SDI ($0.60/week, capped at $31.20/year), NY PFL (0.432% of wages, capped at $411.91/year for 2026), and federal payroll lines (Social Security, Medicare). The main calculator handles those automatically.' },
  { q: 'What if I live in NYC but work in NJ (or vice versa)?', a: 'Multi-state withholding gets complex. Generally the work state withholds, and the resident state credits the work-state tax. NYC resident income tax still applies if you are a NYC resident, regardless of where you work. This is a common area for tax-preparer questions; verify with payroll or a CPA.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'New York City', url: PAGE_URL },
];

export default function NYCPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="NYC Paycheck Calculator (2026)" description="Federal + FICA + NY state + NYC resident tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ NYC Paycheck Calculator"
        description="NYC resident paycheck breakdown including federal, FICA, NY state, NY SDI + PFL, and NYC resident income tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/new-york/" className="hover:underline">New York</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">New York City</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · NEW YORK CITY · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">NYC Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            A NYC paycheck has four layers: federal income tax, FICA (Social Security + Medicare),
            NY state tax + NY SDI + NY PFL, and a fourth layer the rest of NY skips — NYC resident
            income tax. Top marginal rate 3.876%. Step through all four below.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + NY state + NY SDI/PFL</h2>
          <PaycheckCalculator defaultStateSlug="new-york" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the NYC resident income tax</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;New York City resident&quot;</strong> below to get the NYC line. Add the result to
            the state-tax line from Step 1 to get your full take-home picture as a NYC resident.
            Non-residents working in NYC do not pay NYC income tax.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">What every NYC paycheck includes</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Federal income tax</strong> (IRS Pub 15-T 2026 method)</li>
            <li><strong>Social Security</strong> 6.2% up to $184,500 wage base (2026)</li>
            <li><strong>Medicare</strong> 1.45% on all wages, plus 0.9% Additional Medicare above $200,000 YTD</li>
            <li><strong>NY state income tax</strong> (progressive brackets)</li>
            <li><strong>NY SDI</strong> $0.60/week, capped at $31.20/year (2026)</li>
            <li><strong>NY PFL</strong> 0.432% of wages, capped at $411.91/year (2026)</li>
            <li><strong>NYC resident income tax</strong> 3.078% to 3.876% across four brackets</li>
          </ul>
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
            <Link href="/us/new-york/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">New York Paycheck Guide</div>
              <div className="text-sm text-slate-500">How a NY paycheck is built end-to-end.</div>
            </Link>
            <Link href="/us/new-york/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">NY State Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + NY state + NY SDI + PFL (no NYC line).</div>
            </Link>
            <Link href="/us/cities/yonkers/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Yonkers Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + NY state + Yonkers 16.75% surcharge.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">NYC, Yonkers, Philadelphia, Detroit, RITA cities, and more.</div>
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
