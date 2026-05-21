import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/boston/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Boston Paycheck Calculator (2026) — MA + PFML 0.46%',
  description:
    'Boston paycheck calculator. Federal, FICA, Massachusetts flat 5% (9% on income > $1M) + MA PFML 0.46% employee share. No Boston city income tax. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Boston Paycheck Calculator (2026)',
    description: 'Federal + FICA + MA + MA PFML. No Boston city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Boston have a city income tax?', a: 'No. Boston does not impose a city-level income tax on wages. Massachusetts state tax (5% flat, plus 4% surtax on income above $1 million) and federal apply.' },
  { q: 'What is MA PFML?', a: 'Massachusetts Paid Family and Medical Leave. Total premium 0.88% of wages (employee + employer split). For employers with 25+ employees, the employee share is 0.46% (0.28% medical + 0.18% family). Wage cap matches the SSA Social Security wage base ($184,500 for 2026). Funds Massachusetts Department of Family and Medical Leave benefits.' },
  { q: 'What about the Massachusetts millionaire surtax?', a: 'Massachusetts charges an additional 4% on income over $1,000,000 (Fair Share Amendment, in effect since 2023). For most workers earning under $1M, the standard 5% flat rate applies. Verify with the Massachusetts Department of Revenue.' },
  { q: 'What lines should I expect on a Boston paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500 wage base). Medicare (1.45%). Massachusetts state tax (5% flat). MA PFML (0.46% employee share). Standard pre-tax deductions if elected (401k, HSA, FSA, Section 125 health).' },
  { q: 'Does the calculator include MA PFML?', a: 'Yes. As of 2026-05-16 the PayslipIQ PaycheckCalculator handles MA PFML as a separate line item when you select Massachusetts as your state.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Boston', url: PAGE_URL },
];

export default function BostonPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Boston Paycheck Calculator (2026)" description="Federal + FICA + MA flat 5% + MA PFML 0.46%. No Boston city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Boston Paycheck Calculator"
        description="Boston paycheck breakdown. Federal + FICA + Massachusetts flat 5% (plus 4% surtax over $1M) + MA PFML 0.46%. No Boston city income tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/massachusetts/" className="hover:underline">Massachusetts</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Boston</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · BOSTON · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Boston Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Boston has <strong>no city income tax</strong>. Your paycheck math is federal + FICA +
            Massachusetts flat 5% (plus the 4% surtax on income over $1M) + <strong>MA PFML at
            0.46% employee share</strong>. The PFML line appears on every Boston paycheck.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + Massachusetts + MA PFML</h2>
          <PaycheckCalculator defaultStateSlug="massachusetts" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            MA state tax + millionaire surtax:{' '}
            <a href="https://www.mass.gov/orgs/massachusetts-department-of-revenue" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Massachusetts Department of Revenue
            </a>. MA PFML rates:{' '}
            <a href="https://www.mass.gov/info-details/paid-family-and-medical-leave-employer-contribution-rates-and-calculator" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Mass.gov DFML 2026
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
            <Link href="/us/massachusetts/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Massachusetts Paycheck Guide</div>
              <div className="text-sm text-slate-500">MA flat 5% + millionaire surtax + PFML.</div>
            </Link>
            <Link href="/us/state-worker-contributions/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">State Worker Contributions (all 11 states)</div>
              <div className="text-sm text-slate-500">SDI / PFL / PFML / FAMLI / TDI rates summary.</div>
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
