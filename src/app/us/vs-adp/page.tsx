import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/vs-adp/';

export const metadata: Metadata = {
  title: 'PayslipIQ vs ADP Paycheck Calculator (2026)',
  description:
    'How PayslipIQ compares to ADP’s free paycheck calculator: a plain-English line-by-line pay stub explainer vs a payroll provider’s estimator. Educational only.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PayslipIQ vs ADP Paycheck Calculator',
    description: 'A plain-English pay stub explainer compared with ADP’s free calculator.',
    url: PAGE_URL,
    type: 'article',
  },
};

const FAQS = [
  { q: 'Is ADP’s paycheck calculator free?', a: 'Yes. ADP publishes free salary and hourly paycheck calculators that anyone can use without an account. They are separate from ADP’s paid payroll and HR platform, which businesses subscribe to for running payroll.' },
  { q: 'Is PayslipIQ a payroll provider like ADP?', a: 'No. ADP is a full payroll and HR platform that employers use to pay staff. PayslipIQ does not run payroll and is not an employer tool. It is a free educational explainer that helps an individual worker read and understand a pay stub.' },
  { q: 'What does PayslipIQ do that ADP’s free calculator does not?', a: 'PayslipIQ explains every line in plain English — federal income tax, Social Security, Medicare, state income tax, state worker contributions (CA SDI, NY PFL, NJ FLI and similar), and local taxes — rather than only returning a net figure. It also offers an AI pay-stub upload explainer, dedicated city pages, and an open methodology page.' },
  { q: 'Which is more accurate?', a: 'Both use the IRS Publication 15-T withholding method and published state rates, so for a standard scenario the results are close. Differences usually come from edge cases such as multi-state work, supplemental wages, or mid-year W-4 changes. Treat any calculator result as an estimate and verify with your payroll team.' },
  { q: 'Should my employer use PayslipIQ instead of ADP?', a: 'No — they do different jobs. ADP (or another payroll provider) runs the actual payroll. PayslipIQ helps the employee understand the pay stub that payroll produces. They are complementary, not substitutes.' },
  { q: 'Does PayslipIQ cover all 50 states like ADP?', a: 'Yes. PayslipIQ covers all 50 states plus DC, plus 11 jurisdictions with explicit employee worker contributions and dedicated pages for major metros.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'PayslipIQ vs ADP', url: PAGE_URL },
];

export default function VsAdpPage() {
  return (
    <>
      <ArticleSchema
        headline="PayslipIQ vs ADP Paycheck Calculator (2026)"
        description="A plain-English line-by-line pay stub explainer compared with ADP’s free paycheck calculator."
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
          <span aria-current="page">vs ADP</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · COMPARISON · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">PayslipIQ vs ADP</h1>
          <p className="mt-4 text-lg text-slate-700">
            ADP is one of the largest payroll and HR providers in the US, and it publishes a free
            paycheck calculator. PayslipIQ is a free, independent pay stub explainer built for the
            worker, not the employer. Here is an honest, side-by-side comparison.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold">In plain English</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
            ADP and PayslipIQ are different kinds of tool. ADP is a payroll platform whose free
            calculator returns a take-home estimate; it is built around running payroll for
            employers. PayslipIQ is a free educational explainer that walks a worker through every
            line of a pay stub in plain English, with an AI upload tool, city pages, and an open
            methodology. Use ADP’s calculator for a quick number; use PayslipIQ to understand it.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Side-by-side</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">Feature</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">PayslipIQ</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">ADP (free calculator)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-3 py-2">Primary purpose</td><td className="px-3 py-2">Explain a pay stub to a worker</td><td className="px-3 py-2">Estimate take-home; promote ADP payroll</td></tr>
                <tr><td className="px-3 py-2">All 50 states + DC</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Yes</td></tr>
                <tr><td className="px-3 py-2">Plain-English line-by-line explainer</td><td className="px-3 py-2">Yes — every line</td><td className="px-3 py-2">Limited</td></tr>
                <tr><td className="px-3 py-2">AI pay-stub upload explainer</td><td className="px-3 py-2">Yes (waitlist)</td><td className="px-3 py-2">No</td></tr>
                <tr><td className="px-3 py-2">State worker contributions explicit (SDI/PFL/PFML/TDI/FAMLI)</td><td className="px-3 py-2">11 jurisdictions encoded</td><td className="px-3 py-2">Partial</td></tr>
                <tr><td className="px-3 py-2">City-specific pages</td><td className="px-3 py-2">Major metros</td><td className="px-3 py-2">No</td></tr>
                <tr><td className="px-3 py-2">Open methodology with citations</td><td className="px-3 py-2"><Link className="text-blue-600 underline" href="/methodology">/methodology</Link></td><td className="px-3 py-2">Not published</td></tr>
                <tr><td className="px-3 py-2">Runs actual payroll for employers</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Yes — core product</td></tr>
                <tr><td className="px-3 py-2">Free, no account required</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Yes for the calculator</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 prose prose-slate max-w-none">
          <h2>What each tool does best</h2>
          <p>
            <strong>ADP</strong> is an enterprise-grade payroll and HR provider. If you run a
            business and need to actually pay employees, file payroll taxes, and stay compliant, ADP
            (or a comparable provider) is the right category of tool. Its free public paycheck
            calculator is accurate and fast for a quick take-home estimate.
          </p>
          <p>
            <strong>PayslipIQ</strong> is built around one question: &ldquo;I do not understand my
            pay stub.&rdquo; It is not a payroll system and never will be. Every deduction line is
            explained in plain language, the AI Pay Stub Checker reads an uploaded stub and returns
            a written walkthrough, and the methodology is public.
          </p>
          <h2>When to use which</h2>
          <ul>
            <li><strong>Use ADP</strong> if you are an employer running payroll, or you just want a fast take-home number from a well-known calculator.</li>
            <li><strong>Use PayslipIQ</strong> if you are a worker trying to understand why your paycheck looks the way it does, or you want a line-by-line explanation of an actual stub.</li>
            <li><strong>Use both</strong> for a cross-check: estimate with one, understand with the other.</li>
          </ul>
          <h2>What we do not claim</h2>
          <p>
            PayslipIQ is educational only. It is not payroll software, and it is not a substitute
            for advice from a CPA, EA, payroll specialist, or attorney. ADP is a registered
            trademark of its owner; PayslipIQ is independent and not affiliated with ADP. Numbers
            are estimates — real paychecks depend on employer payroll settings, mid-year W-4
            changes, multi-state nexus, benefits elections, and garnishments.
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
              <div className="font-medium">Pay Stub Checker</div>
              <div className="text-sm text-slate-500">Read every line of a stub in plain English.</div>
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
