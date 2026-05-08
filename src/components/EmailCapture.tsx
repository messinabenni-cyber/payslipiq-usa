'use client';
import { useState } from 'react';

interface Props {
  source: string;          // page identifier passed to API for attribution
  headline?: string;
  subheadline?: string;
  cta?: string;
  className?: string;
}

export function EmailCapture({
  source,
  headline = 'Free pay stub anatomy guide',
  subheadline = 'A 12-page PDF that walks through every line on a US pay stub. Sent in seconds. Educational only.',
  cta = 'Email me the guide',
  className = ''
}: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) { setErrMsg('Please enter a valid email'); setStatus('error'); return; }
    setStatus('submitting');
    setErrMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, magnet: 'pay-stub-anatomy-guide' })
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('done');
    } catch {
      setStatus('error');
      setErrMsg('Something went wrong. Try again or email hello@payslipiq.com.');
    }
  }

  if (status === 'done') {
    return (
      <div className={'rounded-lg border border-emerald-200 bg-emerald-50 p-5 ' + className}>
        <div className="font-semibold text-emerald-900">Sent. Check your inbox.</div>
        <p className="mt-1 text-[14px] text-emerald-800">If you do not see it within 5 minutes, check spam.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={'rounded-lg border border-slate-200 bg-white p-5 ' + className} aria-label="Free pay stub guide signup">
      <div className="font-semibold text-slate-900">{headline}</div>
      <p className="mt-1 text-[14px] text-slate-600">{subheadline}</p>
      <div className="mt-3 flex gap-2">
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
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-[14px] font-semibold hover:bg-blue-700 disabled:bg-slate-400"
        >
          {status === 'submitting' ? 'Sending...' : cta}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-[12px] text-red-600">{errMsg}</p>
      )}
      <p className="mt-3 text-[11px] text-slate-500">No spam. Unsubscribe one-click. Read the <a href="/us/privacy/" className="underline">privacy policy</a>.</p>
    </form>
  );
}
