import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

import { ReviewedBy } from '@/components/ReviewedBy';
export const metadata: Metadata = {
  title: "Overtime Pay and Taxes (US)",
  description: "Overtime pay rules under federal FLSA, plus state daily-overtime overlays. The tax myth busted. Educational only.",
  alternates: { canonical: "/us/overtime-paycheck" },
};

const FAQS = [{"q": "Is overtime taxed at a higher rate?", "a": "No. Same rate as regular wages. Withholding can look higher because payroll annualizes a big check, but the over-withholding refunds at year-end."}, {"q": "Do salaried workers get overtime?", "a": "Salaried non-exempt workers do. Most salaried workers are exempt and do not."}, {"q": "How is overtime calculated when I have multiple pay rates?", "a": "FLSA requires a weighted-average regular rate including non-discretionary bonuses and differentials. Overtime is 1.5x that weighted rate."}, {"q": "Can my employer offer comp time instead of overtime?", "a": "Private-sector usually cannot. Public-sector employers can under specific conditions."}, {"q": "Is overtime tax-free now under the 2025 law?", "a": "Not exactly. The One Big Beautiful Bill created a federal income-tax deduction for the premium 'half' of FLSA overtime for tax years 2025 through 2028, up to $12,500 ($25,000 married filing jointly), phasing out above $150,000 of modified AGI ($300,000 joint). It is claimed when you file, not removed from your paycheck, and overtime is still subject to Social Security and Medicare. Verify your eligibility and the current figures with the IRS."}];
const RELATED = [{"label": "Why was my overtime taxed so much", "href": "/us/why-was-my-overtime-taxed-so-much"}, {"label": "California daily overtime", "href": "/us/california-daily-overtime"}, {"label": "Hourly worker calculator", "href": "/us/hourly-worker-paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Overtime Pay", "url": "/us/overtime-paycheck"}];

export default function Page() {
  return (
    <RichArticle
      title="Overtime Pay and Taxes (US)"
      url="/us/overtime-paycheck"
      description="Overtime pay rules under federal FLSA, plus state daily-overtime overlays. The tax myth busted. Educational only."
      intro={<>Federal FLSA: 1.5x the regular rate for hours above 40 in a workweek for non-exempt workers. Some states layer daily-overtime rules on top. Overtime is paid at a higher rate, not taxed at a higher rate.</>}
      body={<><h2>Federal FLSA basics</h2>
<ul>
<li>Non-exempt employees only. Exempt salaried managers and professionals do not earn FLSA overtime.</li>
<li>1.5x the regular rate for hours above 40 in a fixed 168-hour workweek.</li>
<li>Workweek can start any day, but is fixed by the employer and applied consistently.</li>
<li>The "regular rate" includes most non-discretionary bonuses and commissions, allocated across the workweek.</li>
</ul>
<h2>State daily-overtime overlays</h2>
<table>
<thead><tr><th>State</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>California</td><td>1.5x over 8/day, 2x over 12/day, 1.5x first 8 hours of 7th consecutive day, 2x over 8 on 7th day</td></tr>
<tr><td>Alaska</td><td>1.5x over 8/day or 40/week (employers with 4+ employees)</td></tr>
<tr><td>Nevada</td><td>1.5x over 8/day if hourly rate is below 1.5x state minimum wage</td></tr>
<tr><td>Colorado</td><td>1.5x over 12/day, 12 consecutive hours, or 40/week</td></tr>
<tr><td>Most others</td><td>Federal FLSA only (40/week)</td></tr>
</tbody>
</table>
<h2>The tax myth</h2>
<p>"Overtime is taxed at a higher rate." False. Overtime hours are paid at 1.5x the regular rate. They are taxed at the same rate as regular wages.</p>
<p>What can happen: a paycheck with a lot of overtime gets withheld at a higher percentage because the payroll system annualizes it as if every paycheck were that big. The over-withholding refunds at filing.</p>
<h2>No tax on overtime: the 2025 to 2028 deduction</h2>
<p>Separate from the myth above, the One Big Beautiful Bill created a new federal income-tax <strong>deduction</strong> for overtime, for tax years 2025 through 2028. It does not change how your paycheck is withheld during the year. It is claimed when you file.</p>
<p>You can deduct the <strong>premium portion</strong> of FLSA-required overtime, meaning the extra half in time-and-a-half, not the whole overtime check. The deduction is capped at <strong>$12,500</strong> ($25,000 if married filing jointly) and phases out once modified adjusted gross income passes <strong>$150,000</strong> ($300,000 married filing jointly). You need a valid Social Security number, and if married you must file jointly. It is available whether you itemize or take the standard deduction.</p>
<p>Three things workers get wrong about it:</p>
<ul>
<li>It is a deduction at filing, not a change to your paycheck. Your employer still withholds federal income tax on overtime during the year. Any benefit shows up on your tax return.</li>
<li>It covers only the premium half, not the base rate for those hours.</li>
<li>It is an income-tax deduction only. Overtime is still subject to Social Security and Medicare (FICA), and still appears on your stub.</li>
</ul>
<p>For 2025, employers were not required to report qualified overtime separately on the W-2 or 1099. If yours did not, the IRS Schedule 1-A instructions explain how to calculate the amount. This is educational only. Check the current figures and your own eligibility with the IRS or a qualified tax professional before relying on it.</p>
<h2>Salaried non-exempt</h2>
<p>Salaried non-exempt workers (rare, usually lower-wage roles) earn overtime. Hourly equivalent is calculated from salary divided by 52 weeks divided by typical 40 hours.</p>
<h2>Comp time</h2>
<p>Private-sector employers in most states cannot give time off in lieu of overtime pay. Public-sector rules are more flexible.</p>
<h2>Authoritative sources</h2>
<ul>
<li><a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor, Wage and Hour Division</a></li>
<li><a href="https://www.irs.gov/newsroom/what-to-know-about-the-no-tax-on-overtime-deduction" target="_blank" rel="noopener noreferrer">IRS: What to know about the No Tax on Overtime deduction</a></li>
<li>Each state's Department of Labor for state-specific rules</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
