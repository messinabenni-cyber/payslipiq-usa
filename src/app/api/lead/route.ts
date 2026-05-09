/**
 * /api/lead - lead capture endpoint with optional Resend integration.
 *
 * POST /api/lead
 * Body: { email: string, source: string, magnet?: string }
 *
 * Behavior:
 *   - Always returns 200 if origin is allowed and email is valid (so the form
 *     UX never breaks even when no email backend is configured).
 *   - If RESEND_API_KEY is set, sends a transactional welcome email and forwards
 *     the lead to RESEND_LEAD_INBOX.
 *   - If RESEND_API_KEY is not set, just logs to the console (Vercel function logs).
 *
 * Required env vars to actually send mail:
 *   RESEND_API_KEY        re_xxx... from resend.com/api-keys
 *   RESEND_FROM_ADDRESS   e.g. hello@payslipiq.com (must be a verified sender domain in Resend)
 *   RESEND_LEAD_INBOX     internal address that gets a copy of every lead, e.g. team@payslipiq.com
 */
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadBody {
  email: string;
  source: string;
  magnet?: string;
}

function isAllowedRequest(req: NextRequest): boolean {
  const origin = req.headers.get('origin') ?? '';
  const referer = req.headers.get('referer') ?? '';
  const candidate = origin || referer;
  if (!candidate) return false;
  try {
    const url = new URL(candidate);
    const host = url.hostname;
    return host === 'payslipiq.com' || host === 'www.payslipiq.com' || host.endsWith('.vercel.app') || host === 'localhost' || host === '127.0.0.1';
  } catch {
    return false;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!isAllowedRequest(req)) {
    return NextResponse.json({ error: 'origin_not_allowed' }, { status: 403 });
  }

  let body: LeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  if (!body.email || !EMAIL_RE.test(body.email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? 'hello@payslipiq.com';
  const leadInbox = process.env.RESEND_LEAD_INBOX;

  // Always log so the lead is captured in Vercel function logs even without Resend.
  console.log('[lead]', JSON.stringify({ email: body.email, source: body.source, magnet: body.magnet, ts: Date.now() }));

  if (!apiKey) {
    return NextResponse.json({ ok: true, note: 'logged_only_no_email_provider' });
  }

  // Build subject + body based on source.
  const isFreeGuide = body.magnet === 'pay-stub-anatomy-guide' || body.source === 'free-guide';
  const subject = isFreeGuide ? 'Your PayslipIQ pay stub anatomy guide' : 'Welcome to PayslipIQ';
  const html = isFreeGuide
    ? `
      <p>Thanks for asking for the guide.</p>
      <p>Read it here: <a href="https://payslipiq.com/us/free-guide/">https://payslipiq.com/us/free-guide/</a></p>
      <p>This is the same content as the on-page guide, formatted to print or save as PDF (Ctrl/Cmd + P, then Save as PDF).</p>
      <p>If you want a personalized review of your own pay stub, the <a href="https://payslipiq.com/us/premium-pay-stub-report/">Premium Pay Stub Report</a> is $29 one-time.</p>
      <p>Educational only. Not tax, legal, financial, or payroll advice. Always verify important matters with payroll, the IRS, or a qualified CPA.</p>
      <p style="color:#64748b;font-size:12px;">PayslipIQ USA. Unsubscribe anytime. Reply STOP.</p>
    `
    : `
      <p>Thanks for joining PayslipIQ.</p>
      <p>Bookmark <a href="https://payslipiq.com/us/">payslipiq.com/us</a>. Open the <a href="https://payslipiq.com/us/pay-stub-checker/">Pay Stub Checker</a> next time a paycheck looks off.</p>
      <p>Educational only. Not advice.</p>
      <p style="color:#64748b;font-size:12px;">PayslipIQ USA. Unsubscribe anytime. Reply STOP.</p>
    `;

  // Fire-and-forget the user email and the internal lead notification in parallel.
  const promises: Promise<unknown>[] = [
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: fromAddress, to: body.email, subject, html })
    }).catch((e) => console.error('[lead] resend user-email failed:', e))
  ];
  if (leadInbox) {
    promises.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: fromAddress,
          to: leadInbox,
          subject: `[lead] ${body.source} - ${body.email}`,
          html: `<p>New lead on PayslipIQ.</p><pre>${JSON.stringify(body, null, 2)}</pre>`
        })
      }).catch((e) => console.error('[lead] resend internal-notify failed:', e))
    );
  }
  await Promise.allSettled(promises);

  return NextResponse.json({ ok: true });
}
