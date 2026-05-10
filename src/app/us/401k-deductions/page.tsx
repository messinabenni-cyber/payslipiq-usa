import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

import { ReviewedBy } from '@/components/ReviewedBy';
export const metadata: Metadata = {
  title: "401(k) Deductions on Your Paycheck",
  description: "How 401(k) deductions work: pre-tax, Roth, employer match, vesting, loans. FICA still applies. Educational only.",
  alternates: { canonical: "/us/401k-deductions" },
};

const FAQS = [{"q": "Does my 401(k) reduce my Social Security tax?", "a": "No. Pre-tax 401(k) reduces federal income tax wages, not FICA wages."}, {"q": "Pre-tax or Roth?", "a": "Depends on your current vs expected retirement tax bracket. Lower in retirement = pre-tax wins. Higher = Roth wins. Many people split because future brackets are unknown."}, {"q": "Is the employer match free money?", "a": "Yes, after vesting. Always contribute enough to capture the full match. Leaving before vesting forfeits unvested match."}, {"q": "Why didn't my 401(k) reduce my Medicare tax?", "a": "Pre-tax 401(k) is not exempt from FICA (Social Security + Medicare). It is exempt from federal income tax."}];
const RELATED = [{"label": "Pre-tax vs Roth 401(k)", "href": "/us/pre-tax-vs-roth-401k"}, {"label": "401(k) contribution limits", "href": "/us/401k-contribution-limits"}, {"label": "Pre-tax vs post-tax", "href": "/us/pre-tax-vs-post-tax-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "401(k) Deductions", "url": "/us/401k-deductions"}];

export default function Page() {
  return (
    <RichArticle
      title="401(k) Deductions on Your Paycheck"
      url="/us/401k-deductions"
      description="How 401(k) deductions work: pre-tax, Roth, employer match, vesting, loans. FICA still applies. Educational only."
      intro={<>Workplace retirement saving via your paycheck. Pre-tax cuts your taxable wages now and you pay tax in retirement. Roth flips that. Employer match is on top either way.</>}
      body={<><h2>Pre-tax (traditional) 401(k)</h2>
<p>Reduces federal income tax wages and most state income tax wages. Does NOT reduce FICA wages. You pay tax when you take qualified distributions in retirement (age 59.5+, or under hardship rules).</p>
<h2>Roth 401(k)</h2>
<p>Post-tax. No reduction in current taxable wages. Qualified withdrawals (account 5+ years old, age 59.5 or other qualifying event) are tax-free in retirement. FICA applied on the contribution.</p>
<h2>The shared annual limit</h2>
<p>The IRS sets a combined annual employee contribution limit across pre-tax and Roth. The 2024 limit was $23,000. Verify the current year at irs.gov.</p>
<h2>Catch-up contributions</h2>
<ul>
<li>Age 50+ catch-up: extra contribution allowed once you turn 50 in the calendar year. The 2024 catch-up was $7,500.</li>
<li>SECURE 2.0 super catch-up at 60-63: a higher catch-up amount. Verify current values.</li>
</ul>
<h2>Employer match</h2>
<p>Money your employer puts in on top of yours. Common formulas: dollar-for-dollar up to 4 percent of your pay, or 50 cents on the dollar up to 6 percent. Check your plan documents.</p>
<p>Match goes into a pre-tax sub-account regardless of whether your contribution is pre-tax or Roth. Some plans (under SECURE 2.0) offer Roth match.</p>
<h2>Vesting</h2>
<p>Your contributions are always 100 percent vested. Employer match may have a vesting schedule (often 3-year cliff or 6-year graded). Leaving before vesting forfeits unvested match.</p>
<h2>The combined limit</h2>
<p>Total of employee contributions plus employer match plus profit-sharing into one plan is capped at the IRS Section 415 limit (much higher, around $69,000 for 2024 plus catch-up).</p>
<h2>401(k) loans</h2>
<p>Most plans allow loans up to 50 percent of your vested balance, capped at $50,000. You repay yourself with interest via payroll deductions, post-tax. Default on a 401(k) loan triggers tax + 10 percent early withdrawal penalty if you are under 59.5.</p>
<h2>Highly Compensated Employees</h2>
<p>HCEs (employees earning above an IRS threshold) may face additional restrictions if their plan fails non-discrimination testing.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
