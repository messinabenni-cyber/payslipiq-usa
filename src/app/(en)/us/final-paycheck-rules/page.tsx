import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Final Paycheck Rules by State",
  description: "When your final paycheck must be paid after termination or resignation. Federal floor and state-specific timing. Educational only.",
  alternates: { canonical: "/us/final-paycheck-rules" },
};

const FAQS = [{"q": "When does my final paycheck have to come?", "a": "Depends on your state and whether you were fired or resigned. California requires same-day for terminations. New York allows next regular payday. Check your state's labor department."}, {"q": "Do I get my unused vacation paid out?", "a": "Depends on state law and employer policy. California, Colorado, Massachusetts, Montana, Nebraska, North Dakota, Wyoming generally require payout. Many states leave it to employer policy."}, {"q": "What if my final paycheck is late?", "a": "File a wage claim with your state Department of Labor. Some states (CA notably) impose waiting-time penalties on the employer."}];
const RELATED = [{"label": "Pay stub laws by state", "href": "/us/learn"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Final Paycheck Rules", "url": "/us/final-paycheck-rules"}];

export default function Page() {
  return (
    <RichArticle
      title="Final Paycheck Rules by State"
      url="/us/final-paycheck-rules"
      description="When your final paycheck must be paid after termination or resignation. Federal floor and state-specific timing. Educational only."
      intro={<>Federal law has no specific deadline for paying a final paycheck. State laws fill the gap, with widely varying rules. The deadline depends on whether you were fired or resigned, and on your state.</>}
      body={<><h2>The federal floor</h2>
<p>FLSA does not set a deadline for the final paycheck specifically. It just requires payment by the regular pay period schedule. State law usually goes further.</p>
<h2>State variations</h2>
<p>Roughly four buckets:</p>
<ul>
<li><strong>Same-day if fired.</strong> California, Colorado, Connecticut, Hawaii, Illinois, Massachusetts, Minnesota (within 24 hours), Missouri, Montana, Nevada (3 days), Oregon, Texas (within 6 days), Utah (within 24 hours), Vermont, Wyoming.</li>
<li><strong>Next regular payday.</strong> Florida, Georgia, Iowa, Maryland, North Carolina, North Dakota, Ohio, Pennsylvania, South Carolina, Virginia, West Virginia.</li>
<li><strong>Specific time window.</strong> Alaska, Arizona, Delaware, Idaho, Indiana, Kentucky, Louisiana, Maine, Michigan, Mississippi, New Hampshire, New Jersey, New Mexico, New York, Oklahoma, Rhode Island, South Dakota, Tennessee, Washington, Wisconsin.</li>
<li><strong>Whatever the employer's regular schedule.</strong> Few states.</li>
</ul>
<h2>Resignation vs termination</h2>
<p>Most state laws give a longer window for voluntary resignation than for termination. The reasoning: a fired employee may not have access to direct deposit accounts and needs faster cash.</p>
<h2>What is included</h2>
<p>Final paycheck must include:</p>
<ul>
<li>All earned wages through the last day worked.</li>
<li>Accrued vacation or PTO that the company policy or state law treats as wages.</li>
<li>Earned commissions and bonuses (if vested).</li>
<li>Any owed overtime.</li>
</ul>
<h2>If your final paycheck is late</h2>
<p>File a wage claim with your state Department of Labor. Many states impose waiting-time penalties (e.g., California adds the daily wage as a penalty for each day late, up to 30 days).</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
