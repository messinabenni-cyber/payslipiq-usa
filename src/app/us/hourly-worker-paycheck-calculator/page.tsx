import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Hourly Paycheck Calculator (US)",
  description: "Estimate take-home pay for hourly US workers. Hours, rate, overtime, federal, state, FICA. Educational only.",
  alternates: { canonical: "/us/hourly-worker-paycheck-calculator" },
};

const FAQS = [{"q": "Is overtime taxed at a higher rate?", "a": "No. Overtime hours are paid at 1.5x but taxed at the same rate as regular wages. A single big paycheck can look over-withheld because payroll annualizes it. The over-withholding comes back as a refund at filing time."}, {"q": "What is the federal minimum wage?", "a": "$7.25 per hour. Most states are higher. Your employer must pay the higher of state and federal."}, {"q": "Why is my pay stub rate lower than my offer letter?", "a": "Compare again carefully. If they really do not match, document and ask payroll in writing. Small variances can come from rounding to nearest cent on a different conversion (annualized vs hourly)."}];
const RELATED = [{"label": "Paycheck Calculator", "href": "/us/paycheck-calculator"}, {"label": "Overtime explained", "href": "/us/overtime-paycheck"}, {"label": "Tipped worker guide", "href": "/us/tipped-worker-paycheck-guide"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Hourly Paycheck Calculator", "url": "/us/hourly-worker-paycheck-calculator"}];

export default function Page() {
  return (
    <RichArticle
      title="Hourly Paycheck Calculator (US)"
      url="/us/hourly-worker-paycheck-calculator"
      description="Estimate take-home pay for hourly US workers. Hours, rate, overtime, federal, state, FICA. Educational only."
      intro={<>Hourly workers see a paycheck that rises and falls with hours worked. Same hours one week, fewer the next, and your net swings. Here is how the math goes, line by line.</>}
      body={<><h2>The arithmetic</h2>
<p>Gross per pay period equals (regular hours times regular rate) plus (overtime hours times 1.5 times regular rate). Federal FLSA requires 1.5x for hours above 40 in a workweek. California, Alaska, Nevada and Colorado add daily-overtime rules on top.</p>
<p>From that gross, federal income tax comes off (per your W-4 and IRS Publication 15-T). Then FICA: 6.2 percent Social Security up to the wage base, plus 1.45 percent Medicare flat. State income tax applies in 41 states plus DC. NYC, Philadelphia, Detroit and several Ohio cities tack on local tax.</p>
<h2>Things that catch hourly workers out</h2>
<h3>Shift differentials count for overtime</h3>
<p>If you earn a $4 night-shift differential, FLSA overtime is calculated on the differential-included regular rate, not the base. So overtime on a night shift can be 1.5 times $24 instead of 1.5 times $20.</p>
<h3>Tipped wages have a different floor</h3>
<p>Federal tipped minimum wage is $2.13 per hour. Your employer must top up so tips bring you to at least the regular minimum across the workweek. Several states do not allow this tip credit.</p>
<h3>Comp time</h3>
<p>Private-sector employers in most states cannot give time off in lieu of overtime pay. Public-sector rules differ.</p>
<h2>Use the calculator</h2>
<p>The <a href="/us/paycheck-calculator">PayslipIQ paycheck calculator</a> handles hourly. Set frequency to weekly or bi-weekly, enter hours times rate as gross, pick your state. The output breaks out federal, FICA, state and net.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
