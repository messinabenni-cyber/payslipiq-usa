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

const PAGE_URL = 'https://payslipiq.com/us/cities/detroit/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Detroit Paycheck Calculator (2026) — MI + City Tax',
  description:
    'Detroit paycheck calculator. Federal, FICA, Michigan flat 4.25%, plus Detroit city income tax (2.4% resident, 1.2% non-resident). 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Detroit Paycheck Calculator (2026)',
    description: 'Federal + FICA + MI flat 4.25% + Detroit 2.4%/1.2%. Verified 2026.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'How much is Detroit city income tax?', a: 'Detroit residents pay 2.4% on wages. Non-residents who work in Detroit pay 1.2%. Both rates have been stable for years and are administered by the Michigan Department of Treasury under the City Income Tax Act.' },
  { q: 'Does Michigan tax wages?', a: 'Yes. Michigan is a flat-tax state at 4.25% (2026, verify with Michigan Department of Treasury). The flat rate applies in addition to any city income tax (Detroit being the largest of ~24 Michigan cities that levy one).' },
  { q: 'Which other Michigan cities have local income tax?', a: 'Detroit is the largest, but ~22 other Michigan cities levy a city income tax: Grand Rapids, Flint, Lansing, Saginaw, Pontiac, Battle Creek, Big Rapids, East Lansing, Hamtramck, Hudson, Ionia, Jackson, Lapeer, Muskegon, Muskegon Heights, Port Huron, Portland, Springfield, Walker, plus others. Rates typically 1% resident / 0.5% non-resident, though Detroit is higher at 2.4% / 1.2%.' },
  { q: 'I live in Detroit but work in the suburbs — what do I pay?', a: 'You pay Detroit resident tax (2.4%) on all wages because Detroit taxes its residents regardless of where they work. If your work city also has a city income tax (Hamtramck, Highland Park, etc.) you may pay non-resident tax there too; the resident-city tax credit applies.' },
  { q: 'Does the calculator include the Detroit line?', a: 'The PayslipIQ Paycheck Calculator handles federal + FICA + MI flat 4.25% in the main tool. For the Detroit city line specifically, use the Local Tax Estimator below: select "Michigan city (Detroit etc.)" and enter 2.4% (resident) or 1.2% (non-resident).' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Detroit', url: PAGE_URL },
];

export default function DetroitPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Detroit Paycheck Calculator (2026)" description="Federal + FICA + MI flat 4.25% + Detroit city tax (2.4% resident / 1.2% non-resident)." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Detroit Paycheck Calculator"
        description="Detroit paycheck breakdown including federal, FICA, Michigan flat 4.25%, and Detroit city income tax (2.4% resident / 1.2% non-resident)."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/michigan" className="hover:underline">Michigan</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Detroit</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · DETROIT · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Detroit Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Detroit residents pay <strong>2.4% city income tax</strong>; non-residents who work in
            Detroit pay <strong>1.2%</strong>. Michigan state tax applies first at a flat 4.25%.
            Step through both below.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Michigan flat 4.25%</h2>
          <PaycheckCalculator defaultStateSlug="michigan" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Detroit city tax</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Michigan city (Detroit etc.)&quot;</strong> below. Enter <strong>2.4%</strong> if
            you live in Detroit (regardless of work location), or <strong>1.2%</strong> if you work
            in Detroit but live elsewhere.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Detroit city income tax: 2.4% resident / 1.2% non-resident. Administered by Michigan
            Department of Treasury. Source:{' '}
            <a href="https://www.michigan.gov/taxes/citytax/detroit/individual" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Michigan Department of Treasury — Detroit City Income Tax
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
            <Link href="/us/michigan" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Michigan Paycheck Guide</div>
              <div className="text-sm text-slate-500">MI flat 4.25% + which cities levy city tax.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
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
