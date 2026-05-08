import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Disclaimers — PayslipIQ",
  description: "Master disclaimer + per-tool disclaimers for PayslipIQ. Educational only — not advice.",
  alternates: { canonical: '/disclaimer' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Disclaimers</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Master Disclaimer</h2>
        <p>PayslipIQ provides educational information and estimated calculations only. It does not provide tax, legal, financial, accounting, employment, benefits, or payroll advice. PayslipIQ is not a CPA firm, law firm, financial advisor, payroll provider, or tax authority. Always verify your paycheck, deductions, withholdings, and tax position with your employer&apos;s payroll department, a qualified CPA, the IRS, your state tax authority, or another appropriately qualified professional. Calculations are estimates; your actual paycheck may differ based on factors specific to your employer, location, benefits elections, and personal tax situation.</p>
        <h2>Tool-specific disclaimers</h2>
        <p>Each calculator and explainer page carries its own disclaimer block on the page itself. The Master Disclaimer always applies.</p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
