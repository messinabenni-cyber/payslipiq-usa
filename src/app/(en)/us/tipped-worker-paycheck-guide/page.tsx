import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Tipped Worker Paycheck Guide (US)",
  description: "How tipped pay works. Federal $2.13 minimum, tip credit, state rules, FICA on tips. Educational only.",
  alternates: { canonical: "/us/tipped-worker-paycheck-guide" },
};

const FAQS = [{"q": "Are cash tips taxable?", "a": "Yes. All tips are taxable income. You must report cash tips of $20 or more per month per employer. Form 4070 or your employer's equivalent is the standard reporting tool."}, {"q": "Do I pay FICA on tips?", "a": "Yes. Reported tips are subject to Social Security (6.2 percent) and Medicare (1.45 percent). Your employer matches the employer-side FICA on reported tips."}, {"q": "What if tips do not bring me to minimum wage?", "a": "Federal law requires the employer to top up so you make at least the regular minimum wage averaged over the workweek. Some states require the full state minimum with no tip credit, regardless of tips."}, {"q": "Are service charges the same as tips?", "a": "No. Automatic gratuities are wages under IRS rules. They are taxed like regular pay, not like voluntary tips."}, {"q": "Are my tips tax-free now under the 2025 law?", "a": "Not entirely. The One Big Beautiful Bill created a federal income-tax deduction of up to $25,000 in qualified tips for tax years 2025 through 2028, for workers in IRS-listed tipped occupations, phasing out above $150,000 of modified AGI ($300,000 joint). You still report tips and still pay Social Security and Medicare on them. The deduction is claimed when you file. Verify your eligibility with the IRS."}];
const RELATED = [{"label": "Hourly calculator", "href": "/us/hourly-worker-paycheck-calculator"}, {"label": "FICA explained", "href": "/us/fica-explained"}, {"label": "Overtime pay and taxes", "href": "/us/overtime-paycheck"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Tipped Worker Guide", "url": "/us/tipped-worker-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Tipped Worker Paycheck Guide (US)"
      url="/us/tipped-worker-paycheck-guide"
      description="How tipped pay works. Federal $2.13 minimum, tip credit, state rules, FICA on tips. Educational only."
      intro={<>Tipped pay is its own animal. Lower hourly base, the rest from tips, plus an obligation to report tips to your employer. Here is how the federal floor works, where states diverge, and what your stub should show.</>}
      body={<><h2>The federal $2.13 floor and the tip credit</h2>
<p>Federal tipped minimum wage is $2.13 per hour. Your employer must ensure that base plus your tips brings you to at least $7.25 per hour averaged over the workweek. If tips fall short, the employer makes up the difference. That gap is the tip credit.</p>
<h2>State rules vary</h2>
<p>California, Minnesota, Montana, Nevada, Oregon, Washington and Alaska require the full state minimum wage for tipped workers. No tip credit allowed. Other states allow a tip credit but with a tipped minimum higher than $2.13. Verify your state.</p>
<h2>Tips are taxable</h2>
<ul>
<li>Cash tips, credit-card tips, tip-pool distributions, non-cash tips of value (gift cards, merchandise) are all taxable income.</li>
<li>You must report tips of $20 or more per month per employer.</li>
<li>Reported tips show in W-2 Box 1 (wages) and Box 7 (Social Security tips).</li>
<li>Federal income tax, Social Security and Medicare apply to tips.</li>
</ul>
<h2>No tax on tips: the 2025 to 2028 deduction</h2>
<p>The One Big Beautiful Bill created a new federal income-tax <strong>deduction</strong> for tips, for tax years 2025 through 2028. Tips are still reported and still withheld on during the year. The deduction is claimed when you file.</p>
<p>You can deduct up to <strong>$25,000</strong> of qualified tips, meaning voluntary cash or charged tips from customers, including shared tips, if you work in an occupation the IRS lists as one that customarily and regularly received tips on or before December 31, 2024. The deduction phases out once modified adjusted gross income passes <strong>$150,000</strong> ($300,000 married filing jointly). You need a valid Social Security number, and if married you must file jointly. If you are self-employed, the deduction cannot exceed your net income from the business where the tips were earned. It is available whether you itemize or take the standard deduction.</p>
<p>What it does not change:</p>
<ul>
<li>You still report tips of $20 or more per month to your employer, and they still appear on your W-2.</li>
<li>Tips are still subject to Social Security and Medicare (FICA). The deduction is for federal income tax only.</li>
<li>Service charges (automatic gratuities) are wages, not tips, and do not qualify.</li>
</ul>
<p>Educational only. Confirm your occupation is on the <a href="https://www.irs.gov/forms-pubs/occupations-that-customarily-and-regularly-received-tips-on-or-before-december-31-2024" target="_blank" rel="noopener noreferrer">IRS qualified-occupations list</a> and check the current figures with the IRS or a qualified tax professional before relying on this. See <a href="https://www.irs.gov/newsroom/what-the-no-tax-on-tips-deduction-means-for-you" target="_blank" rel="noopener noreferrer">IRS: What the No Tax on Tips deduction means for you</a>.</p>
<h2>Service charges are not tips</h2>
<p>An automatic gratuity (18 percent on parties of 6 or more) is a service charge under IRS rules. That is wages, not a tip. It runs through payroll like regular pay.</p>
<h2>What your stub should show</h2>
<ul>
<li>Direct wages: hourly base times hours.</li>
<li>Reported tips: tips you reported to the employer.</li>
<li>Tip credit: the amount the employer is offsetting against minimum wage.</li>
<li>Make-up wages: any top-up if tips fell short.</li>
<li>Service charges: separate line, taxed as wages.</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
