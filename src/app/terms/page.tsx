import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Terms of Service, PayslipIQ (US)",
  description: "PayslipIQ Terms of Service: educational use, no advice, no warranties, US jurisdiction, account terms.",
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p><strong>Effective:</strong> 2026-05-08. By using PayslipIQ you agree to these terms.</p>
        <h2>1. Educational use only</h2>
        <p>PayslipIQ is an educational paycheck explainer. It is not tax, legal, financial, accounting, employment, benefits, or payroll advice.</p>
        <h2>2. No warranties</h2>
        <p>The Service is provided &quot;as is&quot;. We make no warranty of accuracy, completeness, or fitness for a particular purpose. Always verify with your payroll team, a CPA, or the appropriate authority.</p>
        <h2>3. Account terms</h2>
        <p>Premium accounts are subject to subscription billing terms displayed at signup. Cancel anytime via the account settings.</p>
        <h2>4. Acceptable use</h2>
        <p>Do not attempt to scrape, reverse-engineer, or attack the Service. Do not upload others&apos; pay stubs without their consent.</p>
        <h2>5. Jurisdiction</h2>
        <p>These terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws principles.</p>
        <h2>6. Contact</h2>
        <p>legal@payslipiq.com</p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
