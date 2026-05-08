import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Health Insurance Deductions on Your Paycheck (US)",
  description: "Pre-tax health insurance, HSA, FSA explained. How they reduce taxable wages. Educational only.",
  alternates: { canonical: '/us/health-insurance-deductions' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Health Insurance Deductions on Your Paycheck</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Most employer-sponsored health insurance premiums are deducted from your paycheck on a pre-tax basis under Section 125 (cafeteria plan). They reduce both federal income tax wages and FICA wages.</p>
        <h2>HSA (Health Savings Account)</h2>
        <p>Available with high-deductible health plans. Contributions are pre-tax. Annual limit set by the IRS.</p>
        <h2>FSA (Flexible Spending Account)</h2>
        <p>Pre-tax dollars set aside for qualified medical (or dependent care) expenses. Use-it-or-lose-it rule applies (with limited carryover).</p>
      </article>
      <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related tools</p>
        <ul className="mt-2 space-y-1 text-sm text-blue-700">
          <li><Link href="/us/paycheck-calculator">Paycheck calculator →</Link></li>
          <li><Link href="/us/pay-stub-checker">AI pay stub explainer →</Link></li>
          <li><Link href="/us/learn">All paycheck topics →</Link></li>
        </ul>
      </div>
    </main>
  );
}
