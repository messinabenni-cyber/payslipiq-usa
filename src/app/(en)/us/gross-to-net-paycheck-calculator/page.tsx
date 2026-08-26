import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { FinancialProductSchema } from '@/components/FinancialProductSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { GrossToNetCalculator } from '@/components/GrossToNetCalculator';
import { NextStepsBlock } from '@/components/NextStepsBlock';

const PAGE_URL = 'https://payslipiq.com/us/gross-to-net-paycheck-calculator';

export const metadata: Metadata = {  title: 'How Much Is Paycheck After Taxes? Gross-to-Net 2026',  description:    'How much is your paycheck after taxes? Free 2026 gross-to-net calculator: federal, FICA and state withholding for all 50 states. See your real take-home.',  alternates: {    canonical: PAGE_URL,    languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL },  },  openGraph: {    title: 'How Much Is Paycheck After Taxes? Gross-to-Net 2026',    description: 'Free 2026 gross-to-net paycheck calculator. Federal, FICA, all 50 states + DC. See your take-home in seconds.',    url: PAGE_URL,    type: 'website',    siteName: 'PayslipIQ',    locale: 'en_US',    images: [{ url: 'https://payslipiq.com/api/og?title=Gross%20to%20Net%20Calculator&eyebrow=USA%202026', width: 1200, height: 630, alt: 'PayslipIQ Gross-to-Net Paycheck Calculator' }],  },  twitter: {    card: 'summary_large_image',    title: 'How Much Is Paycheck After Taxes? Gross-to-Net 2026',    description: 'Free 2026 gross-to-net calculator. Federal, FICA, all 50 states.',  },  other: { 'geo.region': 'US', 'geo.placename': 'United States' },};

const FAQS = [
  {
    q: 'What does gross to net actually mean?',
    a: 'Gross pay is your total earnings for the pay period before any deductions. Net pay (also called take-home pay) is what lands in your bank account after federal income tax, Social Security, Medicare, state income tax, any local taxes, and any pre-tax or post-tax deductions like 401(k), HSA, or health insurance premiums. The PayslipIQ Gross to Net Paycheck Calculator runs the IRS Pub. 15-T 2026 percentage method to estimate what comes out, but employer-specific settings like dependents, multiple jobs, and year-to-date wages can move the number.'
  },
  {
    q: 'Why is my net pay lower than this calculator suggests?',
    a: 'Real paychecks include things this calculator does not always know: extra W-4 withholding, garnishments, child support orders, union dues, state-specific worker contributions like California SDI, New Jersey FLI, Oregon Paid Leave, Washington Cares, or Massachusetts PFML, employer-specific benefit deductions, and year-to-date wage adjustments that change Social Security or Additional Medicare withholding. Use the result as a directional estimate and verify with your payroll team if a real stub is materially different.'
  },
  {
    q: 'Is this calculator the same as a paycheck calculator?',
    a: 'They overlap, but the focus is different. A standard Paycheck Calculator usually starts from an annual salary and projects per-period pay. The Gross to Net Paycheck Calculator is built for the question I have a gross amount in front of me, what is the net? It accepts a per-paycheck gross directly, plus optional salary or hourly modes, so you can verify a single check rather than model an annual scenario.'
  },
  {
    q: 'Does this include Social Security and Medicare?',
    a: 'Yes. Social Security is calculated at 6.2% of FICA-taxable wages up to the SSA 2026 wage base of $184,500. Medicare is 1.45% of all FICA-taxable wages, plus an additional 0.9% Medicare tax on wages above $200,000 for a single filer. Pre-tax HSA, FSA, and Section 125 health premiums reduce FICA-taxable wages. Traditional 401(k) does not.'
  },
  {
    q: 'Does it handle state and local taxes?',
    a: 'It estimates state income tax for all 50 states and DC using the most recently verified state rate. It does not yet model every local income tax (NYC, Yonkers, Ohio RITA / CCA cities, Pennsylvania EIT / LST, Maryland county tax, San Francisco, Wilmington, Kansas City / St. Louis earnings tax, Indiana county tax). For those, use the state hub linked below or verify with payroll.'
  },
  {
    q: 'Can I rely on this for tax filing?',
    a: 'No. The Gross to Net Paycheck Calculator is educational only. It is not tax, legal, payroll, accounting, HR, or financial advice. PayslipIQ is independent and not affiliated with the IRS, SSA, the Department of Labor, any state revenue or labor agency, your employer, or your payroll provider. For filing decisions, refunds, or amended returns, consult a qualified CPA, EA, or attorney.'
  },
  {
    q: 'Why does my bonus get such a different result?',
    a: 'Bonuses are usually withheld at a flat 22% federal supplemental rate, not the percentage-method tables this calculator uses for regular wages. Use the dedicated Bonus Paycheck Calculator for that case. The total tax owed at filing depends on your full annual income, not the withholding rate, so over-withholding on a bonus often comes back as part of a refund.'
  },
  {
    q: 'How accurate is the state tax estimate?',
    a: 'It uses each state\'s most recently verified income tax rate as of 2026-05-06. Some states have flat rates, some have brackets, several have 0% on wages, and a few apply local or county add-ons that vary by zip code. Treat the state line as a best-effort estimate. Always verify with the state revenue agency for important decisions.'
  }
];

const SOURCES = [
  { name: 'IRS Publication 15-T (Federal Income Tax Withholding Methods, 2026)', url: 'https://www.irs.gov/publications/p15t' },
  { name: 'IRS Topic 751 (Social Security and Medicare Withholding Rates)', url: 'https://www.irs.gov/taxtopics/tc751' },
  { name: 'SSA Contribution and Benefit Base 2026', url: 'https://www.ssa.gov/oact/cola/cbb.html' },
  { name: 'IRS Additional Medicare Tax Q&A', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax' },
  { name: 'IRS Form W-4 and instructions', url: 'https://www.irs.gov/forms-pubs/about-form-w-4' },
  { name: 'IRS 401(k) and profit-sharing plan contribution limits', url: 'https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits' },
  { name: 'IRS Publication 969 (HSA, FSA, MSA)', url: 'https://www.irs.gov/forms-pubs/about-publication-969' }
];

const STATES_NO_INCOME_TAX = [
  'Alaska', 'Florida', 'Nevada', 'New Hampshire', 'South Dakota',
  'Tennessee', 'Texas', 'Washington', 'Wyoming'
];

const RELATED_TOOLS = [
  { href: '/us/paycheck-calculator', title: 'Paycheck Calculator', blurb: 'Start from an annual salary and project per-period pay.' },
  { href: '/us/salary-after-tax', title: 'Salary After Tax', blurb: 'See what an annual salary becomes weekly, biweekly, monthly.' },
  { href: '/us/bonus-tax-paycheck', title: 'Bonus Paycheck Calculator', blurb: 'Why bonuses look heavily taxed (22% supplemental rate).' },
  { href: '/us/overtime-paycheck', title: 'Overtime Calculator', blurb: 'FLSA federal + state daily overtime rules.' },
  { href: '/us/why-is-my-paycheck-lower', title: 'Why is my paycheck lower?', blurb: 'Common reasons take-home shrinks vs expected.' },
  { href: '/us/w4-guide', title: 'W-4 Guide', blurb: 'Plain-English walkthrough of the form that drives withholding.' },
  { href: '/us/fica-explained', title: 'FICA Explained', blurb: 'Social Security + Medicare in plain English.' },
  { href: '/us/state-tax', title: 'State Tax Index', blurb: 'Pick your state for verified rates and rules.' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema
        items={[
          { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
          { name: 'Gross to Net Paycheck Calculator', url: PAGE_URL }
        ]}
      />
      <ArticleSchema
        headline="Gross to Net Paycheck Calculator (USA, 2026)"
        description="Convert any gross paycheck into estimated take-home pay after federal, FICA, and state tax. Educational only, not advice."
        url={PAGE_URL}
      />
      <FAQSchema items={FAQS} />
      {/* 2026-05-16: FinancialProduct schema for AI-search / rich-result eligibility. */}
      <FinancialProductSchema
        name="PayslipIQ Gross to Net Paycheck Calculator"
        description="Convert any gross paycheck into estimated take-home after federal, FICA, state, and state worker contributions. 2026 tables, all 50 states + DC."
        url={PAGE_URL}
        category="Paycheck estimator"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Calculator</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
        Gross to net, in plain English.
      </h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Type any gross paycheck and see the estimated take-home pay after federal income tax, Social Security, Medicare, and state tax. Works for all 50 states and DC.
      </p>

      <ReviewedBy />

      {/* Direct-answer block, optimized for AI Overviews / Perplexity / ChatGPT */}
      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-2">In plain English</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          The Gross to Net Paycheck Calculator (USA, 2026) converts a gross paycheck into estimated take-home pay after federal income tax, Social Security (6.2%), Medicare (1.45%), and state income tax. Enter a per-paycheck gross, an annual salary, or an hourly rate, pick a state and filing status, and PayslipIQ runs the IRS Pub. 15-T 2026 percentage method plus the SSA 2026 wage base ($184,500). Results are estimates only, your real check depends on W-4 details, multiple jobs, year-to-date wages, and employer-specific settings.
        </p>
      </section>

      {/* Tool warning */}
      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only, your actual paycheck may differ. Tax and payroll rules vary by state, city, employer, and individual situation. Verify with your payroll team or a qualified professional before relying on a number.
      </aside>

      {/* The interactive calculator */}
      <GrossToNetCalculator />

      {/* What to check */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">What to check before relying on a number</h2>
        <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
          <li>Did you enter the gross figure for this paycheck, not the YTD or annual amount?</li>
          <li>Is the pay frequency correct (weekly, biweekly, semimonthly, monthly)?</li>
          <li>Does the filing status match what you submitted on your most recent W-4?</li>
          <li>Have you accounted for pre-tax 401(k), HSA, FSA, and health insurance premiums?</li>
          <li>Does your state have local taxes (e.g. NYC, Yonkers, PA EIT, Ohio RITA, MD county) the tool does not model yet?</li>
          <li>Did you include any extra W-4 withholding you previously requested?</li>
          <li>Are you over the Social Security wage base ($184,500 in 2026)? After that, only Medicare continues.</li>
          <li>Are you over $200,000 YTD as a single filer (Additional Medicare 0.9% kicks in)?</li>
        </ul>
      </section>

      {/* Worked example */}
      <section className="mt-10 bg-white border border-line rounded-md p-5">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Worked example, $100,000 salary in California</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">$100,000 annual salary, single filer, biweekly pay, no 401(k), no HSA, California.</p>
        <p className="text-[15px] text-ink/85 leading-relaxed mt-2">
          Per-paycheck gross: <strong>$3,846.15</strong>. Federal withholding (IRS Pub. 15-T 2026 percentage method, Single, Step 2 unchecked, annualised method): ~$507.
          Social Security 6.2%: $238.46. Medicare 1.45%: $55.77. California state tax (est., flat 6.6% effective at this income): ~$253.85.
          Pre-tax deductions: $0. Total deductions: ~$1,055. Estimated net: <strong>~$2,792 per paycheck</strong>.
        </p>
        <p className="text-[14px] text-ink/70 mt-3">
          Annualised: ~$72,580 take-home, a take-home rate of ~73%. The same gross in Texas (no state income tax) would land at ~$3,045 per paycheck and ~$79,180 a year. The same gross in New York City would be lower again because of NYC resident income tax, which this calculator does not yet model.
        </p>
        <p className="text-xs text-ink/55 mt-3">
          Worked example uses the IRS Pub. 15-T 2026 annualised percentage method (the same method the calculator above runs).
          Real-world employer withholding can differ slightly because some payroll systems use the per-period bracket tables rather than the annualised method, and because W-4 dependents, multiple jobs, and extra withholding are not modelled here. Use the calculator above for your own numbers.
        </p>
      </section>

      {/* No-state-income-tax callout */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">States with no income tax on wages</h2>
        <p className="mt-3 text-[15px] text-ink/80">
          These nine states do not levy a state income tax on wages. The state line will read $0 in the calculator above. Federal and FICA still apply. Several still have worker-contribution programs (Washington Cares, New Hampshire interest/dividends, etc.) you should verify locally.
        </p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[15px]">
          {STATES_NO_INCOME_TAX.map((s) => (
            <div key={s} className="bg-white border border-line rounded p-3">{s}</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Gross to net, common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related tools */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Related calculators and guides</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px]">
          {RELATED_TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="block border border-line bg-white rounded-md p-4 hover:border-accent">
              <div className="font-semibold">{t.title}</div>
              <div className="text-ink/70 mt-1">{t.blurb}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ask payroll CTA */}
      <section className="mt-10 border-l-4 border-accent bg-cyan-50 px-4 py-3 rounded">
        <div className="font-semibold text-sm mb-1">If your real paycheck is materially different, ask payroll</div>
        <p className="text-sm text-ink/80">
          A gap between this estimate and your real paycheck is usually a W-4 setting, a benefit deduction, a state-specific worker contribution, or a year-to-date adjustment, not necessarily an error.
          {' '}Use the <Link href="/us/ask-payroll-generator" className="text-accent underline">Ask Payroll Generator</Link> to draft a polite, specific message in 30 seconds.
        </p>
      </section>

      {/* Official sources */}
      <section className="mt-10 border border-line rounded-md bg-white p-4">
        <h2 className="text-base font-semibold mb-2">Official sources</h2>
        <ul className="text-[14px] space-y-1">
          {SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">{s.name}</a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12.5px] text-ink/55">PayslipIQ is independent of the IRS, SSA, Department of Labor, every state revenue and labor agency, and every payroll provider. Source links are informational, not endorsement.</p>
      </section>

      {/* Standard internal-link cluster */}
      <nav className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm" aria-label="Core PayslipIQ pages">
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/pay-stub-checker">Pay Stub Checker</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/paycheck-calculator">Paycheck Calculator</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained">FICA explained</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/w4-guide">W-4 Guide</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/state-tax">State index</Link>
      </nav>

      <div className="mt-12">
        <NextStepsBlock />
      </div>

      {/* Master disclaimer */}
      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>

      {/* HowTo schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to estimate net pay from a gross paycheck',
            description: 'Convert a gross paycheck into take-home pay using the IRS percentage method, FICA, and state tax.',
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Enter the gross', text: 'Type the gross amount for this paycheck (or pick salary / hourly mode).' },
              { '@type': 'HowToStep', position: 2, name: 'Pick pay frequency', text: 'Choose weekly, biweekly, semimonthly, or monthly so periods are correct.' },
              { '@type': 'HowToStep', position: 3, name: 'Pick state and filing status', text: 'These drive the state tax line and the federal withholding bracket.' },
              { '@type': 'HowToStep', position: 4, name: 'Add pre-tax deductions', text: 'Optionally include 401(k) %, HSA, health premium, and any extra W-4 withholding.' },
              { '@type': 'HowToStep', position: 5, name: 'Read the result', text: 'PayslipIQ shows the per-check net, monthly average, and annualised take-home, plus the full deduction breakdown.' }
            ]
          })
        }}
      />

      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'PayslipIQ Gross to Net Paycheck Calculator',
            description: 'Convert any gross paycheck into estimated take-home pay for all 50 US states.',
            url: PAGE_URL,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Any (web)',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            creator: { '@type': 'Organization', name: 'PayslipIQ' }
          })
        }}
      />
      <MobileStickyCTA
        href="/us/pay-stub-checker"
        label="Check My Pay Stub"
        secondaryHref="/us/paycheck-health-score"
        secondaryLabel="Health Score"
      />
    </main>
  );
}
