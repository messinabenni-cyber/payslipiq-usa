import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { EmailCapture } from '@/components/EmailCapture';

const PAGE_URL = 'https://payslipiq.com/us/pay-stub-checker';

export const metadata: Metadata = {
  title: 'Pay Stub Checker (USA, 2026) · Plain-English Pay Stub Explainer',
  description:
    'Walk through every line on a US pay stub: gross pay, federal withholding, FICA, state tax, local tax, deductions, and net pay. Educational only, not tax, legal, or financial advice.',
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'es-US': 'https://payslipiq.com/es',
      'x-default': PAGE_URL
    }
  },
  openGraph: {
    title: 'Pay Stub Checker (USA, 2026)',
    description: 'Plain-English line-by-line explanation of any US pay stub. Educational only.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://payslipiq.com/api/og?title=Pay%20Stub%20Checker&eyebrow=USA%202026',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pay Stub Checker (USA, 2026)',
    description: 'Plain-English line-by-line explanation of any US pay stub.'
  }
};

const FAQS = [
  {
    q: 'What does the Pay Stub Checker do?',
    a: 'It walks through every line on a US pay stub in plain English: gross pay, federal income tax withholding, Social Security, Medicare, state tax, local tax (where it applies), pre-tax deductions like 401(k) and HSA, post-tax deductions like Roth and garnishments, employer contributions, and net pay. The goal is to help you read the stub and ask the right question, not to tell you whether the paycheck is right.'
  },
  {
    q: 'Can it confirm my paycheck is correct?',
    a: 'No. The Pay Stub Checker is educational only. It cannot confirm that your employer is calculating your paycheck correctly. If a line looks wrong, raise it with payroll. If you need a binding answer, see a CPA, the IRS, or your state tax authority.'
  },
  {
    q: 'Is uploading a pay stub safe?',
    a: 'PayslipIQ processes uploads over encrypted transport. Bank account numbers and Social Security numbers are redacted before processing. Free-tier files are purged within 24 hours. PayslipIQ does not sell user data and does not train AI models on user pay stubs. Before you upload, cover or remove personal identifiers like SSN, bank details, address, employee ID, employer reference numbers, QR codes, and barcodes.'
  },
  {
    q: 'What if the AI upload is unavailable?',
    a: 'If the AI uploader is offline (for example because access is in private beta), you can still use the PayslipIQ Paycheck Calculator to estimate every line manually. Enter your gross pay, state, and filing status, and the calculator returns the same breakdown the AI explainer would produce.'
  },
  {
    q: 'Does it support all 50 states?',
    a: 'Yes. The Pay Stub Checker recognises state income tax for all 50 states plus DC, and local tax in the major jurisdictions: New York City, Yonkers, Philadelphia, Detroit, and many Ohio cities (RITA and CCA), plus several Indiana and Maryland counties.'
  },
  {
    q: 'Is this affiliated with the IRS or any state?',
    a: 'No. PayslipIQ is an independent, privately built educational resource. It is not affiliated with the IRS, the SSA, the Department of Labor, any state tax agency, any employer, or any payroll provider.'
  },
  {
    q: 'Is there a Spanish version?',
    a: 'A Spanish beta is available at /es/. Coverage will expand over time. The English version at /us/ remains the canonical USA hub.'
  },
  {
    q: 'How is this different from a paycheck calculator?',
    a: 'A paycheck calculator estimates take-home pay from gross. The Pay Stub Checker reads an actual pay stub and explains each line that already exists on it. They complement each other: estimate forward with the calculator, then verify what is on the stub with the checker.'
  }
];

const CHECKS = [
  'Gross pay vs YTD gross',
  'Federal income tax withholding (IRS Pub 15-T method)',
  'Social Security tax (6.2% up to the 2026 wage base of $184,500)',
  'Medicare tax (1.45%) + Additional Medicare (0.9% above $200,000 single)',
  'State income tax (where applicable, 41 states + DC)',
  'Local income tax (NYC, Yonkers, Philadelphia, Detroit, Ohio RITA/CCA, and more)',
  'Pre-tax deductions: traditional 401(k), HSA, FSA, Section 125 health premiums',
  'Post-tax deductions: Roth 401(k), wage garnishments, after-tax life insurance',
  'Employer contributions (informational; do not reduce your pay)',
  'Net pay (take-home)'
];

const HOW_TO_STEPS = [
  { name: 'Have your pay stub ready', text: 'Open the most recent pay stub from your employer payroll portal (ADP, Gusto, Paychex, Workday, etc.) or a paper copy.' },
  { name: 'Cover personal identifiers', text: 'Before any upload, cover or remove your Social Security number, bank details, address, employee ID, QR codes, and barcodes.' },
  { name: 'Upload or paste numbers', text: 'Upload the pay stub file (PDF, PNG, JPG) when the AI uploader is enabled, or paste paycheck numbers into the Paycheck Calculator as a fallback.' },
  { name: 'Read the line-by-line walkthrough', text: 'Each line of the stub gets a plain-English explanation: what it is, what it is calculated against, and what to verify.' },
  { name: 'Verify anything that looks wrong', text: 'If a number does not match expectations, take the explanation to your payroll team and ask the right question.' }
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Pay Stub Checker', url: PAGE_URL }
];

function SoftwareApplicationLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PayslipIQ Pay Stub Checker',
    operatingSystem: 'Web',
    applicationCategory: 'FinanceApplication',
    url: PAGE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'A free, plain-English explainer for US pay stubs. Educational only.',
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
    name: 'How to use the PayslipIQ Pay Stub Checker',
    description: 'Five steps to read a US pay stub line-by-line.',
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

export default function PayStubCheckerPage() {
  return (
    <>
      <ArticleSchema headline="Pay Stub Checker (USA, 2026)" description="Plain-English line-by-line explanation of any US pay stub." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <SoftwareApplicationLd />
      <HowToLd />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Pay Stub Checker</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Pay Stub Checker</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            Upload a US pay stub or paste paycheck numbers. PayslipIQ walks through every line in
            plain English so you can read the stub and ask the right question. Educational only.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8 rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 p-5">
          <h2 className="font-medium">Before you upload</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Cover or remove your Social Security number, bank account number, address, employee ID,
            employer reference numbers, QR codes, and barcodes. PayslipIQ redacts SSNs and bank
            numbers automatically, but removing them yourself first is the safest practice.
          </p>
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 dark:border-slate-700 p-5">
          <h2 className="font-medium">AI Pay Stub Explainer</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Upload a pay stub (PDF, PNG, JPG) or paste your paycheck numbers below.
            The AI uploader is currently in private beta. If it is unavailable, use the manual
            fallback below — same line-by-line breakdown, same methodology.
          </p>

          <div className="mt-4">
            <Link
              href="/us/paycheck-calculator/"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              Use the Paycheck Calculator (free, works today)
            </Link>
          </div>

          {/* 2026-05-16: inline waitlist replaces the "Request beta access → /contact" dead-end CTA. */}
          <div className="mt-4">
            <EmailCapture
              source="ai-pay-stub-checker"
              variant="waitlist"
              waitlistId="ai-pay-stub-checker"
              headline="Get notified when the AI Pay Stub Checker opens"
              subheadline="The uploader is in private beta. Drop your email (and optionally your state) and we will notify you the day it opens. No spam, unsubscribe any time."
              cta="Notify me"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">What the checker looks at</h2>
          <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
            {CHECKS.map((c) => (<li key={c}>{c}</li>))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">How it works</h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700 dark:text-slate-300">
            {HOW_TO_STEPS.map((s) => (
              <li key={s.name}>
                <span className="font-medium">{s.name}.</span> {s.text}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Privacy</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Files are processed over encrypted transport. SSNs and bank account numbers are
            redacted before processing. Free-tier files are purged within 24 hours. PayslipIQ
            does not sell user data and does not train AI models on user pay stubs. See the
            <Link href="/ai-transparency" className="underline hover:no-underline mx-1">AI Transparency</Link>
            and
            <Link href="/privacy" className="underline hover:no-underline mx-1">Privacy</Link>
            pages for the full disclosure.
          </p>
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
            <Link href="/us/paycheck-calculator/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Enter gross, state, filing status. Get take-home.</div>
            </Link>
            <Link href="/us/gross-to-net-paycheck-calculator/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Gross to Net Calculator</div>
              <div className="text-sm text-slate-500">Any gross → estimated take-home, 2026 tables.</div>
            </Link>
            <Link href="/us/year-to-date-paycheck-checker/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Year-to-Date Checker</div>
              <div className="text-sm text-slate-500">YTD wages, FICA caps, 401(k) progress.</div>
            </Link>
            <Link href="/us/ask-payroll-generator/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Ask Payroll Generator</div>
              <div className="text-sm text-slate-500">Draft a polite, factual message to HR.</div>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
      <MobileStickyCTA
        href="/us/paycheck-calculator"
        label="Calculate Take-Home"
        secondaryHref="/us/paycheck-health-score"
        secondaryLabel="Health Score"
      />
    </>
  );
}
