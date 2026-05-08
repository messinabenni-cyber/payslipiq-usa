import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Tipped Worker Paycheck Guide (US)",
  description: "How tipped pay works. Federal $2.13 minimum, tip credit, state rules, FICA on tips. Educational only.",
  alternates: { canonical: "/us/tipped-worker-paycheck-guide" },
};

const FAQS = [{"q": "Are cash tips taxable?", "a": "Yes. All tips are taxable income. You must report cash tips of $20 or more per month per employer. Form 4070 or your employer's equivalent is the standard reporting tool."}, {"q": "Do I pay FICA on tips?", "a": "Yes. Reported tips are subject to Social Security (6.2 percent) and Medicare (1.45 percent). Your employer matches the employer-side FICA on reported tips."}, {"q": "What if tips do not bring me to minimum wage?", "a": "Federal law requires the employer to top up so you make at least the regular minimum wage averaged over the workweek. Some states require the full state minimum with no tip credit, regardless of tips."}, {"q": "Are service charges the same as tips?", "a": "No. Automatic gratuities are wages under IRS rules. They are taxed like regular pay, not like voluntary tips."}];
const RELATED = [{"label": "Hourly calculator", "href": "/us/hourly-worker-paycheck-calculator"}, {"label": "FICA explained", "href": "/us/fica-explained"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}];
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
