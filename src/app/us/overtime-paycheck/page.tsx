import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "How Is Overtime Taxed?, Overtime Pay Calculator",
  description: "Overtime myth busted: same tax rate as regular wages, just a higher pay rate. State daily-overtime rules. Educational only.",
  alternates: { canonical: '/us/overtime-paycheck' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Overtime Pay & Taxes</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Overtime is paid at <strong>1.5×</strong> your regular rate (federal FLSA: hours over 40 in a workweek). Some states (CA, NV, AK, CO, HI) have stricter daily-overtime rules.</p>
        <h2>The myth</h2>
        <p><em>"Overtime is taxed at a higher rate, so it is not worth working."</em>false. Overtime hours are paid at a higher <em>rate</em> but taxed at the same <em>rate</em> as regular wages. A single big check may be over-withheld because payroll annualizes it; the over-withholding comes back via your refund.</p>
        <h2>FLSA basics</h2>
        <ul><li>Non-exempt employees only (most salaried managers/professionals are exempt)</li><li>1.5× the regular rate for hours over 40 in a workweek</li><li>Workweek = a fixed, recurring 168-hour period designated by the employer</li></ul>
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
