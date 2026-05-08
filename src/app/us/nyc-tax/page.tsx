import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "NYC Income Tax (Resident and Yonkers)",
  description: "New York City resident income tax brackets, plus the Yonkers resident tax. Educational only.",
  alternates: { canonical: "/us/nyc-tax" },
};

const FAQS = [{"q": "Do I pay NYC tax if I work in NYC but live in NJ?", "a": "No. NYC tax is residence-based. Non-resident commuters do not pay NYC personal income tax. You owe NJ tax as a resident, plus NY State tax on NY-source wages, with a credit on your NJ return for tax paid to NY."}, {"q": "Do I pay NYC tax if I live in NYC but work remote for an out-of-state employer?", "a": "Yes. As a NYC resident you owe NYC tax on all your income regardless of where it was earned."}, {"q": "Is the Yonkers surcharge separate from NY State tax?", "a": "Yes. Yonkers residents pay NY State tax plus a Yonkers surcharge. They are separate calculations on the state return."}];
const RELATED = [{"label": "New York paycheck calculator", "href": "/us/new-york/paycheck-calculator"}, {"label": "Multi-state payroll", "href": "/us/multi-state-payroll-guide"}, {"label": "Local taxes overview", "href": "/us/local-taxes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "NYC Tax", "url": "/us/nyc-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="NYC Income Tax (Resident and Yonkers)"
      url="/us/nyc-tax"
      description="New York City resident income tax brackets, plus the Yonkers resident tax. Educational only."
      intro={<>New York City taxes residents on their income. Non-residents who work in NYC do not pay NYC tax (the rule is residence-based). Yonkers residents pay a separate Yonkers surcharge. Here is how it stacks.</>}
      body={<><h2>Who pays NYC tax</h2>
<p>Residents of any of the five NYC boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island). Residence is generally where you maintain your permanent home and spend most days.</p>
<p>Non-residents who work in NYC do NOT pay NYC personal income tax. NYC tax is residence-based.</p>
<h2>NYC brackets</h2>
<p>Multiple brackets, similar in shape to NY State brackets but with different rates. Verify current rates with the NYC Department of Finance and the NYS Department of Taxation and Finance.</p>
<h2>Yonkers</h2>
<p>Residents pay a Yonkers tax surcharge in addition to NY State tax. Non-residents who work in Yonkers pay a smaller earnings tax. Both run alongside (not instead of) state tax.</p>
<h2>Common pay stub lines for NYC residents</h2>
<ul>
<li>NY State income tax</li>
<li>NYC resident income tax</li>
<li>NY SDI (modest, capped)</li>
<li>NY PFL premium (capped percentage)</li>
<li>Federal income tax</li>
<li>Social Security 6.2 percent</li>
<li>Medicare 1.45 percent</li>
</ul>
<h2>Common pay stub lines for Yonkers residents</h2>
<p>Same as NYC residents minus the NYC line, plus a Yonkers surcharge line.</p>
<h2>Authoritative sources</h2>
<ul>
<li><a href="https://www1.nyc.gov/site/finance" target="_blank" rel="noopener noreferrer">NYC Department of Finance</a></li>
<li><a href="https://www.tax.ny.gov" target="_blank" rel="noopener noreferrer">NY State Department of Taxation and Finance</a></li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
