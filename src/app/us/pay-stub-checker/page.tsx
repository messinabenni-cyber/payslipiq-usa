import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "AI Pay Stub Checker, Plain-English Explanation (US)",
  description: "Upload a US pay stub or paste paycheck numbers. PayslipIQ explains every line, gross pay, federal withholding, FICA, state tax, deductions, net pay,. Educational only.",
  alternates: { canonical: '/us/pay-stub-checker' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">AI Pay Stub Explainer</h1>
      <p className="mt-3 text-lg text-slate-700">
        Upload your pay stub or paste the numbers. We&apos;ll walk you through every line.
      </p>
      <div className="mt-4">
        <MasterDisclaimer variant="long" />
      </div>

      <div className="mt-8 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
        <p className="text-lg font-semibold text-slate-700">Upload your pay stub (PDF, PNG, JPG)</p>
        <p className="mt-2 text-sm text-slate-500">or paste your paycheck numbers below</p>
        <p className="mt-6 inline-block rounded-md bg-amber-50 px-4 py-2 text-xs text-amber-900">
          AI Pay Stub Explainer is currently in private beta, request access via{' '}
          <Link href="/contact" className="font-semibold underline">contact</Link>.
        </p>
      </div>

      <section className="mt-12 prose prose-slate max-w-none">
        <h2>How the explainer works</h2>
        <p>PayslipIQ identifies each line on your pay stub, gross pay, federal withholding, Social Security, Medicare, state tax, local tax (where applicable), pre-tax deductions, post-tax deductions, employer contributions, and net pay, and returns a plain-English summary of what each one means.</p>
        <p>We don&apos;t tell you whether your paycheck is &quot;right&quot;, that&apos;s between you and your payroll team. We help you understand it so you can ask informed questions.</p>
        <h2>Privacy</h2>
        <p>Your file is processed over encrypted transport. Bank account numbers and SSNs are redacted before processing. Free tier: file purged within 24 hours. We do not sell your data. We do not train AI models on your pay stub. See <Link href="/ai-transparency">AI Transparency</Link> and <Link href="/privacy">Privacy</Link>.</p>
        <h2>What we look for</h2>
        <ul>
          <li>Gross pay vs YTD gross</li>
          <li>Federal income tax withholding</li>
          <li>Social Security tax (6.2%)</li>
          <li>Medicare tax (1.45%) + Additional Medicare Tax if applicable</li>
          <li>State income tax (where applicable)</li>
          <li>Local income tax (NYC, Philadelphia, Detroit, Ohio cities, etc.)</li>
          <li>Pre-tax deductions: 401(k), traditional HSA, FSA, pre-tax health insurance</li>
          <li>Post-tax deductions: Roth 401(k), wage garnishments, post-tax benefits</li>
          <li>Employer contributions (informational, doesn&apos;t reduce your pay)</li>
          <li>Net pay (take-home)</li>
        </ul>
      </section>
    </main>
  );
}
