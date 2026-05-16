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

const PAGE_URL = 'https://payslipiq.com/us/cities/pittsburgh/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Pittsburgh Paycheck Calculator (2026) — PA + Pittsburgh EIT 3% + LST',
  description:
    'Pittsburgh paycheck calculator. Federal, FICA, PA flat 3.07%, plus Pittsburgh Earned Income Tax 3% (resident) under PA Act 32, plus $52 Local Services Tax. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Pittsburgh Paycheck Calculator (2026)',
    description: 'Federal + FICA + PA flat 3.07% + Pittsburgh EIT 3% + LST $52.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Pittsburgh EIT?', a: 'Earned Income Tax under PA Act 32. Pittsburgh residents pay 3% (1% to the city + 2% to Pittsburgh Public Schools). Non-residents working in Pittsburgh pay 1% (city portion only). Administered through the local Tax Collection District; verify your exact rate using your PSD code.' },
  { q: 'What is the LST?', a: 'Pittsburgh Local Services Tax: $52/year ($1/week) for working in Pittsburgh, regardless of where you live. Phased out for low earners (under ~$12,000 annual). Withheld pro-rata each pay period.' },
  { q: 'How is Pittsburgh different from Philadelphia?', a: 'Both are PA cities but on different systems. Philadelphia is OUTSIDE PA Act 32 with its own EIT structure (3.74% resident / 3.43% non-resident). Pittsburgh is INSIDE Act 32 with the standard EIT structure (3% resident split between city and school district / 1% non-resident).' },
  { q: 'I live in a suburb but work in Pittsburgh — what do I pay?', a: 'You pay Pittsburgh 1% non-resident EIT on your Pittsburgh wages, plus the $52 LST. Your home municipality and school district typically receive their EIT separately. PA Act 32 ensures EIT goes to your residence under most circumstances; verify with the PA DCED PSD code finder.' },
  { q: 'Does the calculator include the Pittsburgh lines?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, and PA flat 3.07% in the main tool. For the Pittsburgh EIT, use the Local Tax Estimator below: select "PA EIT municipality" and enter 3% (resident) or 1% (non-resident). The LST is not yet modelled in the estimator; subtract $52/26 = ~$2/biweekly check.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Pittsburgh', url: PAGE_URL },
];

export default function PittsburghPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Pittsburgh Paycheck Calculator (2026)" description="Federal + FICA + PA flat 3.07% + Pittsburgh EIT 3% (resident) / 1% (non-resident) + LST $52/yr." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Pittsburgh Paycheck Calculator"
        description="Pittsburgh paycheck breakdown including federal, FICA, PA flat 3.07%, Pittsburgh EIT 3% resident / 1% non-resident, and the $52/year Local Services Tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/pennsylvania/" className="hover:underline">Pennsylvania</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Pittsburgh</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · PITTSBURGH · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Pittsburgh Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Pittsburgh follows PA Act 32. <strong>Residents pay 3% EIT</strong> (1% to the city + 2%
            to Pittsburgh Public Schools). <strong>Non-residents working in Pittsburgh pay 1%</strong>.
            Plus a <strong>$52/year Local Services Tax</strong> for working in the city. PA state flat
            3.07% applies first.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 1 — federal + FICA + PA flat 3.07%</h2>
          <PaycheckCalculator defaultStateSlug="pennsylvania" />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Step 2 — add Pittsburgh EIT</h2>
          <p className="text-slate-700 mb-4">
            Select <strong>&quot;PA EIT municipality&quot;</strong> below and enter your applicable
            rate: <strong>3%</strong> if you live in Pittsburgh, or <strong>1%</strong> if you
            work in Pittsburgh but live elsewhere. Add ~$2/biweekly for the $52 LST.
          </p>
          <LocalTaxCalculator />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Pittsburgh EIT + LST: per PA Act 32 and Pittsburgh ordinances. Source:{' '}
            <a href="https://dced.pa.gov/local-government/local-income-tax-information/psd-codes-and-eit-rates/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              PA DCED — PSD Codes and EIT Rates
            </a>{' '}
            (look up your address for the exact split between city, school district, and any LST).
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
            <Link href="/us/pennsylvania/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Pennsylvania Paycheck Guide</div>
              <div className="text-sm text-slate-500">PA flat 3.07% + Act 32 EIT statewide.</div>
            </Link>
            <Link href="/us/cities/philadelphia/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Philadelphia Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Philadelphia EIT (outside Act 32) — different structure.</div>
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
