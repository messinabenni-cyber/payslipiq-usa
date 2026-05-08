import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Seasonal Worker Paycheck Guide",
  description: "How seasonal work taxes work. Withholding, exemption, end-of-season W-2, refunds. Educational only.",
  alternates: { canonical: "/us/seasonal-worker-paycheck-guide" },
};

const FAQS = [{"q": "Will I get a refund if I only worked summer?", "a": "Often yes. If annual income is below the standard deduction, federal income tax owed is zero. Any withholding from your summer paychecks comes back when you file."}, {"q": "Do I have to file taxes if I only earned $4,000 over a summer?", "a": "Maybe not required (below filing threshold). But if any federal income tax was withheld, file to claim the refund."}, {"q": "Can I claim \"exempt\" on a summer W-4?", "a": "Only if you owed no federal income tax last year and expect none this year. \"Exempt\" stops federal withholding. FICA still applies."}];
const RELATED = [{"label": "Hourly calculator", "href": "/us/hourly-worker-paycheck-calculator"}, {"label": "Student job guide", "href": "/us/student-job-paycheck-guide"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Seasonal Worker Guide", "url": "/us/seasonal-worker-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Seasonal Worker Paycheck Guide"
      url="/us/seasonal-worker-paycheck-guide"
      description="How seasonal work taxes work. Withholding, exemption, end-of-season W-2, refunds. Educational only."
      intro={<>Lifeguards, summer camp staff, holiday retail, ski resort, farm. Seasonal workers are W-2 employees with one twist: a much shorter earnings window than a year-round worker. The tax math reflects that.</>}
      body={<><h2>Tax treatment</h2>
<p>Seasonal workers are W-2. Federal income tax, FICA, state and local tax all apply normally. The big difference is annual income may be far below typical, which changes effective tax rate.</p>
<h2>Withholding considerations</h2>
<p>If seasonal work is your only income for the year, the employer's withholding may exceed your actual tax liability. You file and get a refund. If it is a side job on top of full-time work, use Step 2 of the W-4 (multiple jobs) to avoid under-withholding.</p>
<h2>Common scenarios</h2>
<h3>Summer-only worker (student)</h3>
<p>If your annual income is below the standard deduction ($15,000 single in 2026), you owe zero federal income tax. Any federal withholding comes back as a refund. FICA is still withheld (rarely refunded).</p>
<h3>Holiday retail (Nov to Jan)</h3>
<p>Spans two tax years. You receive a W-2 for each calendar year you worked.</p>
<h3>Year-round seasonal across multiple employers</h3>
<p>One W-2 per employer. File one return combining all income.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
