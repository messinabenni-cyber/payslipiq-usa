// PayslipIQ USA, lead capture endpoint.
// Country-bounded under /us/api/ to mirror the rest of the US site architecture.
// Calls Resend if RESEND_API_KEY is set; otherwise console-logs and returns OK.
// Stores nothing server-side, pass to your CRM / ESP from here.

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadPayload {
  email?: string;
  source?: string;
  notes?: string;
  state?: string;
  consent?: boolean;
}

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Defense in depth: reject cross-origin POSTs that aren't from PayslipIQ surfaces.
function isAllowedRequest(req: NextRequest): boolean {
  const origin = req.headers.get('origin') ?? '';
  const referer = req.headers.get('referer') ?? '';
  const candidate = origin || referer;
  if (!candidate) return false;
  try {
    const url = new URL(candidate);
    const host = url.hostname;
    return (
      host === 'payslipiq.com' ||
      host === 'www.payslipiq.com' ||
      host.endsWith('.vercel.app') ||
      host === 'localhost' ||
      host === '127.0.0.1'
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!isAllowedRequest(req)) {
    return NextResponse.json({ error: 'origin_not_allowed' }, { status: 403 });
  }

  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const source = (body.source ?? 'unknown').slice(0, 64);
  const notes = (body.notes ?? '').slice(0, 500);
  const state = (body.state ?? '').slice(0, 32);

  if (!EMAIL_RX.test(email)) return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  if (!body.consent) return NextResponse.json({ error: 'consent_required' }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const list = process.env.RESEND_AUDIENCE_ID;
  const fromAddr = process.env.RESEND_FROM ?? 'PayslipIQ <no-reply@payslipiq.com>';
  const notifyTo = process.env.LEAD_NOTIFY_TO;

  // Fan-out: (1) audience add, (2) confirmation, (3) admin notify.
  const tasks: Promise<unknown>[] = [];

  if (apiKey && list) {
    tasks.push(
      fetch(`https://api.resend.com/audiences/${list}/contacts`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, unsubscribed: false })
      })
    );
  }

  if (apiKey) {
    tasks.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: fromAddr,
          to: [email],
          subject: 'PayslipIQ, confirmation',
          text:
            `Thanks for signing up to PayslipIQ.\n\nWe will email you when ${source.replace(/-/g, ' ')} is ready.\n\nPayslipIQ is educational only, not tax, legal, payroll, accounting, HR, employment, or financial advice.\n\n, PayslipIQ`
        })
      })
    );

    if (notifyTo) {
      tasks.push(
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: fromAddr,
            to: [notifyTo],
            subject: `New PayslipIQ lead, ${source}`,
            text: `Email: ${email}\nSource: ${source}\nState: ${state}\nNotes: ${notes}\n`
          })
        })
      );
    }
  } else {
    console.log('[lead]', { email, source, state, notes, ts: new Date().toISOString() });
  }

  await Promise.allSettled(tasks);
  return NextResponse.json({ ok: true });
}
