import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

export const metadata: Metadata = {
  title: "Hourly Paycheck Calculator (US)",
  description: "Hourly paycheck calculator for US workers. Hours times rate, overtime, federal, FICA, state. Educational only.",
  alternates: { canonical: "/us/hourly-paycheck-calculator" },
};

const FAQS = [{"q": "How is overtime calculated for hourly workers?", "a": "1.5x the regular rate for hours above 40 in a workweek (federal FLSA). Some states (CA, NV, AK, CO) have stricter daily-OT rules."}, {"q": "What about shift differentials?", "a": "Differentials are part of the regular rate for FLSA OT calculations. Overtime is 1.5x (base + differential), not 1.5x base alone."}, {"q": "Do hourly workers get pre-tax 401(k) and benefits?", "a": "Yes, eligibility depends on plan rules, not on hourly vs salaried."}];
const RELATED = [{"label": "Paycheck calculator", "href": "/us/paycheck-calculator"}, {"label": "Hourly worker guide", "href": "/us/hourly-worker-paycheck-calculator"}, {"label": "Overtime explained", "href": "/us/overtime-paycheck"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Hourly Paycheck Calculator", "url": "/us/hourly-paycheck-calculator"}];

export default function Page() {
  return (
    <>
    <RichArticle
      title="Hourly Paycheck Calculator (US)"
      url="/us/hourly-paycheck-calculator"
      description="Hourly paycheck calculator for US workers. Hours times rate, overtime, federal, FICA, state. Educational only."
      intro={<>Hourly paycheck math: regular hours times rate, plus overtime hours times 1.5x rate, minus federal income tax, FICA, state and local tax, and any voluntary deductions. PayslipIQ runs all of it.</>}
      body={<><h2>The math</h2>
<p><strong>Regular pay</strong> = regular hours × hourly rate</p>
<p><strong>Overtime pay</strong> = overtime hours × 1.5 × hourly rate</p>
<p><strong>Gross</strong> = regular + overtime + any differentials, holiday pay, sick pay, PTO</p>
<p>From there, federal income tax (per W-4 + IRS Pub 15-T), FICA (6.2 + 1.45 percent), state tax (where applicable), local tax, pre-tax and post-tax deductions.</p>
<h2>Federal FLSA overtime threshold</h2>
<p>1.5x for hours above 40 in a workweek. Non-exempt employees only.</p>
<h2>State daily-overtime overlays</h2>
<p>California, Alaska, Nevada, Colorado have stricter daily-OT rules. See the <a href="/us/overtime-paycheck">overtime page</a>.</p>
<h2>Run the calculator</h2>
<p>Use the <a href="/us/paycheck-calculator">paycheck calculator</a>set frequency to Weekly or Bi-weekly, enter (hours × rate) as your gross. The tool handles the rest.</p>
<h2>Tipped workers</h2>
<p>Federal tipped minimum wage is $2.13/hour. Employer must top up so tips bring you to at least the regular minimum across the workweek. Several states do not allow this tip credit. See the <a href="/us/tipped-worker-paycheck-guide">tipped worker guide</a>.</p>
<h2>Common hourly-paycheck issues</h2>
<ul>
<li>Missing overtime on a 40+ hour workweek (FLSA non-exempt)</li>
<li>Differentials (shift, weekend) not factored into overtime regular rate</li>
<li>Tipped minimum wage not topped up to federal/state minimum</li>
<li>Comp time offered in lieu of OT (illegal in most private-sector cases)</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
    <MobileStickyCTA
      href="/us/paycheck-calculator"
      label="Run Paycheck Calculator"
      secondaryHref="/us/overtime-paycheck"
      secondaryLabel="Overtime"
    />
    </>
  );
}
