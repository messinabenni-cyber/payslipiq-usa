import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Teacher Paycheck Guide (10-Month vs 12-Month, TRS, 403b)",
  description: "10-month vs 12-month pay, summer pay, TRS retirement, 403(b) and 457(b), Social Security non-covered employment. Educational only.",
  alternates: { canonical: "/us/teacher-paycheck-guide" },
};

const FAQS = [{"q": "Do teachers pay Social Security?", "a": "Depends on the state. In about 13 states, public-school teachers are in non-Social-Security-covered employment and contribute to TRS instead. Affects later SS benefits via WEP and GPO."}, {"q": "Why does my September paycheck look different?", "a": "Districts often start the new contract year mid-month. Combined with annual W-4 and benefits resets at the start of the school year, the first one or two checks of a school year usually look unusual."}, {"q": "Should I pick 10-month or 12-month pay?", "a": "Personal preference. Total annual gross is identical. Test against your monthly budget."}, {"q": "What is a 403(b)?", "a": "A retirement plan for public-school employees and certain non-profits. Similar mechanics to 401(k). Pre-tax or Roth options. IRS-set annual limit."}];
const RELATED = [{"label": "Salaried calculator", "href": "/us/salaried-worker-paycheck-calculator"}, {"label": "401(k) explained", "href": "/us/401k-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Teacher Paycheck Guide", "url": "/us/teacher-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Teacher Paycheck Guide (10-Month vs 12-Month, TRS, 403b)"
      url="/us/teacher-paycheck-guide"
      description="10-month vs 12-month pay, summer pay, TRS retirement, 403(b) and 457(b), Social Security non-covered employment. Educational only."
      intro={<>Teacher paychecks have wrinkles you do not see in private-sector pay. A 10-month school year, optional summer pay schedules, state retirement systems instead of (or alongside) Social Security, and supplemental tax-deferred accounts. Here is how each piece works.</>}
      body={<><h2>10-month versus 12-month</h2>
<p>Teachers work a 10-month school year. Districts often let you pick: 10 paychecks (larger checks during the school year, no pay in summer) or 12 paychecks (smaller checks year-round). The annual gross is identical. Pick what your budget tolerates.</p>
<h2>State Teacher Retirement System</h2>
<p>Most states run a Teacher Retirement System or similar. You contribute a percentage of pay (often 5 to 10 percent), pre-tax, shown as a retirement deduction on the stub. In some states (Alaska, California, Colorado, Connecticut, Illinois, Kentucky, Louisiana, Maine, Massachusetts, Missouri, Nevada, Ohio, Texas) teachers are in non-Social-Security-covered employment. They contribute to TRS instead of Social Security. This affects later Social Security benefits via the Windfall Elimination Provision and Government Pension Offset.</p>
<h2>403(b) and 457(b)</h2>
<p>Supplemental retirement on top of TRS. Both work like 401(k) with similar limits. 457(b) has special rules around early withdrawal that 403(b) lacks. Many districts offer both.</p>
<h2>Other lines on a teacher stub</h2>
<ul>
<li>Union dues, post-tax deduction in most cases.</li>
<li>Health insurance premiums, usually pre-tax.</li>
<li>Supplemental life insurance.</li>
<li>Sometimes a separate sick-leave accrual line.</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
