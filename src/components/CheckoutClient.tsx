'use client';

import { useState } from 'react';
import { EmailCapture } from '@/components/EmailCapture';

type Product = 'premium-report' | 'monthly-monitor';

interface Props {
  product: Product;
  label: string;
}

/**
 * Client-side checkout trigger.
 *
 * POSTs to /api/stripe-checkout and redirects the browser to the returned
 * Stripe-hosted checkout URL. If Stripe is not yet configured (the API
 * returns 503), it degrades honestly into an email waitlist so the intent
 * is never lost. No card details ever touch this site.
 */
export function CheckoutClient({ product, label }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'unavailable' | 'error'>('idle');

  async function startCheckout() {
    setStatus('loading');
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible('buy_click', { props: { product } });
    }
    try {
      const res = await fetch('/api/stripe-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      });
      if (res.status === 503) {
        setStatus('unavailable');
        return;
      }
      if (!res.ok) throw new Error('checkout_failed');
      const data = (await res.json()) as { url?: string };
      if (!data.url) throw new Error('missing_url');
      window.location.href = data.url;
    } catch {
      setStatus('error');
    }
  }

  if (status === 'unavailable') {
    return (
      <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <div className="font-semibold text-slate-900">Online payment is not switched on yet.</div>
        <p className="mt-1 text-sm text-slate-700">
          Leave your email and you will get a direct payment link the moment it goes live.
          No spam, no resale of your address.
        </p>
        <EmailCapture
          source={`checkout-${product}`}
          headline="Get the payment link by email"
          subheadline="One email when checkout opens. Nothing else."
          cta="Notify me"
          className="mt-4"
        />
      </div>
    );
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={startCheckout}
        disabled={status === 'loading'}
        data-cta={`checkout_${product}`}
        className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {status === 'loading' ? 'Opening secure checkout…' : label}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-700">
          Checkout could not start. Try again, or email{' '}
          <a href="mailto:hello@payslipiq.com" className="underline">hello@payslipiq.com</a>.
        </p>
      )}
      <p className="mt-3 text-xs text-slate-500">
        Payment is processed by Stripe on a Stripe-hosted page. PayslipIQ never sees or stores card details.
      </p>
    </div>
  );
}
