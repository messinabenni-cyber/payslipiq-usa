import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Paycheck Guides by Worker Type (US)',
  description:
    'Paycheck guides for hourly, salaried, tipped, gig, contractor, remote, multi-state, federal, military, teacher, nurse, seasonal, and student workers. Educational only.',
  alternates: { canonical: '/us/roles' },
};

const GROUPS: { heading: string; items: { href: string; label: string; blurb: string }[] }[] = [
  {
    heading: 'How you are paid',
    items: [
      { href: '/us/hourly-worker-paycheck-calculator', label: 'Hourly workers', blurb: 'Hours, overtime, and shift differentials on an hourly paycheck.' },
      { href: '/us/salaried-worker-paycheck-calculator', label: 'Salaried workers', blurb: 'An annual salary split into per-period pay and withholding.' },
      { href: '/us/tipped-worker-paycheck-guide', label: 'Tipped workers', blurb: 'Tip credits, cash wage, and topping up to minimum wage.' },
    ],
  },
  {
    heading: 'Independent and flexible work',
    items: [
      { href: '/us/gig-worker-paycheck-guide', label: 'Gig workers', blurb: 'No withholding, self-employment tax, and quarterly estimates.' },
      { href: '/us/contractor-vs-employee-paycheck-guide', label: 'Contractor vs employee', blurb: '1099 vs W-2: who pays which taxes, and why it matters.' },
      { href: '/us/remote-worker-state-tax-guide', label: 'Remote workers', blurb: 'Which state taxes your pay when you work from home.' },
      { href: '/us/multi-state-payroll-guide', label: 'Multi-state workers', blurb: 'Living in one state and working in another.' },
    ],
  },
  {
    heading: 'Public sector and specific roles',
    items: [
      { href: '/us/federal-employee-paycheck-guide', label: 'Federal employees', blurb: 'FERS, TSP, and the federal pay stub explained.' },
      { href: '/us/military-paycheck-guide', label: 'Military', blurb: 'Base pay, allowances (BAH/BAS), and the LES.' },
      { href: '/us/teacher-paycheck-guide', label: 'Teachers', blurb: 'Pension contributions and 10- vs 12-month pay.' },
      { href: '/us/nurse-paycheck-guide', label: 'Nurses', blurb: 'Shift differentials, overtime, and per-diem pay.' },
    ],
  },
  {
    heading: 'Early-career and seasonal',
    items: [
      { href: '/us/new-job-first-paycheck-guide', label: 'First paycheck', blurb: 'What to expect, and check, on a brand-new job.' },
      { href: '/us/student-job-paycheck-guide', label: 'Student jobs', blurb: 'The student FICA exemption and low-income withholding.' },
      { href: '/us/seasonal-worker-paycheck-guide', label: 'Seasonal workers', blurb: 'Short-term roles, withholding, and possible refunds.' },
    ],
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema
        items={[
          { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
          { name: 'USA', url: 'https://payslipiq.com/us/' },
          { name: 'Paycheck Guides by Worker Type', url: 'https://payslipiq.com/us/roles' },
        ]}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">Home</Link> ›{' '}
        <Link href="/us/learn" className="hover:text-slate-700">Learn</Link> ›{' '}
        <span className="text-slate-700">Worker Types</span>
      </nav>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Paycheck Guides by Worker Type</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Withholding, deductions, and pay-stub quirks differ by how you work. Pick the guide that
        matches your situation, or run any scenario in the{' '}
        <Link href="/us/paycheck-calculator" className="text-blue-700 hover:text-blue-800">paycheck calculator</Link>.
      </p>

      <div className="mt-6">
        <MasterDisclaimer variant="long" />
      </div>

      <div className="mt-8 space-y-8">
        {GROUPS.map((g) => (
          <section key={g.heading}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{g.heading}</h2>
            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {g.items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="block h-full rounded-lg border border-slate-200 p-4 hover:border-slate-400"
                  >
                    <div className="font-medium text-slate-900">{it.label}</div>
                    <div className="mt-1 text-sm text-slate-600">{it.blurb}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related tools</p>
        <ul className="mt-2 space-y-1 text-sm text-blue-700">
          <li><Link href="/us/paycheck-calculator">Paycheck calculator →</Link></li>
          <li><Link href="/us/pay-stub-checker">Pay stub checker →</Link></li>
          <li><Link href="/us/learn">All paycheck topics →</Link></li>
        </ul>
      </div>
    </main>
  );
}
