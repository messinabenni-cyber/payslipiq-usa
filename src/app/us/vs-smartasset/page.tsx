import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/vs-smartasset/';

export const metadata: Metadata = {
  title: 'PayslipIQ vs SmartAsset — Paycheck Calculator Comparison',
  description:
    'Compare PayslipIQ and SmartAsset paycheck calculators. PayslipIQ is education-first, no advisor matching. Plain-English line-by-line. AI pay-stub explainer. 22 US cities. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PayslipIQ vs SmartAsset',
    description: 'Plain-English paycheck explainer vs advisor-matching platform.',
    url: PAGE_URL,
    type: 'article',
  },
};

const FAQS = [
  { q: 'Does PayslipIQ try to match me with a financial advisor?', a: 'No. PayslipIQ does not match users with advisors. We are an educational pay-stub and paycheck explainer only. SmartAsset\'s business model is built around lead-gen for financial advisors. If you want an advisor introduction, SmartAsset is built for that. If you want to understand your pay stub without being routed into a sales funnel, PayslipIQ is built for that.' },
  { q: 'What does PayslipIQ do better?', a: 'Plain-English explanation of every paycheck line, AI pay-stub upload tool, 22 city-specific pages, 11 jurisdictions of explicit worker contributions (SDI/PFL/PFML/TDI/FAMLI), open methodology with IRS/SSA/state DOR citations, dedicated pages for common pay-stub questions ("why is my paycheck lower", "why was my bonus taxed so much"). No advisor referrals.' },
  { q: 'What does SmartAsset do better?', a: 'SmartAsset has a much broader product set — retirement, tax, mortgage, investment calculators. They publish frequent state-level rankings and indexes that get media pickup. If you want a one-stop personal-finance hub, SmartAsset is broader.' },
  { q: 'Is SmartAsset\'s paycheck calculator accurate?', a: 'Generally yes. Both PayslipIQ and SmartAsset use IRS Publication 15-T tables and state DOR rates. Differences are usually edge cases (multi-state nexus, supplemental wages, ESPP, state worker contributions) where PayslipIQ tends to be more explicit.' },
  { q: 'Is PayslipIQ free?', a: 'Yes. All core tools (Paycheck Calculator, Pay Stub Checker, Gross-to-Net, FICA, W-4, state pages, city pages) are free with no account required. We do not sell user data or run an advisor referral business.' },
  { q: 'Where can I see PayslipIQ\'s methodology?', a: 'Publicly documented at /us/methodology with citations to IRS Notice 2025-67, IRS Publication 15-T (2026), SSA wage base, and each state DOR.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'PayslipIQ vs SmartAsset', url: PAGE_URL },
];

export default function VsSmartAssetPage() {
  return (
    <>
      <ArticleSchema
        headline="PayslipIQ vs SmartAsset — Paycheck Calculator Comparison"
        description="Education-first vs advisor-matching. Plain-English line-by-line explainer."
        url={PAGE_URL}
      />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">vs SmartAsset</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · COMPARISON · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">PayslipIQ vs SmartAsset</h1>
          <p className="mt-4 text-lg text-slate-700">
            Both tools include a free paycheck calculator. The difference is the business model.
            SmartAsset is a financial-advisor lead-generation platform with calculators as a top-of-funnel
            asset. PayslipIQ is a pay-stub education platform with no advisor referrals and no upsell
            into other financial services.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Side-by-side</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">Feature</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">PayslipIQ</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">SmartAsset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-3 py-2">Paycheck calculator (all 50 states + DC)</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Yes</td></tr>
                <tr><td className="px-3 py-2">Business model</td><td className="px-3 py-2">Education only</td><td className="px-3 py-2">Financial advisor matching</td></tr>
                <tr><td className="px-3 py-2">Advisor referrals / lead-gen</td><td className="px-3 py-2">None</td><td className="px-3 py-2">Core product</td></tr>
                <tr><td className="px-3 py-2">Plain-English line-by-line explainer</td><td className="px-3 py-2">Yes — every line</td><td className="px-3 py-2">Brief summary only</td></tr>
                <tr><td className="px-3 py-2">AI pay-stub upload explainer</td><td className="px-3 py-2">Yes (waitlist)</td><td className="px-3 py-2">No</td></tr>
                <tr><td className="px-3 py-2">State worker contributions (SDI/PFL/PFML/TDI/FAMLI)</td><td className="px-3 py-2">11 jurisdictions explicit</td><td className="px-3 py-2">Partial</td></tr>
                <tr><td className="px-3 py-2">City-specific pages</td><td className="px-3 py-2">22 metros</td><td className="px-3 py-2">Limited</td></tr>
                <tr><td className="px-3 py-2">Open methodology with citations</td><td className="px-3 py-2"><Link className="text-blue-600 underline" href="/us/methodology">/us/methodology</Link></td><td className="px-3 py-2">Less visible</td></tr>
                <tr><td className="px-3 py-2">Broader personal-finance calculators (mortgage, retirement)</td><td className="px-3 py-2">No — paycheck only</td><td className="px-3 py-2">Yes — very broad</td></tr>
                <tr><td className="px-3 py-2">Spanish (beta)</td><td className="px-3 py-2">Yes — /es/</td><td className="px-3 py-2">Limited</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 prose prose-slate max-w-none">
          <h2>How they differ</h2>
          <p>
            <strong>SmartAsset</strong> is a broad personal-finance content platform. The paycheck
            calculator is one of many tools (alongside retirement, mortgage, investment, and tax
            calculators). Their commercial engine is matching users with paid financial advisors via
            SmartAdvisor — most user flows end with an &ldquo;Find an advisor&rdquo; prompt.
          </p>
          <p>
            <strong>PayslipIQ</strong> is narrow on purpose. We only do US paychecks and pay stubs.
            We do not match users with advisors. We do not push retirement or mortgage products.
            The goal is for a worker to leave the page understanding their paycheck — not for them to
            be re-marketed to.
          </p>
          <h2>When to use which</h2>
          <ul>
            <li><strong>Use SmartAsset</strong> if you want broad personal-finance content or if you actively want to be matched with a financial advisor.</li>
            <li><strong>Use PayslipIQ</strong> if you want to understand a specific paycheck line by line, especially in a state with worker contributions (CA, NY, NJ, MA, OR, WA, RI, CO, HI, CT, DC) or a city with local tax (NYC, Yonkers, Philadelphia, Detroit, Ohio RITA cities).</li>
            <li><strong>Use both</strong> if you want a sanity check across two independent sources.</li>
          </ul>
          <h2>What we do not claim</h2>
          <p>
            PayslipIQ is educational only. Not tax, legal, financial, or payroll advice. Numbers are
            estimates. Real paychecks depend on employer payroll software, mid-year W-4 amendments,
            multi-state nexus, benefits elections, and garnishments.
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
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Try PayslipIQ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Paycheck Calculator</div>
              <div className="text-sm text-slate-500">All 50 states + DC, 2026 rates.</div>
            </Link>
            <Link href="/us/pay-stub-checker/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">AI Pay Stub Checker</div>
              <div className="text-sm text-slate-500">Upload a stub, get an explanation.</div>
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
