import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

import { ReviewedBy } from '@/components/ReviewedBy';
export const metadata: Metadata = {
  title: "Overtime Pay and Taxes (US)",
  description: "Overtime pay rules under federal FLSA, plus state daily-overtime overlays. The tax myth busted. Educational only.",
  alternates: { canonical: "/us/overtime-paycheck" },
};

const FAQS = [{"q": "Is overtime taxed at a higher rate?", "a": "No. Same rate as regular wages. Withholding can look higher because payroll annualizes a big check, but the over-withholding refunds at year-end."}, {"q": "Do salaried workers get overtime?", "a": "Salaried non-exempt workers do. Most salaried workers are exempt and do not."}, {"q": "How is overtime calculated when I have multiple pay rates?", "a": "FLSA requires a weighted-average regular rate including non-discretionary bonuses and differentials. Overtime is 1.5x that weighted rate."}, {"q": "Can my employer offer comp time instead of overtime?", "a": "Private-sector usually cannot. Public-sector employers can under specific conditions."}];
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
<h2>Salaried non-exempt</h2>
<p>Salaried non-exempt workers (rare, usually lower-wage roles) earn overtime. Hourly equivalent is calculated from salary divided by 52 weeks divided by typical 40 hours.</p>
<h2>Comp time</h2>
<p>Private-sector employers in most states cannot give time off in lieu of overtime pay. Public-sector rules are more flexible.</p>
<h2>Authoritative sources</h2>
<ul>
<li><a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor, Wage and Hour Division</a></li>
<li>Each state's Department of Labor for state-specific rules</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
