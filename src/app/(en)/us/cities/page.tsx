import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/cities';

export const metadata: Metadata = {
  title: 'US City Paycheck Calculators — Local Tax by City (2026)',
  description:
    'Per-city US paycheck calculators that factor in local income tax: NYC, Yonkers, Philadelphia, Detroit, Wilmington and more. 2026 rates, primary-sourced.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'US City Paycheck Calculators (2026)',
    description: '9 cities covered. Local income tax layered on top of federal + state.',
    url: PAGE_URL,
    type: 'website',
  },
};

const CITIES = [
  {
    name: 'New York City (NY)',
    slug: 'new-york-city',
    state: 'New York',
    blurb: 'NYC resident income tax 3.078% to 3.876% across four brackets. Non-residents working in NYC pay no NYC tax.',
    rate: '3.078–3.876%',
  },
  {
    name: 'Yonkers (NY)',
    slug: 'yonkers',
    state: 'New York',
    blurb: '16.75% surcharge of NY State tax for residents. 0.5% non-resident earnings tax for those who work in Yonkers.',
    rate: '16.75% of NYS tax',
  },
  {
    name: 'Philadelphia (PA)',
    slug: 'philadelphia',
    state: 'Pennsylvania',
    blurb: 'Earned Income Tax: 3.74% resident / 3.43% non-resident. Outside the PA Act 32 system.',
    rate: '3.74% / 3.43%',
  },
  {
    name: 'Detroit (MI)',
    slug: 'detroit',
    state: 'Michigan',
    blurb: 'City income tax: 2.4% resident / 1.2% non-resident. Largest of ~24 Michigan cities with a city income tax.',
    rate: '2.4% / 1.2%',
  },
  {
    name: 'San Francisco (CA)',
    slug: 'san-francisco',
    state: 'California',
    blurb: 'No employee-side city income tax. SF Payroll Expense / Gross Receipts Tax is employer-paid only.',
    rate: 'No employee tax',
  },
  {
    name: 'Wilmington (DE)',
    slug: 'wilmington',
    state: 'Delaware',
    blurb: 'City Wage Tax 1.25% on wages earned in Wilmington. Work-location based.',
    rate: '1.25%',
  },
  {
    name: 'Kansas City (MO)',
    slug: 'kansas-city',
    state: 'Missouri',
    blurb: '1% Earnings Tax on residents (all wages) and on KC wages of non-residents. Renewed by voters through 2031.',
    rate: '1%',
  },
  {
    name: 'St. Louis (MO)',
    slug: 'st-louis',
    state: 'Missouri',
    blurb: '1% Earnings Tax on residents (all wages) and on STL wages of non-residents. Renewed by voters through 2031.',
    rate: '1%',
  },
  {
    name: 'Portland / Multnomah (OR)',
    slug: 'portland-multnomah',
    state: 'Oregon',
    blurb: 'Multnomah PFA + Portland Metro SHS above income thresholds ($125k+ single). OR Paid Leave 0.6% applies to all.',
    rate: '1.5% / 3.0% / +1%',
  },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: PAGE_URL },
];

export default function CitiesIndexPage() {
  return (
    <>
      <ArticleSchema headline="US City Paycheck Calculators (2026)" description="Per-city US paycheck calculators that factor in local income tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Cities</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · CITY PAYCHECK CALCULATORS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">US city paycheck calculators</h1>
          <p className="mt-4 text-lg text-slate-700">
            Per-city paycheck calculators that factor in the local income tax most state-level
            calculators skip. Each page walks through the full stack: federal + FICA + state +
            any state worker contributions (SDI, PFL, PFML, FAMLI, TDI) + the city/local tax.
            Primary-sourced rates, verified for 2026.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/us/cities/${c.slug}/paycheck-calculator`}
              className="block rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-300"
            >
              <div className="flex justify-between items-start gap-2">
                <div className="font-semibold text-slate-900">{c.name}</div>
                <div className="text-[12px] font-mono text-slate-500 whitespace-nowrap">{c.rate}</div>
              </div>
              <div className="text-[12px] uppercase tracking-wide text-slate-400 mt-0.5">{c.state}</div>
              <p className="mt-2 text-[14px] text-slate-700">{c.blurb}</p>
            </Link>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Cities not on this page yet</h2>
          <p className="text-slate-700">
            For Ohio RITA / CCA cities, Maryland counties, Indiana counties, PA Act 32 municipalities
            outside Philadelphia, Pittsburgh, and any other US locality with an employee-paid local
            income tax, use the general{' '}
            <Link href="/us/local-paycheck-taxes" className="text-blue-600 underline">
              Local Paycheck Taxes estimator
            </Link>{' '}
            and enter your specific rate.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Related tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/paycheck-calculator" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">US Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + FICA + state for all 50 states + DC.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">Cross-jurisdiction estimator with manual rate entry.</div>
            </Link>
            <Link href="/us/paycheck-health-score" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Paycheck Health Score</div>
              <div className="text-sm text-slate-500">Free 8-point checklist PDF for your next paycheck.</div>
            </Link>
            <Link href="/us/state-tax" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">State Tax Index</div>
              <div className="text-sm text-slate-500">All 50 state paycheck guides.</div>
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
