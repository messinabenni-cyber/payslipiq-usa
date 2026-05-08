/**
 * Stripe Checkout session creator.
 * POST /api/stripe-checkout
 * Body: { product: 'premium-report' | 'monthly-monitor' }
 *
 * Returns: { url: string } - Stripe-hosted checkout page URL.
 *
 * Required env vars (set in Vercel before this route returns 200):
 *   STRIPE_SECRET_KEY                  - sk_live_... or sk_test_...
 *   STRIPE_PRICE_ID_PREMIUM_REPORT     - price_... ($29 one-time)
 *   STRIPE_PRICE_ID_MONTHLY_MONITOR    - price_... ($9/mo recurring)
 *   STRIPE_SUCCESS_URL                 - default: https://payslipiq.com/us/thanks/
 *   STRIPE_CANCEL_URL                  - default: https://payslipiq.com/us/checkout-cancelled/
 */
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface CheckoutBody {
  product: 'premium-report' | 'monthly-monitor';
  email?: string;
}

const PRICE_BY_PRODUCT: Record<CheckoutBody['product'], { envVar: string; mode: 'payment' | 'subscription' }> = {
  'premium-report': { envVar: 'STRIPE_PRICE_ID_PREMIUM_REPORT', mode: 'payment' },
  'monthly-monitor': { envVar: 'STRIPE_PRICE_ID_MONTHLY_MONITOR', mode: 'subscription' }
};

function isAllowedRequest(req: NextRequest): boolean {
  const origin = req.headers.get('origin') ?? '';
  const referer = req.headers.get('referer') ?? '';
  const candidate = origin || referer;
  if (!candidate) return false;
  try {
    const url = new URL(candidate);
    const host = url.hostname;
    return host === 'payslipiq.com' || host === 'www.payslipiq.com' || host.endsWith('.vercel.app') || host === 'localhost';
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!isAllowedRequest(req)) {
    return NextResponse.json({ error: 'origin_not_allowed' }, { status: 403 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json({ error: 'stripe_not_configured', message: 'Stripe billing is not yet enabled. Email hello@payslipiq.com to be notified when it goes live.' }, { status: 503 });
  }

  let body: CheckoutBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const productConfig = PRICE_BY_PRODUCT[body.product];
  if (!productConfig) {
    return NextResponse.json({ error: 'invalid_product' }, { status: 400 });
  }

  const priceId = process.env[productConfig.envVar];
  if (!priceId) {
    return NextResponse.json({ error: 'price_not_configured', envVar: productConfig.envVar }, { status: 503 });
  }

  const successUrl = process.env.STRIPE_SUCCESS_URL ?? 'https://payslipiq.com/us/thanks/';
  const cancelUrl = process.env.STRIPE_CANCEL_URL ?? 'https://payslipiq.com/us/checkout-cancelled/';

  // Direct Stripe REST API call (no SDK dependency to keep bundle lean).
  const params = new URLSearchParams();
  params.append('mode', productConfig.mode);
  params.append('line_items[0][price]', priceId);
  params.append('line_items[0][quantity]', '1');
  params.append('success_url', `${successUrl}?session_id={CHECKOUT_SESSION_ID}`);
  params.append('cancel_url', cancelUrl);
  params.append('allow_promotion_codes', 'true');
  if (body.email) {
    params.append('customer_email', body.email);
  }

  try {
    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });
    if (!stripeRes.ok) {
      const errBody = await stripeRes.text();
      return NextResponse.json({ error: 'stripe_error', detail: errBody }, { status: 502 });
    }
    const session = await stripeRes.json();
    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    return NextResponse.json({ error: 'stripe_unreachable', message: 'Stripe is unreachable. Try again in a moment.' }, { status: 502 });
  }
}
