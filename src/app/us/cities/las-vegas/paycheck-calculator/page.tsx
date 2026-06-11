import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/las-vegas/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Las Vegas Paycheck Calculator (2026) — No NV State Tax',
  description:
    'Las Vegas paycheck calculator. Federal + FICA only — Nevada has no state income tax and no Las Vegas city tax. Tip credit context for hospitality workers.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Las Vegas Paycheck Calculator (2026)',
    description: 'Federal + FICA only. No NV state tax, no Las Vegas city tax.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does Nevada have a state income tax?', a: 'No. Nevada is one of nine US states with no state income tax. Las Vegas, Henderson, Reno, and every other NV city also have no local income tax on wages. Your paycheck math is federal + FICA only.' },
  { q: 'What about tip income — is it taxed?', a: 'Yes. Cash and credit-card tips are taxable as ordinary income for federal purposes and subject to FICA. Las Vegas hospitality workers must report tips to their employer (IRS Form 4070 or employer system) so FICA is withheld correctly. Nevada has no state tax to worry about.' },
  { q: 'Is there a city or county payroll tax in Clark County?', a: 'No. Clark County and the City of Las Vegas do not impose an income tax. Nevada does levy a Modified Business Tax (MBT) on employers, but that is employer-paid and does not appear on your pay stub.' },
  { q: 'What lines should I expect on a Las Vegas paycheck?', a: 'Nevada charges no state income tax and Clark County has no local wage tax, so the withholding side is federal only: federal income tax, Social Security (6.2% to the $184,500 cap) and Medicare (1.45%). Tipped hospitality workers will also see FICA applied to reported tips. Pre-tax 401(k), HSA, FSA, Section 125 health or a post-tax Roth 401(k) appear only if you elect them.' },
  { q: 'How does Las Vegas compare to nearby California?', a: 'A worker on the same gross can keep significantly more in Las Vegas because California adds state tax (progressive, up to 13.3% on top earners) plus CA SDI (1.3% with no wage cap from 2024 onward). On $80,000 gross, the NV worker keeps roughly $4,000–$5,500 more per year in state-level deductions alone.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Las Vegas', url: PAGE_URL },
];

export default function LasVegasPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Las Vegas Paycheck Calculator (2026)" description="Federal + FICA only. No NV state tax, no Las Vegas city tax." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Las Vegas Paycheck Calculator"
        description="Las Vegas paycheck breakdown. Federal + FICA only. No Nevada state income tax, no Las Vegas city tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/nevada" className="hover:underline">Nevada</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Las Vegas</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · LAS VEGAS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Las Vegas Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Las Vegas paychecks are simple by US standards. <strong>No Nevada state income tax</strong>.
            <strong> No Clark County or City of Las Vegas income tax</strong>. <strong>No NV SDI or PFL</strong>.
            Your only withholding lines are federal income tax and FICA (Social Security + Medicare).
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA only</h2>
          <PaycheckCalculator defaultStateSlug="nevada" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Source</h2>
          <p className="text-slate-700">
            Nevada has no state personal income tax statute. Source:{' '}
            <a href="https://tax.nv.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Nevada Department of Taxation
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
            <Link href="/us/nevada" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Nevada Paycheck Guide</div>
              <div className="text-sm text-slate-500">No state tax + tipped-worker context.</div>
            </Link>
            <Link href="/us/tipped-worker-paycheck-guide" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Tipped Worker Guide</div>
              <div className="text-sm text-slate-500">How tips show up on a paycheck.</div>
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
