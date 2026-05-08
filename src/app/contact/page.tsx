import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Contact PayslipIQ",
  description: "Contact PayslipIQ: general, privacy, security, press, partnerships.",
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contact PayslipIQ</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <ul><li><strong>General:</strong> hello@payslipiq.com</li><li><strong>Privacy / CCPA / VCDPA / CPA / CTDPA / UCPA:</strong> privacy@payslipiq.com</li><li><strong>Security disclosures:</strong> security@payslipiq.com</li><li><strong>Press:</strong> press@payslipiq.com</li><li><strong>Partnerships:</strong> partners@payslipiq.com</li><li><strong>Content corrections:</strong> content@payslipiq.com</li></ul>
        <p>For premium account questions, sign in to your account and use the support widget.</p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
