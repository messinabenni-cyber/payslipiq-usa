import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/seattle/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Seattle Paycheck Calculator (2026) — No WA Income Tax + WA PFML + WA Cares',
  description:
    'Seattle paycheck calculator. Federal, FICA, no Washington state income tax, plus WA PFML ~0.81% + WA Cares 0.58%. Seattle JumpStart Tax is employer-paid. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Seattle Paycheck Calculator (2026)',
    description: 'Federal + FICA + WA PFML + WA Cares. No WA income tax. No Seattle city employee tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Washington have a state income tax?', a: 'No. Washington is one of nine US states with no state income tax on wages. Your paycheck deductions are: federal income tax, Social Security 6.2%, Medicare 1.45%, plus WA PFML and WA Cares Fund.' },
  { q: 'What is WA PFML?', a: 'Washington Paid Family and Medical Leave. Total 2026 premium 1.13% of wages, capped at SS wage base ($184,500). Employee share ~71.43% of premium = ~0.807% of wages for employers with 50+ employees. Funds WA Paid Leave benefits.' },
  { q: 'What is WA Cares Fund?', a: 'A long-term care benefit. 0.58% employee-paid (no wage cap). Started July 2023. Employees who privately opted out before the deadline are exempt; the opt-out window has closed. Benefits begin July 2026 for qualifying workers.' },
  { q: 'Does Seattle have a city income tax?', a: 'No employee-side Seattle city income tax. The Seattle JumpStart Tax (Payroll Expense Tax) is paid by large employers on high salaries, not withheld from worker paychecks. The Seattle high-earner income tax attempt was struck down by the courts.' },
  { q: 'What lines should I expect on a Seattle paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). WA PFML (~0.807%). WA Cares Fund (0.58%). No state income tax. Standard pre-tax deductions if elected (401k, HSA, FSA).' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Seattle', url: PAGE_URL },
];

export default function SeattlePaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Seattle Paycheck Calculator (2026)" description="Federal + FICA + WA PFML + WA Cares. No WA income tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Seattle Paycheck Calculator"
        description="Seattle paycheck breakdown. Federal + FICA + WA PFML (~0.807%) + WA Cares (0.58%). No WA state income tax. No Seattle city employee tax (JumpStart is employer-paid)."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/washington/" className="hover:underline">Washington</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Seattle</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · SEATTLE · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Seattle Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Washington has <strong>no state income tax</strong>. Seattle has <strong>no city
            income tax</strong>. Your paycheck math is federal + FICA + WA PFML (~0.807%) + WA
            Cares Fund (0.58%). Both WA contributions appear on every Seattle paycheck.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + WA PFML + WA Cares</h2>
          <PaycheckCalculator defaultStateSlug="washington" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Sources</h2>
          <p className="text-slate-700">
            WA Paid Leave + WA Cares:{' '}
            <a href="https://paidleave.wa.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Washington Paid Family and Medical Leave
            </a>. Seattle JumpStart Tax (employer):{' '}
            <a href="https://www.seattle.gov/license-and-tax-administration/business-license-tax/jumpstart-payroll-expense-tax" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City of Seattle
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
            <Link href="/us/washington/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Washington Paycheck Guide</div>
              <div className="text-sm text-slate-500">WA PFML + WA Cares + no-income-tax context.</div>
            </Link>
            <Link href="/us/state-worker-contributions/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">State Worker Contributions (all 11 states)</div>
              <div className="text-sm text-slate-500">SDI / PFL / PFML / FAMLI / TDI rates summary.</div>
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
