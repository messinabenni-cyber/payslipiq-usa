import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Gig Worker Paycheck Guide (Rideshare, Delivery, Freelance)",
  description: "1099-K, 1099-NEC, self-employment tax, deductions, quarterly estimates for gig workers. Educational only.",
  alternates: { canonical: "/us/gig-worker-paycheck-guide" },
};

const FAQS = [{"q": "Do I owe tax on every dollar from gig work?", "a": "On net earnings (gross minus deductible business expenses). Mileage, phone portion, supplies, platform fees are common deductions. Keep records."}, {"q": "Should I form an LLC?", "a": "An LLC alone does not change federal tax. A single-member LLC is taxed as a sole proprietor by default. An S-Corp election can reduce SE tax in some cases. Talk to a CPA."}, {"q": "What is the standard mileage rate?", "a": "The IRS publishes it annually. Multiply business miles times the rate, or alternatively track actual vehicle expenses. Verify the current rate at irs.gov."}, {"q": "Do I file taxes quarterly?", "a": "If you expect to owe $1,000 or more at year-end, yes. Form 1040-ES. Failure to pay can trigger underpayment penalties."}];
const RELATED = [{"label": "Contractor vs employee", "href": "/us/contractor-vs-employee-paycheck-guide"}, {"label": "FICA / self-employment tax", "href": "/us/fica-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Gig Worker Guide", "url": "/us/gig-worker-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Gig Worker Paycheck Guide (Rideshare, Delivery, Freelance)"
      url="/us/gig-worker-paycheck-guide"
      description="1099-K, 1099-NEC, self-employment tax, deductions, quarterly estimates for gig workers. Educational only."
      intro={<>Uber, Lyft, DoorDash, Instacart, Upwork. Gig workers are 1099 contractors. The platform pays you gross, you handle every tax dollar yourself. Here is the structure.</>}
      body={<><h2>How platforms report you</h2>
<p>Most gig platforms issue Form 1099-K (payment-app payouts) or Form 1099-NEC (non-employee compensation). The IRS lowered the 1099-K threshold in recent years. Verify the current threshold for the tax year you are filing.</p>
<h2>What you owe</h2>
<ul>
<li>Federal income tax on net earnings (gross minus business expenses) at your bracket.</li>
<li>Self-employment tax: 15.3 percent on net up to the Social Security wage base, then 2.9 percent (plus 0.9 above $200k single) on the rest.</li>
<li>State income tax where applicable.</li>
<li>Estimated quarterly taxes via Form 1040-ES if you expect to owe $1,000 or more at year-end.</li>
</ul>
<h2>Deductible business expenses</h2>
<p>Schedule C is your friend. Mileage (standard or actual), portion of phone and data, supplies, parking, tolls, platform commissions. Keep records. The IRS standard mileage rate is published annually.</p>
<h2>Health insurance and retirement</h2>
<p>Self-employed health insurance premiums are deductible above the line. SEP-IRA, Solo 401(k) and SIMPLE IRA all have far higher limits than employee 401(k). Talk to a CPA before opening one.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
