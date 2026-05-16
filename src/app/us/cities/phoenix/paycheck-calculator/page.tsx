import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/phoenix/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Phoenix Paycheck Calculator (2026) — AZ Flat 2.5% + No City Tax',
  description:
    'Phoenix paycheck calculator. Federal, FICA, Arizona flat 2.5% — one of the lowest state rates in the US. No Phoenix city income tax, no AZ SDI/PFL. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Phoenix Paycheck Calculator (2026)',
    description: 'Federal + FICA + AZ flat 2.5%. No Phoenix city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Phoenix have a city income tax?', a: 'No. Phoenix does not impose a city-level income tax on wages. Same for every Arizona city. Your paycheck math is federal + FICA + Arizona state.' },
  { q: 'What is the Arizona state income tax rate?', a: 'Arizona is a flat-tax state at 2.5% — one of the lowest in the US (only Indiana 3.05%, North Dakota 2.5%, and the nine no-income-tax states are comparable or lower). Adopted in 2023.' },
  { q: 'Does Arizona have SDI or PFL?', a: 'No. Arizona does not have a state-mandated SDI or Paid Family Leave program. Your paycheck has federal + AZ state tax + FICA only.' },
  { q: 'What lines should I expect on a Phoenix paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Arizona flat 2.5%. Standard pre-tax deductions if elected (401k, HSA, FSA, Section 125 health).' },
  { q: 'How does Phoenix compare to California or NYC?', a: 'Vastly less in state and local tax. AZ 2.5% flat vs CA progressive (top 13.3%) or NYC stacked (NY state up to 10.9% + NYC up to 3.876%). On the same $80k gross, a Phoenix worker keeps roughly $2,000-$5,000 more per year than a California or NYC counterpart purely in state/local tax difference.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Phoenix', url: PAGE_URL },
];

export default function PhoenixPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Phoenix Paycheck Calculator (2026)" description="Federal + FICA + AZ flat 2.5%. No Phoenix city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Phoenix Paycheck Calculator"
        description="Phoenix paycheck breakdown. Federal + FICA + Arizona flat 2.5%. No Phoenix city income tax, no AZ SDI/PFL."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/arizona/" className="hover:underline">Arizona</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Phoenix</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · PHOENIX · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Phoenix Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Phoenix has <strong>no city income tax</strong>. Arizona state is a <strong>flat
            2.5%</strong> — one of the lowest state rates in the US. No AZ SDI or PFL. Your
            paycheck math is federal + FICA + AZ state only.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + Arizona flat 2.5%</h2>
          <PaycheckCalculator defaultStateSlug="arizona" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Arizona state tax rate. Source:{' '}
            <a href="https://azdor.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Arizona Department of Revenue
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
            <Link href="/us/arizona/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Arizona Paycheck Guide</div>
              <div className="text-sm text-slate-500">AZ flat 2.5% + no city tax overview.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">Where local payroll tax does apply.</div>
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
