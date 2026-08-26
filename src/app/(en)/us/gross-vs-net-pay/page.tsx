import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Gross Pay vs Net Pay",
  description: "Gross pay vs net pay. The math behind what gets deducted between the two. Educational only.",
  alternates: { canonical: "/us/gross-vs-net-pay" },
};

const FAQS = [{"q": "What is the difference between gross and net pay?", "a": "Gross is what you earned. Net is what lands in your bank after federal income tax, FICA, state and local tax, and any voluntary deductions."}, {"q": "Why is my net so much less than my gross?", "a": "Combined federal income tax, FICA, state tax, local tax (where applicable), plus benefits typically reduce gross by 25 to 40 percent."}, {"q": "Is my W-2 Box 1 my gross?", "a": "No. Box 1 is gross minus pre-tax 401(k), traditional HSA, FSA, Section 125 health insurance. So Box 1 is usually less than your end-of-year gross."}];
const RELATED = [{"label": "Paycheck calculator", "href": "/us/paycheck-calculator"}, {"label": "Pre-tax vs post-tax", "href": "/us/pre-tax-vs-post-tax-deductions"}, {"label": "W-2 explained", "href": "/us/w2-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Gross vs Net Pay", "url": "/us/gross-vs-net-pay"}];

export default function Page() {
  return (
    <RichArticle
      title="Gross Pay vs Net Pay"
      url="/us/gross-vs-net-pay"
      description="Gross pay vs net pay. The math behind what gets deducted between the two. Educational only."
      intro={<>Gross is what you earned. Net is what landed in your account. The gap between them is built from federal income tax, FICA, state and local tax, plus voluntary deductions you elected.</>}
      body={<><h2>The formula</h2>
<pre><code>Net = Gross − Federal income tax − Social Security − Medicare − State income tax − Local tax − Pre-tax deductions − Post-tax deductions</code></pre>
<h2>What sits in each line</h2>
<h3>Federal income tax</h3>
<p>Calculated from your W-4 using IRS Publication 15-T. Varies with filing status, dependents, and other W-4 inputs.</p>
<h3>FICA (Social Security + Medicare)</h3>
<p>Federal payroll tax. 6.2 percent SS up to the annual wage base + 1.45 percent Medicare on every dollar. Plus 0.9 percent Additional Medicare above $200k single or $250k MFJ.</p>
<h3>State income tax</h3>
<p>Varies by state. Nine states have no income tax. Several use flat rates. Others use progressive brackets.</p>
<h3>Local income tax</h3>
<p>Applies in NYC, Yonkers, Philadelphia, Detroit, several Ohio cities, and others. Most US workers do not have a local tax line.</p>
<h3>Pre-tax deductions</h3>
<p>401(k), HSA, FSA, Section 125 health insurance. These reduce taxable wages, so they appear in their own section that comes off the gross before tax is calculated.</p>
<h3>Post-tax deductions</h3>
<p>Roth 401(k), wage garnishments, after-tax life insurance, union dues, 401(k) loan repayments. These come off net pay, not gross.</p>
<h2>Why the gap looks larger than expected</h2>
<p>Most US workers are surprised by the difference between gross and net the first time. Common math: 7.65 percent FICA + 10 to 24 percent federal + 0 to 13 percent state + 1 to 4 percent local + benefits. Total can easily be 25 to 40 percent of gross.</p>
<h2>Quick estimate</h2>
<p>For a single filer earning $75,000 in a state with no income tax, expect roughly $58,000 to $61,000 net (depending on benefits). In California, more like $54,000 to $57,000 net.</p>
<p>Run real numbers in the <a href="/us/paycheck-calculator">paycheck calculator</a>.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
