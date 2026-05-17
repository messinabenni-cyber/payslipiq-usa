import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/nashville/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Nashville Paycheck Calculator (2026) — No State Income Tax (TN)',
  description:
    'Nashville paycheck calculator. Federal + FICA only — Tennessee has no state income tax (Hall Tax repealed 2021) and no Nashville city tax. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Nashville Paycheck Calculator (2026)',
    description: 'Federal + FICA only. No TN state tax, no Nashville city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Tennessee have a state income tax?', a: 'No. Tennessee fully repealed the Hall Income Tax (on interest and dividends) effective January 1, 2021. Tennessee has no tax on earned wages, and never did. Your paycheck math is federal + FICA only.' },
  { q: 'Does Nashville have a city income tax?', a: 'No. The Metropolitan Government of Nashville and Davidson County does not impose an income tax on wages. Tennessee state has none either.' },
  { q: 'Does Tennessee have SDI or PFL?', a: 'No. Tennessee does not have a state-mandated SDI or Paid Family Leave program. Many Nashville employers (especially in healthcare and tech) offer private short-term disability and paid leave. Check your benefits portal.' },
  { q: 'What about the Hall Tax — is that still on my paycheck?', a: 'No. The Hall Income Tax taxed interest and dividends (not wages) and was fully phased out by 2021. It never appeared on a regular W-2 paycheck because it only applied to investment income at filing.' },
  { q: 'What lines should I expect on a Nashville paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Pre-tax 401(k), HSA, FSA, Section 125 health if elected. No state or local tax line.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Nashville', url: PAGE_URL },
];

export default function NashvillePaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Nashville Paycheck Calculator (2026)" description="Federal + FICA only. No TN state tax, no Nashville city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Nashville Paycheck Calculator"
        description="Nashville paycheck breakdown. Federal + FICA only. No Tennessee state income tax, no Nashville city tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/tennessee/" className="hover:underline">Tennessee</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Nashville</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · NASHVILLE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Nashville Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Nashville paychecks are simple. <strong>No Tennessee state income tax</strong>
            {' '}(Hall Tax fully repealed 2021). <strong>No Nashville city tax</strong>.
            <strong> No TN SDI or PFL</strong>. Your only withholding lines are federal income tax and FICA.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA only</h2>
          <PaycheckCalculator defaultStateSlug="tennessee" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Tennessee has no state personal income tax statute. Source:{' '}
            <a href="https://www.tn.gov/revenue.html" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Tennessee Department of Revenue
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
            <Link href="/us/tennessee/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Tennessee Paycheck Guide</div>
              <div className="text-sm text-slate-500">No state tax + TN-specific context.</div>
            </Link>
            <Link href="/us/why-is-my-paycheck-lower/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Why is my paycheck lower?</div>
              <div className="text-sm text-slate-500">Common surprises that hit even no-state-tax workers.</div>
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
