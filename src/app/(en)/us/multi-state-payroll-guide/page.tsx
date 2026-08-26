import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Multi-State Payroll Guide",
  description: "How payroll works when you live and work across states. Reciprocity, credits, withholding. Educational only.",
  alternates: { canonical: "/us/multi-state-payroll-guide" },
};

const FAQS = [{"q": "Will I be double-taxed working in two states?", "a": "Usually no. The residence state credits tax paid to the work-location state. You file in both states but pay total tax close to what you would have paid in just one."}, {"q": "How do I know if my states have reciprocity?", "a": "Check the residence state's Department of Revenue website. Common pairs: PA-NJ (limited), IL-IN, MD-VA, WI-IL, MI-IN, KY-IN. File the exemption form with payroll."}, {"q": "My employer only withholds for one state. Is that wrong?", "a": "Maybe. If your work crosses state lines and reciprocity does not apply, the employer should withhold for the work state. If they are not, raise it with payroll. You may owe estimated taxes to the second state at year-end."}];
const RELATED = [{"label": "Remote worker guide", "href": "/us/remote-worker-state-tax-guide"}, {"label": "New York paycheck calculator", "href": "/us/new-york/paycheck-calculator"}, {"label": "New Jersey paycheck calculator", "href": "/us/new-jersey/paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Multi-State Payroll Guide", "url": "/us/multi-state-payroll-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Multi-State Payroll Guide"
      url="/us/multi-state-payroll-guide"
      description="How payroll works when you live and work across states. Reciprocity, credits, withholding. Educational only."
      intro={<>Working across two or more states adds layers to your payroll. Different residence and work-location withholding, reciprocity rules, and a tax return in each state. Here is the playbook.</>}
      body={<><h2>Three layers</h2>
<p>Multi-state payroll has residence-state withholding, work-location-state withholding, and reconciliation at filing time. Each state's rules differ, and the interaction depends on the pair.</p>
<h2>Common scenarios</h2>
<h3>Cross-border commute (NJ to NYC)</h3>
<p>You live in New Jersey, work in NYC. NJ taxes you as a resident on all income. New York taxes you on NY-source wages. NJ allows a credit for tax paid to NY. NYC tax is residence-based: a non-resident does not pay NYC tax even when working in NYC.</p>
<h3>Reciprocity</h3>
<p>If your states reciprocate (PA with NJ for some scenarios, IL with IN, MD with VA, WI with IL), file the exemption form with payroll so only the residence state withholds.</p>
<h3>Hybrid in-office plus home</h3>
<p>Both states may apportion your wages based on where you actually worked. Keep records.</p>
<h3>Permanent remote, employer in different state</h3>
<p>Usually you pay only your residence state. Unless the employer's state applies the convenience rule (NY, CT, DE, NE, PA in some cases), in which case you pay both.</p>
<h2>What to ask payroll</h2>
<ul>
<li>Which state are you currently withholding for?</li>
<li>Have you applied a reciprocity exemption?</li>
<li>Do you track days worked in each state?</li>
<li>What W-2 boxes will reflect each state at year-end?</li>
</ul>
<p>Use the <a href="/us/ask-payroll-generator">Ask Payroll generator</a> to draft these.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
