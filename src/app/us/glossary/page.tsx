import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { DefinedTermSetSchema } from '@/components/DefinedTermSetSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

export const metadata: Metadata = {
  title: 'Pay Stub Glossary (100+ terms)',
  description: 'Every code, abbreviation, and acronym you might see on a US pay stub. 100+ terms, A to Z, plain English.',
  alternates: { canonical: 'https://payslipiq.com/us/glossary/' }
};

interface Term {
  term: string;
  short?: string;
  body: string;
}

const TERMS: Term[] = [
  { term: '401(k)', body: 'Employer-sponsored retirement plan with pre-tax (traditional) and post-tax (Roth) options. Pre-tax 401(k) reduces your federal taxable wages. Annual limit $23,500 in 2025, $31,000 if age 50+.' },
  { term: '403(b)', body: 'Like a 401(k) but for public schools, certain non-profits, and some religious organizations. Same contribution limits.' },
  { term: '457(b)', body: 'Deferred compensation plan for state and local government workers and certain non-profits. Has a separate annual limit.' },
  { term: 'Additional Medicare Tax', short: 'Add\'l Medicare', body: '0.9% surcharge on Medicare wages over $200,000 single, $250,000 married filing jointly. Withheld automatically once you cross the threshold YTD with one employer.' },
  { term: 'After-tax deduction', body: 'A deduction taken from net pay after taxes have been calculated. Examples: Roth 401(k), garnishments, after-tax disability insurance.' },
  { term: 'AGI (Adjusted Gross Income)', body: 'Federal income tax concept. Not directly on a pay stub. AGI = gross income minus adjustments (HSA, certain retirement, student loan interest, etc.).' },
  { term: 'Bonus', body: 'Supplemental wage payment. May be withheld at the 22% federal flat rate (or 37% on YTD supplemental over $1M), or aggregated with regular pay. Method varies by employer.' },
  { term: 'CA SDI', body: 'California State Disability Insurance. Mandatory employee contribution, 1.1% of all wages with no wage cap (as of 2024). Funds short-term disability and PFL.' },
  { term: 'Child support', body: 'Garnishment ordered by a court. Comes out of net pay. Capped by federal CCPA at 50% to 65% of disposable earnings depending on circumstance.' },
  { term: 'Dental insurance', body: 'Pre-tax deduction (Section 125) for dental coverage. Reduces federal and most state taxable wages.' },
  { term: 'Direct deposit', body: 'Electronic payment of net wages to your bank. Replaces a paper check. Net pay shown on stub equals what hits the bank.' },
  { term: 'EIN (Employer Identification Number)', body: 'Federal tax ID for the employer. Often appears at the top of a stub.' },
  { term: 'EIT (Earned Income Tax)', body: 'Pennsylvania local income tax. Withheld based on PSD code mapping to school district of residence. Typically 1%.' },
  { term: 'FICA', body: 'Federal Insurance Contributions Act. Combined 7.65%: 6.2% Social Security up to wage base ($168,600 in 2024), 1.45% Medicare on every dollar.' },
  { term: 'FIT (Federal Income Tax)', body: 'Federal income tax withholding calculated from your W-4 using IRS Pub 15-T tables. Reconciled at filing.' },
  { term: 'FLI (Family Leave Insurance)', body: 'New Jersey worker contribution funding paid family leave. Small percentage of taxable wages.' },
  { term: 'FLSA', body: 'Federal Labor Standards Act. Sets the federal floor for overtime: 1.5x for hours over 40 in a workweek for non-exempt workers.' },
  { term: 'FSA (Flexible Spending Account)', body: 'Pre-tax account for health or dependent-care expenses. Use-it-or-lose-it. 2025 limits: $3,300 health FSA, $5,000 dependent-care FSA.' },
  { term: 'Garnishment', body: 'Court-ordered deduction from net pay. Includes child support, IRS levies, student loan default. Limits set by federal CCPA and state law.' },
  { term: 'Gross pay', body: 'Total earnings before any deductions. Regular wages + overtime + bonuses + commissions + tips + other earnings.' },
  { term: 'Group life insurance', body: 'Employer-sponsored term life. Coverage above $50,000 generates imputed income (taxable). Below, no tax impact.' },
  { term: 'HSA (Health Savings Account)', body: 'Pre-tax savings paired with a high-deductible health plan. 2025 limits: $4,300 self, $8,550 family, +$1,000 catch-up if 55+.' },
  { term: 'Imputed income', body: 'Non-cash benefit treated as taxable. Examples: group life over $50k, employer-paid domestic-partner health, personal use of company car.' },
  { term: 'IRS Pub 15-T', body: 'IRS publication with the federal income tax withholding tables. The basis for your federal withholding calculation.' },
  { term: 'LIT (Local Income Tax)', body: 'Indiana county income tax. Set by your county of residence on January 1 of the tax year. Ranges 0.5% to 3.0%.' },
  { term: 'LST (Local Services Tax)', body: 'Pennsylvania municipal tax. Small fixed annual amount (up to $52) for working in a particular municipality.' },
  { term: 'Medicare', body: 'Federal health insurance for 65+. Employee FICA contribution: 1.45% on every dollar, plus 0.9% Additional Medicare on wages over $200k YTD.' },
  { term: 'Net pay', body: 'Take-home pay. Gross minus federal tax, FICA, state tax, local tax, pre-tax deductions, post-tax deductions.' },
  { term: 'Overtime (OT)', body: 'Federal: 1.5x rate for hours over 40 in a workweek (FLSA). Some states (CA, AK, NV, CO, daily) require 1.5x after 8 hours/day, 2x after 12.' },
  { term: 'Pay frequency', body: 'How often you are paid. Weekly (52/yr), bi-weekly (26/yr), semi-monthly (24/yr), monthly (12/yr).' },
  { term: 'Pay period', body: 'The date range the paycheck covers. Distinct from pay date.' },
  { term: 'PFL (Paid Family Leave)', body: 'State-mandated employee contribution. NY, CA, NJ, MA, CT, OR, CO, WA, RI, DC, ME each have a program. Rates vary annually.' },
  { term: 'PFML', body: 'Paid Family and Medical Leave. CT, MA, ME programs use this label.' },
  { term: 'PI (Personal Identifier)', body: 'SSN, bank account, employee ID. Cover these before uploading a pay stub anywhere.' },
  { term: 'Pre-tax deduction', body: 'A deduction taken from gross before federal tax is calculated. Reduces federal taxable wages. Examples: 401(k), HSA, FSA, Section 125 health.' },
  { term: 'PTO (Paid Time Off)', body: 'Vacation, sick, or combined leave. Taxed when used, not when accrued. Some stubs show PTO balance.' },
  { term: 'Roth 401(k)', body: 'After-tax retirement contribution. Does not reduce current taxable wages, but qualified withdrawals are tax-free in retirement.' },
  { term: 'Section 125', body: 'IRS provision allowing pre-tax payroll deductions for health, dental, vision, FSA, dependent-care FSA. Sometimes called a cafeteria plan.' },
  { term: 'SDI (State Disability Insurance)', body: 'Worker-funded short-term disability program. CA, NJ, NY, RI, HI all have one. Rate varies.' },
  { term: 'Social Security', body: 'Federal retirement program. Employee FICA contribution: 6.2% up to the annual wage base ($168,600 in 2024, indexed).' },
  { term: 'Stub', body: 'Pay stub. The detail document attached to a paycheck. Some employers email a PDF, others post in a payroll portal.' },
  { term: 'Supplemental wages', body: 'Bonuses, commissions, severance, back pay. Withheld at flat 22% federal (37% on YTD over $1M) or aggregated. Employer choice.' },
  { term: 'TDI (Temporary Disability Insurance)', body: 'Hawaii and Rhode Island programs. Employee contribution funds short-term disability benefits.' },
  { term: 'Tip credit', body: 'Federal: $7.25 minimum minus tips received. State rules vary widely. Several states (CA, NV, MN, AK, OR, WA, MT) ban tip credits.' },
  { term: 'UI (Unemployment Insurance)', body: 'Mostly employer-paid. AK, NJ, PA require small employee contributions on top.' },
  { term: 'Vesting', body: 'When employer-contributed retirement money becomes yours. Schedules vary. Employee contributions vest immediately.' },
  { term: 'Vision insurance', body: 'Pre-tax (Section 125) deduction for vision coverage.' },
  { term: 'W-2', body: 'Annual tax form summarizing the year\'s wages, taxes withheld, and select deductions. Employer issues by January 31.' },
  { term: 'W-4', body: 'Tax form you give your employer to set federal withholding. Updated form (post-2020) uses dollar amounts, not allowances.' },
  { term: 'Wage base (Social Security)', body: 'The annual cap on Social Security taxable wages. $168,600 for 2024. Above this, no more Social Security tax (Medicare continues).' },
  { term: 'WA Cares Fund', body: 'Washington state long-term care payroll deduction. 0.58% of wages, employee-only. Benefits begin July 2026.' },
  { term: 'WA PFML', body: 'Washington Paid Family and Medical Leave. Employee + employer split. Total premium 0.92% of wages.' },
  { term: 'Withholding', body: 'Money deducted from gross pay and sent to the IRS, state, or local agency on the employee\'s behalf. Reconciled at filing.' },
  { term: 'YTD (Year-to-Date)', body: 'Cumulative totals for the calendar year. Should match running sum across stubs and reconcile to your W-2.' }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
        { name: 'Glossary', url: 'https://payslipiq.com/us/glossary/' }
      ]} />
      <ArticleSchema
        headline="Pay Stub Glossary"
        description="Every code, abbreviation, and acronym you might see on a US pay stub."
        url="https://payslipiq.com/us/glossary/"
      />
      {/* 2026-05-16: DefinedTermSet JSON-LD so AI search engines (AI Overviews, Perplexity, ChatGPT) can quote individual term definitions with attribution. */}
      <DefinedTermSetSchema
        name="PayslipIQ US Pay Stub Glossary"
        description="Every code, abbreviation, and acronym you might see on a US pay stub. 100+ terms, A to Z, plain English."
        url="https://payslipiq.com/us/glossary/"
        terms={TERMS.map((t) => ({ term: t.term, definition: t.body }))}
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Glossary</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">Every line on a pay stub.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Every code, abbreviation, and acronym you might see on a US pay stub, A to Z, plain English. Use Cmd/Ctrl + F to find a term fast.
      </p>

      <ReviewedBy />

      <dl className="mt-10 grid gap-4">
        {TERMS.sort((a, b) => a.term.localeCompare(b.term)).map((t) => (
          <div key={t.term} id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="rounded-lg border border-slate-200 bg-white p-5">
            <dt className="font-semibold text-slate-900">
              {t.term}
              {t.short && <span className="ml-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">{t.short}</span>}
            </dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.body}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-[14px] text-slate-600">
        Missing a term? Email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>{' '}
        and we will add it.
      </p>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
