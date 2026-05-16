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

const PAGE_URL = 'https://payslipiq.com/us/cities/cleveland/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Cleveland Paycheck Calculator (2026) — OH + Cleveland RITA 2.5%',
  description:
    'Cleveland paycheck calculator. Federal, FICA, Ohio flat 2.75% (verify), plus Cleveland 2.5% municipal income tax administered by RITA. 2026 rates. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Cleveland Paycheck Calculator (2026)',
    description: 'Federal + FICA + Ohio + Cleveland 2.5% RITA municipal income tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Cleveland municipal income tax?', a: 'Cleveland levies a 2.5% municipal income tax administered by RITA (Regional Income Tax Agency). It applies to Cleveland residents (on all wages) and to non-residents (on wages earned in Cleveland). Most paychecks for Cleveland-area workers see the 2.5% line.' },
  { q: 'What is RITA?', a: 'The Regional Income Tax Agency. A consortium that administers local income tax collection for about 350 Ohio municipalities. Cleveland is the largest RITA city. If your employer is in a RITA city, RITA handles the withholding and remittance.' },
  { q: 'I live in a suburb but work in Cleveland — what do I pay?', a: 'You pay Cleveland 2.5% non-resident tax on Cleveland wages. Your home city typically gives a credit for the Cleveland tax paid; the credit varies by suburb. Most Ohio suburbs give partial credit (75-100%) to avoid double taxation.' },
  { q: 'I live in Cleveland but work in a suburb — what do I pay?', a: 'You pay Cleveland 2.5% on all wages as a resident, less any credit for tax paid to your work city. If your work city has its own 2.0% municipal income tax, you generally get a credit for that 2.0% and pay Cleveland the remaining 0.5%. Verify with RITA.' },
  { q: 'Does the calculator include the Cleveland RITA line?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and Ohio state in the main tool. For the Cleveland line, use the Local Tax Estimator below: select "Ohio RITA / CCA city" and enter 2.5%.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Cleveland', url: PAGE_URL },
];

export default function ClevelandPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Cleveland Paycheck Calculator (2026)" description="Federal + FICA + Ohio + Cleveland 2.5% RITA municipal income tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Cleveland Paycheck Calculator"
        description="Cleveland paycheck breakdown including federal, FICA, Ohio state, and Cleveland 2.5% RITA municipal income tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/ohio/" className="hover:underline">Ohio</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Cleveland</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · CLEVELAND · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Cleveland Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Cleveland imposes a <strong>2.5% municipal income tax</strong> administered by RITA
            (Regional Income Tax Agency). It applies to residents (all wages) and non-residents
            (Cleveland wages). Ohio state tax applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + Ohio state</h2>
          <PaycheckCalculator defaultStateSlug="ohio" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add the Cleveland RITA 2.5%</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;Ohio RITA / CCA city&quot;</strong> below and enter <strong>2.5%</strong>.
            If you live in a suburb and your work-city credit applies, you may owe less; check with
            RITA for the exact net.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Cleveland municipal income tax: 2.5%. Administered by RITA. Source:{' '}
            <a href="https://www.ritaohio.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Regional Income Tax Agency (RITA Ohio)
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
            <Link href="/us/ohio/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Ohio Paycheck Guide</div>
              <div className="text-sm text-slate-500">OH state tax + RITA / CCA city overview.</div>
            </Link>
            <Link href="/us/cities/cincinnati/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Cincinnati Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Cincinnati earnings tax explained.</div>
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
