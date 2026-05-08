import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Thanks for your purchase | PayslipIQ',
  description: 'Your PayslipIQ purchase has been received. Look for an email with next steps.',
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-emerald-700">Confirmed</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Thanks. Check your inbox.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Your purchase has been received. A receipt and next-step instructions have been sent to the email you used at checkout. If you do not see it within 5 minutes, check spam or email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link href="/us/" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Back to PayslipIQ</div>
          <div className="mt-1 text-sm text-slate-600">Homepage</div>
        </Link>
        <Link href="/us/pay-stub-checker/" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Try another pay stub</div>
          <div className="mt-1 text-sm text-slate-600">Pay Stub Checker</div>
        </Link>
      </div>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
