import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Wage Garnishment Explained (US)",
  description: "How wage garnishment works on a US paycheck. Federal limits, types, what to do if you receive notice. Educational only.",
  alternates: { canonical: "/us/wage-garnishment-explained" },
};

const FAQS = [{"q": "Can my employer fire me for a garnishment?", "a": "Federal law (Title III CCPA) prohibits firing for a single garnishment. Multiple garnishments may not have the same protection. Some states have stronger protections."}, {"q": "What is the maximum garnishment from my paycheck?", "a": "For most consumer debts, 25 percent of disposable earnings. Higher for child support (up to 65 percent) and IRS levy (no fixed cap, IRS uses an exempt-amount table)."}, {"q": "Can I stop a garnishment?", "a": "Sometimes. Pay the debt in full, set up a payment plan, file for bankruptcy, or challenge the garnishment in court if there is a basis. Talk to an attorney."}];
const RELATED = [{"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}, {"label": "Why is my paycheck lower", "href": "/us/why-is-my-paycheck-lower"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Wage Garnishment", "url": "/us/wage-garnishment-explained"}];

export default function Page() {
  return (
    <RichArticle
      title="Wage Garnishment Explained (US)"
      url="/us/wage-garnishment-explained"
      description="How wage garnishment works on a US paycheck. Federal limits, types, what to do if you receive notice. Educational only."
      intro={<>A wage garnishment is a court order or IRS levy directing your employer to withhold a portion of your paycheck and send it to a creditor. Federal law caps how much can be taken. Some debts override the cap.</>}
      body={<><h2>How garnishment shows on your stub</h2>
<p>A separate post-tax deduction line, often labeled GARN, GARNISHMENT or with a creditor name. The amount comes out of net pay (your take-home), not gross, but the amount is calculated based on disposable earnings (gross minus required deductions).</p>
<h2>Federal limits (Title III of the Consumer Credit Protection Act)</h2>
<p>For most consumer debts: lesser of 25 percent of disposable earnings, or the amount by which disposable earnings exceed 30 times the federal minimum wage per week.</p>
<h2>Higher limits for specific debts</h2>
<ul>
<li>Child support: up to 50 percent if you support another spouse or child, 60 percent if not. Plus 5 percent if 12+ weeks in arrears.</li>
<li>Federal student loans (Department of Education): up to 15 percent of disposable earnings.</li>
<li>Federal taxes (IRS levy): the IRS uses Form 668-W and sends a table of exempt amounts. The non-exempt portion is taken.</li>
<li>State and local taxes: state-specific limits.</li>
</ul>
<h2>Notice requirements</h2>
<p>Most states require notice before garnishment starts. The IRS sends multiple notices before a wage levy. If you receive a Notice of Intent to Levy, you have time to respond, request a hearing, or set up a payment plan.</p>
<h2>What to do if garnishment notice arrives</h2>
<ol>
<li>Read the notice. Identify the creditor and the amount.</li>
<li>Verify the debt is actually yours and the amount is correct.</li>
<li>If you cannot pay, contact the creditor, the IRS, or your state to discuss payment plans.</li>
<li>For tax debt, options include installment agreement, offer in compromise, currently not collectible status.</li>
<li>Talk to an attorney for non-tax debts. Bankruptcy may be an option in extreme cases.</li>
</ol>
<h2>Employer cannot fire you</h2>
<p>Title III prohibits employers from firing an employee because of one wage garnishment for any single debt. Multiple garnishments may not have the same protection.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
