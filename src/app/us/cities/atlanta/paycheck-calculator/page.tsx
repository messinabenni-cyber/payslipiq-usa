import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/atlanta/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Atlanta Paycheck Calculator (2026) — GA Flat 5.39% + No City Tax',
  description:
    'Atlanta paycheck calculator. Federal, FICA, Georgia flat 5.39%. No Atlanta city income tax, no GA SDI/PFL. 2026 rates. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Atlanta Paycheck Calculator (2026)',
    description: 'Federal + FICA + GA flat 5.39%. No Atlanta city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Atlanta have a city income tax?', a: 'No. Atlanta does not impose a city-level income tax on wages. Same for the rest of Georgia. Your paycheck math is federal + FICA + Georgia state.' },
  { q: 'What is the Georgia state income tax rate?', a: 'Georgia recently moved to a flat tax: 5.39% as of 2025 (down from 5.49%), with a planned step-down to 5.19% in 2026 contingent on state revenue targets. Verify with the Georgia Department of Revenue for the rate that applies to your tax year.' },
  { q: 'Does Georgia have SDI or PFL?', a: 'No. Georgia does not have a state-mandated SDI or Paid Family Leave program. Your paycheck has federal + Georgia state tax + FICA only.' },
  { q: 'What lines should I expect on an Atlanta paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Georgia flat ~5.39%. Standard pre-tax deductions if elected (401k, HSA, FSA, Section 125 health).' },
  { q: 'I live in suburb Atlanta but work in downtown — anything different?', a: 'No. Georgia state tax applies regardless of which Atlanta-area city or county you live in. No GA city imposes a separate municipal income tax.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Atlanta', url: PAGE_URL },
];

export default function AtlantaPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Atlanta Paycheck Calculator (2026)" description="Federal + FICA + GA flat 5.39%. No Atlanta city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Atlanta Paycheck Calculator"
        description="Atlanta paycheck breakdown. Federal + FICA + Georgia flat ~5.39%. No Atlanta city income tax, no GA SDI/PFL."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/georgia/" className="hover:underline">Georgia</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Atlanta</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · ATLANTA · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Atlanta Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Atlanta has <strong>no city income tax</strong>. Georgia is a flat-tax state at
            <strong> ~5.39%</strong> (stepping down to 5.19% if revenue targets are met). No GA
            SDI or PFL programs. Your paycheck math is federal + FICA + GA state.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + Georgia flat</h2>
          <PaycheckCalculator defaultStateSlug="georgia" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Georgia state tax rate. Source:{' '}
            <a href="https://dor.georgia.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Georgia Department of Revenue
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
            <Link href="/us/georgia/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Georgia Paycheck Guide</div>
              <div className="text-sm text-slate-500">GA flat-tax transition + no SDI/PFL context.</div>
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
