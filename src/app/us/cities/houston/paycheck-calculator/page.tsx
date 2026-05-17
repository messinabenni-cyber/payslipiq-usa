import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/houston/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Houston Paycheck Calculator (2026) — No State Income Tax (TX)',
  description:
    'Houston paycheck calculator. Federal + FICA only — Texas has no state income tax and no Houston city tax. Energy-sector pay context. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston Paycheck Calculator (2026)',
    description: 'Federal + FICA only. No TX state tax, no Houston city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Houston charge a city income tax?', a: 'No. The City of Houston, Harris County, and the surrounding metro do not impose an income tax. Texas itself has no state income tax. Your paycheck math is federal + FICA only.' },
  { q: 'I work offshore — does that change anything?', a: 'For Texas-resident offshore workers, federal tax and FICA apply as normal. The federal foreign-earned income exclusion only applies if you are working outside the US for an extended period and meet the physical-presence or bona-fide-residence tests. For Gulf of Mexico US waters, treat the income as standard US W-2 wages.' },
  { q: 'My bonus is structured around energy-price targets — how is it taxed?', a: 'Performance bonuses are federal supplemental wages, taxed at the flat 22% withholding rate on amounts up to $1,000,000 per year and 37% on the portion above. FICA still applies. No Texas state tax. Your effective rate at filing may be different from withholding.' },
  { q: 'Does Texas have SDI or PFL?', a: 'No. Texas has no state-mandated SDI or Paid Family Leave program. Houston-area employers may offer private disability or PTO; check your benefits portal.' },
  { q: 'What lines should I expect on a Houston paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Pre-tax 401(k), HSA, FSA, Section 125 health if elected. No state or local tax line.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Houston', url: PAGE_URL },
];

export default function HoustonPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Houston Paycheck Calculator (2026)" description="Federal + FICA only. No TX state tax, no Houston city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Houston Paycheck Calculator"
        description="Houston paycheck breakdown. Federal + FICA only. No Texas state income tax, no Houston city tax."
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
          <span aria-current="page">Houston</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · HOUSTON · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Houston Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Houston paychecks are simple. <strong>No Texas state income tax</strong>.
            <strong> No Houston city or Harris County income tax</strong>. <strong>No TX SDI or PFL</strong>.
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
            <Link href="/us/bonus-tax-paycheck/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Bonus Tax on Paycheck</div>
              <div className="text-sm text-slate-500">Energy-sector performance bonuses.</div>
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
