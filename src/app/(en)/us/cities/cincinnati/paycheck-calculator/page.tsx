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

const PAGE_URL = 'https://payslipiq.com/us/cities/cincinnati/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Cincinnati Paycheck Calculator (2026) — OH + 1.8% Tax',
  description:
    'Cincinnati paycheck calculator. Federal, FICA, Ohio state, plus Cincinnati 1.8% Earnings Tax on residents and on Cincinnati wages. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Cincinnati Paycheck Calculator (2026)',
    description: 'Federal + FICA + Ohio + Cincinnati 1.8% earnings tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Cincinnati earnings tax?', a: 'Cincinnati levies a 1.8% city earnings tax (verify current rate with the Cincinnati Income Tax Division). It applies to (a) Cincinnati residents on all earned income and (b) non-residents on wages earned in Cincinnati. Administered directly by the city, not through RITA.' },
  { q: 'How does it differ from Cleveland?', a: 'Cleveland is administered by RITA at 2.5%. Cincinnati administers its own tax at 1.8%. Both are municipal income taxes under Ohio law; the rate, administrator, and credit rules differ.' },
  { q: 'I live in a Cincinnati suburb but work downtown — what do I pay?', a: 'You pay Cincinnati 1.8% on Cincinnati wages as a non-resident. Your home municipality typically gives a credit for the Cincinnati tax paid; the exact credit varies by suburb. Most Ohio suburbs give partial credit to avoid double taxation.' },
  { q: 'Does the calculator include the Cincinnati line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and Ohio state in the main tool. For the Cincinnati line, use the Local Tax Estimator below: select "Ohio RITA / CCA city" and enter 1.8%. (Cincinnati is administered directly by the city, not RITA, but the rate input field handles it the same way.)' },
  { q: 'Are there other Cincinnati payroll lines?', a: 'No additional employee-side city programs beyond the 1.8% earnings tax. Standard federal + Ohio + Cincinnati stack.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Cincinnati', url: PAGE_URL },
];

export default function CincinnatiPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Cincinnati Paycheck Calculator (2026)" description="Federal + FICA + Ohio + Cincinnati 1.8% earnings tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Cincinnati Paycheck Calculator"
        description="Cincinnati paycheck breakdown including federal, FICA, Ohio state, and Cincinnati 1.8% city earnings tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/ohio" className="hover:underline">Ohio</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Cincinnati</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · CINCINNATI · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Cincinnati Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Cincinnati imposes a <strong>1.8% city earnings tax</strong> on residents (all
            earned income) and non-residents (Cincinnati wages). Administered directly by the
            City of Cincinnati. Ohio state tax applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Ohio state</h2>
          <PaycheckCalculator defaultStateSlug="ohio" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Cincinnati earnings tax</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Ohio RITA / CCA city&quot;</strong> below and enter <strong>1.8%</strong>.
            (Cincinnati administers its own tax, not via RITA, but the calc field works the same.)
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Cincinnati city earnings tax: 1.8% (verify current rate). Source:{' '}
            <a href="https://www.cincinnati-oh.gov/finance/income-taxes/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of Cincinnati — Income Tax Division
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
            <Link href="/us/ohio" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Ohio Paycheck Guide</div>
              <div className="text-sm text-slate-500">OH state tax + RITA / CCA city overview.</div>
            </Link>
            <Link href="/us/cities/cleveland/paycheck-calculator" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Cleveland Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Cleveland 2.5% via RITA.</div>
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
