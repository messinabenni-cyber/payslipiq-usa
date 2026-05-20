import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { HourlySalaryConverter } from '@/components/HourlySalaryConverter';

import { SoftwareApplicationLd, HowToLd } from '@/components/ToolSchemas';
const PAGE_URL = 'https://payslipiq.com/us/salary-to-hourly/';

export const metadata: Metadata = {
  title: 'Salary to Hourly Calculator (USA, 2026) | PayslipIQ',
  description: 'Convert any US annual salary into an hourly equivalent. Adjusts for real working hours and includes after-tax estimates for all 50 states.',
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Salary to Hourly Calculator (USA, 2026)',
    description: 'See your true hourly equivalent at any US salary.',
    url: PAGE_URL, type: 'website',
    images: [{ url: 'https://payslipiq.com/api/og?title=Salary%20to%20Hourly%20Calculator&eyebrow=USA%202026', width: 1200, height: 630 }]
  }
};

const FAQS = [
  { q: 'How do you convert salary to hourly?', a: 'Divide annual salary by total working hours per year. The standard assumption is 40 hours × 52 weeks = 2,080 hours, so $52,000 ÷ 2,080 = $25/hour. If you actually work 50 hours a week (which is common for salaried roles), divide by 2,600 instead, giving $20/hour, which is your real hourly rate.' },
  { q: 'Why is my "real" hourly often lower than expected?', a: 'Salaried employees who work more than 40 hours per week effectively earn less per hour than the headline implies. A $80,000 salary working 50 hours per week is $30.77/hour, not $38.46/hour. This calculator lets you set your real hours so the answer matches your reality, not the textbook 40-hour assumption.' },
  { q: 'Are FLSA-exempt salaried roles paid for overtime?', a: 'Usually no. FLSA-exempt roles (executive, administrative, professional, computer, outside sales, certain commission roles) do not have to be paid overtime regardless of hours worked. The Department of Labor sets a minimum salary threshold for exemption. The DOL 2024 increase was vacated by a federal court in late 2024, so the enforced threshold reverted to the 2019 level of $684 per week ($35,568 annual); verify the current figure with the US Department of Labor at dol.gov. Below the threshold, you are non-exempt and must be paid 1.5x for hours over 40.' },
  { q: 'What hourly rate should I ask for to match a salary?', a: 'Match the gross rate first (annual ÷ 2,080), then add a margin if the hourly role does not include vacation, sick days, or benefits the salary did. A common rule for contractors converting from W-2 to 1099 is to add 25-50% to cover self-employment tax, no employer match, no PTO, and no health subsidy.' },
  { q: 'Does this include taxes?', a: 'Yes. The right panel runs an annualised tax estimate using IRS Pub 15-T 2026 percentage method (Single), 6.2% Social Security up to the SSA 2026 wage base of $184,500, 1.45% Medicare, and the most recently verified state rate. Local tax, pre-tax 401(k)/HSA, dependents, and W-4 fine-tuning are not modelled. Use the Gross to Net Paycheck Calculator for precise per-paycheck numbers.' },
  { q: 'How do I compare salary jobs in different states?', a: 'Convert each to hourly using your real hours, then look at the after-tax annual figure. A $90,000 New York job at 50 hours/week is roughly the same effective hourly as a $75,000 Texas job at 40 hours/week, but the Texas job has more take-home because of zero state income tax and fewer worked hours.' },
  { q: 'What about part-time salary positions?', a: 'Some salaried roles are paid at a fraction of full-time (0.5 FTE, 0.8 FTE etc.). Enter the prorated annual salary and the actual hours you work to get a true hourly figure. Benefits proration varies by employer, so the headline-only comparison can be misleading.' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[{ name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' }, { name: 'Salary to Hourly', url: PAGE_URL }]} />
      <ArticleSchema headline="Salary to Hourly Calculator (USA, 2026)" description="Convert any US annual salary into an hourly equivalent. Includes overtime-aware and after-tax estimates." url={PAGE_URL} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Calculator</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Salary to hourly, in plain English.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Convert any annual salary into an hourly equivalent using your real hours, with optional after-tax estimates.
      </p>

      <ReviewedBy />

      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-2">In plain English</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          Hourly equivalent equals annual salary divided by the hours you actually work in a year. The textbook 40 × 52 = 2,080 makes $52,000 = $25/hour, but if you work 50 hours a week, the same salary is really $20/hour. PayslipIQ&apos;s Salary to Hourly Calculator (USA, 2026) lets you set your real hours and weeks, then estimates take-home using the IRS Pub 15-T 2026 percentage method, FICA, and your state rate. Educational only, not advice.
        </p>
      </section>

      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only. Single-filer assumption, no 401(k)/HSA, no local tax, no dependents.
      </aside>

      <HourlySalaryConverter direction="s2h" />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common salary to hourly conversions</h2>
        <p className="mt-3 text-[15px] text-ink/80">At 40 hours per week and 52 weeks per year (2,080 hours).</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border border-line bg-white rounded">
            <thead>
              <tr className="bg-paper text-left text-xs uppercase tracking-wider text-ink/60">
                <th className="px-3 py-2">Annual salary</th>
                <th className="px-3 py-2">Hourly @ 40h</th>
                <th className="px-3 py-2">Hourly @ 45h</th>
                <th className="px-3 py-2">Hourly @ 50h</th>
                <th className="px-3 py-2">Hourly @ 60h</th>
              </tr>
            </thead>
            <tbody>
              {[30000, 40000, 50000, 60000, 75000, 90000, 100000, 120000, 150000, 200000, 250000, 300000, 500000].map((s) => (
                <tr key={s} className="border-t border-line">
                  <td className="px-3 py-2 font-medium tabular-nums">${s.toLocaleString()}</td>
                  <td className="px-3 py-2 tabular-nums">${(s / (40 * 52)).toFixed(2)}</td>
                  <td className="px-3 py-2 tabular-nums">${(s / (45 * 52)).toFixed(2)}</td>
                  <td className="px-3 py-2 tabular-nums">${(s / (50 * 52)).toFixed(2)}</td>
                  <td className="px-3 py-2 tabular-nums">${(s / (60 * 52)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 bg-white border border-line rounded-md p-5">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Worked example, $90,000 salary working 50 hours/week</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">$90,000 salary, 50 hours per week, 52 weeks (no unpaid time off), single filer, California.</p>
        <p className="text-[15px] text-ink/85 leading-relaxed mt-2">
          Headline rate at 40 hours: $90,000 ÷ 2,080 = <strong>$43.27/hour</strong>.<br />
          Real rate at 50 hours: $90,000 ÷ 2,600 = <strong>$34.62/hour</strong>.<br />
          That gap (~25%) is the hidden tax of being salaried-and-overworked. After taxes (federal $13,177, SS $5,580, Medicare $1,305, CA $5,940), annual take-home is ~$63,998, an effective rate of <strong>~$24.61/hour</strong> at 50 hours/week.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (<div key={f.q}><dt className="font-semibold text-ink">{f.q}</dt><dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd></div>))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Related tools</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px]">
          <Link href="/us/hourly-to-salary/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Hourly to Salary</div><div className="text-ink/70 mt-1">Reverse direction: convert hourly into annual.</div></Link>
          <Link href="/us/gross-to-net-paycheck-calculator/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Gross to Net Paycheck</div><div className="text-ink/70 mt-1">Per-paycheck precision.</div></Link>
          <Link href="/us/salary-after-tax/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Salary After Tax</div><div className="text-ink/70 mt-1">Period-by-period view.</div></Link>
          <Link href="/us/overtime-paycheck/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Overtime Calculator</div><div className="text-ink/70 mt-1">FLSA + state daily overtime.</div></Link>
        </div>
      </section>

      <nav className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm" aria-label="Core PayslipIQ pages">
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/pay-stub-checker/">Pay Stub Checker</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/paycheck-calculator/">Paycheck Calculator</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained/">FICA explained</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/w4-guide/">W-4 Guide</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/state-tax/">State index</Link>
      </nav>

      <div className="mt-12">
      <SoftwareApplicationLd url="https://payslipiq.com/us/salary-to-hourly/" name="PayslipIQ Salary to Hourly Converter" description="Convert an annual salary into an effective hourly rate. All 50 states + DC. Educational only." category="FinanceApplication" />
      <HowToLd name="How to use the PayslipIQ Salary to Hourly Converter" description="Step-by-step guide to using the PayslipIQ Salary to Hourly Converter." steps={[ { name: "Enter your annual salary", text: "Type your gross annual salary." }, { name: "Enter your hours per week", text: "The calculator defaults to 40 but you can change it." }, { name: "Pick your state", text: "State income tax varies. Nine states have none." }, { name: "Read the effective hourly rate", text: "The calculator returns your effective hourly rate plus an estimated take-home figure." } ]} />
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
