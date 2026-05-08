import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "AI Transparency at PayslipIQ",
  description: "Where AI is used at PayslipIQ, where it is not, what its limits are, and how it is bounded. Educational only.",
  alternates: { canonical: '/ai-transparency' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">AI Transparency</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>PayslipIQ uses AI for one job: making payroll readable. We disclose every place AI is used, what it does, and what its limits are.</p>
        <h2>Where AI is used</h2>
        <ol><li><strong>Pay Stub Explainer.</strong> An AI-assisted parser identifies each line on a pay stub and returns a plain-English explanation. Numbers come from the parsed JSON, not from AI.</li><li><strong>Calculator narrative.</strong> A plain-English summary alongside numeric results. Numbers themselves are deterministic.</li><li><strong>Ask Payroll generator.</strong> Drafts a polite, factual message to HR/payroll. PayslipIQ does not send the message.</li></ol>
        <h2>Where AI is NOT used</h2>
        <ul><li>Tax-rate lookups (those come from public IRS / state authority sources).</li><li>Eligibility decisions.</li><li>Refund predictions.</li><li>Personalized tax advice.</li><li>Profiling or segmentation.</li><li>Advertising.</li></ul>
        <h2>AI limits we openly acknowledge</h2>
        <ul><li>AI may misread non-standard pay stub formats.</li><li>AI may lag the most recent state-specific tax rule changes.</li><li>AI cannot replace a CPA, tax attorney, or HR/payroll team.</li></ul>
        <h2>Disclosure on every AI output</h2>
        <p>Every AI output ends with: <em>Estimate only, not advice. AI may misread unusual pay stubs or lag recent rule changes. Always verify with your payroll department, a qualified CPA, the IRS, or your state tax authority.</em></p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
