import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Salaried Paycheck Calculator (US)",
  description: "Take-home from an annual salary. Federal, FICA, state. Educational only.",
  alternates: { canonical: "/us/salaried-worker-paycheck-calculator" },
};

const FAQS = [{"q": "Do salaried workers pay more tax than hourly?", "a": "No. Federal and FICA depend on annual gross, not pay structure."}, {"q": "My January paycheck looks different from December. Why?", "a": "Tax tables refresh annually. Social Security wage base resets to zero on January 1, so high earners who had stopped paying SS in November pay it again in January. Open-enrollment changes also kick in."}, {"q": "How is a sign-on bonus taxed?", "a": "Withheld at the federal supplemental rate (22 percent up to $1M annually, 37 percent above). FICA still applies. Final tax owed gets settled on your return."}];
const RELATED = [{"label": "Paycheck Calculator", "href": "/us/paycheck-calculator"}, {"label": "Salary after tax", "href": "/us/salary-after-tax"}, {"label": "Bonus tax explained", "href": "/us/bonus-tax-paycheck"}, {"label": "W-4 guide", "href": "/us/w4-guide"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Salaried Paycheck Calculator", "url": "/us/salaried-worker-paycheck-calculator"}];

export default function Page() {
  return (
    <RichArticle
      title="Salaried Paycheck Calculator (US)"
      url="/us/salaried-worker-paycheck-calculator"
      description="Take-home from an annual salary. Federal, FICA, state. Educational only."
      intro={<>Salaried pay is steadier than hourly. Same gross every period (barring bonus or unpaid leave), but the deductions still vary across the year. Here is what changes and why.</>}
      body={<><h2>Pay periods</h2>
<p>Bi-weekly is 26 paychecks per year. Semi-monthly is 24. Monthly is 12. Same annual salary, different per-period amount. The annual numbers come out the same.</p>
<h2>Exempt versus non-exempt</h2>
<p>Most salaried roles are exempt from FLSA overtime: same pay regardless of hours. Some salaried roles are non-exempt and earn overtime above 40 per week. Eligibility depends on FLSA duties, salary basis and salary level tests. Your offer letter or HR can confirm.</p>
<h2>What changes a salaried check during the year</h2>
<ul>
<li>You updated your W-4 mid-year.</li>
<li>Open enrollment moved your benefits, 401(k) or HSA elections.</li>
<li>Year-to-date wages crossed the Social Security wage base. From that point through December, Social Security tax stops, so net rises.</li>
<li>Annual federal and state tax-table refresh in January.</li>
<li>You received a bonus and it was withheld at the supplemental rate (22 percent up to $1M, 37 percent above).</li>
</ul>
<h2>Use the calculator</h2>
<p>Run the <a href="/us/paycheck-calculator">paycheck calculator</a>. Pick annual frequency and enter your salary. Or pick bi-weekly and enter the bi-weekly amount. Either gets you to the same place.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
