import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/maryland-counties/';

export const metadata: Metadata = {
  title: 'Maryland County Income Tax Rates (2026) — All 23 Counties + Baltimore City',
  description:
    'Maryland local income tax piggyback rates for all 23 counties + Baltimore City for 2026. Residence-based: follows where you live, not where you work. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Maryland County Income Tax Rates (2026)',
    description: 'All 23 MD counties + Baltimore City piggyback rates. Residence-based.',
    url: PAGE_URL,
    type: 'website',
  },
};

// 2026-05-16 v7: MD county piggyback rates table.
// Source: Comptroller of Maryland — verify any individual rate before relying on it.
// Rates shown are for the tax year 2026 unless otherwise noted; MD revises these annually.
const COUNTIES: Array<{ name: string; rate: number; note?: string }> = [
  { name: 'Allegany',         rate: 0.0305 },
  { name: 'Anne Arundel',     rate: 0.0281, note: 'Tiered: 2.70% under $50k, 2.81% over' },
  { name: 'Baltimore City',   rate: 0.0320, note: 'Maximum allowed; same as Baltimore County' },
  { name: 'Baltimore County', rate: 0.0320, note: 'Maximum allowed; same as Baltimore City' },
  { name: 'Calvert',          rate: 0.0300 },
  { name: 'Caroline',         rate: 0.0320, note: 'Maximum allowed' },
  { name: 'Carroll',          rate: 0.0303 },
  { name: 'Cecil',            rate: 0.0300 },
  { name: 'Charles',          rate: 0.0303 },
  { name: 'Dorchester',       rate: 0.0320, note: 'Maximum allowed' },
  { name: 'Frederick',        rate: 0.0296, note: 'Tiered: 2.75% under $100k, 2.96% over' },
  { name: 'Garrett',          rate: 0.0265 },
  { name: 'Harford',          rate: 0.0306 },
  { name: 'Howard',           rate: 0.0320, note: 'Maximum allowed' },
  { name: 'Kent',              rate: 0.0320, note: 'Maximum allowed' },
  { name: 'Montgomery',       rate: 0.0320, note: 'Tiered up to 3.20%; verify your bracket' },
  { name: "Prince George's",  rate: 0.0320, note: 'Maximum allowed' },
  { name: "Queen Anne's",     rate: 0.0320, note: 'Maximum allowed' },
  { name: 'Somerset',         rate: 0.0320, note: 'Maximum allowed' },
  { name: "St. Mary's",       rate: 0.0310 },
  { name: 'Talbot',           rate: 0.0240, note: 'Lowest in MD' },
  { name: 'Washington',       rate: 0.0295 },
  { name: 'Wicomico',         rate: 0.0320, note: 'Maximum allowed' },
  { name: 'Worcester',        rate: 0.0225, note: 'One of the lowest in MD' },
];

const FAQS = [
  { q: 'How does Maryland local income tax work?', a: 'Maryland is unusual: every county (and Baltimore City, treated as a county) piggybacks on the state income tax with its own local rate, between 2.25% and 3.20%. Withheld by your employer based on your county of residence on the last day of the tax year. Residence-based, not work-based.' },
  { q: 'I work in DC but live in MD — what do I pay?', a: 'DC has its own income tax that withholds from your DC wages. MD then credits you for the DC tax paid against your MD state tax, but you still owe the MD county piggyback to your county of residence. Verify with a CPA.' },
  { q: 'Maximum allowed rate?', a: 'Maryland caps the county piggyback at 3.20%. Many counties (including Baltimore City and County, Howard, Prince George\'s, Queen Anne\'s, and several others) charge the maximum.' },
  { q: 'Lowest rates?', a: 'Worcester County (2.25%) and Talbot County (2.40%) have the lowest piggyback rates in MD. Garrett (2.65%) is also relatively low.' },
  { q: 'Non-residents working in MD?', a: 'Out-of-state residents working in MD pay Maryland\'s non-resident rate of 1.75% in lieu of a county piggyback. Your home state typically credits you for the MD tax paid.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Maryland', url: 'https://payslipiq.com/us/maryland/' },
  { name: 'County rates', url: PAGE_URL },
];

export default function MarylandCountiesPage() {
  return (
    <>
      <ArticleSchema headline="Maryland County Income Tax Rates (2026)" description="All 23 MD counties + Baltimore City piggyback rates. Residence-based." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <Link href="/us/maryland/" className="hover:underline">Maryland</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">County rates</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · MARYLAND COUNTY RATES · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Maryland county income tax rates</h1>
          <p className="mt-4 text-lg text-slate-700">
            Maryland is the piggyback state. Every county and Baltimore City levies its own local
            income tax rate on top of state tax, between <strong>2.25% and 3.20%</strong>.
            Residence-based: it follows where you LIVE on the last day of the tax year, not where
            you work.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8 overflow-x-auto">
          <table className="w-full text-sm bg-white border border-slate-200 rounded-md">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 text-left">
              <tr>
                <th className="px-4 py-2">County</th>
                <th className="px-4 py-2 text-right">Rate (2026)</th>
                <th className="px-4 py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {COUNTIES.map((c) => (
                <tr key={c.name} className="border-t border-slate-100">
                  <td className="px-4 py-2 font-medium">{c.name}</td>
                  <td className="px-4 py-2 text-right tabular-nums font-mono">{(c.rate * 100).toFixed(2)}%</td>
                  <td className="px-4 py-2 text-slate-600 text-[13px]">{c.note ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <p className="mt-4 text-[13px] text-slate-500">
          Verify any individual rate with the{' '}
          <a href="https://www.marylandtaxes.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            Comptroller of Maryland
          </a>{' '}
          before relying on it for tax filing. MD revises county rates annually.
        </p>

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
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/cities/baltimore/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Baltimore Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Detailed Baltimore City + County 3.20% step-through.</div>
            </Link>
            <Link href="/us/maryland/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Maryland Paycheck Guide</div>
              <div className="text-sm text-slate-500">MD state progressive brackets + piggyback overview.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">All US Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">Cross-jurisdiction estimator with manual rate entry.</div>
            </Link>
            <Link href="/us/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">US Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + FICA + state for all 50 + DC.</div>
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
