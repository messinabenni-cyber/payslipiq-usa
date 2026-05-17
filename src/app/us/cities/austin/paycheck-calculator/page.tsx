import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/austin/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Austin Paycheck Calculator (2026) — No State Income Tax (TX)',
  description:
    'Austin paycheck calculator. Federal + FICA only — Texas has no state income tax and no Austin city tax. Tech-worker RSU and bonus context. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Paycheck Calculator (2026)',
    description: 'Federal + FICA only. No TX state tax, no Austin city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Austin charge a city income tax?', a: 'No. The City of Austin and Travis County do not impose an income tax. Texas has no state income tax. Your paycheck math is federal + FICA only.' },
  { q: 'I get RSUs that vest — how do those show up on my paycheck?', a: 'RSUs are taxed as ordinary income at vest. The fair market value at vest is added to your W-2 wages on that paycheck and federal supplemental withholding applies (22% flat up to $1M/yr, 37% above). FICA applies. Your employer typically sells some shares to cover the withholding. No Texas state tax on the gain because Texas has no income tax.' },
  { q: 'My equity vested but my paycheck looks the same — why?', a: 'Many tech employers run RSU vesting through a separate off-cycle payroll run, which is why your normal pay stub does not change. Check your year-end W-2 or your equity portal (Schwab Stock Plan, Fidelity NetBenefits, E*TRADE Stock Plan) for the actual income added.' },
  { q: 'Does Texas have SDI or PFL?', a: 'No. Texas has no state-mandated SDI or Paid Family Leave program. Many Austin tech employers offer generous PTO and private disability instead.' },
  { q: 'What lines should I expect on an Austin paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Additional Medicare (0.9%) if YTD wages cross $200,000. Pre-tax 401(k), HSA, FSA, Section 125 health if elected. No state or local tax line.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Austin', url: PAGE_URL },
];

export default function AustinPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Austin Paycheck Calculator (2026)" description="Federal + FICA only. No TX state tax, no Austin city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Austin Paycheck Calculator"
        description="Austin paycheck breakdown. Federal + FICA only. No Texas state income tax, no Austin city tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/texas/" className="hover:underline">Texas</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Austin</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · AUSTIN · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Austin Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Austin paychecks are simple. <strong>No Texas state income tax</strong>.
            <strong> No Austin city or Travis County income tax</strong>. <strong>No TX SDI or PFL</strong>.
            For tech workers with RSUs and performance bonuses, the only state-side complication is
            zero — because Texas has none.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA only</h2>
          <PaycheckCalculator defaultStateSlug="texas" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Texas has no state personal income tax statute. Source:{' '}
            <a href="https://comptroller.texas.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Texas Comptroller of Public Accounts
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
            <Link href="/us/texas/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Texas Paycheck Guide</div>
              <div className="text-sm text-slate-500">No state tax + TX-specific context.</div>
            </Link>
            <Link href="/us/bonus-tax-paycheck/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Bonus & RSU Tax</div>
              <div className="text-sm text-slate-500">How equity vests on a pay stub.</div>
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
