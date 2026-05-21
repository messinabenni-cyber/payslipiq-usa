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

const PAGE_URL = 'https://payslipiq.com/us/cities/louisville/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Louisville Paycheck Calculator (2026) — KY + Metro 2.2%',
  description:
    'Louisville paycheck calculator. Federal, FICA, Kentucky flat 4.0%, plus Louisville Metro Occupational License Tax 2.2% on Jefferson County wages. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Louisville Paycheck Calculator (2026)',
    description: 'Federal + FICA + KY flat 4.0% + Louisville Metro 2.2% occupational tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Louisville Metro occupational license tax?', a: 'Louisville/Jefferson County imposes a 2.2% occupational license tax on wages earned within the Jefferson County boundaries. Combined city/county rate. It applies regardless of where you live; what matters is whether the work is performed in Louisville/Jefferson County.' },
  { q: 'How does this differ from Kentucky state tax?', a: 'Kentucky has a flat state income tax (currently 4.0%, with legislative plans to lower further). The Louisville Metro occupational tax is on top of the state tax. Both come out of your paycheck if you work in Louisville.' },
  { q: 'I live in Indiana but work in Louisville — what do I pay?', a: 'You pay Louisville/Jefferson 2.2% on Louisville wages plus KY non-resident state tax. Indiana then credits you for the KY tax (per KY-IN reciprocity rules) but the occupational tax is generally NOT covered by the reciprocity agreement — verify with a CPA on multi-state filing.' },
  { q: 'I live in Louisville but work in Indiana — what do I pay?', a: 'You still owe Louisville/Jefferson 2.2% on all your earnings as a Louisville resident (residence-based for the city portion). Indiana state withholds for your IN work; KY credits you at filing.' },
  { q: 'Does the calculator include the Louisville line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and KY state flat 4.0% in the main tool. For the Louisville Metro 2.2%, use the Local Tax Estimator below: select "Other / custom rate" and enter 2.2%.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Louisville', url: PAGE_URL },
];

export default function LouisvillePaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Louisville Paycheck Calculator (2026)" description="Federal + FICA + KY flat 4.0% + Louisville Metro 2.2% occupational tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Louisville Paycheck Calculator"
        description="Louisville paycheck breakdown including federal, FICA, Kentucky flat state tax, and Louisville/Jefferson County 2.2% occupational license tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/kentucky/" className="hover:underline">Kentucky</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Louisville</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · LOUISVILLE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Louisville Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Louisville Metro / Jefferson County imposes a <strong>2.2% occupational license tax</strong>
            on wages earned in the county. Kentucky state flat 4.0% applies first. Work-location
            based for non-residents; residence-based for Louisville residents.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Kentucky flat 4.0%</h2>
          <PaycheckCalculator defaultStateSlug="kentucky" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Louisville Metro 2.2%</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Other / custom rate&quot;</strong> below and enter <strong>2.2%</strong>
            (the combined Louisville/Jefferson Metro occupational license rate).
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Louisville Metro Occupational License Tax: 2.2%. Source:{' '}
            <a href="https://louisvilleky.gov/government/revenue-commission" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Louisville Metro Revenue Commission
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
            <Link href="/us/kentucky/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Kentucky Paycheck Guide</div>
              <div className="text-sm text-slate-500">KY flat 4.0% + occupational tax overview.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">All US cities + counties with local payroll tax.</div>
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
