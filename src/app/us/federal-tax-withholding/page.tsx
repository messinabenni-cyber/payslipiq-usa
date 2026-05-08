import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Federal Income Tax Withholding",
  description: "How federal income tax withholding works on a US paycheck. IRS Publication 15-T method, W-4 inputs, supplemental wages. Educational only.",
  alternates: { canonical: "/us/federal-tax-withholding" },
};

const FAQS = [{"q": "How is federal withholding calculated?", "a": "Using IRS Publication 15-T tables. Inputs are your W-4 (filing status, multiple jobs, dependents, additional income, deductions, extra withholding) and your annualized gross from this paycheck."}, {"q": "Why does my withholding change between paychecks?", "a": "Pay frequency changes, bonus or supplemental wage paid in one period, mid-year W-4 update, mid-year benefits change, or YTD wages crossing certain thresholds."}, {"q": "Is withholding my actual tax?", "a": "No, it is a prepayment. Tax owed is settled when you file your return. If you over-withhold, you get a refund. Under-withhold and you owe."}, {"q": "How do I lower my federal withholding?", "a": "Submit a new W-4 with adjusted dependents (Step 3) or a smaller Step 4(c) extra-withholding amount. Use the IRS Tax Withholding Estimator to dial it in."}, {"q": "Why is my bonus withheld at 22 percent?", "a": "Federal supplemental rate. Applies to bonuses, commissions, severance, back pay up to $1M annually. 37 percent above. The 22 percent is withholding, not your actual tax rate."}];
const RELATED = [{"label": "W-4 guide", "href": "/us/w4-guide"}, {"label": "Bonus tax", "href": "/us/bonus-tax-paycheck"}, {"label": "Supplemental wage withholding", "href": "/us/supplemental-wage-withholding"}, {"label": "FICA", "href": "/us/fica-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Federal Withholding", "url": "/us/federal-tax-withholding"}];

export default function Page() {
  return (
    <RichArticle
      title="Federal Income Tax Withholding"
      url="/us/federal-tax-withholding"
      description="How federal income tax withholding works on a US paycheck. IRS Publication 15-T method, W-4 inputs, supplemental wages. Educational only."
      intro={<>The federal income tax line on your pay stub is a prepayment to the IRS for the tax year. Your employer calculates it from your W-4 using IRS Publication 15-T tables. It is not your final tax bill, that gets settled when you file.</>}
      body={<><h2>The mechanics</h2>
<p>Your employer takes a portion of your gross pay each period and sends it to the IRS as your prepayment. At year-end, you reconcile via your tax return: if you over-withheld, you get a refund. If you under-withheld, you owe.</p>
<h2>What drives the amount</h2>
<ul>
<li>Filing status (single, married filing jointly, head of household)</li>
<li>Annual gross wages projected forward from this paycheck</li>
<li>Step 2 of W-4 (multiple jobs / spouse works)</li>
<li>Step 3 dependents claimed</li>
<li>Step 4(a) other income to add</li>
<li>Step 4(b) deductions to subtract</li>
<li>Step 4(c) extra flat-dollar withholding per period</li>
</ul>
<h2>The 2026 federal brackets (single, simplified)</h2>
<ul>
<li>10 percent on income up to $11,925</li>
<li>12 percent up to $48,475</li>
<li>22 percent up to $103,350</li>
<li>24 percent up to $197,300</li>
<li>32 percent up to $250,525</li>
<li>35 percent up to $626,350</li>
<li>37 percent above</li>
</ul>
<p>MFJ brackets are roughly double at the lower end. Verify current numbers at irs.gov.</p>
<h2>Withholding versus tax owed</h2>
<p>Withholding is a calculation. Tax owed is determined when you file your return using all your income, deductions, credits and dependents. The two often differ. The annual reconciliation closes the gap.</p>
<h2>Supplemental wages</h2>
<p>Bonuses, commissions, severance, and back pay are supplemental wages. Most employers withhold them at the federal supplemental rate (22 percent up to $1M annually, 37 percent above). Some use the aggregate method instead. Either way, the actual tax owed is settled when you file.</p>
<h2>Pre-tax deductions</h2>
<p>401(k), HSA, FSA, Section 125 health insurance reduce federal income tax wages (the amount the calculation runs against). Higher pre-tax deductions = lower federal withholding.</p>
<h2>Adjusting your withholding</h2>
<p>Run the IRS Tax Withholding Estimator at irs.gov. If under-withheld, increase Step 4(c) extra withholding. If over-withheld, decrease Step 4(c) or claim more dependents in Step 3 if appropriate. Submit a new W-4 to your employer when changes are needed.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
