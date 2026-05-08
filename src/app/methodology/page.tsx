import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Methodology, How PayslipIQ Builds Its Answers",
  description: "Sources, refresh schedule, and editorial standards behind every PayslipIQ output. Educational only.",
  alternates: { canonical: '/methodology' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Methodology</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Where our numbers come from</h2>
        <p>Federal income tax withholding: IRS Publication 15-T. FICA: IRS + SSA annual notices. State income tax: each state department of revenue. Overtime / FLSA: US Department of Labor.</p>
        <h2>How calculators work</h2>
        <p>Calculators are <strong>rule-based code</strong>not AI predictions. Each calculator function is unit-tested against published examples.</p>
        <h2>How explanations work</h2>
        <p>The plain-English summary alongside numeric results is AI-generated under the constraints in <Link href="/ai-transparency">AI Transparency</Link>. Numbers are never rewritten by AI.</p>
        <h2>How state pages are written</h2>
        <p>Each state page combines a state-context block, current state tax rates from the state authority, state-specific paycheck nuances (local taxes, SDI/PFL, daily overtime), an FAQ, and a disclaimer block.</p>
        <h2>Update schedule</h2>
        <ul><li>Federal tax tables: annual.</li><li>State tax tables: annual + within 30 days of mid-year statutory change.</li><li>Pay stub law changes: within 60 days of effective date.</li></ul>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
