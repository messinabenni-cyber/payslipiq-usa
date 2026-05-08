import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "W-4 Guide (How to Fill Out a W-4)",
  description: "Step-by-step W-4 guide. Filing status, multiple jobs, dependents, deductions, extra withholding. Educational only.",
  alternates: { canonical: "/us/w4-guide" },
};

const FAQS = [{"q": "How often can I change my W-4?", "a": "Any time. Submit a new one to your employer whenever your situation changes (marriage, child, second job, side income, big change in deductions)."}, {"q": "Does my W-4 affect my state tax?", "a": "No. Most states have their own W-4 equivalent (NY IT-2104, CA DE-4, etc.). Your federal W-4 only affects federal withholding."}, {"q": "What happens if I don't submit a W-4?", "a": "Your employer applies default withholding (single, no adjustments), which usually over-withholds. You can file a tax return to claim the refund."}, {"q": "Can I claim 'exempt'?", "a": "Only if you owed no federal income tax last year AND expect to owe none this year. Submit a fresh W-4 by February 15 each year to maintain exempt status. Most people do not qualify."}];
const RELATED = [{"label": "Federal withholding", "href": "/us/federal-tax-withholding"}, {"label": "W-2 explained", "href": "/us/w2-explained"}, {"label": "Single vs MFJ", "href": "/us/single-vs-married-filing-jointly-paycheck"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "W-4 Guide", "url": "/us/w4-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="W-4 Guide (How to Fill Out a W-4)"
      url="/us/w4-guide"
      description="Step-by-step W-4 guide. Filing status, multiple jobs, dependents, deductions, extra withholding. Educational only."
      intro={<>The W-4 tells your employer how much federal tax to withhold from each paycheck. The 2020 version replaced the old allowance system. Most workers fill it out once and forget it. Smart workers revisit it annually.</>}
      body={<><h2>What the W-4 does</h2>
<p>It tells your employer how much federal tax to take out of every paycheck on your behalf. It does not change your tax liability. Withholding is a prepayment, settled at filing time.</p>
<h2>Step 1: Personal information</h2>
<p>Name, address, Social Security Number, filing status. Filing status drives the bracket your employer applies. Single, Married Filing Jointly, Head of Household.</p>
<h2>Step 2: Multiple jobs or spouse works</h2>
<p>Three sub-options:</p>
<ol>
<li>Use the IRS Tax Withholding Estimator (most accurate).</li>
<li>Use the Multiple Jobs Worksheet on page 3.</li>
<li>Check the box if you have two jobs paying similarly. Apply only to the higher-paying job.</li>
</ol>
<p>If you skip Step 2 and your household has multiple incomes, you will likely under-withhold.</p>
<h2>Step 3: Claim dependents</h2>
<ul>
<li>Multiply qualifying children under 17 by $2,000.</li>
<li>Multiply other dependents by $500.</li>
<li>Add the result and enter the total. This reduces your withholding.</li>
</ul>
<h2>Step 4(a): Other income</h2>
<p>Interest, dividends, retirement distributions, side gig income. Adding it here increases withholding so you do not owe at year-end.</p>
<h2>Step 4(b): Deductions</h2>
<p>If you itemize, use the Deductions Worksheet on page 3. Adding deductions reduces withholding.</p>
<h2>Step 4(c): Extra withholding</h2>
<p>A flat dollar amount to add per pay period. Useful for fine-tuning, especially when other adjustments are insufficient.</p>
<h2>Step 5: Sign and date</h2>
<p>The W-4 is not valid without signature.</p>
<h2>Common scenarios</h2>
<h3>Two-income household</h3>
<p>Use the IRS Estimator or check the Step 2(c) box. Submit only on the higher-earning job.</p>
<h3>Side gig + W-2</h3>
<p>Add your side income to Step 4(a). Or pay quarterly estimated taxes via Form 1040-ES.</p>
<h3>I want a smaller refund</h3>
<p>Decrease Step 4(c). Or claim additional dependents in Step 3 if appropriate.</p>
<h3>I want a larger refund</h3>
<p>Increase Step 4(c). Adds a flat dollar amount to each paycheck.</p>
<h3>Claiming exempt</h3>
<p>You can claim exempt only if you owed no federal income tax last year and expect to owe none this year. Most people do not qualify.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
