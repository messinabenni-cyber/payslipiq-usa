import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Remote Worker State Tax Guide (US)",
  description: "Multi-state remote work tax: residence vs work location, reciprocity, convenience-of-employer. Educational only.",
  alternates: { canonical: "/us/remote-worker-state-tax-guide" },
};

const FAQS = [{"q": "I live in NY and work remotely for a CA employer. What do I owe?", "a": "NY taxes you as a resident on all income. NY does not have reciprocity with CA. You may also owe CA tax depending on whether you ever physically work in CA. A CPA can confirm."}, {"q": "I work remotely from FL for a NY employer. Do I owe NY tax?", "a": "Possibly yes. NY applies the convenience-of-employer rule. If you work remotely from FL for the employer's convenience, NY may tax your wages. Florida has no state income tax, so that NY bill is real."}, {"q": "I moved from CA to TX mid-year. How do taxes work?", "a": "Part-year resident return in CA on income earned while you lived in CA. Zero TX tax (no state income tax). File CA part-year return."}];
const RELATED = [{"label": "Multi-state payroll", "href": "/us/multi-state-payroll-guide"}, {"label": "State pages", "href": "/us/learn"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Remote Worker State Tax Guide", "url": "/us/remote-worker-state-tax-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Remote Worker State Tax Guide (US)"
      url="/us/remote-worker-state-tax-guide"
      description="Multi-state remote work tax: residence vs work location, reciprocity, convenience-of-employer. Educational only."
      intro={<>Remote work changed where you owe state tax. Live in one state, work for an employer in another, the rules get complicated fast. Three concepts cover most cases.</>}
      body={<><h2>Residence versus work location</h2>
<p>Your residence state taxes you on all your income. A state where you physically perform work can also tax that work-location income. Most states give a credit on your residence return for tax paid elsewhere, so you usually do not get double-taxed on the same dollar. You do file in both.</p>
<h2>Reciprocity agreements</h2>
<p>Some state pairs let you pay only the residence state. Common examples: Pennsylvania with New Jersey (limited), Illinois with Indiana, Maryland with Virginia, Wisconsin with Illinois, Michigan with Indiana, Kentucky with Indiana. To use reciprocity you file an exemption form with your employer so they only withhold for your residence state.</p>
<h2>Convenience-of-employer rule</h2>
<p>New York, Connecticut, Delaware, Nebraska and Pennsylvania (in some scenarios) apply this rule. If you work remotely from another state for the employer's convenience rather than your own necessity, the employer's state still taxes you. New York is the most aggressive about it. Even non-residents working remotely for a NY employer can owe NY tax.</p>
<h2>What to do</h2>
<ol>
<li>Pin down your residence state. Where you spend most days, where you vote, your driver's license.</li>
<li>Track which days you worked in which state if you cross state lines.</li>
<li>File a state return in every state where you owe.</li>
<li>Claim the credit for tax paid to another state on your residence return.</li>
<li>Talk to a CPA. Multi-state remote work is one of the trickier areas of the tax code.</li>
</ol></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
