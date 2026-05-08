import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Why Was My Overtime Taxed So Much?",
  description: "The myth that overtime is taxed at a higher rate. The reality: same rate, more withholding, refundable. Educational only.",
  alternates: { canonical: "/us/why-was-my-overtime-taxed-so-much" },
};

const FAQS = [{"q": "Is overtime taxed at a higher rate?", "a": "No. Same rate as regular wages. The withholding looks higher because payroll annualizes a big check, which projects you into a higher bracket. The over-withholding refunds at year-end."}, {"q": "Should I avoid overtime to save tax?", "a": "No. You will earn more after-tax overall. The temporary over-withholding is not a real tax cost, it is a cash-flow timing issue."}, {"q": "How is FICA on overtime?", "a": "Same as regular wages. 6.2 percent SS up to the wage base, 1.45 percent Medicare. The 0.9 percent Additional Medicare kicks in above $200k single. No special treatment for overtime hours."}];
const RELATED = [{"label": "Overtime explained", "href": "/us/overtime-paycheck"}, {"label": "FICA", "href": "/us/fica-explained"}, {"label": "Federal withholding", "href": "/us/federal-tax-withholding"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Why Was My Overtime Taxed So Much", "url": "/us/why-was-my-overtime-taxed-so-much"}];

export default function Page() {
  return (
    <RichArticle
      title="Why Was My Overtime Taxed So Much?"
      url="/us/why-was-my-overtime-taxed-so-much"
      description="The myth that overtime is taxed at a higher rate. The reality: same rate, more withholding, refundable. Educational only."
      intro={<>A common workplace rumor: overtime is taxed at a higher rate than regular wages. The math says no. Same rate. The reason it looks higher is a quirk of how payroll annualizes one big check.</>}
      body={<><h2>The actual rule</h2>
<p>Overtime hours are paid at 1.5 times your regular rate (federal FLSA, hours over 40 per week). They are taxed at the same rate as regular wages. Federal income tax, FICA, state tax all apply identically.</p>
<h2>Why it can feel like more tax</h2>
<p>Payroll software calculates withholding as if every paycheck represents your typical earning level for the year. A paycheck with a lot of overtime annualizes to a higher total income, which puts you in a higher projected bracket. So withholding on that one paycheck is higher than it would be if the same dollars had been spread evenly.</p>
<p>This is over-withholding. At year-end, when your actual annual income lands in your real bracket, the over-withheld amount comes back as a refund (or reduces your balance owed).</p>
<h2>FICA still applies normally</h2>
<p>6.2 percent Social Security up to the wage base, 1.45 percent Medicare on every dollar, plus 0.9 percent Additional Medicare above $200k single. No quirks here.</p>
<h2>The overtime tax myth in one sentence</h2>
<p>The overtime hours are not taxed more, the paycheck containing them is over-withheld for federal income tax. The over-withholding refunds at filing time.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
