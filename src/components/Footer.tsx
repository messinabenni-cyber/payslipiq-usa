import React from 'react';
import Link from 'next/link';
import { MasterDisclaimer } from './MasterDisclaimer';
import { STATES } from '@/lib/states';

// The other PayslipIQ country sites. Plain <a> rather than next/link because
// they leave the app, and same-tab with rel="noopener" only — deliberately not
// "noopener noreferrer": noreferrer strips the Referer header, which would make
// this traffic show up as Direct in the receiving site's analytics instead of
// as a referral from payslipiq.com. Every URL is checked live before shipping.
const NETWORK = [
  { href: 'https://payslipiq.co.uk', label: 'United Kingdom & Ireland' },
  { href: 'https://payslip-canada.vercel.app', label: 'Canada' },
  { href: 'https://payslip-australia.vercel.app', label: 'Australia' },
  { href: 'https://payslipiq-ae-pro.vercel.app', label: 'United Arab Emirates' },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
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
              <li><Link href="/your-privacy-choices">Your Privacy Choices</Link></li>
              <li><Link href="/us/accessibility">Accessibility</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/disclaimer">Disclaimers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">PayslipIQ network</h3>
            <p className="mt-3 text-xs text-slate-500">
              Same team, same sourcing rule, a different country&apos;s payroll.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {NETWORK.map((n) => (
                <li key={n.href}>
                  <a href={n.href} rel="noopener">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <MasterDisclaimer variant="footer" />
          {/* Companies Act 2006 s.82 and the Company, LLP and Business Names
              Regulations 2015: the operating company must state its registered
              name, number, place of registration and registered office. */}
          <p className="mt-3 text-xs leading-5 text-slate-500">
            PayslipIQ is a trading name of GoldPaid Ltd, a company registered in England
            and Wales (no. 17382540). Registered office: Unit 217, Bristol Business Centre, 179 Whiteladies Road, Clifton, Bristol BS8 2AG.
            ICO registration ZC214216.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} PayslipIQ. Built for the United States.
          </p>
        </div>
      </div>
    </footer>
  );
}
