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

const PAGE_URL = 'https://payslipiq.com/us/cities/baltimore/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Baltimore Paycheck Calculator (2026) — MD + Baltimore City 3.2%',
  description:
    'Baltimore paycheck calculator. Federal, FICA, Maryland progressive, plus Baltimore City local income tax 3.2%. The MD county / city piggyback rate is on top of state tax. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Baltimore Paycheck Calculator (2026)',
    description: 'Federal + FICA + MD progressive + Baltimore City 3.2% piggyback.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'How is Maryland local income tax structured?', a: 'Maryland is unusual: every county (and Baltimore City) piggybacks on the state income tax with its own rate, between 2.25% and 3.2%. Withheld by your employer based on your county of residence on the last day of the tax year. Baltimore City is treated as a county for this purpose and its rate is 3.2% (the maximum allowed).' },
  { q: 'What is Baltimore City\'s rate?', a: 'Baltimore City levies the maximum allowed county-level rate of 3.20% of MD taxable income. Higher than most MD counties. Applies to Baltimore City residents.' },
  { q: 'I live in Baltimore County but work in Baltimore City — what do I pay?', a: 'Maryland piggyback is RESIDENCE-based, not work-based. You pay Baltimore County\'s rate (currently 3.20% as well, same as Baltimore City) regardless of where you work. Out-of-state residents working in MD pay Maryland\'s non-resident rate of 1.75% in lieu of a county piggyback.' },
  { q: 'Does the calculator include the Baltimore City line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and Maryland state in the main tool. For the Baltimore City piggyback, use the Local Tax Estimator below: select "Maryland county piggyback" and enter 3.20%.' },
  { q: 'Are there other Baltimore / MD payroll lines?', a: 'No additional employee-side city programs in Baltimore. Maryland does not have employee-side SDI or PFL programs yet (FAMLI starts contributions in 2026, employer split TBD). Standard federal + MD state + Baltimore piggyback.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Baltimore', url: PAGE_URL },
];

export default function BaltimorePaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Baltimore Paycheck Calculator (2026)" description="Federal + FICA + MD + Baltimore City 3.2% piggyback." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Baltimore Paycheck Calculator"
        description="Baltimore paycheck breakdown including federal, FICA, Maryland progressive state tax, and Baltimore City 3.2% local income tax piggyback."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/maryland/" className="hover:underline">Maryland</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Baltimore</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · BALTIMORE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Baltimore Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Maryland is the piggyback state: every county (and Baltimore City) levies its own
            local rate on top of state tax. <strong>Baltimore City: 3.20%</strong> — the maximum
            MD allows. Residence-based: it follows where you LIVE, not where you work.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Maryland state</h2>
          <PaycheckCalculator defaultStateSlug="maryland" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Baltimore City piggyback</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Maryland county piggyback&quot;</strong> below and enter
            <strong> 3.20%</strong> if you live in Baltimore City. If you live in a different MD
            county, enter that county&apos;s rate from the MD Comptroller table.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Maryland county / Baltimore City local income tax piggyback rates. Source:{' '}
            <a href="https://www.marylandtaxes.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Comptroller of Maryland
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
            <Link href="/us/maryland/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Maryland Paycheck Guide</div>
              <div className="text-sm text-slate-500">MD progressive brackets + county piggyback overview.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">NYC, Yonkers, Philadelphia, Detroit, MD counties, and more.</div>
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
