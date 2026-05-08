import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Why Am I Paying State Tax for a State I Don't Live In?",
  description: "When work-location state tax applies. Convenience-of-employer rule. Reciprocity. Educational only.",
  alternates: { canonical: "/us/why-am-i-paying-state-tax-i-don-t-live-there" },
};

const FAQS = [{"q": "I moved from CA to TX. Why is CA still taxed on my paycheck?", "a": "Payroll has not updated your residence. Tell HR your new address. CA continues to tax until then, and you may need a part-year resident return for the year you moved."}, {"q": "I work remotely from NJ for a NY employer. Why is NY tax taken?", "a": "New York applies the convenience-of-employer rule. If your remote work from NJ is for the employer's convenience rather than your own necessity, NY taxes the wages. NJ allows a credit on its return for tax paid to NY."}, {"q": "How do I claim a state tax credit for tax paid elsewhere?", "a": "On your residence state return, claim the credit for tax paid to another state. The form name varies by state but is usually called \"credit for taxes paid to another state.\""}];
const RELATED = [{"label": "Remote worker guide", "href": "/us/remote-worker-state-tax-guide"}, {"label": "Multi-state payroll", "href": "/us/multi-state-payroll-guide"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "State Tax Wrong State", "url": "/us/why-am-i-paying-state-tax-i-don-t-live-there"}];

export default function Page() {
  return (
    <RichArticle
      title="Why Am I Paying State Tax for a State I Don't Live In?"
      url="/us/why-am-i-paying-state-tax-i-don-t-live-there"
      description="When work-location state tax applies. Convenience-of-employer rule. Reciprocity. Educational only."
      intro={<>You moved out of state, or you started remote work, or you commute across a state line. Now your pay stub shows state tax for a state you do not consider home. Several rules can cause this.</>}
      body={<><h2>Work-location state tax</h2>
<p>Most states tax wages earned within their borders, regardless of where the employee lives. If you physically perform work in a state, that state can tax those wages. You usually file a non-resident return there at year-end.</p>
<h2>Convenience-of-employer rule</h2>
<p>New York, Connecticut, Delaware, Nebraska and Pennsylvania (in some scenarios) apply this rule. Even if you work remotely from another state, if it is for the employer's convenience and not your own necessity, the employer's state can still tax you. New York is the most aggressive.</p>
<h2>You moved but did not update payroll</h2>
<p>If you moved states and did not tell payroll, your employer continues withholding for the old state. Update your residence address with HR or payroll immediately.</p>
<h2>Reciprocity not applied</h2>
<p>If your state and the work state have a reciprocity agreement (PA-NJ for some, IL-IN, MD-VA), you can usually file an exemption form so payroll only withholds for your residence state. If you did not file the exemption, both states show on your stub.</p>
<h2>What to do</h2>
<ol>
<li>Confirm your residence address with payroll.</li>
<li>Ask which state(s) they are withholding for and why.</li>
<li>If reciprocity applies, file the exemption form.</li>
<li>If you moved mid-year, file part-year resident returns in both states.</li>
<li>Talk to a CPA if you have multi-state work or income.</li>
</ol></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
