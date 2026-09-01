import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checkout cancelled | PayslipIQ',
  description: 'No charge was made. Paid checkout is not generally live. Join a waitlist if you want to be notified.',
  alternates: {
    canonical: 'https://payslipiq.com/us/checkout-cancelled',
    languages: {
      'en-US': 'https://payslipiq.com/us/checkout-cancelled',
      'en-GB': 'https://payslipiq.co.uk',
      'en-IE': 'https://payslipiq.co.uk/ie',
      'x-default': 'https://payslipiq.com/us/checkout-cancelled',
    },
  },
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-amber-700">Cancelled</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">No charge was made.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Nothing was billed. Paid checkout is not generally live. The report and monitor pages are waitlists, not live purchase. Email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>{' '}
        if something looked wrong.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link href="/us/premium-pay-stub-report" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Premium Pay Stub Report</div>
          <div className="mt-1 text-sm text-slate-600">Waitlist. Listed $29. Checkout not live.</div>
        </Link>
        <Link href="/us/monthly-paycheck-monitor" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Monthly Paycheck Monitor</div>
          <div className="mt-1 text-sm text-slate-600">Early access. Listed $9/mo. Checkout not live.</div>
        </Link>
      </div>
    </main>
  );
}
