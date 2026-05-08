import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "How PayslipIQ Works",
  description: "Three steps, no account required for the basics, paycheck reading made simple.",
  alternates: { canonical: "/how-it-works" },
};

const FAQS = [{"q": "Do I need an account to use PayslipIQ?", "a": "No. The free explainer and all calculators work without an account. Premium features (saved reports, monitoring) require email magic-link authentication."}, {"q": "Does PayslipIQ contact my employer?", "a": "No. We help you understand and frame questions. You contact your employer."}, {"q": "What if I disagree with PayslipIQ's explanation?", "a": "Use the 'Report this explanation' link or email feedback@payslipiq.com. Verify with your payroll team or a CPA. PayslipIQ is educational only, not authoritative."}];
const RELATED = [{"label": "Trust Center", "href": "/trust"}, {"label": "AI Transparency", "href": "/ai-transparency"}, {"label": "Methodology", "href": "/methodology"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "Trust", "url": "/trust"}, {"name": "How It Works", "url": "/how-it-works"}];

export default function Page() {
  return (
    <RichArticle
      title="How PayslipIQ Works"
      url="/how-it-works"
      description="Three steps, no account required for the basics, paycheck reading made simple."
      intro={<>Three steps. No account required for the basics. PayslipIQ helps you read your paycheck, frame the question for payroll if something is off, and verify with the source. Nothing more.</>}
      body={<><h2>Step 1, pick what you want to understand</h2>
<p>PayslipIQ has two starting points:</p>
<ul>
<li>You have a pay stub in hand. Use the <a href="/us/pay-stub-checker">Pay Stub Explainer</a>. Upload PDF or image, or paste the numbers.</li>
<li>You don't have one yet. Use the <a href="/us/paycheck-calculator">Paycheck Calculator</a> to estimate take-home from gross pay, state, and filing status.</li>
</ul>
<p>Or, jump straight to a topic page if you have a specific question: <a href="/us/fica-explained">FICA</a><a href="/us/why-is-my-paycheck-lower">Why is my paycheck lower</a><a href="/us/overtime-paycheck">Overtime</a><a href="/us/w4-guide">W-4</a><a href="/us/401k-deductions">401(k)</a>.</p>
<h2>Step 2, we process and explain</h2>
<p>For uploaded pay stubs, we identify each line (gross, federal withholding, FICA, state tax, local tax, pre-tax deductions, post-tax deductions, employer contributions, and net pay) and return a plain-English summary of what each one means.</p>
<p>For calculators, we compute estimates using current IRS and state tax tables, FLSA rules for overtime, and federal/state guidance for FICA and other items.</p>
<p>Everything ships with three reminders: estimate-only, AI may have limits, verify with the source.</p>
<h2>Step 3, you take it from there</h2>
<p>PayslipIQ does not talk to your employer. We do not fix payroll. We do not represent you in any dispute. What we do is help you understand the numbers, so you can:</p>
<ul>
<li>Confirm a paycheck looks right.</li>
<li>Spot a line item that does not make sense.</li>
<li>Frame a question to your HR or payroll team (we can draft the message via the <a href="/us/ask-payroll-generator">Ask Payroll generator</a>).</li>
<li>Confirm with a CPA or the IRS when something is complex.</li>
<li>Make better-informed W-4 or 401(k) decisions.</li>
</ul>
<p>We are a translator, not a representative.</p>
<h2>What you will never get from PayslipIQ</h2>
<ul>
<li>Tax advice.</li>
<li>Legal advice.</li>
<li>A guarantee that any number is exact.</li>
<li>An accusation against your employer.</li>
<li>A demand or dispute filed on your behalf.</li>
<li>A login wall on the basic explainer.</li>
</ul>
<h2>What's free, what's premium</h2>
<p><strong>Free:</strong> Pay Stub Explainer, all calculators (paycheck, hourly, salary, overtime, FICA), all explainer guides, Ask Payroll message generator.</p>
<p><strong>Premium (separate offering):</strong> Saved pay stub reports, monthly paycheck monitoring, deduction-change alerts, withholding-change alerts, state-tax change notifications.</p>
<h2>What if PayslipIQ gets something wrong</h2>
<p>Email feedback@payslipiq.com or use the "Report this explanation" link beside any AI output. We log corrections, fix the underlying prompt or rule, and update the page.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
