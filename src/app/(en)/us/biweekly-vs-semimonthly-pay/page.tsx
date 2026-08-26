import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Bi-Weekly vs Semi-Monthly Pay",
  description: "Difference between bi-weekly (26 paychecks/year) and semi-monthly (24 paychecks/year). Math, timing, budgeting. Educational only.",
  alternates: { canonical: "/us/biweekly-vs-semimonthly-pay" },
};

const FAQS = [{"q": "How many paychecks in a year?", "a": "Bi-weekly is 26. Semi-monthly is 24. Weekly is 52. Monthly is 12."}, {"q": "Are bi-weekly paychecks smaller than semi-monthly?", "a": "On the same salary, yes (slightly). Annual salary divided by 26 < annual salary divided by 24. Across the year both add to the same total."}, {"q": "Do I save on tax with semi-monthly?", "a": "No. Annual tax is identical. Per-paycheck withholding is just calculated to total to the same annual amount."}];
const RELATED = [{"label": "Paycheck calculator", "href": "/us/paycheck-calculator"}, {"label": "Salary after tax", "href": "/us/salary-after-tax"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Bi-Weekly vs Semi-Monthly", "url": "/us/biweekly-vs-semimonthly-pay"}];

export default function Page() {
  return (
    <RichArticle
      title="Bi-Weekly vs Semi-Monthly Pay"
      url="/us/biweekly-vs-semimonthly-pay"
      description="Difference between bi-weekly (26 paychecks/year) and semi-monthly (24 paychecks/year). Math, timing, budgeting. Educational only."
      intro={<>Same annual salary, different number of paychecks. Bi-weekly and semi-monthly look similar but differ in important ways for cash-flow timing and per-check amounts.</>}
      body={<><h2>The math</h2>
<p>Bi-weekly is every other Friday: 26 paychecks per year. Semi-monthly is twice a month, typically the 15th and last day: 24 paychecks per year. Same annual salary divided by different numbers gives different per-paycheck amounts. Bi-weekly checks are smaller per period than semi-monthly because the salary is divided by 26 instead of 24.</p>
<h2>The "extra" paycheck illusion</h2>
<p>Bi-weekly schedules produce 26 paychecks per year, but two months a year contain three paychecks instead of two. People treat those as bonuses. They are not bonuses, just the natural result of the calendar.</p>
<h2>Tax withholding</h2>
<p>Annual tax owed is the same regardless of pay frequency. Per-paycheck withholding is calculated to total to the same annual tax. The IRS Publication 15-T tables include both bi-weekly and semi-monthly variants.</p>
<h2>Benefits and 401(k) timing</h2>
<p>Some plans use bi-weekly contributions, others semi-monthly. Annual contribution limits are the same. Employer match formulas may use a per-paycheck cap that interacts differently with each schedule, check your plan documents.</p>
<h2>What is better?</h2>
<p>Personal preference. Bi-weekly aligns with a weekly budget rhythm. Semi-monthly aligns with monthly bills. Both end up at the same annual total.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
