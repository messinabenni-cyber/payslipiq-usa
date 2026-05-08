import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "How PayslipIQ Works",
  description: "Three steps: pick a tool, we process and explain, you take it from there. PayslipIQ is a translator, not a representative.",
  alternates: { canonical: '/how-it-works' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">How PayslipIQ Works</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Step 1 — Pick what you want to understand</h2>
        <p>Either upload a pay stub at the <Link href="/us/pay-stub-checker">AI Pay Stub Explainer</Link>, or estimate from gross with the <Link href="/us/paycheck-calculator">Paycheck Calculator</Link>.</p>
        <h2>Step 2 — We process and explain</h2>
        <p>For uploaded pay stubs, we identify each line and return a plain-English explanation. For calculators, we compute estimates using current IRS and state tax tables.</p>
        <h2>Step 3 — You take it from there</h2>
        <p>PayslipIQ doesn&apos;t talk to your employer. We don&apos;t fix payroll. We don&apos;t represent you in any dispute. We help you understand the numbers, so you can confirm a paycheck looks right, spot a line that doesn&apos;t, frame a question to HR/payroll, or confirm with a CPA.</p>
        <h2>What you will never get from PayslipIQ</h2>
        <ul><li>Tax advice.</li><li>Legal advice.</li><li>A guarantee that any number is exact.</li><li>A demand or dispute filed on your behalf.</li><li>A login wall on the basic explainer.</li></ul>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
