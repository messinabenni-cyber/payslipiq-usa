import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Trust Center, PayslipIQ",
  description: "PayslipIQ Trust Center: how we work, how AI is used, what data we hold, and what we won't claim. Educational only, not advice.",
  alternates: { canonical: '/trust' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Trust Center</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>PayslipIQ exists to help American workers understand their paycheck. To do that responsibly, we publish how we work, how we use AI, what data we hold, what we will not claim, and how to verify everything we tell you.</p>
        <h2>What PayslipIQ is, and is not</h2>
        <p><strong>What we are:</strong> An educational pay stub and paycheck explainer for American workers. A free set of paycheck calculators and explainer tools. An AI-assisted plain-English translator of payroll line items.</p>
        <p><strong>What we are not:</strong> A CPA, tax preparer, or enrolled agent. A licensed financial, legal, accounting, or employment advisor. A payroll provider or payroll-correction service. An employer-dispute representative. Affiliated with the IRS, Social Security Administration, Department of Labor, or any state tax authority.</p>
        <h2>Trust principles</h2>
        <ol><li>Educational only.</li><li>Plain English.</li><li>Privacy by design.</li><li>Transparent AI.</li><li>Verify with the source.</li><li>No predatory monetization.</li><li>Acquisition-grade compliance.</li></ol>
        <h2>Where to go next</h2>
        <ul><li><Link href="/security">Security</Link></li><li><Link href="/ai-transparency">AI Transparency</Link></li><li><Link href="/methodology">Methodology</Link></li><li><Link href="/privacy">Privacy</Link></li><li><Link href="/disclaimer">Disclaimers</Link></li><li><Link href="/how-it-works">How PayslipIQ works</Link></li></ul>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
