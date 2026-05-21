import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/portland-multnomah/paycheck-calculator';

export const metadata: Metadata = {
  title: 'Portland / Multnomah Paycheck Calculator (2026) — OR',
  description:
    'Portland & Multnomah County paycheck calculator. Federal, FICA, OR progressive, OR Paid Leave 0.6%, plus Multnomah PFA and Portland Metro SHS. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Portland / Multnomah Paycheck Calculator (2026)',
    description: 'Federal + FICA + OR + OR Paid Leave + Multnomah PFA + Portland Metro SHS.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Multnomah County Preschool for All (PFA) tax?', a: 'A personal income tax funding universal preschool. 1.5% on income over $125,000 (single) or $200,000 (married jointly). An additional 1.5% (so 3.0% total) on income over $250,000 single / $400,000 joint. Applies to Multnomah County residents and to income earned by non-residents working in Multnomah. Note: a 2026 rate increase was delayed; verify before relying on any number.' },
  { q: 'What is the Portland Metro Supportive Housing Services (SHS) tax?', a: 'A personal income tax funding services for people experiencing homelessness. 1% on income over $128,000 (single) or $205,000 (married jointly) in 2026 (inflation-adjusted from the original thresholds). Applies to residents and to income earned within the Portland Metro region.' },
  { q: 'How do these stack with OR state tax and federal?', a: 'They are layered on top of: federal income tax, FICA (Social Security + Medicare), Oregon progressive state tax (up to 9.9%), and Oregon Paid Leave (0.6% employee share of the 1.0% total). Most Portland workers under the PFA/SHS thresholds will not see those lines at all.' },
  { q: 'Does the calculator include the PFA + SHS lines?', a: 'The PayslipIQ Paycheck Calculator handles federal, FICA, Oregon state, and Oregon Paid Leave automatically. The PFA and SHS taxes apply only above income thresholds and depend on residency, so they are not yet automated in the main calculator. For those, see the Portland Revenue Division or use the Multnomah / Metro online calculators.' },
  { q: 'I live in Vancouver WA but work in Portland — what do I pay?', a: 'You owe Oregon state income tax on your Portland wages (the Oregon-side income). You also owe Metro SHS on the portion earned in the Metro region above the threshold. You do not owe Multnomah PFA unless your work is in Multnomah County and you exceed the threshold. WA state tax does not apply (WA has no income tax). Multi-state filings get complex; consult a CPA.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'Portland / Multnomah', url: PAGE_URL },
];

export default function PortlandMultnomahPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Portland / Multnomah Paycheck Calculator (2026)" description="Federal + FICA + OR + OR Paid Leave + Multnomah PFA + Portland Metro SHS." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Portland / Multnomah Paycheck Calculator"
        description="Portland & Multnomah County paycheck breakdown including federal, FICA, Oregon state, OR Paid Leave, plus context on Multnomah PFA and Portland Metro SHS above-threshold income taxes."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/oregon" className="hover:underline">Oregon</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Portland / Multnomah</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · PORTLAND / MULTNOMAH · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Portland / Multnomah Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Most Portland workers see: federal + FICA + OR state + OR Paid Leave. High earners
            also see <strong>Multnomah County PFA</strong> (1.5%/3.0% on income above
            $125k/$250k single) and <strong>Portland Metro SHS</strong> (1% on income above
            $128k single in 2026). Step through the basic stack below.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + Oregon + OR Paid Leave</h2>
          <PaycheckCalculator defaultStateSlug="oregon" />
        </section>

        <section className="mt-10 rounded-lg border-l-4 border-amber-300 bg-amber-50 p-4">
          <h2 className="text-xl font-semibold mb-2">Above-threshold lines (PFA + SHS)</h2>
          <p className="text-[15px] text-amber-900">
            If your taxable income exceeds <strong>$125,000 single / $200,000 joint</strong>, the
            Multnomah PFA tax applies. If it exceeds <strong>$128,000 single / $205,000 joint</strong>{' '}
            (2026 thresholds, inflation-adjusted) the Portland Metro SHS tax also applies. For
            personalized estimates of those lines, use the Portland Revenue Division&apos;s online
            tools or consult a CPA. PayslipIQ does not yet model the per-jurisdiction PFA/SHS
            withholding mechanics in the main calculator.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Sources</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Multnomah PFA + Portland Metro SHS:{' '}
              <a href="https://www.portland.gov/revenue/personal-tax" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                City of Portland Revenue Division — Personal Tax
              </a>
            </li>
            <li>Oregon Paid Leave:{' '}
              <a href="https://paidleave.oregon.gov/employers-overview/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Paid Leave Oregon
              </a>
            </li>
            <li>Oregon state tax:{' '}
              <a href="https://www.oregon.gov/dor/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Oregon Department of Revenue
              </a>
            </li>
          </ul>
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
            <Link href="/us/oregon" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Oregon Paycheck Guide</div>
              <div className="text-sm text-slate-500">OR progressive brackets + OR Paid Leave + Portland-area context.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">NYC, Yonkers, Philadelphia, Detroit, Portland, RITA, and more.</div>
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
