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

const PAGE_URL = 'https://payslipiq.com/us/cities/indianapolis/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Indianapolis Paycheck Calculator (2026) — IN + Marion Co.',
  description:
    'Indianapolis paycheck calculator. Federal, FICA, Indiana flat 3.05%, plus Marion County local income tax 2.02%. Residence-based. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Indianapolis Paycheck Calculator (2026)',
    description: 'Federal + FICA + IN flat 3.05% + Marion County LIT 2.02%.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'How does Indiana local income tax work?', a: 'Indiana has 92 counties, each levying its own Local Income Tax (LIT). The rate that applies is your COUNTY OF RESIDENCE ON JANUARY 1 of the tax year — even if you move mid-year. Marion County (Indianapolis) is currently 2.02% (verify with the Indiana Department of Revenue).' },
  { q: 'What about the IN state rate?', a: 'Indiana is a flat-tax state, currently 3.05% (verify with Indiana DOR; the legislature is gradually reducing the flat rate). The LIT applies on top of the flat state rate.' },
  { q: 'I moved from Hamilton County to Marion County in March — which rate applies?', a: 'Your county on January 1 applies for the whole year. If you were a Hamilton County resident on Jan 1, you pay Hamilton County rates all year regardless of when you moved. Reverse if you were in Marion on Jan 1. Verify with your employer or DOR if there is any doubt; this is residence-based, not pro-rated.' },
  { q: 'Does the calculator include the Marion County line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and Indiana state flat in the main tool. For the Marion County LIT specifically, use the Local Tax Estimator below: select "Indiana county tax" and enter 2.02%.' },
  { q: 'Other Indianapolis-area county rates?', a: 'Hamilton County ~1.1%, Hancock ~1.94%, Hendricks ~1.7%, Johnson ~1.4%, Madison ~2.25%, Morgan ~2.72%, Shelby ~1.6%. Confirm exact current rates with Indiana DOR before relying on a number.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Indianapolis', url: PAGE_URL },
];

export default function IndianapolisPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Indianapolis Paycheck Calculator (2026)" description="Federal + FICA + IN flat 3.05% + Marion County LIT 2.02%." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Indianapolis Paycheck Calculator"
        description="Indianapolis paycheck breakdown including federal, FICA, Indiana flat state tax, and Marion County 2.02% local income tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/indiana" className="hover:underline">Indiana</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Indianapolis</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · INDIANAPOLIS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Indianapolis Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Indianapolis sits in <strong>Marion County</strong>, currently a 2.02% local income
            tax. Indiana state flat 3.05% applies first. Marion County rate is residence-based,
            anchored to where you lived on January 1.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Indiana flat 3.05%</h2>
          <PaycheckCalculator defaultStateSlug="indiana" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add Marion County LIT</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Indiana county tax&quot;</strong> below and enter <strong>2.02%</strong> for
            Marion County. Different IN counties have different LIT rates; check yours.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Marion County LIT and all Indiana county rates. Source:{' '}
            <a href="https://www.in.gov/dor/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Indiana Department of Revenue
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
            <Link href="/us/indiana" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Indiana Paycheck Guide</div>
              <div className="text-sm text-slate-500">IN flat 3.05% + all 92 county rates.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">NYC, Yonkers, Indianapolis, Cleveland, and more.</div>
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
