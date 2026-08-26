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

const PAGE_URL = 'https://payslipiq.com/us/cities/philadelphia/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Philadelphia Paycheck Calculator (2026) — PA + City EIT',
  description:
    'Philadelphia paycheck calculator. Federal, FICA, PA state flat 3.07%, plus Philadelphia Earned Income Tax (resident 3.74%, non-resident 3.43%). 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Philadelphia Paycheck Calculator (2026)',
    description: 'Federal + FICA + PA flat 3.07% + Philadelphia EIT (resident 3.74% / non-resident 3.43%). Verified 2026.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Philadelphia EIT?', a: 'Earned Income Tax. Philadelphia residents pay 3.74% (effective 2025-07-01 through 2026). Non-residents who work in Philadelphia pay 3.43%. Both apply to wages and self-employment income. Unlike most PA municipalities, Philadelphia is outside the PA Act 32 system.' },
  { q: 'How does Philadelphia EIT differ from PA Act 32 EIT elsewhere in Pennsylvania?', a: 'Act 32 applies to every other PA municipality and school district. Rates vary by Tax Collection District (TCD) and PSD code, commonly 1-2%. Philadelphia is exempt from Act 32 and has its own rates published by the City of Philadelphia. The "source rule" (work-state credit) is different; Philadelphia EIT generally beats your home-municipality EIT.' },
  { q: 'Does the calculator include the Philadelphia EIT?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and PA state flat 3.07% in the main tool. For the Philadelphia EIT specifically, use the Local Tax Estimator below: select "PA EIT municipality" and enter 3.74% (resident) or 3.43% (non-resident).' },
  { q: 'I live in NJ but work in Philadelphia — what do I pay?', a: 'You pay Philadelphia non-resident EIT (3.43%) on your Philadelphia wages. NJ then credits you for the Philadelphia tax paid against your NJ state income tax under the NJ-PA reciprocity rules (but those rules have shifted over the years — verify with a CPA in any year you have multi-state work).' },
  { q: 'Are there other Philadelphia payroll lines?', a: 'Most Philadelphia workers see federal, FICA, PA state 3.07%, Philadelphia EIT, and standard pre-tax deductions (401k, health). Self-employed Philadelphia residents owe a separate Net Profits Tax / Business Income & Receipts Tax — those are not employee payroll deductions.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Philadelphia', url: PAGE_URL },
];

export default function PhiladelphiaPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Philadelphia Paycheck Calculator (2026)" description="Federal + FICA + PA flat 3.07% + Philadelphia EIT (resident 3.74% / non-resident 3.43%)." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Philadelphia Paycheck Calculator"
        description="Philadelphia paycheck breakdown including federal, FICA, PA flat 3.07%, and Philadelphia Earned Income Tax (resident 3.74% / non-resident 3.43%, effective 2025-07-01 through 2026)."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/pennsylvania" className="hover:underline">Pennsylvania</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Philadelphia</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · PHILADELPHIA · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Philadelphia Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Philadelphia is outside the PA Act 32 system. Philadelphia residents pay{' '}
            <strong>3.74% Earned Income Tax</strong>; non-residents who work in Philadelphia
            pay <strong>3.43%</strong> (both effective 2025-07-01 through 2026). The Pennsylvania
            state flat rate of 3.07% applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + PA flat 3.07%</h2>
          <PaycheckCalculator defaultStateSlug="pennsylvania" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Philadelphia EIT</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;PA EIT municipality&quot;</strong> in the dropdown below and enter your
            applicable Philadelphia rate: <strong>3.74%</strong> if you live in Philadelphia
            (regardless of where you work), or <strong>3.43%</strong> if you work in Philadelphia
            but live outside.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Philadelphia EIT 2026 rates: 3.74% resident / 3.43% non-resident, effective 2025-07-01
            through 2026. Source:{' '}
            <a href="https://www.phila.gov/services/payments-assistance-taxes/taxes/income-taxes/earnings-tax-employees/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of Philadelphia — Earnings Tax (Employees)
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
            <Link href="/us/pennsylvania" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Pennsylvania Paycheck Guide</div>
              <div className="text-sm text-slate-500">PA flat 3.07% + Act 32 EIT explained.</div>
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
