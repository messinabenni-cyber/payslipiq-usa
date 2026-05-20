import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Learn, All Paycheck Topics (US)",
  description: "Index of all PayslipIQ paycheck guides for US workers: federal, state, FICA, W-4, 401(k), benefits, overtime. Educational only.",
  alternates: { canonical: '/us/learn' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Learn, All Paycheck Topics</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Federal</h2><ul><li><a href="/us/federal-tax-withholding">Federal income tax withholding</a></li><li><a href="/us/fica-explained">FICA explained</a></li><li><a href="/us/social-security-tax">Social Security tax</a></li><li><a href="/us/medicare-tax">Medicare tax</a></li><li><a href="/us/additional-medicare-tax">Additional Medicare Tax</a></li><li><a href="/us/bonus-tax-paycheck">Bonus tax explained</a></li></ul>
        <h2>Forms</h2><ul><li><a href="/us/w4-guide">W-4 guide</a></li><li><a href="/us/w2-explained">How to read a W-2</a></li><li><a href="/us/pay-stub-anatomy">How to read a pay stub</a></li><li><a href="/us/pay-stub-glossary">Pay stub glossary</a></li></ul>
        <h2>Deductions</h2><ul><li><a href="/us/401k-deductions">401(k) deductions</a></li><li><a href="/us/health-insurance-deductions">Health insurance deductions</a></li><li><a href="/us/pre-tax-vs-post-tax-deductions">Pre-tax vs post-tax</a></li></ul>
        <h2>Problems</h2><ul><li><a href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</a></li><li><a href="/us/pay-stub-mistakes">Common pay stub mistakes</a></li><li><a href="/us/paycheck-comparison">Paycheck comparison</a></li></ul>
        <h2>By worker type</h2><ul><li><a href="/us/roles">Paycheck guides by worker type</a> — hourly, salaried, tipped, gig, contractor, remote, multi-state, federal, military, teacher, nurse, seasonal, and student workers</li></ul>
        <h2>By state</h2><p>50 state-specific paycheck pages. Start with <a href="/us/california">California</a>, <a href="/us/new-york">New York</a>, <a href="/us/texas">Texas</a>, or any of the 50 from the footer.</p>
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
