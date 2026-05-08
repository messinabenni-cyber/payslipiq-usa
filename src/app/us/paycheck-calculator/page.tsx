import type { Metadata } from 'next';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "US Paycheck Calculator (2026) — Estimate Take-Home Pay",
  description: "Estimate take-home pay from gross. Federal income tax, FICA, and state tax for all 50 states. Plain-English breakdown. Educational only.",
  alternates: { canonical: '/us/paycheck-calculator' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">US Paycheck Calculator</h1>
      <p className="mt-3 text-lg text-slate-700">
        Enter your gross pay, state, and filing status. We&apos;ll estimate federal tax, FICA, state tax, and your take-home — and explain every line.
      </p>
      <div className="mt-4">
        <MasterDisclaimer variant="long" />
      </div>
      <div className="mt-8">
        <PaycheckCalculator />
      </div>

      <section className="mt-12 prose prose-slate max-w-none">
        <h2>How this calculator works</h2>
        <p>The PayslipIQ Paycheck Calculator runs federal income tax withholding using IRS Publication 15-T methodology, FICA at the current Social Security wage base and Medicare rate, and state withholding using each state&apos;s published guidance. It surfaces every line with a one-paragraph explanation.</p>
        <p>We&apos;re not a payroll provider — your employer&apos;s actual withholding may differ based on payroll software, mid-year W-4 changes, supplemental wage rules, garnishments, and benefits elections. Use this for understanding, not for filing.</p>
        <h2>FAQ</h2>
        <h3>Is this free?</h3>
        <p>Yes.</p>
        <h3>How accurate is the calculator?</h3>
        <p>It&apos;s an estimate using current-year tax tables and your inputs. Edge cases (multi-state, garnishments, supplemental wages, mid-year changes) may not be captured exactly.</p>
        <h3>Does it cover all 50 states?</h3>
        <p>Yes — plus DC.</p>
      </section>
    </main>
  );
}
