import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Methodology",
  description: "Sources, refresh schedule, and editorial standards behind every PayslipIQ output.",
  alternates: { canonical: "/methodology" },
};

const FAQS = [{"q": "How often does PayslipIQ refresh tax tables?", "a": "Federal tables annually in December for the following calendar year. State tables annually plus within 30 days of any mid-year statutory change. Pay stub laws within 60 days of effective date."}, {"q": "Are PayslipIQ's calculators audited?", "a": "Each calculator function is unit-tested against IRS Publication 15-T examples and state-published worksheets. We do not currently undergo external audit."}, {"q": "How do I report a content error?", "a": "Email content@payslipiq.com with the URL and a description. We log corrections and post a monthly summary."}, {"q": "Where do PayslipIQ's federal numbers come from?", "a": "IRS Publication 15-T, Topic 751, annual revenue procedures, and SSA annual notices. Each topic page links to its primary source."}];
const RELATED = [{"label": "Trust Center", "href": "/trust"}, {"label": "AI Transparency", "href": "/ai-transparency"}, {"label": "Disclaimers", "href": "/disclaimer"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "Trust", "url": "/trust"}, {"name": "Methodology", "url": "/methodology"}];

export default function Page() {
  return (
    <RichArticle
      title="Methodology"
      url="/methodology"
      description="Sources, refresh schedule, and editorial standards behind every PayslipIQ output."
      intro={<>Where every number on PayslipIQ comes from, how often it is refreshed, and the editorial standards we hold ourselves to.</>}
      body={<><h2>Where the numbers come from</h2>
<table>
<thead><tr><th>Topic</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Federal income tax withholding</td><td>IRS Publication 15-T (current year)</td></tr>
<tr><td>Social Security wage base</td><td>Social Security Administration annual notice</td></tr>
<tr><td>Medicare tax</td><td>IRS Topic 751</td></tr>
<tr><td>Additional Medicare Tax thresholds</td><td>IRS regulations</td></tr>
<tr><td>Standard deduction</td><td>IRS annual inflation adjustment</td></tr>
<tr><td>401(k) contribution limits</td><td>IRS annual notice</td></tr>
<tr><td>HSA / FSA limits</td><td>IRS Revenue Procedures</td></tr>
<tr><td>State income tax</td><td>Each state's department of revenue</td></tr>
<tr><td>State unemployment / disability</td><td>Each state's Department of Labor / EDD</td></tr>
<tr><td>Overtime / FLSA</td><td>US Department of Labor, Wage and Hour Division</td></tr>
<tr><td>Minimum wage</td><td>Federal plus state. We use the higher.</td></tr>
<tr><td>Pay frequency / pay stub laws</td><td>State-by-state research, summarized on /us/[state]/pay-stub-laws</td></tr>
</tbody>
</table>
<h2>How calculators work</h2>
<p>PayslipIQ calculators are rule-based code, not AI predictions. The flow is:</p>
<pre><code>input → validation → federal calculation → state calculation → FICA → deductions netting → output</code></pre>
<p>Each function is unit-testable against published examples (IRS examples in Publication 15-T, state-published worksheets, FLSA overtime examples).</p>
<p>When values exceed reasonable ranges (e.g., gross pay over $10M annual), we cap and disclose.</p>
<h2>How explanations work</h2>
<p>The plain-English summary alongside each numeric answer is AI-generated under the constraints in <a href="/ai-transparency">AI Transparency</a>. Numbers themselves are never rewritten by AI.</p>
<h2>How state pages are written</h2>
<p>Each /us/[state]/ page combines:</p>
<ol>
<li>State context block: written or reviewed by a researcher familiar with that state's payroll rules.</li>
<li>State tax rates: pulled from the state's department of revenue, dated and sourced.</li>
<li>State-specific paycheck nuances: local taxes (NYC, Philadelphia, etc.), state disability programs (CA SDI, NJ SDI/FLI, NY PFL, RI TDI, HI TDI), pay stub access laws.</li>
<li>FAQ: answering the most common questions for that state's workers.</li>
<li>Disclaimer block: master disclaimer plus state-specific verification reminder.</li>
</ol>
<h2>How content is updated</h2>
<table>
<thead><tr><th>Change type</th><th>Frequency</th></tr></thead>
<tbody>
<tr><td>Federal tax tables</td><td>Annual (December for following calendar year)</td></tr>
<tr><td>State tax tables</td><td>Annual plus within 30 days of mid-year statutory change</td></tr>
<tr><td>Pay stub law changes</td><td>Within 60 days of statutory effective date</td></tr>
<tr><td>FAQ refreshes</td><td>Quarterly</td></tr>
<tr><td>AI prompt updates</td><td>Reviewed monthly, deployed as needed</td></tr>
</tbody>
</table>
<h2>Editorial standards</h2>
<ul>
<li>No advice. Education only.</li>
<li>No guaranteed outcomes.</li>
<li>Every claim has a verifiable source.</li>
<li>Every number has a date.</li>
<li>Every page has a disclaimer.</li>
<li>Every AI output has a verification reminder.</li>
</ul>
<h2>How to flag a content issue</h2>
<p>Email content@payslipiq.com with the URL and a description. We log all content corrections and post a monthly summary.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
