import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "AI Transparency",
  description: "Where AI is used at PayslipIQ, where it is not, what its limits are, how it is bounded.",
  alternates: { canonical: "/ai-transparency" },
};

const FAQS = [{"q": "Does PayslipIQ use AI for tax rate lookups?", "a": "No. Tax rates and brackets come from public IRS and state authority sources, refreshed on a published schedule. AI is used only to generate the human-language explanation alongside numbers."}, {"q": "Will AI ever give me tax advice?", "a": "No. AI outputs are bounded by prompts and post-processed for compliance. The model is forbidden from giving tax, legal, financial, or payroll advice. Every output ends with the verification reminder."}, {"q": "Does PayslipIQ train AI on my pay stub?", "a": "No. We do not train any AI on user pay stubs. Our LLM provider contractually does not retain user data for training."}, {"q": "What data is sent to the AI provider?", "a": "Pay stub data with SSN and bank account numbers redacted. Sent over encrypted transport. Used only to return the explanation. Provider does not retain or train on it."}, {"q": "What happens if AI gets something wrong?", "a": "Click 'Report this explanation' beside the output, or email feedback@payslipiq.com. We review reports weekly and update prompts and parsers."}];
const RELATED = [{"label": "Trust Center", "href": "/trust"}, {"label": "Methodology", "href": "/methodology"}, {"label": "Privacy", "href": "/privacy"}, {"label": "Security", "href": "/security"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "Trust", "url": "/trust"}, {"name": "AI Transparency", "url": "/ai-transparency"}];

export default function Page() {
  return (
    <RichArticle
      title="AI Transparency"
      url="/ai-transparency"
      description="Where AI is used at PayslipIQ, where it is not, what its limits are, how it is bounded."
      intro={<>PayslipIQ uses AI in three specific places. Three. Not everywhere. Below is exactly what AI does, what it does not do, what its limits are, and the technical and editorial guardrails around it.</>}
      body={<><h2>Where AI is used</h2>
<h3>1. Pay Stub Explainer</h3>
<p>When you upload a pay stub or paste paycheck numbers, an AI-assisted parser identifies each line (gross pay, federal withholding, Social Security, Medicare, state tax, local tax, pre-tax deductions, post-tax deductions, employer contributions, net pay) and returns a plain-English explanation.</p>
<p>The numbers come from your stub. The plain-English text is AI-generated under a constrained prompt that forbids advice-style output.</p>
<h3>2. Calculator narrative</h3>
<p>Each calculator (paycheck, FICA, overtime, salary) returns a numeric estimate plus a one-paragraph human summary. The numeric estimate is from rule-based code using public tax tables. The summary is AI-generated. The model is forbidden from rewriting the numbers.</p>
<h3>3. Ask Payroll message generator</h3>
<p>Drafts a polite, factual message you can send to your HR or payroll team. PayslipIQ does not send the message. You review and send.</p>
<h2>Where AI is NOT used</h2>
<ul>
<li>Tax rate lookups (these come from public IRS and state authority sources).</li>
<li>Eligibility decisions.</li>
<li>Refund predictions.</li>
<li>Personalized tax advice.</li>
<li>Profiling or segmentation of workers.</li>
<li>Advertising AI of any kind.</li>
</ul>
<h2>How the AI is built</h2>
<table>
<thead><tr><th>Element</th><th>Detail</th></tr></thead>
<tbody>
<tr><td>Model</td><td>A general-purpose large language model accessed via API. Specific provider listed in <a href="/security">Security</a> sub-processors.</td></tr>
<tr><td>Training</td><td>We do not train the model. We use a hosted API. We do not fine-tune on user pay stub data.</td></tr>
<tr><td>Prompting</td><td>Prompts are version-controlled. We log model version per response so we can reproduce outputs.</td></tr>
<tr><td>Output review</td><td>Prompts are designed to refuse advice-style requests and always include verification reminders.</td></tr>
<tr><td>Guardrails</td><td>Outputs are post-processed to ensure: (a) no claims of professional credentials; (b) the verification reminder is present; (c) numeric figures are not rewritten by the model. Calculations are surfaced from rule-based code, not generated.</td></tr>
</tbody>
</table>
<h2>AI limits we openly acknowledge</h2>
<ul>
<li>AI may misread unusual or non-standard pay stub formats.</li>
<li>AI may lag the most recent state-specific tax rule changes.</li>
<li>AI may use approximate language where exact precision is required.</li>
<li>AI may not reflect employer-specific payroll quirks (custom deduction codes, internal benefit acronyms).</li>
<li>AI cannot replace a CPA, tax attorney, or HR/payroll team's judgment.</li>
</ul>
<h2>Your data and the AI</h2>
<p>We do not use uploaded pay stubs to train any AI model.</p>
<p>The pay stub data sent to the model API is: stripped of bank account numbers and SSNs (we detect and redact before transmission), sent over encrypted transport, used only to generate the explanation returned to your session, deleted from our servers per the retention policy in the privacy page.</p>
<p>The model API provider has its own data handling policy. We use providers that contractually do not retain user data for training, and we publish the provider name in our sub-processor list.</p>
<h2>Disclosure on every AI output</h2>
<p>Every AI-generated response on PayslipIQ ends with three reminders, enforced server-side:</p>
<ol>
<li>Estimate only, not advice.</li>
<li>AI may misread unusual pay stubs or lag recent rule changes.</li>
<li>Always verify with your payroll department, a qualified CPA, the IRS, or your state tax authority.</li>
</ol>
<h2>How to flag an AI mistake</h2>
<p>Click the "Report this explanation" link beside any AI output. Or email feedback@payslipiq.com with the URL and a description. We review reports weekly and update prompts and parsers accordingly.</p>
<h2>When we change anything material about AI</h2>
<p>If we change which model we use, what data is sent, how outputs are reviewed, or how long data is retained, we update this page and note the change in the Last updated field at the bottom. Material changes are also reflected in the methodology page.</p>
<p><strong>Last updated:</strong> 2026-05-08</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
