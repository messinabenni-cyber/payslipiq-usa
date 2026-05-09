'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HealthCheck {
  name: string;
  url: string;
  status: 'checking' | 'ok' | 'down';
  responseTime?: number;
}

const ENDPOINTS: Omit<HealthCheck, 'status'>[] = [
  { name: 'Homepage', url: '/us/' },
  { name: 'Pay Stub Checker', url: '/us/pay-stub-checker/' },
  { name: 'Paycheck Calculator', url: '/us/paycheck-calculator/' },
  { name: 'State tax index', url: '/us/state-tax/' },
  { name: 'API: lead capture', url: '/api/lead' },
  { name: 'API: pay stub analyzer', url: '/api/analyze-paystub' }
];

export default function StatusPage() {
  const [checks, setChecks] = useState<HealthCheck[]>(
    ENDPOINTS.map(e => ({ ...e, status: 'checking' as const }))
  );
  const [lastChecked, setLastChecked] = useState<string>('');

  useEffect(() => {
    Promise.all(
      ENDPOINTS.map(async (e) => {
        const start = Date.now();
        try {
          const res = await fetch(e.url, { method: 'HEAD', cache: 'no-store' });
          const responseTime = Date.now() - start;
          // 2xx, 3xx, or 405 (HEAD not supported but route exists) all count as up.
          const ok = res.ok || res.status === 405 || (res.status >= 300 && res.status < 400);
          return { ...e, status: (ok ? 'ok' : 'down') as 'ok' | 'down', responseTime };
        } catch {
          return { ...e, status: 'down' as const, responseTime: Date.now() - start };
        }
      })
    ).then((results) => {
      setChecks(results);
      setLastChecked(new Date().toLocaleString('en-US'));
    });
  }, []);

  const allOk = checks.every(c => c.status === 'ok');
  const anyChecking = checks.some(c => c.status === 'checking');

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Status</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">PayslipIQ status.</h1>
      <p className="mt-4 text-lg text-slate-700 leading-relaxed">
        Live health check of every public PayslipIQ endpoint. The probe runs from your browser when this page loads.
      </p>

      <div className={'mt-8 rounded-lg border p-5 ' + (
        anyChecking ? 'border-slate-300 bg-slate-50' :
        allOk ? 'border-emerald-300 bg-emerald-50' : 'border-amber-300 bg-amber-50'
      )}>
        <div className="flex items-center gap-3">
          <span className={'h-3 w-3 rounded-full ' + (
            anyChecking ? 'bg-slate-400 animate-pulse' :
            allOk ? 'bg-emerald-500' : 'bg-amber-500'
          )} />
          <span className="font-semibold text-slate-900">
            {anyChecking ? 'Checking...' : allOk ? 'All systems operational.' : 'Some endpoints are degraded.'}
          </span>
        </div>
        {lastChecked && <div className="mt-1 text-[12px] text-slate-600">Last checked: {lastChecked}</div>}
      </div>

      <ul className="mt-8 grid gap-2">
        {checks.map((c) => (
          <li key={c.url} className="rounded-md border border-slate-200 bg-white p-4 flex items-center gap-3">
            <span className={'h-2.5 w-2.5 rounded-full shrink-0 ' + (
              c.status === 'checking' ? 'bg-slate-300 animate-pulse' :
              c.status === 'ok' ? 'bg-emerald-500' : 'bg-amber-500'
            )} />
            <div className="flex-1">
              <div className="text-[14px] font-medium text-slate-900">{c.name}</div>
              <div className="text-[12px] text-slate-500 font-mono">{c.url}</div>
            </div>
            <div className="text-[12px] text-slate-600">
              {c.status === 'ok' && c.responseTime !== undefined ? `${c.responseTime}ms` : c.status === 'down' ? 'down' : '...'}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-[14px] text-slate-600">
        For dedicated 24/7 monitoring with alerts, PayslipIQ uses third-party uptime monitoring. Email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>{' '}
        to report a real outage that this page does not reflect.
      </p>

      <p className="mt-4 text-[14px] text-slate-600">
        See also: <Link href="/us/security/" className="text-blue-600 hover:underline">Security</Link>,{' '}
        <Link href="/us/trust/" className="text-blue-600 hover:underline">Trust Center</Link>,{' '}
        <Link href="/.well-known/security.txt" className="text-blue-600 hover:underline">security.txt</Link>.
      </p>
    </main>
  );
}
