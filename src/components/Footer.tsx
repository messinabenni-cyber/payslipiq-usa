import React from 'react';
import Link from 'next/link';
import { MasterDisclaimer } from './MasterDisclaimer';
import { STATES } from '@/lib/states';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/us/pay-stub-checker">AI Pay Stub Explainer</Link></li>
              <li><Link href="/us/paycheck-calculator">Paycheck Calculator</Link></li>
              <li><Link href="/us/salary-after-tax">Salary After Tax</Link></li>
              <li><Link href="/us/overtime-paycheck">Overtime Calculator</Link></li>
              <li><Link href="/us/fica-explained">FICA Explained</Link></li>
              <li><Link href="/us/w4-guide">W-4 Guide</Link></li>
              <li><Link href="/us/401k-deductions">401(k) Explainer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">By State</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {STATES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/us/${s.slug}/paycheck-calculator`}>{s.name} Paycheck Calculator</Link>
                </li>
              ))}
              <li><Link href="/us/learn" className="font-semibold text-blue-700">All 50 states →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Topics</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/us/federal-tax-withholding">Federal withholding</Link></li>
              <li><Link href="/us/social-security-tax">Social Security tax</Link></li>
              <li><Link href="/us/medicare-tax">Medicare tax</Link></li>
              <li><Link href="/us/pre-tax-vs-post-tax-deductions">Pre-tax vs post-tax</Link></li>
              <li><Link href="/us/bonus-tax-paycheck">Bonus tax</Link></li>
              <li><Link href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/methodology">Methodology</Link></li>
              <li><Link href="/trust">Trust Center</Link></li>
              <li><Link href="/ai-transparency">AI Transparency</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/disclaimer">Disclaimers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <MasterDisclaimer variant="footer" />
          <p className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} PayslipIQ. Built for the United States.
          </p>
        </div>
      </div>
    </footer>
  );
}
