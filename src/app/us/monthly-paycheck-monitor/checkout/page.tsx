import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckoutClient } from '@/components/CheckoutClient';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Checkout, Monthly Paycheck Monitor',
  description: 'Secure Stripe checkout for the PayslipIQ Monthly Paycheck Monitor. $9/month, cancel anytime. Educational only, not advice.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://payslipiq.com/us/monthly-paycheck-monitor/checkout' },
};

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-xl">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
        <Link href="/us/monthly-paycheck-monitor" className="hover:underline">Monthly Paycheck Monitor</Link>
        <span className="mx-2">/</span>
        <span aria-current="page">Checkout</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>

      <div className="mt-6 rounded-2xl border border-slate-200 p-6">
        <div className="flex items-baseline justify-between">
          <div className="font-semibold text-slate-900">Monthly Paycheck Monitor</div>
          <div className="text-2xl font-semibold">$9<span className="text-base font-normal text-slate-500">/mo</span></div>
        </div>
        <p className="mt-1 text-sm text-slate-600">Cancel anytime. Access until the end of the billing month.</p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700">
          <li>Unlimited pay stub uploads per month</li>
          <li>Anomaly alerts on net pay changes over 5%</li>
          <li>Withholding shift detection</li>
          <li>Year-to-date trend chart</li>
          <li>Monthly email digest</li>
          <li>One free Premium Pay Stub Report per quarter ($29 value)</li>
        </ul>

        <CheckoutClient product="monthly-monitor" label="Start with Stripe, $9/mo" />
      </div>

      <p className="mt-6 text-sm text-slate-600">
        After payment you will receive setup instructions by email. Cover your SSN, bank details,
        and other identifiers before uploading any pay stub.
      </p>

      <div className="mt-10">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
