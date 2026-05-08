import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Additional Medicare Tax (0.9%) Explained",
  description: "What is the Additional Medicare Tax? When does it kick in? How is it withheld vs owed? Educational only.",
  alternates: { canonical: '/us/additional-medicare-tax' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Additional Medicare Tax (0.9%)</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>The Additional Medicare Tax is a 0.9% surcharge on Medicare wages above $200,000 for single filers or $250,000 for married filing jointly. It is employee-only, your employer does not match it.</p>
        <p>Employer-side rule: employers withhold the Additional Medicare Tax once your wages with that employer exceed $200,000 in a calendar year, regardless of filing status. If you have multiple jobs, you may owe more (or less) at filing time.</p>
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
