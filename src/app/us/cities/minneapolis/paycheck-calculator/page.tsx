import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/minneapolis/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Minneapolis Paycheck Calculator (2026) — MN + No Minneapolis City Income Tax',
  description:
    'Minneapolis paycheck calculator. Federal, FICA, Minnesota progressive (top 9.85%). No Minneapolis city income tax. 2026 rates. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Minneapolis Paycheck Calculator (2026)',
    description: 'Federal + FICA + Minnesota progressive. No Minneapolis city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Minneapolis have a city income tax?', a: 'No. Minneapolis does not impose a city-level income tax on wages. Your paycheck math is federal + FICA + Minnesota state. Same for St. Paul and the rest of the Twin Cities metro.' },
  { q: 'Does Minnesota have employee-side SDI or PFL?', a: 'Minnesota signed a Paid Family and Medical Leave program into law (taking effect 2026). Employee contribution begins 2026; the exact rate is small (around 0.4% combined employer + employee). Verify the current rate with the MN Department of Employment and Economic Development.' },
  { q: 'What is the Minnesota state income tax rate?', a: 'Progressive brackets from 5.35% to 9.85% (top rate). Top rate kicks in at relatively low income compared to other states. Verify current brackets with the MN Department of Revenue.' },
  { q: 'What lines should I expect on a Minneapolis paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500 wage base). Medicare (1.45%). Minnesota state income tax (progressive). Once MN PFML is fully implemented, a small additional line for the employee share of paid leave premiums.' },
  { q: 'What about St. Paul, Bloomington, or other Twin Cities suburbs?', a: 'No Minnesota city imposes a separate municipal income tax on wages. The math is the same across the Twin Cities metro: federal + FICA + MN state.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Minneapolis', url: PAGE_URL },
];

export default function MinneapolisPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Minneapolis Paycheck Calculator (2026)" description="Federal + FICA + Minnesota progressive. No Minneapolis city income tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Minneapolis Paycheck Calculator"
        description="Minneapolis paycheck breakdown. Federal + FICA + Minnesota progressive state tax. No Minneapolis city income tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/minnesota/" className="hover:underline">Minnesota</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Minneapolis</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · MINNEAPOLIS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Minneapolis Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Minneapolis has <strong>no city-level income tax</strong>. Your paycheck math is
            federal + FICA + Minnesota progressive state tax. Same for St. Paul and the rest of the
            Twin Cities. MN state tops out at 9.85% — one of the higher state rates.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + Minnesota progressive</h2>
          <PaycheckCalculator defaultStateSlug="minnesota" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Minnesota state tax + (forthcoming) PFML. Source:{' '}
            <a href="https://www.revenue.state.mn.us/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Minnesota Department of Revenue
            </a>{' '}
            and{' '}
            <a href="https://www.paidleave.mn.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Minnesota Paid Leave
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
            <Link href="/us/minnesota/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Minnesota Paycheck Guide</div>
              <div className="text-sm text-slate-500">MN progressive + new PFML 2026 program.</div>
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
