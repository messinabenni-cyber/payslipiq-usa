import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/dallas/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Dallas Paycheck Calculator (2026) — No State Income Tax (TX)',
  description:
    'Dallas paycheck calculator. Federal + FICA only — Texas has no state income tax and no Dallas city tax. 2026 federal Pub 15-T tables. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Dallas Paycheck Calculator (2026)',
    description: 'Federal + FICA only. No TX state tax, no Dallas city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Texas have a state income tax?', a: 'No. Texas is one of nine US states with no state income tax. Dallas, Fort Worth, Plano, and every other TX city also have no local income tax on wages. Your paycheck math is federal + FICA only.' },
  { q: 'Is there a Dallas city or DFW metro income tax?', a: 'No. The City of Dallas, Dallas County, and the broader Dallas–Fort Worth metro do not impose an income tax. Property tax is high in Texas to compensate, but property tax does not appear on your pay stub.' },
  { q: 'Does Texas have SDI or PFL?', a: 'No. Texas does not have a state-mandated SDI or Paid Family Leave program. Your paycheck has federal + FICA only.' },
  { q: 'What lines should I expect on a Dallas paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Optional pre-tax 401(k), HSA, FSA, Section 125 health. Optional post-tax Roth 401(k). No state or local tax lines.' },
  { q: 'How does Dallas compare to nearby Oklahoma City or Albuquerque?', a: 'A Dallas worker on the same gross keeps more in state-level deductions because Oklahoma is progressive (0.25% to 4.75% in 2025) and New Mexico is progressive (1.7% to 5.9%). On $75,000 gross, a Dallas worker keeps roughly $2,500–$3,500 more per year than an OKC or ABQ counterpart in state tax alone.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Dallas', url: PAGE_URL },
];

export default function DallasPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Dallas Paycheck Calculator (2026)" description="Federal + FICA only. No TX state tax, no Dallas city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Dallas Paycheck Calculator"
        description="Dallas paycheck breakdown. Federal + FICA only. No Texas state income tax, no Dallas city tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/texas/" className="hover:underline">Texas</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Dallas</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · DALLAS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Dallas Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Dallas paychecks are clean. <strong>No Texas state income tax</strong>.
            <strong> No Dallas city or county income tax</strong>. <strong>No TX SDI or PFL</strong>.
            Your only withholding lines are federal income tax and FICA.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA only</h2>
          <PaycheckCalculator defaultStateSlug="texas" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Texas has no state personal income tax statute. Source:{' '}
            <a href="https://comptroller.texas.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Texas Comptroller of Public Accounts
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
            <Link href="/us/texas/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Texas Paycheck Guide</div>
              <div className="text-sm text-slate-500">No state tax + TX-specific context.</div>
            </Link>
            <Link href="/us/cities/houston/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Houston Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Other major TX metro, same rules.</div>
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
