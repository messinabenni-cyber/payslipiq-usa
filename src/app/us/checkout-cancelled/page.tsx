import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checkout cancelled | PayslipIQ',
  description: 'Your PayslipIQ checkout was cancelled. No charge was made.',
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-amber-700">Cancelled</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">No charge was made.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        You cancelled the checkout. Nothing was billed. If something on the checkout page did not look right, email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>{' '}
        and we will look into it.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link href="/us/premium-pay-stub-report" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Premium Pay Stub Report</div>
          <div className="mt-1 text-sm text-slate-600">Try again, $29 one-time.</div>
        </Link>
        <Link href="/us/monthly-paycheck-monitor" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Monthly Paycheck Monitor</div>
          <div className="mt-1 text-sm text-slate-600">Try again, $9/mo.</div>
        </Link>
      </div>
    </main>
  );
}
