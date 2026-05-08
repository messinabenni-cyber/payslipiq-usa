import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "401(k) Deductions on Your Paycheck, Pre-tax vs Roth",
  description: "How 401(k) deductions work: pre-tax vs Roth, employer match, contribution limits, vesting. Educational only, not investment advice.",
  alternates: { canonical: '/us/401k-deductions' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">401(k) Deductions on Your Paycheck</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>A 401(k) is a workplace retirement account regulated by ERISA. Your contributions are deducted from each paycheck and invested.</p>
        <h2>Pre-tax (traditional) 401(k)</h2>
        <p>Reduces your federal income tax withholding (and most state income taxes). Does <strong>not</strong> reduce FICA. You pay tax when you withdraw in retirement.</p>
        <h2>Roth 401(k)</h2>
        <p>Post-tax. No reduction in current taxable wages. Qualified withdrawals in retirement are tax-free.</p>
        <h2>Employer match</h2>
        <p>Money your employer contributes on top of yours. Vesting schedule may apply.</p>
        <h2>Limits</h2>
        <p>Verify current annual limit with the IRS. Catch-up contributions allowed at 50+. Higher catch-up at 60-63 under SECURE 2.0.</p>
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
