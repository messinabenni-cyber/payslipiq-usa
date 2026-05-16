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

const PAGE_URL = 'https://payslipiq.com/us/cities/kansas-city/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Kansas City MO Paycheck Calculator (2026) — MO + KC 1% Earnings Tax',
  description:
    'Kansas City Missouri paycheck calculator. Federal, FICA, MO progressive, plus KCMO 1% Earnings Tax on residents and on wages earned in KC by non-residents. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Kansas City Paycheck Calculator (2026)',
    description: 'Federal + FICA + MO + KCMO 1% earnings tax. Renewed by voters through 2031.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the KCMO Earnings Tax?', a: 'Kansas City Missouri imposes a 1% Earnings Tax on (a) all wages of Kansas City residents (regardless of where they work) and (b) wages earned in Kansas City by non-residents. Renewed by voters in April 2026 to continue through 2031.' },
  { q: 'I live in Kansas City but work in Overland Park (KS) — do I owe?', a: 'Yes. As a KCMO resident you owe the 1% on all your earnings, regardless of work location. The KS state tax (Kansas) will withhold for your Kansas work; you reconcile MO state credit at filing.' },
  { q: 'I live in suburban Kansas but work in downtown KCMO — do I owe?', a: 'Yes. As a non-resident working in KCMO you owe the 1% on KCMO wages only. Your home state (Kansas) typically allows a credit for the KCMO tax paid; consult a CPA on multi-state reconciliation.' },
  { q: 'Does Missouri tax wages?', a: 'Yes. Missouri uses progressive brackets up to ~4.95% in 2025/2026 (verify with Missouri Department of Revenue). The state tax applies in addition to KCMO.' },
  { q: 'Does the calculator include the KCMO line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and MO state in the main tool. For the KCMO line, use the Local Tax Estimator below: select "Kansas City, MO earnings tax" — the rate is automatically 1%.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Kansas City', url: PAGE_URL },
];

export default function KansasCityPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Kansas City MO Paycheck Calculator (2026)" description="Federal + FICA + MO + KCMO 1% earnings tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Kansas City Paycheck Calculator"
        description="Kansas City Missouri paycheck breakdown including federal, FICA, Missouri state, and KCMO 1% earnings tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/missouri/" className="hover:underline">Missouri</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Kansas City</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · KANSAS CITY MO · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Kansas City Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            KCMO imposes a <strong>1% Earnings Tax</strong> on residents (all wages) and on
            non-residents (KCMO wages only). Renewed by voters in April 2026 through 2031. Missouri
            state tax applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Missouri</h2>
          <PaycheckCalculator defaultStateSlug="missouri" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the KCMO Earnings Tax</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Kansas City, MO earnings tax&quot;</strong> below. The rate is automatically
            1%.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            KCMO Earnings Tax: 1%. Renewed by voters April 2026 through 2031. Source:{' '}
            <a href="https://www.kcmo.gov/city-hall/departments/finance/earnings-tax" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of Kansas City MO — Earnings Tax
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
            <Link href="/us/missouri/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Missouri Paycheck Guide</div>
              <div className="text-sm text-slate-500">MO progressive brackets + KCMO / STL earnings tax.</div>
            </Link>
            <Link href="/us/cities/st-louis/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">St. Louis Paycheck Calculator</div>
              <div className="text-sm text-slate-500">STL has the same 1% earnings tax structure.</div>
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
