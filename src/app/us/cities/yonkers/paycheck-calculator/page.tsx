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

const PAGE_URL = 'https://payslipiq.com/us/cities/yonkers/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Yonkers Paycheck Calculator (2026) — 16.75% Surcharge',
  description:
    'Yonkers resident paycheck calculator. Federal, FICA, NY state tax, NY SDI + PFL, plus the Yonkers 16.75% resident surcharge of NYS tax. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Yonkers Paycheck Calculator (2026)',
    description: 'Federal + FICA + NY state + Yonkers 16.75% resident surcharge of NYS tax. Verified 2026 rates.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'How is the Yonkers tax calculated?', a: 'Yonkers does not have its own income-tax brackets. Instead, Yonkers residents pay a surcharge equal to 16.75% of their NY State personal income tax liability (per NYS Publication NYS-50-T-Y). So if you owe $4,000 in NY state tax for the year, your Yonkers surcharge is $670. Because the base is the state tax (not your wages), the effective rate on wages depends on your NY state effective rate. For a mid-income Yonkers resident the surcharge works out to roughly 1% of taxable wages.' },
  { q: 'I work in Yonkers but live elsewhere — do I owe Yonkers tax?', a: 'Yonkers non-residents who work in Yonkers pay a separate 0.5% non-resident earnings tax on wages earned in Yonkers. Different rule from the 16.75% resident surcharge.' },
  { q: 'Why does the live estimator below show ~1% and not 16.75%?', a: 'The Local Tax Estimator approximates the Yonkers surcharge as a flat ~1% of wages because the true 16.75% surcharge is applied to NY tax owed (which is itself a percentage of wages). For a mid-income resident the two work out to roughly the same number. Override the rate in the estimator to your exact NY effective rate × 16.75% if you want the precise figure.' },
  { q: 'Are there other Yonkers payroll lines?', a: 'No additional employee-funded city programs beyond the surcharge / non-resident tax. NY state-level SDI ($0.60/week) and NY PFL (0.432%) apply because you are in NY, but they are state-level, not Yonkers-specific.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Yonkers', url: PAGE_URL },
];

export default function YonkersPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Yonkers Paycheck Calculator (2026)" description="Federal + FICA + NY state + Yonkers 16.75% resident surcharge of NYS tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Yonkers Paycheck Calculator"
        description="Yonkers resident paycheck breakdown including federal, FICA, NY state, NY SDI + PFL, and the Yonkers 16.75% resident surcharge."
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
          <span aria-current="page">Yonkers</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · YONKERS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Yonkers Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Yonkers does not have its own bracket structure — Yonkers residents pay a{' '}
            <strong>16.75% surcharge on their NY State income tax</strong> (NYS Pub NYS-50-T-Y).
            For a mid-income worker that lands around 1% of wages. Federal, FICA, NY state, and
            NY SDI/PFL are calculated first; the Yonkers surcharge sits on top.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + NY state + NY SDI/PFL</h2>
          <PaycheckCalculator defaultStateSlug="new-york" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Yonkers surcharge</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Yonkers (NY) resident&quot;</strong> in the dropdown below. The estimator
            applies ~1% of wages as a defensible mid-income approximation. For precision: multiply
            your NY state tax (from Step 1, the &quot;New York state tax&quot; line × 26 for biweekly)
            by 0.1675 and divide by 26 — that is your exact Yonkers surcharge per paycheck.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Yonkers resident surcharge: 16.75% of NY State personal income tax liability. Source:{' '}
            <a href="https://www.tax.ny.gov/pdf/publications/withholding/nys50_t_y.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              NYS Publication NYS-50-T-Y (2026)
            </a>.
            Yonkers non-resident earnings tax: 0.5% of wages earned in Yonkers.
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
            <Link href="/us/cities/new-york-city/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">NYC Paycheck Calculator</div>
              <div className="text-sm text-slate-500">NYC resident income tax 3.078% to 3.876%.</div>
            </Link>
            <Link href="/us/new-york/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">New York Paycheck Guide</div>
              <div className="text-sm text-slate-500">How a NY paycheck is built end-to-end.</div>
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
