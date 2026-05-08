import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "401(k) Contribution Limits",
  description: "IRS annual contribution limits for 401(k), catch-up at 50+, super catch-up at 60-63 under SECURE 2.0. Educational only.",
  alternates: { canonical: "/us/401k-contribution-limits" },
};

const FAQS = [{"q": "How much can I contribute to my 401(k)?", "a": "Up to the IRS annual limit. Add catch-up at 50+ and super catch-up at 60-63 under SECURE 2.0. Verify current numbers at irs.gov."}, {"q": "Does the limit include employer match?", "a": "No. The annual limit applies only to your elective contributions. Employer match counts toward a separate, much higher Section 415 limit."}, {"q": "What if I change jobs mid-year?", "a": "Your elective contributions across all 401(k) plans for the year cannot exceed the annual limit. Track contributions to both old and new employer plans."}];
const RELATED = [{"label": "401(k) deductions", "href": "/us/401k-deductions"}, {"label": "Pre-tax vs Roth 401(k)", "href": "/us/pre-tax-vs-roth-401k"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "401(k) Contribution Limits", "url": "/us/401k-contribution-limits"}];

export default function Page() {
  return (
    <RichArticle
      title="401(k) Contribution Limits"
      url="/us/401k-contribution-limits"
      description="IRS annual contribution limits for 401(k), catch-up at 50+, super catch-up at 60-63 under SECURE 2.0. Educational only."
      intro={<>The IRS sets annual employee contribution limits for 401(k). Limits index up most years. Catch-up provisions for older workers add headroom.</>}
      body={<><h2>The base limit</h2>
<p>Set annually by the IRS. The 2024 limit was $23,000. The 2025 limit was $23,500. Verify the current year at irs.gov.</p>
<h2>Age 50+ catch-up</h2>
<p>Once you turn 50 in the calendar year, you can add a catch-up contribution on top of the base limit. The 2024 catch-up was $7,500.</p>
<h2>SECURE 2.0 super catch-up (age 60-63)</h2>
<p>Workers aged 60-63 in the calendar year can contribute a higher catch-up amount under SECURE 2.0. The amount is the greater of $10,000 or 150 percent of the regular catch-up. Verify current values, this provision is relatively new and indexed.</p>
<h2>The combined limit (employee + employer)</h2>
<p>The total of employee contributions, employer match, and employer profit-sharing into a single 401(k) plan is capped at the IRS Section 415 limit (much higher, around $69,000 for 2024 plus catch-up). Most workers do not approach this.</p>
<h2>Highly Compensated Employees</h2>
<p>HCEs (employees earning above an IRS threshold) may face additional limits if their plan fails non-discrimination testing. Plan administrators may need to refund some HCE contributions after year-end.</p>
<h2>Multiple employers</h2>
<p>The employee elective limit is across all 401(k) plans you participate in during the year. If you change jobs and contribute to two 401(k)s, the combined cannot exceed the annual limit.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
