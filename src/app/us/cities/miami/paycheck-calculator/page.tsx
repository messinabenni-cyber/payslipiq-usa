import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/miami/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Miami Paycheck Calculator (2026) — No State Income Tax (FL)',
  description:
    'Miami paycheck calculator. Federal + FICA only — Florida has no state income tax and no Miami city tax. Hospitality + tip income context. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Miami Paycheck Calculator (2026)',
    description: 'Federal + FICA only. No FL state tax, no Miami city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Florida have a state income tax?', a: 'No. Florida is one of nine US states with no state personal income tax. Miami, Miami-Dade County, and every other FL city also have no local income tax on wages. Your paycheck math is federal + FICA only.' },
  { q: 'I work in hospitality and earn tips — how are those handled?', a: 'Tips are taxable federal income and subject to FICA. Cash tips of $20+ per month from a single employer must be reported. Credit-card tips are processed through payroll automatically. Florida adds no state tax. Federal supplemental withholding may apply on tip-out adjustments paid as separate supplemental wages.' },
  { q: 'Does Florida have SDI or PFL?', a: 'No. Florida has no state-mandated SDI or Paid Family Leave program. Some Miami employers offer private disability or PTO. Check your benefits portal.' },
  { q: 'What about Reemployment Tax / SUTA — does that hit my paycheck?', a: 'No. Florida Reemployment Tax (the FL version of state unemployment insurance) is paid entirely by employers. It does not appear on your pay stub.' },
  { q: 'What lines should I expect on a Miami paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Additional Medicare (0.9%) if YTD wages cross $200,000. Pre-tax 401(k), HSA, FSA, Section 125 health if elected. No state or local tax line.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Miami', url: PAGE_URL },
];

export default function MiamiPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Miami Paycheck Calculator (2026)" description="Federal + FICA only. No FL state tax, no Miami city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Miami Paycheck Calculator"
        description="Miami paycheck breakdown. Federal + FICA only. No Florida state income tax, no Miami city tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/florida" className="hover:underline">Florida</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Miami</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · MIAMI · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Miami Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Miami paychecks are clean. <strong>No Florida state income tax</strong>.
            <strong> No Miami city or Miami-Dade County income tax</strong>. <strong>No FL SDI or PFL</strong>.
            Your only withholding lines are federal income tax and FICA.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA only</h2>
          <PaycheckCalculator defaultStateSlug="florida" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Florida has no state personal income tax statute. Source:{' '}
            <a href="https://floridarevenue.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Florida Department of Revenue
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
            <Link href="/us/florida" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Florida Paycheck Guide</div>
              <div className="text-sm text-slate-500">No state tax + FL-specific context.</div>
            </Link>
            <Link href="/us/tipped-worker-paycheck-guide" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Tipped Worker Guide</div>
              <div className="text-sm text-slate-500">How tip income shows up.</div>
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
