import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Why Is My Paycheck Lower Than Expected?",
  description: "Common reasons US workers see less take-home: W-4 changes, mid-year benefits, FICA cap, supplemental withholding, garnishments. Educational only.",
  alternates: { canonical: "/us/why-is-my-paycheck-lower" },
};

const FAQS = [{"q": "Why did my January paycheck shrink versus December?", "a": "Most likely a combination of: new benefits enrollment, new 401(k) percentage, Social Security wage base reset to zero (so SS tax restarted), and the annual federal/state tax-table refresh."}, {"q": "My paycheck dropped after a bonus check. What changed?", "a": "If the bonus was paid in a prior period, the over-withholding stays on the books. The current paycheck is back to normal. You will see the over-withheld amount come back at filing time."}, {"q": "What if my paycheck dropped for no obvious reason?", "a": "Check the W-4 status with payroll. Confirm benefits enrollment did not change. Verify YTD totals add up. Use the comparison page for a line-by-line diff."}];
const RELATED = [{"label": "Paycheck comparison", "href": "/us/paycheck-comparison"}, {"label": "Why was so much tax taken", "href": "/us/why-was-so-much-tax-taken"}, {"label": "Ask Payroll generator", "href": "/us/ask-payroll-generator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Why Is My Paycheck Lower", "url": "/us/why-is-my-paycheck-lower"}];

export default function Page() {
  return (
    <RichArticle
      title="Why Is My Paycheck Lower Than Expected?"
      url="/us/why-is-my-paycheck-lower"
      description="Common reasons US workers see less take-home: W-4 changes, mid-year benefits, FICA cap, supplemental withholding, garnishments. Educational only."
      intro={<>Same employer, same hours, smaller paycheck. Eight things explain almost every case. Work through them in order.</>}
      body={<><h2>Eight reasons your paycheck dropped</h2>
<ol>
<li><strong>Mid-year W-4 change.</strong> You updated filing status, added or removed dependents, or set Step 4(c) extra withholding.</li>
<li><strong>Open enrollment changed your benefits.</strong> A new health plan with a higher premium, an increased 401(k) contribution percentage, an HSA election change.</li>
<li><strong>Year-to-date wages crossed the Social Security wage base.</strong> Or in January, the YTD reset put Social Security tax back on after it had stopped late last year.</li>
<li><strong>Bonus or supplemental wage.</strong> A pay period containing a bonus is withheld at the federal supplemental rate (22 percent up to $1M, 37 percent above) plus FICA.</li>
<li><strong>Wage garnishment started.</strong> Court order, IRS levy, or other creditor garnishment kicked in.</li>
<li><strong>State tax change.</strong> Your work-state changed (often after a remote address update).</li>
<li><strong>Annual federal/state tax-table refresh in January.</strong> New brackets, new standard deduction, new wage base, new state rates.</li>
<li><strong>Pre-tax election change.</strong> You raised 401(k) or HSA contributions. Lower net, but more in the retirement account.</li>
</ol>
<h2>How to find which one applies</h2>
<p>Open the prior paycheck and the current one side by side. Compare line by line. The change usually shows up as a single moved number. Use the <a href="/us/paycheck-comparison">paycheck comparison page</a> for a guided diff.</p>
<h2>What to do next</h2>
<p>If the change matches a known cause and you are comfortable, no action needed. If it does not match, draft a polite question to payroll using the <a href="/us/ask-payroll-generator">Ask Payroll generator</a>. If you suspect an actual error, document with screenshots and raise it in writing.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
