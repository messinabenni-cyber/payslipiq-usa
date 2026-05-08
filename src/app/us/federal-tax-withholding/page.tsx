import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Federal Income Tax Withholding Explained",
  description: "How federal income tax withholding works on your paycheck. IRS Publication 15-T methodology, W-4 inputs, supplemental wages. Educational only.",
  alternates: { canonical: '/us/federal-tax-withholding' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Federal Income Tax Withholding Explained</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Federal income tax withholding is the federal income tax your employer takes out of each paycheck on your behalf. The amount is determined by the IRS Publication 15-T methodology, which uses what you reported on your W-4 form.</p>
        <h2>What drives the withholding amount</h2>
        <ul><li>Your filing status (single, married filing jointly, head of household)</li><li>Your annual gross wages projected forward</li><li>Whether you claimed Step 2 (multiple jobs) on your W-4</li><li>Dependents you claimed in Step 3</li><li>Other income, deductions, or extra withholding in Step 4</li></ul>
        <h2>Withholding ≠ tax owed</h2>
        <p>Withholding is a prepayment. Your actual tax liability is settled when you file your annual return.</p>
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
