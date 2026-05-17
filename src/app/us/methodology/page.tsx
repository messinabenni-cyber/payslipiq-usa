import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

const PAGE_URL = 'https://payslipiq.com/us/methodology/';

export const metadata: Metadata = {
  title: 'PayslipIQ Methodology — How We Calculate US Paychecks',
  description:
    'Open methodology: the IRS, SSA, state DOR, and DOL sources behind every PayslipIQ calculator. Federal Pub 15-T 2026, FICA bases, state worker contributions, supplemental wage rules.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PayslipIQ Methodology',
    description: 'Open methodology for every PayslipIQ paycheck calculator.',
    url: PAGE_URL,
    type: 'article',
  },
};

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Methodology', url: PAGE_URL },
];

export default function MethodologyPage() {
  return (
    <>
      <ArticleSchema
        headline="PayslipIQ Methodology"
        description="Open methodology: the IRS, SSA, state DOR, and DOL sources behind every PayslipIQ calculator."
        url={PAGE_URL}
      />
      <BreadcrumbSchema items={BREADCRUMBS} />

      <main id="main" className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Methodology</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Last reviewed: 2026 · Open methodology</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">How PayslipIQ calculates US paychecks</h1>
          <p className="mt-4 text-lg text-slate-700">
            Every number on PayslipIQ comes from a public US government source. This page lists each
            source so you can verify the math, replicate it, or flag an error. We update annually when
            the IRS, SSA, and state agencies publish new figures.
          </p>
        </header>

        <section className="mt-10 prose prose-slate max-w-none">
          <h2>Federal income tax withholding</h2>
          <p>
            <strong>Source:</strong>{' '}
            <a href="https://www.irs.gov/pub/irs-pdf/p15t.pdf" target="_blank" rel="noopener noreferrer">IRS Publication 15-T (2026)</a>.
            We use the percentage-method tables. Inputs honored: filing status (Single, MFJ, HOH), Step 2 (multiple jobs), Step 3 (dependents), Step 4a (other income), Step 4b (deductions), Step 4c (extra withholding).
          </p>

          <h2>FICA — Social Security and Medicare</h2>
          <p>
            <strong>Social Security:</strong> 6.2% employee share on wages up to the 2026 wage base of <strong>$184,500</strong>{' '}
            (<a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer">SSA Cost-of-Living Adjustment</a>).
          </p>
          <p>
            <strong>Medicare:</strong> 1.45% employee share on all wages (no cap). Additional Medicare 0.9% on wages above $200,000 single / $250,000 MFJ / $125,000 MFS (<a href="https://www.irs.gov/businesses/small-businesses-self-employed/additional-medicare-tax" target="_blank" rel="noopener noreferrer">IRC §3101(b)(2)</a>).
          </p>

          <h2>Supplemental wages (bonuses, commissions)</h2>
          <p>
            We apply the <a href="https://www.irs.gov/publications/p15#en_US_2024_publink1000202352" target="_blank" rel="noopener noreferrer">22% flat federal rate</a> on supplemental wages up to $1,000,000 in a calendar year, and 37% on the portion above $1,000,000. State supplemental rates vary; we use each state DOR&apos;s published supplemental rate.
          </p>

          <h2>State income tax</h2>
          <p>
            Each state page links to its Department of Revenue. We use 2026 published brackets for progressive states (CA, NY, NJ, OR, HI, etc.), 2026 flat rates for flat-tax states (AZ 2.5%, CO 4.40%, IL 4.95%, IN 3.05%, MI 4.25%, NC 3.99%, PA 3.07%, UT 4.55%), and $0 for the nine no-income-tax states (AK, FL, NV, NH, SD, TN, TX, WA, WY).
          </p>

          <h2>State worker contributions (SDI / PFL / PFML / TDI / FAMLI / Cares)</h2>
          <p>
            Currently encoded: <strong>11 jurisdictions</strong> — California SDI, New York SDI + PFL, New Jersey SDI + FLI, Massachusetts PFML, Oregon Paid Leave, Washington PFML + WA Cares, Rhode Island TDI, Colorado FAMLI, Hawaii TDI, Connecticut PFML, District of Columbia PFL. Each rate and annual cap comes from the agency-published 2026 schedule. The remaining states have no employee-paid worker contribution.
          </p>

          <h2>Local taxes</h2>
          <p>
            Local payroll taxes are encoded for: NYC (4 brackets), Yonkers (16.75% surcharge of NY state liability), Philadelphia (3.75% / 3.44% resident / non-resident), Detroit (2.4% / 1.2%), Ohio RITA and CCA cities, and Indiana / Maryland county rates. See <a href="/us/local-paycheck-taxes/" >Local Paycheck Taxes</a>.
          </p>

          <h2>Pre-tax deductions</h2>
          <p>
            Pre-tax 401(k), HSA, FSA, and Section 125 cafeteria-plan deductions reduce federal taxable wages and most states&apos; taxable wages, but do <em>not</em> reduce FICA wages. We model this exactly: pre-tax dollars lower federal/state withholding but leave Social Security and Medicare untouched.
          </p>

          <h2>Roth and post-tax</h2>
          <p>
            Roth 401(k), Roth IRA, after-tax 401(k), garnishments, and post-tax benefit premiums come off <em>net</em> pay only — they do not affect any withholding.
          </p>

          <h2>What we deliberately don&apos;t model</h2>
          <ul>
            <li>State and local quarterly estimated tax payments.</li>
            <li>Multi-state nexus apportionment (we ask which state to apply).</li>
            <li>Employer-specific payroll software rounding.</li>
            <li>Mid-year W-4 amendments and look-back wage recalculations.</li>
            <li>Wage garnishments below the federal CCPA limits.</li>
            <li>FUTA / SUTA (employer-paid; not on the worker&apos;s pay stub).</li>
          </ul>
          <p>
            These are second-order effects. The PayslipIQ estimate is directional; for a binding figure, verify with your payroll team.
          </p>

          <h2>How we update</h2>
          <p>
            Federal limits update each November when the IRS publishes the annual notice (e.g.,{' '}
            <a href="https://www.irs.gov/pub/irs-drop/n-25-67.pdf" target="_blank" rel="noopener noreferrer">Notice 2025-67</a>{' '}
            for 2026). State rates update through January as each DOR publishes 2026 withholding tables.
            We hold a public changelog at <a href="/us/status/">/us/status</a>.
          </p>

          <h2>Reporting an error</h2>
          <p>
            Found a wrong number? Email the discrepancy to the address on the{' '}
            <a href="/contact">Contact</a> page with the URL, the input, the value we returned, and
            the source you believe is correct. We correct errors publicly with a dated changelog
            entry.
          </p>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
    </>
  );
}
