import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Supplemental Wage Withholding (22 percent / 37 percent)",
  description: "Federal supplemental withholding rate for bonuses, commissions, severance. Percentage method versus aggregate method. Educational only.",
  alternates: { canonical: "/us/supplemental-wage-withholding" },
};

const FAQS = [{"q": "Why is my bonus taxed at 22 percent?", "a": "It is not taxed at 22 percent, it is withheld at 22 percent. Federal law allows employers to withhold supplemental wages at this flat rate. Your actual tax owed is determined when you file your return."}, {"q": "What if my bonus is over $1 million?", "a": "Amounts above $1 million in a calendar year are withheld at 37 percent under the percentage method."}, {"q": "Can I ask payroll to use the aggregate method instead?", "a": "It is the employer's choice within IRS rules. Some payroll systems let you adjust, others do not. Either method nets out the same at filing time, only the per-paycheck withholding differs."}];
const RELATED = [{"label": "Bonus tax", "href": "/us/bonus-tax-paycheck"}, {"label": "Federal withholding", "href": "/us/federal-tax-withholding"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Supplemental Wage Withholding", "url": "/us/supplemental-wage-withholding"}];

export default function Page() {
  return (
    <RichArticle
      title="Supplemental Wage Withholding (22 percent / 37 percent)"
      url="/us/supplemental-wage-withholding"
      description="Federal supplemental withholding rate for bonuses, commissions, severance. Percentage method versus aggregate method. Educational only."
      intro={<>Bonuses and other supplemental wages are withheld differently from regular wages. Two methods exist. Most employers use the percentage method for simplicity.</>}
      body={<><h2>What counts as supplemental wages</h2>
<ul>
<li>Bonuses</li>
<li>Commissions</li>
<li>Overtime pay (in some treatments)</li>
<li>Severance pay</li>
<li>Back pay</li>
<li>Awards and prizes</li>
<li>Retroactive pay increases</li>
<li>Accumulated sick leave paid out</li>
</ul>
<h2>Percentage method (most common)</h2>
<p>Flat 22 percent federal withholding on supplemental wages up to $1 million per year. 37 percent on amounts above $1 million. Easy for employers, easy to predict for employees.</p>
<h2>Aggregate method (less common)</h2>
<p>Add the supplemental wage to the regular paycheck. Calculate withholding on the combined amount as if it were a single regular paycheck. Subtract what would have been withheld on the regular wages alone. The remainder is the supplemental withholding.</p>
<h2>Which method does my employer use?</h2>
<p>Their choice, within IRS rules. Percentage method requires the supplemental wages to be identified separately. Aggregate is the default if they are paid in the same paycheck without distinction.</p>
<h2>State supplemental rates</h2>
<p>Many states have their own supplemental rates for state income tax withholding. They vary widely. Verify with your state.</p>
<h2>FICA</h2>
<p>FICA applies normally to supplemental wages. No special rate.</p>
<h2>Withholding versus tax owed</h2>
<p>The 22 percent is withholding, not your actual tax rate. If your effective rate is below 22 percent, the over-withholding refunds at filing time. If above, you may owe more.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
