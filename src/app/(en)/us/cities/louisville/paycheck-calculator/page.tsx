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

const PAGE_URL = 'https://payslipiq.com/us/cities/louisville/paycheck-calculator';

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
  { q: 'What is the Louisville Metro occupational license tax?', a: 'Louisville/Jefferson County withholds occupational license tax on compensation for work performed in Louisville Metro (all of Jefferson County). The resident employee rate is 2.2% (Louisville Metro 1.25% + TARC 0.2% + school boards 0.75%). The nonresident employee rate is 1.45% (no school board). Source: Louisville Metro Revenue Commission OL-3 and W-1KJC instructions.' },
  { q: 'How does this differ from Kentucky state tax?', a: 'Kentucky has a flat state income tax (currently 4.0%, with legislative plans to lower further). The Louisville Metro occupational tax is on top of the state tax. Both come out of your paycheck if you work in Louisville.' },
  { q: 'I live in Indiana but work in Louisville — what do I pay?', a: 'On wages for work performed in Louisville Metro, the nonresident occupational rate is 1.45%, not 2.2%. Kentucky nonresident state tax may also apply. Indiana reciprocity generally does not cover the occupational line. Verify the stack with a CPA on multi-state filing.' },
  { q: 'I live in Louisville but work in Indiana — what do I pay?', a: 'Louisville Metro withholding is on compensation for work performed in Louisville Metro. Work performed only in Indiana is not automatically the 2.2% line. Indiana state withholding may apply to Indiana work. Confirm with the Louisville Metro Revenue Commission or a CPA; do not assume a residence-based 2.2% on out-of-county wages.' },
  { q: 'Does the calculator include the Louisville line?', a: 'This city page preselects "Louisville Metro occupational" at the 2.2% resident rate in the Paycheck Calculator and the estimator. Gross-to-Net still defaults to no local tax until you pick the same locality. If you already picked it in take-home, do not add the estimator line twice. Nonresidents should change the rate field to 1.45%.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
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
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/kentucky" className="hover:underline">Kentucky</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Louisville</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · LOUISVILLE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Louisville Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Louisville Metro / Jefferson County occupational license tax is{' '}
            <strong>2.2% for residents</strong> and <strong>1.45% for nonresidents</strong> on
            wages for work in Jefferson County. Kentucky state flat 4.0% applies first. Other
            Kentucky cities have their own occupational rates; this page is Louisville Metro only.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Kentucky flat 4.0% + Louisville Metro occupational</h2>
          <PaycheckCalculator defaultStateSlug="kentucky" defaultLocality="louisville" defaultLocalRatePct="2.2" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Local tax estimator (already on this page&apos;s paycheck tool)</h2>
          <p className="text-slate-700 mb-4">
            This estimator also defaults to <strong>Louisville Metro occupational</strong> at{' '}
            <strong>2.2%</strong> (resident). Enter <strong>1.45%</strong> if you live outside
            Louisville Metro. If take-home already includes this line, do not add it twice.
          </p>
          <LocalTaxCalculator defaultLocality="louisville" defaultRatePct="2.2" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Louisville Metro occupational license tax: resident 2.2%, nonresident 1.45%. Source:{' '}
            <a href="https://louisvilleky.gov/revenue-commission/forms/form-ol-3-occupational-license-return" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Louisville Metro Revenue Commission Form OL-3
            </a>
            {' '}and{' '}
            <a href="https://louisvilleky.gov/sites/default/files/2024-12/w-1kjc_instructions_2025.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Form W-1KJC instructions
            </a>
            . Other Kentucky cities are not this rate.
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
            <Link href="/us/kentucky" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Kentucky Paycheck Guide</div>
              <div className="text-sm text-slate-500">KY flat 4.0% + occupational tax overview.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
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
