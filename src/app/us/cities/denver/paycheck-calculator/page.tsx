import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/denver/paycheck-calculator/';

export const metadata: Metadata = {
  title: 'Denver Paycheck Calculator (2026) — CO + Denver OPT $5.75/mo + CO FAMLI 0.44%',
  description:
    'Denver paycheck calculator. Federal, FICA, Colorado flat 4.40%, plus Denver Occupational Privilege Tax $5.75/mo + CO FAMLI 0.44% employee share. 2026 rates.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Denver Paycheck Calculator (2026)',
    description: 'Federal + FICA + CO + Denver OPT + CO FAMLI.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Denver Occupational Privilege Tax (OPT)?', a: 'A flat tax on the privilege of working in Denver. Employee-paid: $5.75/month if you earn at least $500 in Denver during a calendar month. Employer-paid: $4/month per employee. Withheld monthly, so on a biweekly pay stub you might see ~$1.33-$1.50 (or $5.75 once per month if your employer withholds in one shot). Modest flat amount, not percentage-based.' },
  { q: 'What is CO FAMLI?', a: 'Colorado Family and Medical Leave Insurance. Total 2026 premium 0.88% of wages, capped at SS wage base ($184,500). Employee share 0.44% (50/50 split with employers of 10+). Funds Paid Family and Medical Leave benefits. Started 2023; benefits available since 2024.' },
  { q: 'What is the Colorado state tax rate?', a: 'Colorado is a flat-tax state, currently 4.40% (2026 — Coloradans approved Proposition 116 reducing the rate from 4.55% in 2020). Applies to taxable income; the standard deduction is generous.' },
  { q: 'Other Colorado cities with OPT?', a: 'Aurora ($2/mo employee), Glendale ($5/mo employee), Greenwood Village ($2/mo employee), Sheridan ($3/mo employee). Smaller flat amounts. If you work in any of these, your paycheck has the corresponding OPT line.' },
  { q: 'What lines should I expect on a Denver paycheck?', a: 'Federal income tax. Social Security (6.2% to $184,500). Medicare (1.45%). Colorado flat 4.40%. Denver OPT $5.75/month. CO FAMLI 0.44%. Standard pre-tax deductions if elected.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities/' },
  { name: 'Denver', url: PAGE_URL },
];

export default function DenverPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="Denver Paycheck Calculator (2026)" description="Federal + FICA + CO flat 4.40% + Denver OPT + CO FAMLI 0.44%." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ Denver Paycheck Calculator"
        description="Denver paycheck breakdown. Federal + FICA + Colorado flat 4.40% + Denver Occupational Privilege Tax $5.75/month + Colorado FAMLI 0.44%."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/colorado/" className="hover:underline">Colorado</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Denver</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · DENVER · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Denver Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            Denver imposes a flat <strong>$5.75/month Occupational Privilege Tax</strong> on
            employees earning $500+/month in Denver. Colorado state flat 4.40% applies. And
            <strong> CO FAMLI 0.44%</strong> appears on every Colorado paycheck.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + Colorado + CO FAMLI</h2>
          <PaycheckCalculator defaultStateSlug="colorado" />
        </section>

        <aside className="mt-6 rounded-md border-l-4 border-amber-300 bg-amber-50 p-4 text-[14px] text-amber-900">
          <strong>Note:</strong> The PayslipIQ calculator covers federal + FICA + CO flat + CO FAMLI automatically.
          The Denver OPT ($5.75/month for employees earning $500+ in Denver) is a flat monthly amount
          that you should add separately: ~$2.65/biweekly check or $5.75/monthly check.
        </aside>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Sources</h2>
          <p className="text-slate-700">
            Denver OPT:{' '}
            <a href="https://www.denvergov.org/Government/Departments/Finance/Treasury/Business-Tax/Occupational-Privilege-Tax" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              City and County of Denver — Occupational Privilege Tax
            </a>. CO FAMLI:{' '}
            <a href="https://famli.colorado.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Colorado FAMLI Division
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
            <Link href="/us/colorado/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Colorado Paycheck Guide</div>
              <div className="text-sm text-slate-500">CO flat 4.40% + FAMLI + Denver OPT context.</div>
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
