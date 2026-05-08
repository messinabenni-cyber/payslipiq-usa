import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Why Is My Bonus Taxed at 22 Percent?",
  description: "Bonus tax explained. The 22 percent is withholding, not the actual tax rate. Percentage method vs aggregate method. Educational only.",
  alternates: { canonical: "/us/bonus-tax-paycheck" },
};

const FAQS = [{"q": "Is 22 percent the actual tax rate on bonuses?", "a": "No. It is the federal withholding rate. Your actual tax depends on your total annual income. Over-withholding refunds at filing time."}, {"q": "What if my bonus is over $1 million?", "a": "Amounts above $1 million in a calendar year are withheld at 37 percent under the percentage method."}, {"q": "Can I ask payroll to withhold less?", "a": "Hard. The percentage method is fixed at 22 percent. You can lower regular-wage withholding via your W-4 to offset, or direct bonus dollars into 401(k) or HSA."}, {"q": "Does FICA apply to bonuses?", "a": "Yes. 6.2 percent Social Security up to the wage base and 1.45 percent Medicare on every dollar. Plus 0.9 percent Additional Medicare above thresholds."}];
const RELATED = [{"label": "Supplemental wage withholding", "href": "/us/supplemental-wage-withholding"}, {"label": "Federal withholding", "href": "/us/federal-tax-withholding"}, {"label": "FICA", "href": "/us/fica-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Bonus Tax", "url": "/us/bonus-tax-paycheck"}];

export default function Page() {
  return (
    <RichArticle
      title="Why Is My Bonus Taxed at 22 Percent?"
      url="/us/bonus-tax-paycheck"
      description="Bonus tax explained. The 22 percent is withholding, not the actual tax rate. Percentage method vs aggregate method. Educational only."
      intro={<>The 22 percent figure on a US bonus is not a tax rate. It is the federal supplemental withholding rate. Two methods exist for withholding on supplemental wages. Most employers use the percentage method.</>}
      body={<><h2>What counts as supplemental wages</h2>
<p>Bonuses, commissions, severance, back pay, retroactive pay raises, awards and prizes, accumulated sick leave paid out, and overtime in some cases. Anything paid in addition to regular wages.</p>
<h2>The percentage method</h2>
<p>22 percent flat federal withholding on supplemental wages up to $1 million per year. 37 percent on amounts above $1 million. Easy to calculate. Predictable. Most employers use it.</p>
<h2>The aggregate method</h2>
<p>Add the supplemental wage to the regular paycheck. Calculate withholding on the combined amount as if it were a single regular paycheck. Subtract what would have been withheld on the regular wages alone. The remainder is the supplemental withholding.</p>
<p>Result is usually higher than the percentage method because the larger combined check pushes annualized income into a higher bracket.</p>
<h2>State supplemental rates</h2>
<p>Most states have their own supplemental withholding rate. They vary widely. Some use a flat percentage, some use the aggregate method, some treat supplemental wages identically to regular wages. Verify with your state.</p>
<h2>FICA still applies</h2>
<p>Bonuses are subject to Social Security (6.2 percent up to the wage base) and Medicare (1.45 percent on every dollar). Plus the 0.9 percent Additional Medicare on wages above $200,000.</p>
<h2>Withholding versus tax owed</h2>
<p>The 22 percent is withholding, not your actual tax rate. If your effective rate is below 22 percent, the over-withholding refunds at filing time. If above, you may owe more on your return.</p>
<h2>Ways to reduce bonus withholding</h2>
<ul>
<li>Direct part of the bonus into 401(k) or HSA via payroll, reducing taxable wages.</li>
<li>Set Step 4(b) deductions on the W-4 if you itemize.</li>
<li>Adjust Step 4(c) extra withholding negative is not allowed, but you can submit a new W-4 to lower future regular-wage withholding to compensate.</li>
</ul>
<h2>The myth in one sentence</h2>
<p>Bonuses are not taxed at a higher rate. They are withheld at a flat rate that often over-collects, and the over-collection comes back at filing.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
