import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Pay Stub Glossary (US)",
  description: "Pay stub abbreviations decoded. FED, FICA, OASDI, MED, ST, LOC, 401K, HSA, FSA, YTD, DD. Educational only.",
  alternates: { canonical: "/us/pay-stub-glossary" },
};

const FAQS = [{"q": "What does OASDI mean on my pay stub?", "a": "Old Age, Survivors, and Disability Insurance. It is another name for Social Security tax (6.2 percent up to the wage base)."}, {"q": "Why does my pay stub show MED twice?", "a": "Could be Medicare tax plus a Medical insurance premium. Look at the section. Tax section MED is Medicare. Deductions section MED is medical premium."}, {"q": "What is GARN on my pay stub?", "a": "A wage garnishment, deducted from net pay per court order or IRS levy."}];
const RELATED = [{"label": "Pay stub anatomy", "href": "/us/pay-stub-anatomy"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Pay Stub Glossary", "url": "/us/pay-stub-glossary"}];

export default function Page() {
  return (
    <RichArticle
      title="Pay Stub Glossary (US)"
      url="/us/pay-stub-glossary"
      description="Pay stub abbreviations decoded. FED, FICA, OASDI, MED, ST, LOC, 401K, HSA, FSA, YTD, DD. Educational only."
      intro={<>Pay stub abbreviations vary by payroll provider. Most map to the same concepts. Here is the cheat sheet.</>}
      body={<><h2>Tax abbreviations</h2>
<dl className="space-y-3">
<dt><strong>FED, FIT</strong></dt><dd>Federal Income Tax withholding</dd>
<dt><strong>FICA</strong></dt><dd>Federal Insurance Contributions Act, the federal payroll tax for Social Security and Medicare</dd>
<dt><strong>OASDI</strong></dt><dd>Old Age, Survivors, and Disability Insurance, another name for Social Security tax</dd>
<dt><strong>SOC SEC, SS</strong></dt><dd>Social Security tax (6.2 percent up to wage base)</dd>
<dt><strong>MED, MEDICARE</strong></dt><dd>Medicare tax (1.45 percent on all wages, plus 0.9 percent above thresholds)</dd>
<dt><strong>ADD MED</strong></dt><dd>Additional Medicare Tax (0.9 percent on high wages)</dd>
<dt><strong>ST, SIT</strong></dt><dd>State Income Tax</dd>
<dt><strong>LOC, LIT, LST</strong></dt><dd>Local Income Tax (NYC, Philadelphia, Detroit, etc.)</dd>
<dt><strong>SUI, SDI</strong></dt><dd>State Unemployment Insurance, State Disability Insurance</dd>
<dt><strong>PFL, FLI</strong></dt><dd>Paid Family Leave, Family Leave Insurance</dd>
</dl>
<h2>Deduction abbreviations</h2>
<dl className="space-y-3">
<dt><strong>401K</strong></dt><dd>401(k) retirement contribution (pre-tax or Roth)</dd>
<dt><strong>403B</strong></dt><dd>403(b) retirement (public-school, non-profit)</dd>
<dt><strong>457B</strong></dt><dd>457(b) retirement (state and local government)</dd>
<dt><strong>HSA</strong></dt><dd>Health Savings Account</dd>
<dt><strong>FSA</strong></dt><dd>Flexible Spending Account</dd>
<dt><strong>DEP CARE</strong></dt><dd>Dependent Care FSA</dd>
<dt><strong>MED, MEDICAL, HLTH</strong></dt><dd>Medical insurance premium</dd>
<dt><strong>DEN</strong></dt><dd>Dental premium</dd>
<dt><strong>VIS</strong></dt><dd>Vision premium</dd>
<dt><strong>LIFE, AD&D</strong></dt><dd>Life insurance, Accidental Death and Dismemberment</dd>
<dt><strong>STD, LTD</strong></dt><dd>Short-Term Disability, Long-Term Disability</dd>
<dt><strong>GARN</strong></dt><dd>Wage garnishment</dd>
<dt><strong>UNION, DUES</strong></dt><dd>Union dues</dd>
</dl>
<h2>Other abbreviations</h2>
<dl className="space-y-3">
<dt><strong>YTD</strong></dt><dd>Year to Date</dd>
<dt><strong>QTD, MTD</strong></dt><dd>Quarter to Date, Month to Date</dd>
<dt><strong>DD</strong></dt><dd>Direct Deposit</dd>
<dt><strong>OT</strong></dt><dd>Overtime</dd>
<dt><strong>HOL</strong></dt><dd>Holiday pay</dd>
<dt><strong>PTO</strong></dt><dd>Paid Time Off</dd>
<dt><strong>SICK</strong></dt><dd>Sick pay</dd>
<dt><strong>BONUS</strong></dt><dd>Bonus or supplemental wages</dd>
<dt><strong>COMM</strong></dt><dd>Commission</dd>
<dt><strong>SHIFT</strong></dt><dd>Shift differential</dd>
<dt><strong>REG</strong></dt><dd>Regular wages</dd>
</dl></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
