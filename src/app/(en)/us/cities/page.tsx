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
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'en-GB': 'https://payslipiq.co.uk', 'en-IE': 'https://payslipiq.co.uk/ie', 'x-default': PAGE_URL } },
  openGraph: {
    title: 'US City Paycheck Calculators (2026)',
    description: 'NYC, Detroit, Louisville Metro, Portland/Multnomah and more. Local income tax layered on top of federal + state.',
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
    name: 'Louisville Metro (KY)',
    slug: 'louisville',
    state: 'Kentucky',
    blurb: 'Occupational license tax 2.2% resident / 1.45% nonresident on wages for work in Jefferson County. Other KY cities are not this rate.',
    rate: '2.2% / 1.45%',
  },
  {
    name: 'Portland / Multnomah (OR)',
    slug: 'portland-multnomah',
    state: 'Oregon',
    blurb: 'Multnomah PFA + Portland Metro SHS above income thresholds ($125k+ single). OR Paid Leave 0.6% applies to all. PFA/SHS are not in the local-tax picker.',
    rate: '1.5% / 3.0% / +1%',
  },
  {
    name: 'Baltimore (MD)',
    slug: 'baltimore',
    state: 'Maryland',
    blurb: 'Baltimore City piggyback 3.20% (MD maximum) on top of Maryland state tax. Residence-based. Pick Maryland county piggyback in the calculator.',
    rate: '3.20%',
  },
  {
    name: 'Cleveland (OH)',
    slug: 'cleveland',
    state: 'Ohio',
    blurb: '2.5% municipal income tax via RITA, residents and Cleveland wages of nonresidents. Pick Ohio RITA / CCA and enter 2.5%.',
    rate: '2.5%',
  },
  {
    name: 'Cincinnati (OH)',
    slug: 'cincinnati',
    state: 'Ohio',
    blurb: '1.8% city earnings tax, administered by the city (not RITA). Same rate field as Ohio RITA / CCA. Enter 1.8%.',
    rate: '1.8%',
  },
  {
    name: 'Indianapolis (IN)',
    slug: 'indianapolis',
    state: 'Indiana',
    blurb: 'Marion County local income tax 2.02% (residence on Jan 1). Pick Indiana county tax and enter 2.02%. Other IN counties differ.',
    rate: '2.02%',
  },
  {
    name: 'Pittsburgh (PA)',
    slug: 'pittsburgh',
    state: 'Pennsylvania',
    blurb: 'Act 32 EIT 3% resident / 1% nonresident. LST $52/year is not in the estimator. Pick PA EIT and enter 3% or 1%.',
    rate: '3% / 1%',
  },
  {
    name: 'Atlanta (GA)',
    slug: 'atlanta',
    state: 'Georgia',
    blurb: 'No city income tax. Georgia flat state tax. Federal + FICA + GA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Austin (TX)',
    slug: 'austin',
    state: 'Texas',
    blurb: 'No Texas state income tax and no Austin or Travis County income tax. Federal + FICA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Boston (MA)',
    slug: 'boston',
    state: 'Massachusetts',
    blurb: 'No city income tax. Massachusetts 5% plus MA PFML 0.46% employee share. Millionaire surtax is separate.',
    rate: 'No employee city tax',
  },
  {
    name: 'Charlotte (NC)',
    slug: 'charlotte',
    state: 'North Carolina',
    blurb: 'No city income tax. North Carolina flat 3.99% for 2026. Federal + FICA + NC.',
    rate: 'No employee city tax',
  },
  {
    name: 'Dallas (TX)',
    slug: 'dallas',
    state: 'Texas',
    blurb: 'No Texas state income tax and no Dallas city or county income tax. Federal + FICA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Denver (CO)',
    slug: 'denver',
    state: 'Colorado',
    blurb: 'Employee Occupational Privilege Tax $5.75/month if you earn $500+ in Denver. Not a percent wage tax, so it is not in the local-tax picker. CO FAMLI is in the paycheck tool.',
    rate: '$5.75/mo OPT',
  },
  {
    name: 'Houston (TX)',
    slug: 'houston',
    state: 'Texas',
    blurb: 'No Texas state income tax and no Houston or Harris County income tax. Federal + FICA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Las Vegas (NV)',
    slug: 'las-vegas',
    state: 'Nevada',
    blurb: 'No Nevada state income tax and no Las Vegas or Clark County income tax. Federal + FICA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Miami (FL)',
    slug: 'miami',
    state: 'Florida',
    blurb: 'No Florida state income tax and no Miami or Miami-Dade income tax. Federal + FICA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Minneapolis (MN)',
    slug: 'minneapolis',
    state: 'Minnesota',
    blurb: 'No city income tax. Minnesota progressive state tax plus MN Paid Leave on the paycheck tool.',
    rate: 'No employee city tax',
  },
  {
    name: 'Nashville (TN)',
    slug: 'nashville',
    state: 'Tennessee',
    blurb: 'No Tennessee state income tax (Hall Tax repealed) and no Nashville city income tax. Federal + FICA only.',
    rate: 'No employee city tax',
  },
  {
    name: 'Newark (NJ)',
    slug: 'newark',
    state: 'New Jersey',
    blurb: 'No employee-side Newark city income tax. Newark Payroll Tax 1.1% is employer-paid. NJ SDI/FLI are on the paycheck tool.',
    rate: 'Employer payroll tax',
  },
  {
    name: 'Phoenix (AZ)',
    slug: 'phoenix',
    state: 'Arizona',
    blurb: 'No city income tax. Arizona flat 2.5%. Federal + FICA + AZ.',
    rate: 'No employee city tax',
  },
  {
    name: 'San Diego (CA)',
    slug: 'san-diego',
    state: 'California',
    blurb: 'No city income tax. California progressive state tax plus CA SDI 1.3% (no wage cap).',
    rate: 'No employee city tax',
  },
  {
    name: 'Seattle (WA)',
    slug: 'seattle',
    state: 'Washington',
    blurb: 'No Washington state income tax and no Seattle city income tax. WA PFML and WA Cares are on the paycheck tool.',
    rate: 'No employee city tax',
  },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com' },
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
            Every live city paycheck page on PayslipIQ is listed here. Pages with an employee
            local tax preselect that line. Pages with no city income tax say so. Other KY
            occupational rates and Oregon PFA/SHS stay out of the picker.
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
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Localities without their own page</h2>
          <p className="text-slate-700">
            Other Ohio RITA / CCA cities, Maryland counties, Indiana counties, PA Act 32 municipalities,
            and Kentucky occupational cities besides Louisville Metro: use the{' '}
            <Link href="/us/local-paycheck-taxes" className="text-blue-600 underline">
              Local Paycheck Taxes estimator
            </Link>{' '}
            and enter the published rate. Do not use Louisville Metro 2.2% for those KY cities.
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
