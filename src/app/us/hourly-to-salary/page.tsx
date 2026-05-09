import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { HourlySalaryConverter } from '@/components/HourlySalaryConverter';

const PAGE_URL = 'https://payslipiq.com/us/hourly-to-salary/';

export const metadata: Metadata = {
  title: 'Hourly to Salary Calculator (USA, 2026) | PayslipIQ',
  description: 'Convert any US hourly rate into weekly, biweekly, monthly, and annual salary. Includes overtime, unpaid PTO, and after-tax estimates for all 50 states.',
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Hourly to Salary Calculator (USA, 2026)',
    description: 'Convert hourly to weekly, biweekly, monthly, and annual. Tax-aware.',
    url: PAGE_URL, type: 'website',
    images: [{ url: 'https://payslipiq.com/api/og?title=Hourly%20to%20Salary%20Calculator&eyebrow=USA%202026', width: 1200, height: 630 }]
  }
};

const FAQS = [
  { q: 'How do you convert hourly to annual salary?', a: 'Multiply hourly rate by hours per week by weeks worked per year. The standard assumption is 40 hours and 52 weeks (2,080 hours), giving annual salary = hourly × 2,080. If you take unpaid time off, drop the weeks (e.g. 50 weeks for 2 weeks unpaid PTO). PayslipIQ adjusts on the fly so the answer reflects your actual schedule.' },
  { q: 'Why does $25/hour come out as ~$52,000 a year, not $50,000?', a: '$25 × 40 hours × 52 weeks = $52,000. The often-quoted "$50k = $25/hour" rule of thumb assumes 50 weeks worked (i.e. 2 weeks unpaid vacation). Both are right; the difference is whether you are paid for vacation weeks or not. Salaried employees usually are; many hourly workers are not.' },
  { q: 'Does this handle overtime?', a: 'Yes. The optional overtime block adds (overtime hours per week × hourly rate × multiplier × weeks) to the base. Federal FLSA standard is 1.5x for hours over 40 per week. California, Alaska, Nevada, Colorado, and a few others have daily overtime rules (>8 hours/day at 1.5x, >12 at 2x). The calculator uses your chosen multiplier on the weekly overtime hours you enter.' },
  { q: 'Are part-time and gig hours included?', a: 'Yes. Enter whatever weekly hours you actually work. 20 hours/week × 52 weeks at $25/hour = $26,000 annual. The math is the same; the tax estimate scales accordingly.' },
  { q: 'What about taxes?', a: 'The right-hand panel runs an annualised estimate using the IRS Pub 15-T 2026 percentage method (Single filer) plus 6.2% Social Security up to the SSA 2026 wage base of $184,500, plus 1.45% Medicare, plus the most recently verified state rate. It does not include local taxes, pre-tax 401(k)/HSA, or W-4 dependents. For precise per-paycheck numbers, use the Gross to Net Paycheck Calculator linked below.' },
  { q: 'How does an hourly worker get paid sick / vacation time?', a: 'Depends on employer and state. Most US workers do not have a federal right to paid leave, but several states (CA, CO, MA, NJ, NY, OR, RI, WA, AZ, MD, MI, NM, VT, MN, IL, ME, NV, MT, CT, DC, SC for state employees) require paid sick leave. Check your state labor agency. PayslipIQ does not include sick/vacation accrual in this conversion.' },
  { q: 'Is hourly or salary better?', a: 'Different trade-offs. Hourly: overtime pay (FLSA non-exempt), more predictable per-hour earnings, less likely to get unpaid extra hours. Salary: usually exempt from overtime, often comes with paid vacation, often more job stability. Whether you "make more" depends on actual hours worked. A salaried role at $52k working 50 hours/week is effectively $20/hour; a $25/hour role doing 40 hours is also $52k but you keep the extra hours.' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[{ name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' }, { name: 'Hourly to Salary', url: PAGE_URL }]} />
      <ArticleSchema headline="Hourly to Salary Calculator (USA, 2026)" description="Convert any US hourly rate into weekly, biweekly, monthly, and annual salary. Includes overtime and after-tax estimates." url={PAGE_URL} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Calculator</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Hourly to salary, in plain English.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Convert any hourly rate into weekly, biweekly, monthly, and annual salary, with optional overtime and an after-tax estimate.
      </p>

      <ReviewedBy />

      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-2">In plain English</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          Annual salary equals hourly rate × hours per week × weeks worked per year. The standard 40-hour week × 52 weeks = 2,080 hours, so $25/hour = $52,000 a year. PayslipIQ&apos;s Hourly to Salary Calculator (USA, 2026) lets you set your real hours, real working weeks (account for unpaid time off), and add overtime, then estimates take-home pay using the IRS Pub 15-T 2026 percentage method, FICA, and your state rate. Educational only, not advice. Use the Gross to Net Paycheck Calculator for precise per-paycheck figures.
        </p>
      </section>

      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only. Single-filer assumption, no 401(k)/HSA, no local tax, no dependents. Verify with payroll for any decision that depends on the number.
      </aside>

      <HourlySalaryConverter direction="h2s" />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common hourly to salary conversions</h2>
        <p className="mt-3 text-[15px] text-ink/80">At 40 hours per week and 52 weeks per year (2,080 hours), no overtime.</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border border-line bg-white rounded">
            <thead>
              <tr className="bg-paper text-left text-xs uppercase tracking-wider text-ink/60">
                <th className="px-3 py-2">Hourly</th>
                <th className="px-3 py-2">Weekly</th>
                <th className="px-3 py-2">Biweekly</th>
                <th className="px-3 py-2">Monthly</th>
                <th className="px-3 py-2">Annual</th>
              </tr>
            </thead>
            <tbody>
              {[10, 12, 15, 18, 20, 22, 25, 30, 35, 40, 50, 60, 75, 100, 150].map((r) => {
                const annual = r * 2080;
                return (
                  <tr key={r} className="border-t border-line">
                    <td className="px-3 py-2 font-medium tabular-nums">${r}</td>
                    <td className="px-3 py-2 tabular-nums">${(annual / 52).toFixed(0)}</td>
                    <td className="px-3 py-2 tabular-nums">${(annual / 26).toFixed(0)}</td>
                    <td className="px-3 py-2 tabular-nums">${(annual / 12).toFixed(0)}</td>
                    <td className="px-3 py-2 tabular-nums">${annual.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 bg-white border border-line rounded-md p-5">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Worked example, $30/hour, 45 hours/week, California</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">$30/hour, 40 base hours plus 5 overtime hours per week at 1.5x, 52 weeks, single filer, California.</p>
        <p className="text-[15px] text-ink/85 leading-relaxed mt-2">
          Base annual: $30 × 40 × 52 = $62,400.
          Overtime annual: 5 × $30 × 1.5 × 52 = $11,700.
          <strong> Total gross: $74,100</strong>.
          Federal (IRS Pub 15-T 2026 percentage method, single, Step 2 unchecked): ~$10,329. Social Security 6.2%: $4,594. Medicare 1.45%: $1,074. California state tax (~6.6% effective): ~$4,891.
          Total tax: ~$20,888. <strong>Annual take-home: ~$53,212</strong>. Effective tax rate: ~28.2%.
        </p>
        <p className="text-xs text-ink/60 mt-3">
          Single-filer assumption with no pre-tax 401(k), no HSA, no dependents, and no local tax. Adding a 5% 401(k) contribution would lift take-home roughly $410 (because the deferral reduces federal tax) but reduce the net paycheck because $3,705 a year goes into the retirement account.
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
          <Link href="/us/salary-to-hourly/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Salary to Hourly</div><div className="text-ink/70 mt-1">Reverse: convert annual salary into an hourly equivalent.</div></Link>
          <Link href="/us/gross-to-net-paycheck-calculator/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Gross to Net Paycheck</div><div className="text-ink/70 mt-1">Per-paycheck precision with 401(k), HSA, dependents.</div></Link>
          <Link href="/us/overtime-paycheck/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Overtime Calculator</div><div className="text-ink/70 mt-1">FLSA federal + state daily overtime.</div></Link>
          <Link href="/us/salary-after-tax/" className="block border border-line bg-white rounded-md p-4 hover:border-accent"><div className="font-semibold">Salary After Tax</div><div className="text-ink/70 mt-1">Period-by-period view of any annual salary.</div></Link>
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
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
