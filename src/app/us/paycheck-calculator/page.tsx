import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { GrossToNetCalculator } from '@/components/GrossToNetCalculator';

const PAGE_URL = 'https://payslipiq.com/us/paycheck-calculator';

export const metadata: Metadata = {  title: 'Paycheck Calculator 2026 | Calculate My Paycheck After Tax',  description:    'Free 2026 US paycheck calculator. Calculate your paycheck after federal tax, FICA and state withholding for all 50 states. Hourly and salary modes.',  alternates: {    canonical: PAGE_URL,    languages: {      'en-US': PAGE_URL,      'es-US': 'https://payslipiq.com/es/calculadora-de-cheque',      'x-default': PAGE_URL,    },  },  openGraph: {    title: 'Paycheck Calculator 2026 | Calculate My Paycheck After Tax',    description:      'Free 2026 US paycheck calculator. Federal tax, FICA, all 50 states + DC. See exactly what your paycheck is after taxes.',    url: PAGE_URL,    type: 'website',    siteName: 'PayslipIQ',    locale: 'en_US',    images: [      {        url: 'https://payslipiq.com/api/og?title=Paycheck%20Calculator&eyebrow=USA%202026',        width: 1200,        height: 630,        alt: 'PayslipIQ Paycheck Calculator 2026',      },    ],  },  twitter: {    card: 'summary_large_image',    title: 'Paycheck Calculator 2026 | Calculate My Paycheck After Tax',    description: 'Calculate your paycheck after federal tax, FICA and state withholding. All 50 states.',  },  other: {    'geo.region': 'US',    'geo.placename': 'United States',  },};

const FAQS = [
  {
    q: 'How accurate is this paycheck calculator?',
    a: 'The calculator uses the IRS Publication 15-T 2026 percentage-method tables for federal income tax withholding, the current SSA wage base ($184,500) for Social Security, the 1.45% Medicare rate, the 0.9% Additional Medicare threshold ($200,000 for single filers), and each state’s 2026 withholding guidance. It is an estimate, not an exact prediction. Real paychecks can differ because of mid-year W-4 changes, multi-state nexus, garnishments, supplemental wage rules, and employer-specific benefits elections.'
  },
  {
    q: 'Does it cover all 50 states?',
    a: 'Yes, plus the District of Columbia. Flat-rate states use the published flat rate. Progressive-bracket states use the 2026 brackets. The nine no-state-income-tax states return $0 in the state line: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming.'
  },
  {
    q: 'Does it include local taxes?',
    a: 'The basic Paycheck Calculator does not include city or county income tax. For NYC, Yonkers, Philadelphia, Detroit, Ohio RITA and CCA cities, and Indiana/Maryland counties, use the dedicated Local Paycheck Tax Calculator at /us/local-paycheck-taxes/.'
  },
  {
    q: 'Why is my real paycheck different from the estimate?',
    a: 'Common reasons include: extra W-4 withholding, year-to-date wages near or above the Social Security wage base, additional Medicare kicking in, mid-year benefits enrolments, pre-tax deductions you forgot to enter, garnishments, multi-state work, supplemental wages taxed at the 22% flat rate, and employer payroll software rounding. The estimate is directional; for a precise figure verify with payroll.'
  },
  {
    q: 'Does this calculator handle pre-tax 401(k) and HSA?',
    a: 'Yes. Enter pre-tax deductions per period to reduce federal-taxable wages and state-taxable wages where the state follows federal pre-tax treatment. Roth 401(k), Roth IRA, and other post-tax items go into the post-tax deductions line and come off net pay.'
  },
  {
    q: 'Is this affiliated with the IRS, my employer, or my state?',
    a: 'No. PayslipIQ is an independent educational resource. It is not affiliated with the IRS, the Social Security Administration, the Department of Labor, any state tax agency, any employer, or any payroll provider. Always verify with an official source or a qualified professional.'
  },
  {
    q: 'Is there a Spanish version?',
    a: 'Yes. /es/calculadora-de-cheque/ is the Spanish-beta version of the Paycheck Calculator.'
  },
  {
    q: 'How does the calculator handle hourly workers?',
    a: 'For hourly pay, multiply your rate by hours worked in the period and enter that as gross pay. For overtime, use the Overtime Pay page or the Gross-to-Net Calculator, which can model 1.5x overtime explicitly. For salaried-to-hourly equivalence, use /us/salary-to-hourly/.'
  }
];

const HOW_TO_STEPS = [
  { name: 'Enter your gross pay', text: 'Type your gross pay per period (weekly, bi-weekly, semi-monthly, monthly, or annual).' },
  { name: 'Pick your pay frequency', text: 'Match the frequency to whatever your employer pays you. Bi-weekly is the most common in the US.' },
  { name: 'Pick your state', text: 'State income tax varies. Nine states have none. The rest use flat rates or progressive brackets.' },
  { name: 'Pick your filing status', text: 'Single, married filing jointly, married filing separately, or head of household.' },
  { name: 'Add pre-tax and post-tax deductions', text: 'Pre-tax (401(k), HSA, Section 125 health) reduces taxable wages. Post-tax (Roth, garnishments) comes off net.' },
  { name: 'Read the breakdown', text: 'The calculator returns federal income tax, Social Security, Medicare, state tax, and net pay, with a one-line explanation for each.' }
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Paycheck Calculator', url: PAGE_URL }
];

function SoftwareApplicationLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PayslipIQ US Paycheck Calculator',
    operatingSystem: 'Web',
    applicationCategory: 'FinanceApplication',
    url: PAGE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'A free US paycheck calculator that estimates federal, FICA, and state withholding for all 50 states plus DC. Educational only.',
    isAccessibleForFree: true
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function HowToLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to use the PayslipIQ Paycheck Calculator',
    description: 'Six steps to estimate your US take-home pay.',
    step: HOW_TO_STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text
    }))
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function PaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="US Paycheck Calculator (2026)" description="Estimate take-home pay from gross. Federal, FICA, state tax for all 50 states + DC." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <SoftwareApplicationLd />
      <HowToLd />
      {/* 2026-05-16: FinancialProduct schema signals this is a financial tool, not just an article. Improves AI-search / rich-result eligibility. */}
      <FinancialProductSchema
        name="PayslipIQ US Paycheck Calculator"
        description="Free 2026 US paycheck calculator. Federal income tax (IRS Pub 15-T 2026), FICA, state tax for all 50 states + DC, plus state worker contributions (SDI, PFL, PFML, FAMLI, TDI)."
        url={PAGE_URL}
        category="Paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Paycheck Calculator</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">US Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            Enter your gross pay, state, and filing status. PayslipIQ estimates federal income tax,
            FICA, state tax, and your take-home, and explains every line. Educational only.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Calculator</h2>
          <p className="text-sm text-slate-500 mb-4">
            Enter gross, state, and filing status. Estimates only.
          </p>
          <GrossToNetCalculator />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">How this calculator works</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Federal income tax withholding uses the IRS Publication 15-T 2026 percentage method.
            FICA uses the current SSA wage base ($184,500) and Medicare rate (1.45%, plus 0.9%
            Additional Medicare above $200,000 for single filers). State withholding follows each
            state’s published 2026 guidance.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            The calculator surfaces every line with a one-paragraph explanation. We are not a
            payroll provider. Your employer’s actual withholding may differ because of payroll
            software, mid-year W-4 changes, supplemental wage rules, garnishments, and benefits
            elections. Use this for understanding, not for filing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">How to use it</h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700 dark:text-slate-300">
            {HOW_TO_STEPS.map((s) => (
              <li key={s.name}>
                <span className="font-medium">{s.name}.</span> {s.text}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Frequently asked</h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Related tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/pay-stub-checker/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Pay Stub Checker</div>
              <div className="text-sm text-slate-500">Upload a pay stub. Plain-English line-by-line walkthrough.</div>
            </Link>
            <Link href="/us/gross-to-net-paycheck-calculator/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Gross to Net Calculator</div>
              <div className="text-sm text-slate-500">Any gross → estimated take-home, 2026 tables.</div>
            </Link>
            <Link href="/us/salary-after-tax/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Salary After Tax</div>
              <div className="text-sm text-slate-500">Annual salary → bi-weekly or monthly take-home.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Local Tax Calculator</div>
              <div className="text-sm text-slate-500">NYC, Philly, Detroit, Ohio cities, and more.</div>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
      <MobileStickyCTA
        href="/us/pay-stub-checker"
        label="Check My Pay Stub"
        secondaryHref="/us/paycheck-health-score"
        secondaryLabel="Health Score"
      />
    </>
  );
}
