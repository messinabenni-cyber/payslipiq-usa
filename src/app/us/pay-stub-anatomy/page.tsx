import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "How to Read a US Pay Stub",
  description: "Decode every line on a US pay stub: gross, withholdings, FICA, state, local, deductions, YTD, employer contributions, net. Educational only.",
  alternates: { canonical: "/us/pay-stub-anatomy" },
};

const FAQS = [{"q": "What does YTD mean?", "a": "Year to Date. Cumulative total from January 1 to the pay period end date. Compare YTD across pay stubs to spot errors."}, {"q": "What are employer contributions on my pay stub?", "a": "Money your employer pays on your behalf (401(k) match, employer health premium, employer FICA match). Listed for transparency. Does not reduce your pay."}, {"q": "Why do my taxable wages not match my gross?", "a": "Pre-tax deductions (401(k), HSA, Section 125 health insurance) reduce taxable wages. The Federal Taxable Wages line on your stub is gross minus those deductions."}, {"q": "What does FED mean on my pay stub?", "a": "Federal income tax withholding. Sometimes labeled FIT or Federal Tax."}];
const RELATED = [{"label": "Pay stub glossary", "href": "/us/pay-stub-glossary"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}, {"label": "W-2 explained", "href": "/us/w2-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Pay Stub Anatomy", "url": "/us/pay-stub-anatomy"}];

export default function Page() {
  return (
    <RichArticle
      title="How to Read a US Pay Stub"
      url="/us/pay-stub-anatomy"
      description="Decode every line on a US pay stub: gross, withholdings, FICA, state, local, deductions, YTD, employer contributions, net. Educational only."
      intro={<>A US pay stub has six sections. Earnings. Taxes. Pre-tax deductions. Post-tax deductions. Employer contributions. Net pay. Each usually has a current-period column and a year-to-date column. Here is what each part is for.</>}
      body={<><h2>Section 1: Earnings</h2>
<p>Gross pay broken down by earning type. For an hourly worker: regular hours times rate, overtime hours times overtime rate. For salaried: a flat regular line. Plus any bonus, commission, holiday pay, sick pay, PTO.</p>
<p>YTD column shows total earned in the calendar year so far.</p>
<h2>Section 2: Taxes withheld</h2>
<ul>
<li><strong>Federal income tax</strong> (FED, FIT) - calculated per W-4 + IRS Publication 15-T</li>
<li><strong>Social Security</strong> (SS, SOC SEC, OASDI) - 6.2 percent up to wage base</li>
<li><strong>Medicare</strong> (MED) - 1.45 percent on all wages, plus 0.9 percent above thresholds</li>
<li><strong>State income tax</strong> (ST, SIT) - per state rules</li>
<li><strong>Local tax</strong> (LOC, LIT, LST) - if applicable</li>
<li><strong>State disability/PFL premiums</strong> - in CA, NY, NJ, RI, HI, MA, CT, OR, CO, WA</li>
</ul>
<h2>Section 3: Pre-tax deductions</h2>
<p>Reduce taxable wages. 401(k), 403(b), traditional HSA, FSA, Section 125 health insurance, dental, vision, commuter benefits.</p>
<h2>Section 4: Post-tax deductions</h2>
<p>Come out of net. Roth 401(k), garnishments, after-tax life insurance, union dues, 401(k) loan repayments.</p>
<h2>Section 5: Employer contributions (informational)</h2>
<p>Money your employer contributes on your behalf. 401(k) match, employer-paid health insurance, employer FICA match, HSA employer match. Does NOT reduce your pay. Listed for transparency.</p>
<h2>Section 6: Net pay</h2>
<p>What hits your bank account. Direct deposit usually shown with last 4 digits of the account.</p>
<h2>The header / employee info</h2>
<p>Pay period (start and end dates), pay date, employee ID, employer name and address, your name and last 4 of SSN.</p>
<h2>Reading tip</h2>
<p>Always check YTD totals against your last pay stub plus the current period. They should add up. A YTD discrepancy is one of the most common payroll errors.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
