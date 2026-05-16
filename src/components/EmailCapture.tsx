'use client';
import { useState } from 'react';

// 2026-05-16: extended to support waitlist mode for the AI Pay Stub Checker beta.
// Audit found /us/pay-stub-checker/'s "Request beta access" CTA pointed at /contact
// (form gate, conversion-killing). New `variant: 'waitlist'` ships an inline email +
// state capture with Plausible `waitlist_signup` event. Same /api/lead/ endpoint.

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  }
}

const US_STATES_FOR_WAITLIST = [
  ['', 'State (optional)'], ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'],
  ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District of Columbia'],
  ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'],
  ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'], ['MD', 'Maryland'],
  ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'], ['MS', 'Mississippi'], ['MO', 'Missouri'],
  ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'],
  ['NM', 'New Mexico'], ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'],
  ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'],
  ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
] as const;

interface Props {
  source: string;          // page identifier passed to API for attribution
  headline?: string;
  subheadline?: string;
  cta?: string;
  className?: string;
  /** 'lead-magnet' (default) sends the pay-stub-anatomy PDF; 'waitlist' captures interest in a private-beta tool. */
  variant?: 'lead-magnet' | 'waitlist';
  /** Required when variant='waitlist': identifies which waitlist (e.g. 'ai-pay-stub-checker', 'paycheck-comparison'). */
  waitlistId?: string;
}

export function EmailCapture({
  source,
  headline,
  subheadline,
  cta,
  className = '',
  variant = 'lead-magnet',
  waitlistId,
}: Props) {
  const isWaitlist = variant === 'waitlist';
  const _headline = headline ?? (isWaitlist ? 'Join the waitlist' : 'Free pay stub anatomy guide');
  const _subheadline = subheadline ?? (isWaitlist
    ? 'The AI Pay Stub Checker is in private beta. Drop your email and we will notify you when it opens. No spam, unsubscribe any time.'
    : 'A 12-page PDF that walks through every line on a US pay stub. Sent in seconds. Educational only.');
  const _cta = cta ?? (isWaitlist ? 'Notify me when it opens' : 'Email me the guide');

  const [email, setEmail] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) { setErrMsg('Please enter a valid email'); setStatus('error'); return; }
    setStatus('submitting');
    setErrMsg('');
    try {
      const body = isWaitlist
        ? { email, source, waitlist: waitlistId ?? source, meta: { state: stateCode || undefined } }
        : { email, source, magnet: 'pay-stub-anatomy-guide' };
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('done');
      if (isWaitlist && typeof window !== 'undefined' && window.plausible) {
        window.plausible('waitlist_signup', {
          props: { source, list: waitlistId ?? source, state: stateCode || 'unspecified' },
        });
      }
    } catch {
      setStatus('error');
      setErrMsg('Something went wrong. Try again or email hello@payslipiq.com.');
    }
  }

  if (status === 'done') {
    return (
      <div className={'rounded-lg border border-emerald-200 bg-emerald-50 p-5 ' + className}>
        <div className="font-semibold text-emerald-900">{isWaitlist ? "You're on the list." : 'Sent. Check your inbox.'}</div>
        <p className="mt-1 text-[14px] text-emerald-800">
          {isWaitlist
            ? 'We will email you when the AI Pay Stub Checker opens. Until then, the free Paycheck Calculator estimates every line of any US pay stub.'
            : 'If you do not see it within 5 minutes, check spam.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={'rounded-lg border border-slate-200 bg-white p-5 ' + className} aria-label={isWaitlist ? 'AI Pay Stub Checker waitlist signup' : 'Free pay stub guide signup'}>
      <div className="font-semibold text-slate-900">{_headline}</div>
      <p className="mt-1 text-[14px] text-slate-600">{_subheadline}</p>
      <div className="mt-3 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Your email"
          className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-[14px] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {isWaitlist && (
          <select
            aria-label="Your state (optional)"
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value)}
            className="sm:w-44 rounded-md border border-slate-300 px-3 py-2 text-[14px] bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {US_STATES_FOR_WAITLIST.map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        )}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-[14px] font-semibold hover:bg-blue-700 disabled:bg-slate-400"
        >
          {status === 'submitting' ? 'Sending...' : _cta}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-[12px] text-red-600">{errMsg}</p>
      )}
      <p className="mt-3 text-[11px] text-slate-500">No spam. Unsubscribe one-click. Read the <a href="/us/privacy/" className="underline">privacy policy</a>.</p>
    </form>
  );
}
