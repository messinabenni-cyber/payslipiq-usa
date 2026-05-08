import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Paycheck Comparison (Why Two Paychecks Differ)",
  description: "Compare two US paychecks line by line. What changed and why. Educational only.",
  alternates: { canonical: "/us/paycheck-comparison" },
};

const FAQS = [{"q": "My net pay dropped by exactly the amount of a 401(k) increase. Why?", "a": "Pre-tax 401(k) reduces gross before tax, but federal tax savings recoup only the marginal-rate portion of the contribution. The rest comes out of net. The math: $100 401(k) increase reduces net by ~$78 (at 22 percent bracket)."}, {"q": "How big a difference between paychecks should I worry about?", "a": "Small variations (under 5 percent) are usually rounding, partial periods, or differential changes. Larger swings deserve investigation."}, {"q": "How do I diff two pay stubs quickly?", "a": "Side by side on screen or paper. Compare the lines in the order they appear: gross, pre-tax, federal tax, FICA, state tax, post-tax, net."}];
const RELATED = [{"label": "Why did my net pay change", "href": "/us/why-did-my-net-pay-change"}, {"label": "Why is my paycheck lower", "href": "/us/why-is-my-paycheck-lower"}, {"label": "Pay stub anatomy", "href": "/us/pay-stub-anatomy"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Paycheck Comparison", "url": "/us/paycheck-comparison"}];

export default function Page() {
  return (
    <RichArticle
      title="Paycheck Comparison (Why Two Paychecks Differ)"
      url="/us/paycheck-comparison"
      description="Compare two US paychecks line by line. What changed and why. Educational only."
      intro={<>Two paychecks, different totals. The diff almost always comes from one or two specific lines. Here is how to compare them and what each kind of change usually means.</>}
      body={<><h2>How to compare</h2>
<p>Open both pay stubs side by side. Compare these in order:</p>
<ol>
<li><strong>Gross.</strong> If different, you worked different hours, received a bonus, or had a partial pay period.</li>
<li><strong>Pre-tax deductions.</strong> Different here means a benefits change, 401(k) percentage update, or HSA election shift.</li>
<li><strong>Federal income tax.</strong> Different despite same gross means W-4 changed, supplemental wages were paid, or annualization of a big check shifted you to a different bracket projection.</li>
<li><strong>Social Security.</strong> Stops mid-year when you cross the wage base. Restarts January 1.</li>
<li><strong>Medicare.</strong> Adds 0.9 percent above $200k single in a calendar year (per employer).</li>
<li><strong>State and local tax.</strong> Changes if work-state moved, a benefits change altered taxable wages, or state rates updated.</li>
<li><strong>Post-tax deductions.</strong> Roth 401(k), garnishments, after-tax insurance.</li>
<li><strong>Net pay.</strong> The bottom line.</li>
</ol>
<h2>Common patterns</h2>
<h3>Net dropped, federal withholding rose, gross unchanged</h3>
<p>Probably a W-4 change increased withholding. Or you started year and federal tables refreshed.</p>
<h3>Net rose, Social Security disappeared</h3>
<p>You crossed the SS wage base. The tax stops for the rest of the calendar year.</p>
<h3>Net dropped, pre-tax deductions rose</h3>
<p>You bumped 401(k) or started HSA. More to retirement savings, less to bank.</p>
<h3>Net dropped, post-tax garnishment line appeared</h3>
<p>A garnishment started. You should have received notice from a court or creditor before this kicked in.</p>
<h2>Use the comparison tool</h2>
<p>Paste your two paychecks into the <a href="/us/pay-stub-checker">Pay Stub Explainer</a> for a guided diff. Currently in private beta, request access via <a href="/contact">contact</a>.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
