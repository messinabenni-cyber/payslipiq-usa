import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/vs-paycheckcity';

export const metadata: Metadata = {
  title: 'PayslipIQ vs PaycheckCity — Which Paycheck Calculator to Use',
  description:
    'Compare PayslipIQ and PaycheckCity. Open methodology, plain-English line-by-line breakdown, AI pay-stub explainer, 22 US cities + 11 jurisdictions of worker contributions. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PayslipIQ vs PaycheckCity',
    description: 'Open methodology paycheck explainer vs traditional calculator.',
    url: PAGE_URL,
    type: 'article',
  },
};

const FAQS = [
  { q: 'What does PayslipIQ do that PaycheckCity does not?', a: 'PayslipIQ is built as a plain-English explainer first, calculator second. It walks you through what each line on a US pay stub means (federal income tax, FICA, state worker contributions like CA SDI and NY PFL, local taxes like NYC/Yonkers/Philadelphia/Detroit) — not just produce a number. We also offer an AI pay-stub upload explainer and city-level pages for 22 major US metros.' },
  { q: 'Is PayslipIQ free?', a: 'Yes. All core PayslipIQ tools — the Paycheck Calculator, Pay Stub Checker, Gross-to-Net Calculator, FICA Explainer, W-4 Guide, state pages, and city pages — are free with no account required.' },
  { q: 'Is PaycheckCity accurate?', a: 'PaycheckCity is a long-established calculator used by many payroll professionals. It is generally accurate for federal and state withholding. PayslipIQ uses the same IRS Publication 15-T tables and state DOR rates. Where calculators differ, the difference usually comes from interpretation of edge cases (multi-state, supplemental wages, ESPP).' },
  { q: 'Does PayslipIQ have the same state coverage as PaycheckCity?', a: 'PayslipIQ covers all 50 states + DC, plus 11 jurisdictions of explicit worker contributions (CA SDI, NY SDI + PFL, NJ SDI + FLI, MA PFML, OR Paid Leave, WA PFML + WA Cares, RI TDI, CO FAMLI, HI TDI, CT PFML, DC PFL). Plus 22 city-specific pages.' },
  { q: 'Where is the methodology behind PayslipIQ?', a: 'Publicly documented at /methodology with citations to IRS Notice 2025-67, IRS Publication 15-T (2026), SSA wage base, and each state DOR. PaycheckCity\'s detailed methodology is less publicly visible.' },
  { q: 'Why would I use PayslipIQ over PaycheckCity?', a: 'If you want a number, both work. If you want to understand why your paycheck is what it is — line by line in plain English — PayslipIQ was built specifically for that. If you want city-specific guidance (NYC/Yonkers/Philadelphia/Detroit local tax) without copy-pasting rates, PayslipIQ has dedicated city pages.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'PayslipIQ vs PaycheckCity', url: PAGE_URL },
];

export default function VsPaycheckCityPage() {
  return (
    <>
      <ArticleSchema
        headline="PayslipIQ vs PaycheckCity — Which Paycheck Calculator to Use"
        description="Open methodology, plain-English line-by-line breakdown, AI pay-stub explainer, 22 US cities."
        url={PAGE_URL}
      />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">vs PaycheckCity</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · COMPARISON · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">PayslipIQ vs PaycheckCity</h1>
          <p className="mt-4 text-lg text-slate-700">
            Both tools calculate take-home pay. PayslipIQ adds a plain-English explainer for every
            line, an AI pay-stub upload tool, 22 city-specific calculators, an open methodology page,
            and explicit handling of state worker contributions (SDI / PFL / PFML / TDI / FAMLI).
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
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">PaycheckCity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-3 py-2">All 50 states + DC</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Yes</td></tr>
                <tr><td className="px-3 py-2">Plain-English line-by-line explainer</td><td className="px-3 py-2">Yes — every line</td><td className="px-3 py-2">Limited</td></tr>
                <tr><td className="px-3 py-2">AI pay-stub upload explainer</td><td className="px-3 py-2">Yes (waitlist)</td><td className="px-3 py-2">No</td></tr>
                <tr><td className="px-3 py-2">State worker contributions explicit (SDI/PFL/PFML/TDI/FAMLI)</td><td className="px-3 py-2">11 jurisdictions encoded</td><td className="px-3 py-2">Partial</td></tr>
                <tr><td className="px-3 py-2">City-specific pages</td><td className="px-3 py-2">22 metros</td><td className="px-3 py-2">Few</td></tr>
                <tr><td className="px-3 py-2">Open methodology with citations</td><td className="px-3 py-2"><Link className="text-blue-600 underline" href="/methodology">/methodology</Link></td><td className="px-3 py-2">Less visible</td></tr>
                <tr><td className="px-3 py-2">Free, no account required</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Yes for basic</td></tr>
                <tr><td className="px-3 py-2">Spanish (beta)</td><td className="px-3 py-2">Yes — /es/</td><td className="px-3 py-2">Limited</td></tr>
                <tr><td className="px-3 py-2">FAQ + schema on every page (Google AI Overviews-ready)</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Partial</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 prose prose-slate max-w-none">
          <h2>What each tool does best</h2>
          <p>
            <strong>PaycheckCity</strong> is the long-running gold standard for raw payroll
            calculation, widely used by HR teams and payroll professionals. If you know exactly which
            number you want and want it fast, PaycheckCity delivers.
          </p>
          <p>
            <strong>PayslipIQ</strong> is built around &ldquo;I do not understand my pay stub.&rdquo;
            Every line is explained in language a worker (not a payroll professional) can use. The
            tools sit next to the explanation, not behind it. The AI Pay Stub Checker is a unique
            feature — upload a stub and get a written, line-by-line explanation back.
          </p>
          <h2>When to use which</h2>
          <ul>
            <li><strong>Use PaycheckCity</strong> if you are an HR/payroll professional confirming a number for a known scenario.</li>
            <li><strong>Use PayslipIQ</strong> if you are a worker trying to understand why your paycheck looks the way it does — or if you live in a state with SDI/PFL/PFML/TDI/FAMLI and want those lines explained.</li>
            <li><strong>Use both</strong> if you want a sanity check across two independent sources.</li>
          </ul>
          <h2>What we do not claim</h2>
          <p>
            PayslipIQ is educational only. It is not a substitute for advice from a CPA, EA, payroll
            specialist, or attorney. Numbers are estimates. Real paychecks depend on employer
            payroll software, mid-year W-4 amendments, multi-state nexus, benefits elections, and
            garnishments. Verify with your payroll team before relying on anything.
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
            <Link href="/us/paycheck-calculator" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Paycheck Calculator</div>
              <div className="text-sm text-slate-500">All 50 states + DC, 2026 rates.</div>
            </Link>
            <Link href="/us/pay-stub-checker" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
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
