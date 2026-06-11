import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';

const PAGE_URL = 'https://payslipiq.com/us/cities/san-diego/paycheck-calculator';

export const metadata: Metadata = {
  title: 'San Diego Paycheck Calculator (2026) — CA Tax + SDI',
  description:
    'San Diego paycheck calculator. Federal, FICA, California progressive brackets (1% to 13.3%), CA SDI 1.3% with no wage cap. No San Diego city tax.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'San Diego Paycheck Calculator (2026)',
    description: 'Federal + FICA + CA progressive + CA SDI 1.3%.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'Does San Diego have a city income tax?', a: 'No. The City of San Diego and San Diego County do not impose an income tax. California is the active state-level deduction.' },
  { q: 'What is the California state income tax for San Diego workers?', a: 'California is progressive with brackets from 1% to 12.3% on regular income, plus an additional 1% Mental Health Services Tax on income above $1,000,000 — a 13.3% top rate. The bracket that applies depends on filing status (Single, MFJ, HOH) and total taxable income. Source: California Franchise Tax Board.' },
  { q: 'What is CA SDI on my San Diego paycheck?', a: 'California State Disability Insurance is a 1.3% employee contribution from 2026 (the rate is set annually by EDD; SB 951 removed the wage cap starting 2024, so SDI applies to every dollar of CA wages). It funds the CA SDI / Paid Family Leave program.' },
  { q: 'Does San Diego have any local payroll taxes?', a: 'No. No California city or county imposes a local income tax (unlike NYC, Philadelphia, or Detroit). San Diego workers pay CA state tax and CA SDI, but no local layer.' },
  { q: 'What lines should I expect on a San Diego paycheck?', a: 'California makes the state side the heavy part. Beyond the federal lines (federal income tax, Social Security 6.2% to $184,500, Medicare 1.45%, plus 0.9% Additional Medicare above $200,000 year-to-date), a San Diego stub carries California income tax on progressive brackets and CA SDI at 1.3% with no wage cap. No California city or county adds a local income tax. Pre-tax 401(k), HSA, FSA or Section 125 health appear only when elected.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Cities', url: 'https://payslipiq.com/us/cities' },
  { name: 'San Diego', url: PAGE_URL },
];

export default function SanDiegoPaycheckCalculatorPage() {
  return (
    <>
      <ArticleSchema headline="San Diego Paycheck Calculator (2026)" description="Federal + FICA + CA progressive + CA SDI 1.3%." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <FinancialProductSchema
        name="PayslipIQ San Diego Paycheck Calculator"
        description="San Diego paycheck breakdown. Federal + FICA + California progressive state tax + CA SDI 1.3%. No San Diego city income tax."
        url={PAGE_URL}
        category="City paycheck estimator"
      />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/california" className="hover:underline">California</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">San Diego</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · SAN DIEGO · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">San Diego Paycheck Calculator</h1>
          <p className="mt-4 text-lg text-slate-700">
            San Diego has <strong>no city income tax</strong>. California state tax is
            <strong> progressive (1% to 13.3% top)</strong>. <strong>CA SDI is 1.3%</strong> on every
            dollar of wages — no cap from 2024 onward (SB 951). Your paycheck math is federal + FICA +
            CA state + CA SDI.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Federal + FICA + California + CA SDI</h2>
          <PaycheckCalculator defaultStateSlug="california" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Sources</h2>
          <ul className="text-slate-700 list-disc list-inside space-y-1">
            <li>
              California income tax brackets:{' '}
              <a href="https://www.ftb.ca.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                California Franchise Tax Board
              </a>
            </li>
            <li>
              CA SDI 2026 rate:{' '}
              <a href="https://edd.ca.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                California EDD
              </a>{' '}
              (no wage cap from 2024 per SB 951).
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
            <Link href="/us/california" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">California Paycheck Guide</div>
              <div className="text-sm text-slate-500">CA brackets + SDI explained.</div>
            </Link>
            <Link href="/us/california-sdi" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">California SDI</div>
              <div className="text-sm text-slate-500">What SDI funds and why it has no cap.</div>
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
