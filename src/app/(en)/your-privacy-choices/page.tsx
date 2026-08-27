import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Your Privacy Choices, PayslipIQ (US)',
  description:
    'Do Not Sell or Share My Personal Information. PayslipIQ does not sell personal information and does not share it for cross-context behavioral advertising. Honor GPC. Rights via privacy@payslipiq.com.',
  alternates: { canonical: 'https://payslipiq.com/your-privacy-choices', languages: { 'en-US': 'https://payslipiq.com/your-privacy-choices', 'en-GB': 'https://payslipiq.co.uk', 'en-IE': 'https://payslipiq.co.uk/ie', 'x-default': 'https://payslipiq.com/your-privacy-choices' } },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Your Privacy Choices</h1>
      <p className="mt-2 text-sm text-slate-500">Do Not Sell or Share My Personal Information</p>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>
          PayslipIQ does not sell your personal information. We do not share personal information
          for cross-context behavioral advertising. There is no sale or share for you to turn off
          because that is already how this site is run.
        </p>
        <p>
          This page is the California Consumer Privacy Act / CPRA notice for &quot;Do Not Sell or
          Share My Personal Information&quot; and &quot;Your Privacy Choices.&quot; The operator is
          GoldPaid Ltd (England and Wales no. 17382540), trading as PayslipIQ. This site is for
          US users. See the <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <h2>How to exercise your rights</h2>
        <p>
          Email <a href="mailto:privacy@payslipiq.com">privacy@payslipiq.com</a> to know, access,
          correct, delete, opt out, limit use of sensitive personal information, or raise a
          non-discrimination concern. We honor those rights for all US users, not only California
          residents.
        </p>
        <h2>Global Privacy Control (GPC)</h2>
        <p>
          We honor Global Privacy Control signals. Because we do not sell personal information and
          do not share it for cross-context behavioral advertising, a GPC opt-out is already the
          default for every visitor. You do not need to toggle anything on this page for that
          default to apply.
        </p>
        <h2>Analytics</h2>
        <p>
          We use cookieless Plausible Analytics. We do not run advertising pixels or ad networks
          on this site.
        </p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
