import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/newark/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Newark NJ Paycheck Calculator (2026) — NJ Tax + SDI',
  description:
    'Newark NJ paycheck calculator. Federal, FICA, NJ progressive + NJ SDI 0.23% + NJ FLI 0.19%. Newark Payroll Tax is employer-paid only. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Newark NJ Paycheck Calculator (2026)',
    description: 'Federal + FICA + NJ + NJ SDI + NJ FLI. Newark Payroll Tax employer-paid only.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Is there a Newark city income tax?', a: 'No employee-side Newark city income tax. The Newark Payroll Tax is paid by employers (currently 1.1% of gross payroll); it is not withheld from worker paychecks. So your Newark paycheck math is federal + FICA + NJ state + NJ SDI + NJ FLI only.' },
  { q: 'What lines should I expect on a Newark paycheck?', a: 'New Jersey makes a Newark stub one of the longer ones. After the federal lines (federal income tax, Social Security 6.2% to $184,500, Medicare 1.45%) you see three state lines: NJ income tax on progressive brackets topping out at 10.75%, NJ SDI (0.23%, capped near $393.53/yr) and NJ FLI for paid family leave (0.19%, capped near $325.09/yr). The Newark Payroll Tax is employer-paid, not withheld from you. Pre-tax 401(k), HSA, FSA or Section 125 health appear only when elected.' },
  { q: 'Does the PaycheckCalculator above include NJ SDI and FLI?', a: 'Yes. As of 2026-05-16 the PayslipIQ Paycheck Calculator handles NJ SDI + NJ FLI as separate line items when you select New Jersey as your state. Both are primary-sourced from the NJ DOL.' },
  { q: 'I live in NJ but work in NYC — what changes?', a: 'You owe NYC resident income tax IF AND ONLY IF you are a NYC resident. Working in NYC alone does not trigger NYC tax (the commuter tax was abolished 1999). You owe NY state tax on NYC wages as a non-resident, then NJ credits you for the NY tax paid. NJ SDI / FLI still apply because you are a NJ resident.' },
  { q: 'What other NJ cities have local payroll taxes?', a: 'Jersey City has a similar employer-paid payroll tax (1.0%). Almost no other NJ municipality has employee-side local income tax. So most NJ workers see only state + federal + SDI + FLI on their paychecks.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Newark', url: PAGE_URL },
];

export default function NewarkPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Newark NJ Paycheck Calculator (2026)" description="Federal + FICA + NJ + NJ SDI + NJ FLI. Newark Payroll Tax is employer-paid only." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Newark NJ Paycheck Calculator"
        description="Newark New Jersey paycheck breakdown. Federal + FICA + NJ progressive + NJ SDI + NJ FLI. Newark city Payroll Tax is employer-paid (not employee withholding)."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/new-jersey" className="hover:underline">New Jersey</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Newark</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · NEWARK NJ · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Newark Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Good news for Newark workers: <strong>no employee-side Newark city income tax</strong>.
            The Newark Payroll Tax (1.1%) is employer-paid, not withheld from your paycheck. Your
            stub shows federal + FICA + NJ state + NJ SDI (0.23%) + NJ FLI (0.19%).
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + NJ + NJ SDI + NJ FLI</h2>
          <PaycheckCalculator defaultStateSlug="new-jersey" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Newark Payroll Tax is paid by employers, not employees. Source:{' '}
            <a href="https://www.newarknj.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of Newark
            </a>{' '}
            (verify any direct employer-paid tax with your payroll team). NJ SDI + FLI:{' '}
            <a href="https://www.nj.gov/labor/lwdhome/press/2025/20251229_newbenefitrates2026.shtml" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              NJ DOL 2026 benefit rates
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
            <Link href="/us/new-jersey" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">New Jersey Paycheck Guide</div>
              <div className="text-sm text-slate-500">NJ progressive brackets + SDI + FLI + UI.</div>
            </Link>
            <Link href="/us/cities/new-york-city/paycheck-calculator" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">NYC Paycheck Calculator</div>
              <div className="text-sm text-slate-500">If you live or work in NYC instead.</div>
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
