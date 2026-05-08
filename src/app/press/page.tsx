import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Press, PayslipIQ",
  description: "Press kit and contact for PayslipIQ. Founder background, brand assets, fact sheet.",
  alternates: { canonical: '/press' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Press</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>PayslipIQ is the plain-English paycheck intelligence platform for American workers. Press inquiries: <strong>press@payslipiq.com</strong>.</p>
        <h2>Fact sheet</h2>
        <ul><li>Independent media + tools brand.</li><li>Educational only, not tax, legal, or financial advice.</li><li>Covers all 50 states + DC.</li><li>Federal-aware: IRS Publication 15-T methodology, FICA, FLSA.</li><li>Privacy-first: Plausible cookieless analytics, no third-party trackers.</li></ul>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
