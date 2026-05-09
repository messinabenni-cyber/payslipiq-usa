import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { YearToDateChecker } from '@/components/YearToDateChecker';

const PAGE_URL = 'https://payslipiq.com/us/year-to-date-paycheck-checker/';

export const metadata: Metadata = {
  title: 'Year-to-Date Paycheck Checker (USA, 2026) | PayslipIQ',
  description: 'Project year-end gross, take-home, and W-2 box 1 from your YTD pay stub. Flags Social Security wage base, Additional Medicare 0.9%, 401(k), and HSA limits.',
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Year-to-Date Paycheck Checker (USA, 2026)',
    description: 'Project year-end pay + flag SS, Medicare, 401(k), HSA thresholds.',
    url: PAGE_URL, type: 'website',
    images: [{ url: 'https://payslipiq.com/api/og?title=Year-to-Date%20Paycheck%20Checker&eyebrow=USA%202026', width: 1200, height: 630 }]
  }
};

const FAQS = [
  { q: 'What does year-to-date (YTD) mean on a pay stub?', a: 'YTD is the running total of every pay stub line from January 1 to the date on the current stub. YTD gross is what you have earned this year, YTD federal withholding is what has been sent to the IRS, YTD 401(k) is what you have contributed so far. Most US pay stubs show both the current period and YTD column. PayslipIQ uses the YTD column to project what the rest of the year will look like.' },
  { q: 'Why does Social Security stop appearing on my pay stub mid-year?', a: 'Social Security only applies to wages up to the SSA Contribution and Benefit Base, $184,500 for 2026. Once your YTD wages cross that figure, Social Security withholding stops for the rest of the year. Medicare keeps going (1.45%, no cap). High earners often see a small bump in take-home pay in Q4 once SS turns off.' },
  { q: 'When does Additional Medicare Tax start?', a: 'Employers must withhold an extra 0.9% Medicare on wages above $200,000 in a calendar year, regardless of filing status. The IRS may then refund or rebill at filing depending on your actual filing status and household income (the threshold is $250k for MFJ). The PayslipIQ checker flags both the employer-trigger and the personal threshold so you can plan.' },
  { q: 'How much can I put in a 401(k) in 2026?', a: 'The IRS elective deferral limit for 2026 is $24,500. If you are 50 or older, you can add a $8,500 catch-up, for $33,000 total. Some plans allow a separate "Mega Backdoor Roth" via after-tax contributions up to a higher overall limit, ask your plan administrator. The PayslipIQ checker flags if your current rate is on track to hit the limit before December and suggests a per-paycheck rate to land exactly on the cap.' },
  { q: 'What is the HSA limit for 2026?', a: 'For 2026: $4,400 self-only HDHP coverage, $8,750 family HDHP coverage. People 55 or older can add a $1,000 catch-up. Excess contributions trigger a 6% excise tax until withdrawn. Verify the current limit with IRS Publication 969 because IRS adjusts these annually.' },
  { q: 'What is W-2 Box 1 and how does it relate to YTD?', a: 'Box 1 is "Wages, tips, other compensation" subject to federal income tax. It typically equals YTD gross minus traditional 401(k), minus traditional pre-tax HSA, minus pre-tax health insurance premiums (Section 125), minus a few other items. Box 1 is usually less than YTD gross by the sum of those pre-tax deductions. Your full YTD gross still appears in Box 3 (SS wages, capped at $184,500) and Box 5 (Medicare wages, no cap).' },
  { q: 'Why does my projection differ from what I expect for the year?', a: 'The projection assumes your current per-period gross continues through year-end. Bonuses, commissions, raises, leave without pay, schedule changes, and shift differentials all break that assumption. Use the projection as a directional check, not a guarantee. If you have a known bonus coming, use the dedicated Bonus Paycheck Calculator on top.' },
  { q: 'What should I do if I am close to a threshold I do not want to cross?', a: 'For Social Security and Medicare you cannot opt out, the limits are fixed by SSA / IRS. For 401(k) and HSA, talk to your benefits administrator about a contribution-rate change before payroll cutoff. For income-tax brackets, you can adjust your W-4 to change withholding (not the actual tax owed). For thresholds tied to income (Roth IRA phase-out, ACA premium tax credit, IRMAA, etc.) consult a CPA or EA, this calculator does not model them.' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[{ name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' }, { name: 'Year-to-Date Paycheck Checker', url: PAGE_URL }]} />
      <ArticleSchema headline="Year-to-Date Paycheck Checker (USA, 2026)" description="Project year-end gross, take-home, and W-2 box 1 from your YTD pay stub. Flags SS wage base, Additional Medicare, 401(k), HSA limits." url={PAGE_URL} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Year-end planning</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Year-to-date paycheck checker.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Type your YTD numbers from your most recent pay stub, get a year-end projection of gross, take-home, W-2 box 1, and threshold flags for Social Security, Additional Medicare, 401(k), and HSA.
      </p>

      <ReviewedBy />

      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-2">In plain English</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          The YTD column on your pay stub is the running total since January 1. The PayslipIQ Year-to-Date Paycheck Checker (USA, 2026) takes those running totals plus the number of paychecks you have left, projects year-end gross and take-home, predicts your W-2 box 1, and flags whether you are about to hit the Social Security wage base ($184,500 for 2026), the Additional Medicare 0.9% threshold ($200,000 employer-trigger), the 401(k) elective deferral limit ($24,500 + $8,500 catch-up at age 50), or the HSA limit ($4,400 self / $8,750 family). Educational only, not advice.
        </p>
      </section>

      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only. The projection assumes your current per-period gross continues; bonuses, commissions, raises, and unpaid leave break that assumption. Verify with payroll and your CPA before making contribution-rate changes near year-end.
      </aside>

      <YearToDateChecker />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">When to use this tool</h2>
        <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
          <li>Late September / early October check-in: still time to adjust 401(k) or HSA before year-end.</li>
          <li>You took a mid-year raise or new job and want to see how the rest of the year compounds.</li>
          <li>You expect to cross $200,000 single ($250k MFJ) and want to see Additional Medicare exposure.</li>
          <li>You are in the SS wage base zone ($150-200k) and want to know which paycheck stops withholding SS.</li>
          <li>You are checking that W-2 box 1 will match what your tax software is projecting.</li>
        </ul>
      </section>

      <section className="mt-10 bg-white border border-line rounded-md p-5">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Worked example, October check-in</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          You are biweekly, October 11. Your stub shows YTD gross $115,000, YTD 401(k) $14,000, YTD HSA $2,750, you are 35 years old with self-only HSA coverage. Periods completed: 21. Periods remaining: 5.
        </p>
        <p className="text-[15px] text-ink/85 leading-relaxed mt-2">
          Per-period gross: $5,476. Projected annual gross: $142,381. Projected 401(k): $17,333. <strong>Flag:</strong> 401(k) projects below the $24,500 limit so you have room. <strong>Flag:</strong> HSA projects $3,405, below the $4,400 limit so you have room. <strong>Flag:</strong> Annual gross projects below $184,500 so SS will not cap. <strong>Flag:</strong> Below $200k so no Additional Medicare. <strong>Action:</strong> if you wanted to maximise 401(k) you could increase your remaining 5 paychecks to put in $2,100 each, getting close to the cap by December.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (<div key={f.q}><dt className="font-semibold text-ink">{f.q}</dt><dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd></div>))}
        </dl>
      </section>

      <section className="mt-10 border border-line rounded-md bg-white p-4">
        <h2 className="text-base font-semibold mb-2">Official sources</h2>
        <ul className="text-[14px] space-y-1">
          <li><a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">SSA Contribution and Benefit Base</a></li>
          <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS Additional Medicare Tax Q&A</a></li>
          <li><a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS 401(k) contribution limits</a></li>
          <li><a href="https://www.irs.gov/forms-pubs/about-publication-969" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS Publication 969 (HSA, FSA, MSA)</a></li>
          <li><a href="https://www.irs.gov/publications/p15t" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS Publication 15-T 2026</a></li>
          <li><a href="https://www.irs.gov/forms-pubs/about-form-w-2" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS Form W-2 instructions</a></li>
        </ul>
      </section>

      <section className="mt-10 border-l-4 border-accent bg-cyan-50 px-4 py-3 rounded">
        <div className="font-semibold text-sm mb-1">If a flag fires, talk to payroll, not just to PayslipIQ</div>
        <p className="text-sm text-ink/80">
          Threshold flags here are projections. Contribution-rate changes, bonus timing, and benefit elections all need to go through payroll. Use the
          <Link href="/us/ask-payroll-generator/" className="text-accent underline mx-1">Ask Payroll Generator</Link>
          to draft a message in 30 seconds.
        </p>
      </section>

      <nav className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm" aria-label="Core PayslipIQ pages">
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/pay-stub-checker/">Pay Stub Checker</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/gross-to-net-paycheck-calculator/">Gross to Net</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained/">FICA explained</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/w4-guide/">W-4 Guide</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/state-tax/">State index</Link>
      </nav>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
