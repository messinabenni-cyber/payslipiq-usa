import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckoutClient } from '@/components/CheckoutClient';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Checkout, Premium Pay Stub Report',
  description: 'Secure Stripe checkout for the PayslipIQ Premium Pay Stub Report. $29 one-time. Educational only, not advice.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://payslipiq.com/us/premium-pay-stub-report/checkout' },
};

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-xl">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
        <Link href="/us/premium-pay-stub-report" className="hover:underline">Premium Pay Stub Report</Link>
        <span className="mx-2">/</span>
        <span aria-current="page">Checkout</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>

      <div className="mt-6 rounded-2xl border border-slate-200 p-6">
        <div className="flex items-baseline justify-between">
          <div className="font-semibold text-slate-900">Premium Pay Stub Report</div>
          <div className="text-2xl font-semibold">$29</div>
        </div>
        <p className="mt-1 text-sm text-slate-600">One-time, per pay stub. No subscription.</p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700">
          <li>12-page printable PDF report</li>
          <li>Line-by-line breakdown of every deduction</li>
          <li>Federal, state, FICA, and local tax check</li>
          <li>W-4 withholding optimization checklist</li>
          <li>10-question pack to take to payroll</li>
          <li>7-day refund if the report did not match the upload</li>
        </ul>

        <CheckoutClient product="premium-report" label="Pay $29 with Stripe" />
      </div>

      <p className="mt-6 text-sm text-slate-600">
        After payment you will receive upload instructions by email. Most reports are delivered
        within 60 minutes; complex multi-state stubs can take up to 24 hours. Cover your SSN,
        bank details, and other identifiers before uploading.
      </p>

      <div className="mt-10">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
