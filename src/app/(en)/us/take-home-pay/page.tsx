import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { STATE_CONFIGS } from '@/components/StateGrossToNetConfig';
import { PayNumbers2026 } from '@/components/PayNumbers2026';
import { NextStepsBlock } from '@/components/NextStepsBlock';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

const PAGE_URL = 'https://payslipiq.com/us/take-home-pay';

export const metadata: Metadata = {
  title: 'Take-Home Pay by Salary and State (USA, 2026) | PayslipIQ',
  description:
    'See estimated take-home pay for any salary in any US state for 2026. Pick your state, pick a salary, and get the full breakdown of federal tax, FICA, state tax and per-paycheck pay. Educational only.',
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Take-Home Pay by Salary and State (USA, 2026)',
    description: 'Pick your state and salary to see estimated 2026 take-home pay and every deduction.',
    url: PAGE_URL, type: 'website',
  },
};

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Take-home pay', url: PAGE_URL },
      ]} />
      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">USA · 2026</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Take-home pay by salary and state.</h1>
      <p className="mt-5 text-[17px] text-ink/85 leading-relaxed">
        Choose your state to see estimated 2026 take-home pay across common salaries. Each page breaks down federal income tax, Social Security, Medicare, state income tax and any state worker contributions, shows your pay per paycheck, and explains the difference between your marginal and average tax rate. Educational estimates, not advice.
      </p>
      <ReviewedBy />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Choose your state</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[14px]">
          {STATE_CONFIGS.map((s) => (
            <Link key={s.slug} href={`/us/take-home-pay/${s.slug}`} className="block bg-white border border-line rounded p-3 text-center hover:border-accent font-medium">{s.name}</Link>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <PayNumbers2026 variant="compact" />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Related tools</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/salary-after-tax">Salary after tax</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/gross-to-net-paycheck-calculator">Gross-to-net calculator</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/paycheck-calculator">Paycheck calculator</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</Link>
        </div>
      </section>

      <div className="mt-12"><NextStepsBlock /></div>

      <div className="mt-12"><MasterDisclaimer variant="long" /></div>
      <MobileStickyCTA
        href="/us/gross-to-net-paycheck-calculator"
        label="Calculate Take-Home"
        secondaryHref="/us/paycheck-calculator"
        secondaryLabel="Paycheck Calc"
      />
    </main>
  );
}
