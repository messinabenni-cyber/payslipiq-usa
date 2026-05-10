import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/';

export const metadata: Metadata = {
  title: 'PayslipIQ USA · Pay Stub Help, Paycheck Calculators, State Guides',
  description:
    'Plain-English help for American workers. Pay stub checker, paycheck calculator, FICA, federal and state tax explainers, 50-state guides, and a free pay stub anatomy guide. Educational only, not tax, legal, or financial advice.',
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'es-US': 'https://payslipiq.com/es/',
      'x-default': PAGE_URL
    }
  },
  openGraph: {
    title: 'PayslipIQ USA · Paycheck Help in Plain English',
    description:
      'Pay stub checker, paycheck calculator, FICA explainer, W-4 guide, and 50-state hubs. Educational only.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://payslipiq.com/api/og?title=PayslipIQ%20USA&eyebrow=Paycheck%20Help%20for%20American%20Workers',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayslipIQ USA · Paycheck Help in Plain English',
    description: 'Pay stub checker, paycheck calculator, FICA, W-4, all 50 states.'
  }
};

const FAQS = [
  {
    q: 'What is PayslipIQ USA?',
    a: 'PayslipIQ USA is a free, plain-English platform that helps American workers understand their pay stubs and paychecks. It includes a Pay Stub Checker, Paycheck Calculator, Gross to Net Calculator, Hourly and Salary converters, a Year-to-Date checker, and explainer pages for federal income tax withholding, Social Security, Medicare, state income tax, 401(k), HSA, FSA, overtime, and bonuses. PayslipIQ provides educational guidance only. It does not provide tax, legal, financial, accounting, employment, or payroll advice.'
  },
  {
    q: 'How is PayslipIQ different from SmartAsset, NerdWallet, or ADP?',
    a: 'PayslipIQ is worker-first and education-first. There are no loan funnels, credit card upsells, or B2B payroll software pitches. Every page explains the math, links to the relevant IRS or state agency, and tells you what the tool cannot confirm. See the comparison at /us/why-payslipiq/.'
  },
  {
    q: 'Is PayslipIQ affiliated with the IRS, SSA, or any state tax authority?',
    a: 'No. PayslipIQ is an independent, privately built educational resource. It is not affiliated with the IRS, the Social Security Administration, the Department of Labor, any state tax agency, any employer, or any payroll provider. Always verify important paycheck matters with an official source or a qualified professional.'
  },
  {
    q: 'Where do the numbers come from?',
    a: 'Federal income tax withholding uses IRS Publication 15-T 2026 percentage method tables. FICA uses the current Social Security wage base ($184,500 in 2026) and Medicare rate (1.45%, plus 0.9% Additional Medicare above $200,000 for single filers). State withholding follows each state’s published 2026 guidance. See the Methodology page for the full source register.'
  },
  {
    q: 'How private is the AI Pay Stub Checker?',
    a: 'Uploaded files are processed over encrypted transport. SSNs and bank account numbers are redacted before processing. Files are purged within 24 hours on the free tier. PayslipIQ does not sell user data and does not train AI models on user pay stubs. See the AI Transparency and Privacy pages for the full disclosure.'
  },
  {
    q: 'Does PayslipIQ work outside the USA?',
    a: 'This section of the site is built specifically for American workers. PayslipIQ also operates separate sites for other countries; this hub at /us/ is the canonical US entry point.'
  }
];

const TOOLS = [
  { href: '/us/pay-stub-checker/', title: 'Pay Stub Checker', blurb: 'Upload a pay stub or paste numbers. Plain-English line-by-line walkthrough.' },
  { href: '/us/paycheck-calculator/', title: 'Paycheck Calculator', blurb: 'Estimate take-home pay. Federal, FICA, state. All 50 states + DC.' },
  { href: '/us/gross-to-net-paycheck-calculator/', title: 'Gross to Net Calculator', blurb: 'Any gross paycheck → estimated take-home. 2026 tables.' },
  { href: '/us/salary-after-tax/', title: 'Salary After Tax', blurb: 'Annual salary to bi-weekly or monthly take-home.' },
  { href: '/us/hourly-to-salary/', title: 'Hourly to Salary', blurb: 'Hourly rate → annual equivalent. State aware.' },
  { href: '/us/year-to-date-paycheck-checker/', title: 'Year-to-Date Checker', blurb: 'YTD wages, FICA caps, Add\'l Medicare, 401(k) progress.' },
  { href: '/us/local-paycheck-taxes/', title: 'Local Tax Calculator', blurb: 'NYC, Yonkers, Philly, Detroit, Ohio cities and more.' },
  { href: '/us/ask-payroll-generator/', title: 'Ask Payroll Generator', blurb: 'Draft a polite, factual message to HR or payroll.' }
];

const EXPLAINERS = [
  { href: '/us/fica-explained/', title: 'FICA Explained' },
  { href: '/us/federal-tax-withholding/', title: 'Federal Tax Withholding' },
  { href: '/us/social-security-tax/', title: 'Social Security Tax' },
  { href: '/us/medicare-tax/', title: 'Medicare Tax' },
  { href: '/us/w4-guide/', title: 'W-4 Guide' },
  { href: '/us/401k-deductions/', title: '401(k) Deductions' },
  { href: '/us/health-insurance-deductions/', title: 'Health Insurance Deductions' },
  { href: '/us/state-tax/', title: 'State Income Tax' },
  { href: '/us/overtime-paycheck/', title: 'Overtime Pay' },
  { href: '/us/bonus-tax-paycheck/', title: 'Bonus Tax' },
  { href: '/us/why-is-my-paycheck-lower/', title: 'Why Is My Paycheck Lower?' },
  { href: '/us/pay-stub-mistakes/', title: 'Pay Stub Mistakes' }
];

const PRIORITY_STATES = [
  'california','texas','florida','new-york','illinois','pennsylvania','ohio','georgia',
  'north-carolina','new-jersey','michigan','virginia','washington','arizona','massachusetts'
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: PAGE_URL }
];

export default function UsHub() {
  return (
    <>
      <ArticleSchema headline="PayslipIQ USA · Pay Stub Help, Paycheck Calculators, State Guides" description="The canonical USA hub for PayslipIQ. Pay stub checker, paycheck calculator, FICA, W-4, all 50 states. Educational only." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-6xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">USA</span>
        </nav>

        <header className="mb-10">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Paycheck help for US workers</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Every pay stub, every paycheck, in plain English.
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
            PayslipIQ USA is the canonical hub for American workers who want to understand
            their paycheck. Pay stub checker, paycheck calculator, FICA explainer, W-4 guide,
            and a guide for every state. Educational only, not advice.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/us/pay-stub-checker/"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              Check My Pay Stub
            </Link>
            <Link
              href="/us/paycheck-calculator/"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-100 dark:border-slate-600"
            >
              Calculate Take-Home Pay
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500 max-w-2xl">
            Numbers shown are estimates. Your real paycheck depends on your employer, your benefits,
            and your W-4. Verify with payroll, the IRS, or your state authority before relying on anything.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-12" aria-labelledby="tools">
          <h2 id="tools" className="text-2xl font-semibold tracking-tight mb-2">Tools</h2>
          <p className="text-sm text-slate-500 mb-6">Free. No account. No upsell on the basics.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="block rounded-lg border border-slate-200 dark:border-slate-700 p-5 hover:border-slate-400 transition"
              >
                <h3 className="font-medium">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="explainers">
          <h2 id="explainers" className="text-2xl font-semibold tracking-tight mb-2">Topic explainers</h2>
          <p className="text-sm text-slate-500 mb-6">Plain-English guides to every major line on a US pay stub.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {EXPLAINERS.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="block rounded-md border border-slate-200 dark:border-slate-700 px-4 py-3 text-sm hover:border-slate-400"
              >
                {e.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="states">
          <h2 id="states" className="text-2xl font-semibold tracking-tight mb-2">By state</h2>
          <p className="text-sm text-slate-500 mb-6">
            Each state has a paycheck guide, a state income tax page, an overtime page, and a pay stub laws page.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {PRIORITY_STATES.map((slug) => (
              <Link
                key={slug}
                href={`/us/${slug}/`}
                className="block rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:border-slate-400"
              >
                {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link href="/us/state-tax/" className="underline hover:no-underline">
              All 50 states + DC →
            </Link>
          </p>
        </section>

        <section className="mt-12" aria-labelledby="how">
          <h2 id="how" className="text-2xl font-semibold tracking-tight mb-3">How a US paycheck is built</h2>
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Five things shape what lands in your bank account every pay period. Federal law sets
              the first three. State and city add the next two. Your own choices fill in the rest.
            </p>
            <p>
              Federal income tax comes off first, calculated using the IRS Publication 15-T method
              against what you wrote on your W-4. Then FICA: 6.2 percent Social Security up to the
              annual wage base, plus 1.45 percent Medicare on every dollar. An extra 0.9 percent
              Medicare kicks in once year-to-date wages cross $200,000 single or $250,000 married
              filing jointly.
            </p>
            <p>
              State income tax varies. Nine states do not levy one (Alaska, Florida, Nevada,
              New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming). Several use flat
              rates. The rest run progressive brackets. Local tax applies in a few jurisdictions:
              New York City, Yonkers, Philadelphia, Detroit, and many Ohio cities.
            </p>
            <p>
              The remaining lines are yours. Pre-tax deductions like traditional 401(k), HSA, and
              Section 125 health insurance reduce taxable wages. Post-tax items like Roth 401(k),
              garnishments, and after-tax life insurance come off net.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-semibold tracking-tight mb-6">Frequently asked</h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12" aria-labelledby="not">
          <h2 id="not" className="text-2xl font-semibold tracking-tight mb-3">What this is not</h2>
          <p className="text-slate-700 dark:text-slate-300">
            PayslipIQ is a reading guide and a calculator. Not a CPA. Not a payroll provider.
            Not a law firm. Not affiliated with the IRS, the SSA, or any state tax authority.
            If a number on your stub is wrong, raise it with payroll. If you need filing advice,
            see a CPA.
          </p>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
    </>
  );
}
