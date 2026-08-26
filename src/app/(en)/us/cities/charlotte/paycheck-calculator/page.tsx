import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/charlotte/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Charlotte Paycheck Calculator (2026) — NC Flat 3.99%',
  description:
    'Charlotte paycheck calculator. Federal, FICA, North Carolina flat 3.99% (2026 step-down rate). No Charlotte city tax. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Charlotte Paycheck Calculator (2026)',
    description: 'Federal + FICA + NC flat 3.99%. No Charlotte city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Charlotte have a city income tax?', a: 'No. The City of Charlotte and Mecklenburg County do not impose an income tax. North Carolina state tax is the only state-level deduction on a Charlotte paycheck.' },
  { q: 'What is the North Carolina state income tax rate for 2026?', a: 'North Carolina is a flat-tax state. The statutory rate for 2026 is 3.99%, per the step-down schedule in N.C. Gen. Stat. § 105-153.7 (5.25% in 2021 → 4.99% in 2022 → 4.75% in 2023 → 4.5% in 2024 → 4.25% in 2025 → 3.99% in 2026). Further reductions in later years are subject to revenue triggers. Verify the current published rate at the NC Department of Revenue.' },
  { q: 'Does North Carolina have SDI or PFL?', a: 'No. North Carolina does not have a state-mandated SDI or Paid Family Leave program. Some Charlotte employers offer private disability or paid leave benefits — check your benefits portal.' },
  { q: 'What lines should I expect on a Charlotte paycheck?', a: 'A Charlotte stub adds a single state line — North Carolina income tax at the flat 3.99% rate for 2026 — to the federal trio of federal income tax, Social Security (6.2% to $184,500) and Medicare (1.45%). Neither Charlotte nor Mecklenburg County imposes a local wage tax. Pre-tax 401(k), HSA, FSA or Section 125 health show up only if you elect them.' },
  { q: 'I work in Charlotte but live in South Carolina (Rock Hill, Fort Mill) — what changes?', a: 'You owe North Carolina income tax on wages earned in NC (the state where the work is performed). You also owe South Carolina tax as a resident on worldwide income. South Carolina gives you a credit for NC tax paid to avoid double taxation. Your employer typically withholds NC; you square up SC at filing. See our Multi-State Payroll Guide.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Charlotte', url: PAGE_URL },
];

export default function CharlottePaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Charlotte Paycheck Calculator (2026)" description="Federal + FICA + NC flat 3.99%. No Charlotte city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Charlotte Paycheck Calculator"
        description="Charlotte paycheck breakdown. Federal + FICA + North Carolina flat 3.99%. No Charlotte city income tax, no NC SDI/PFL."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/north-carolina" className="hover:underline">North Carolina</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Charlotte</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · CHARLOTTE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Charlotte Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Charlotte has <strong>no city income tax</strong>. North Carolina is a
            <strong> flat-tax state at 3.99% for 2026</strong> (per N.C. Gen. Stat. § 105-153.7 step-down).
            <strong> No NC SDI or PFL</strong>. Your paycheck math is federal + FICA + NC flat 3.99%.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + NC flat 3.99%</h2>
          <PaycheckCalculator defaultStateSlug="north-carolina" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            North Carolina state tax rate. Source:{' '}
            <a href="https://www.ncdor.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              North Carolina Department of Revenue
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
            <Link href="/us/north-carolina" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">North Carolina Paycheck Guide</div>
              <div className="text-sm text-slate-500">NC flat rate step-down explained.</div>
            </Link>
            <Link href="/us/multi-state-payroll-guide" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Multi-State Payroll</div>
              <div className="text-sm text-slate-500">Live SC, work NC scenarios.</div>
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
