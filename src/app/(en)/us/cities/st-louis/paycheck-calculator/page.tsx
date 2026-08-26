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

const PAGE_URL = 'https://payslipiq.com/us/cities/st-louis/paycheck-calculator';

export const metadata: Metadata = {
  title: 'St. Louis Paycheck Calculator (2026) — STL 1% Tax',
  description:
    'St. Louis Missouri paycheck calculator. Federal, FICA, MO progressive, plus St. Louis 1% Earnings Tax on residents and on wages earned in STL. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'St. Louis Paycheck Calculator (2026)',
    description: 'Federal + FICA + MO + STL 1% earnings tax. Renewed by voters through 2031.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the St. Louis Earnings Tax?', a: 'St. Louis imposes a 1% Earnings Tax on (a) all wages of St. Louis residents (regardless of where they work) and (b) wages earned in St. Louis by non-residents. Renewed by voters in April 2026 through 2031, same as the KCMO Earnings Tax structure.' },
  { q: 'I live in St. Louis but work outside the city — do I owe?', a: 'Yes. As a STL resident you owe the 1% on all your earnings, regardless of work location. As a non-resident working in STL, you owe the 1% on STL wages only. Same as the KCMO rule.' },
  { q: 'Does Missouri tax wages?', a: 'Yes. Missouri uses progressive brackets up to ~4.95% in 2025/2026 (verify with Missouri Department of Revenue). The state tax applies in addition to STL.' },
  { q: 'Does the calculator include the STL line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and MO state in the main tool. For the STL line, use the Local Tax Estimator below: select "St. Louis, MO earnings tax" — the rate is automatically 1%.' },
  { q: 'What about remote work?', a: 'A recent court case (Boles v. City of St. Louis) addressed whether STL can tax wages of non-residents who work remotely from outside the city. As of 2026 the City of St. Louis has narrowed its position; if you work from outside STL for a STL-based employer, verify your obligation with the city Revenue Division.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'St. Louis', url: PAGE_URL },
];

export default function StLouisPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="St. Louis Paycheck Calculator (2026)" description="Federal + FICA + MO + STL 1% earnings tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ St. Louis Paycheck Calculator"
        description="St. Louis Missouri paycheck breakdown including federal, FICA, Missouri state, and St. Louis 1% earnings tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/missouri" className="hover:underline">Missouri</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">St. Louis</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · ST. LOUIS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">St. Louis Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            St. Louis imposes a <strong>1% Earnings Tax</strong> on residents (all wages) and
            non-residents (STL wages only). Renewed by voters April 2026 through 2031. Missouri
            state tax applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Missouri</h2>
          <PaycheckCalculator defaultStateSlug="missouri" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the STL Earnings Tax</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;St. Louis, MO earnings tax&quot;</strong> below. The rate is automatically
            1%.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            St. Louis Earnings Tax: 1%. Renewed by voters April 2026 through 2031. Source:{' '}
            <a href="https://www.stlouis-mo.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of St. Louis — Earnings Tax
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
            <Link href="/us/missouri" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Missouri Paycheck Guide</div>
              <div className="text-sm text-slate-500">MO progressive brackets + KCMO / STL earnings tax.</div>
            </Link>
            <Link href="/us/cities/kansas-city/paycheck-calculator" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Kansas City Paycheck Calculator</div>
              <div className="text-sm text-slate-500">KCMO has the same 1% earnings tax structure.</div>
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
