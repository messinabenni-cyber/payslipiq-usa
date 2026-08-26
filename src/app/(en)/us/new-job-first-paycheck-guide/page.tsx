import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "New Job? Your First Paycheck Explained",
  description: "What to expect on the first paycheck at a new US job. W-4, benefits, partial pay periods, sign-on bonuses. Educational only.",
  alternates: { canonical: "/us/new-job-first-paycheck-guide" },
};

const FAQS = [{"q": "Why is my first paycheck smaller than expected?", "a": "Most likely a partial pay period, benefits not yet active, or default W-4 settings. Compare to the offer letter and pay frequency."}, {"q": "When do my benefits kick in?", "a": "Depends on the employer. Common waiting periods are 30, 60 or 90 days. Some employers offer first-day benefits. Check your offer letter or HR portal."}, {"q": "Is my sign-on bonus taxed at a higher rate?", "a": "Withheld at the federal supplemental rate (22 percent up to $1M annually, 37 percent above). FICA still applies. Final tax owed is settled at filing time."}, {"q": "Should I change my W-4 right away?", "a": "Submit it once with sensible defaults. After one or two paychecks, review using the IRS Tax Withholding Estimator and adjust if needed."}];
const RELATED = [{"label": "W-4 guide", "href": "/us/w4-guide"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}, {"label": "Benefits deductions", "href": "/us/health-insurance-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "New Job First Paycheck", "url": "/us/new-job-first-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="New Job? Your First Paycheck Explained"
      url="/us/new-job-first-paycheck-guide"
      description="What to expect on the first paycheck at a new US job. W-4, benefits, partial pay periods, sign-on bonuses. Educational only."
      intro={<>Your first paycheck at a new job rarely matches the offer letter exactly. Five things usually account for the gap.</>}
      body={<><h2>Why the first paycheck looks different</h2>
<ol>
<li><strong>Partial pay period.</strong> If you started mid-period, your first paycheck covers only the days worked.</li>
<li><strong>Benefits not yet active.</strong> Many employers have 30, 60 or 90 day waiting periods. Health, 401(k), HSA may not be deducted from the first paychecks.</li>
<li><strong>Default W-4.</strong> If you submitted the W-4 without thinking, withholding may be higher than you would like. Adjust if needed.</li>
<li><strong>Sign-on bonus.</strong> Often paid on the first paycheck and withheld at the supplemental rate.</li>
<li><strong>Pay frequency mismatch.</strong> Bi-weekly to semi-monthly to monthly all change the per-period math.</li>
</ol>
<h2>What to check</h2>
<ul>
<li>Hourly rate or salary matches the offer letter.</li>
<li>Pay frequency matches what was promised.</li>
<li>Filing status reflects your W-4.</li>
<li>YTD totals start at zero.</li>
<li>Direct deposit account is correct.</li>
<li>State tax is for the right state.</li>
</ul>
<h2>What to do next</h2>
<ul>
<li>Confirm benefits enrollment dates.</li>
<li>Adjust W-4 if withholding is wrong.</li>
<li>Set 401(k) percentage during the enrollment window.</li>
<li>Designate beneficiaries on retirement and life insurance.</li>
<li>Verify direct deposit on the second paycheck.</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
