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

const PAGE_URL = 'https://payslipiq.com/us/cities/wilmington/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Wilmington DE Paycheck Calculator (2026) — City Wage Tax',
  description:
    'Wilmington Delaware paycheck calculator. Federal, FICA, DE progressive, plus Wilmington City Wage Tax 1.25% on wages earned in Wilmington. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Wilmington DE Paycheck Calculator (2026)',
    description: 'Federal + FICA + DE + Wilmington 1.25% wage tax (work-location based).',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'How is the Wilmington wage tax calculated?', a: 'Wilmington imposes a 1.25% City Wage Tax on wages earned in Wilmington. It applies regardless of where you live; what matters is whether the work is performed in Wilmington. Flat rate, no brackets, no exemptions.' },
  { q: 'I live in Wilmington but work outside the city — do I owe?', a: 'Generally no. The Wilmington City Wage Tax is work-location-based. If your job is outside Wilmington, you do not pay it even if you live in Wilmington. (Self-employed Wilmington residents owe the Wilmington Net Profits Tax separately.)' },
  { q: 'What about Delaware state tax?', a: 'Delaware has progressive brackets ranging up to 6.6% at the top. The state tax applies before any local tax. Verify current brackets with the Delaware Division of Revenue.' },
  { q: 'Does the calculator include the Wilmington line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and DE state in the main tool. For the Wilmington line specifically, use the Local Tax Estimator below: select "Wilmington, DE" and the rate is automatically 1.25%.' },
  { q: 'Are there other Wilmington / Delaware payroll lines?', a: 'No other employee-side local taxes in Wilmington. Delaware does not have employee-side SDI or PFL programs (DE has a Paid Family Leave program starting 2026 but funding details are employer-paid for now). Standard federal + DE + Wilmington stack.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Wilmington', url: PAGE_URL },
];

export default function WilmingtonPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Wilmington DE Paycheck Calculator (2026)" description="Federal + FICA + DE + Wilmington 1.25% city wage tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Wilmington Paycheck Calculator"
        description="Wilmington Delaware paycheck breakdown including federal, FICA, Delaware progressive state tax, and Wilmington City Wage Tax 1.25%."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/delaware" className="hover:underline">Delaware</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Wilmington</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · WILMINGTON DE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Wilmington Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Wilmington imposes a <strong>1.25% City Wage Tax</strong> on wages earned in
            Wilmington. Work-location based: if your job is in Wilmington you owe it, regardless
            of where you live. Delaware state tax applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Delaware</h2>
          <PaycheckCalculator defaultStateSlug="delaware" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Wilmington City Wage Tax</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Wilmington, DE&quot;</strong> below. The rate is automatically 1.25% on
            wages earned in Wilmington.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Wilmington City Wage Tax: 1.25% on wages earned in Wilmington. Source:{' '}
            <a href="https://www.wilmingtonde.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of Wilmington — Wage Tax
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
            <Link href="/us/delaware" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Delaware Paycheck Guide</div>
              <div className="text-sm text-slate-500">DE progressive brackets + Wilmington overview.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">NYC, Yonkers, Philadelphia, Detroit, RITA cities, and more.</div>
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
