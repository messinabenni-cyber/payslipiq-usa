import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Thanks | PayslipIQ',
  description: 'If you completed a payment, look for an email. Paid checkout is not generally live on PayslipIQ.',
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-600">Next step</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">If you paid, check your inbox.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Paid checkout is not generally live on PayslipIQ. The Premium Pay Stub Report and Paycheck Monitor are waitlists. If you did complete a payment, a receipt would go to the email used. If you did not pay, you can ignore this page. Questions:{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link href="/us/premium-pay-stub-report" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Premium report waitlist</div>
          <div className="mt-1 text-sm text-slate-600">Listed $29. Checkout not live.</div>
        </Link>
        <Link href="/us/pay-stub-checker" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
          <div className="font-semibold text-slate-900">Free Pay Stub Checker</div>
          <div className="mt-1 text-sm text-slate-600">No account required.</div>
        </Link>
      </div>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
