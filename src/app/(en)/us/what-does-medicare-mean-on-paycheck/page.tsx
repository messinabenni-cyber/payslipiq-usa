import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "What Does Medicare Mean on My Paycheck?",
  description: "Medicare tax explained. 1.45 percent on all wages plus 0.9 percent Additional Medicare above thresholds. Educational only.",
  alternates: { canonical: "/us/what-does-medicare-mean-on-paycheck" },
};

const FAQS = [{"q": "What is the Medicare tax rate?", "a": "1.45 percent on all wages, no cap. The 0.9 percent Additional Medicare Tax applies to wages above $200,000 single or $250,000 MFJ."}, {"q": "Does my employer pay Medicare on me?", "a": "Yes, 1.45 percent employer match on the base. The 0.9 percent Additional Medicare is employee-only, no employer match."}, {"q": "Does 401(k) reduce my Medicare?", "a": "No. Pre-tax 401(k) reduces federal income tax wages, not Medicare wages."}];
const RELATED = [{"label": "FICA", "href": "/us/fica-explained"}, {"label": "Additional Medicare Tax", "href": "/us/additional-medicare-tax"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Medicare on Paycheck", "url": "/us/what-does-medicare-mean-on-paycheck"}];

export default function Page() {
  return (
    <RichArticle
      title="What Does Medicare Mean on My Paycheck?"
      url="/us/what-does-medicare-mean-on-paycheck"
      description="Medicare tax explained. 1.45 percent on all wages plus 0.9 percent Additional Medicare above thresholds. Educational only."
      intro={<>The Medicare line on your pay stub funds the federal Medicare program. 1.45 percent on every dollar of wages, no cap. Plus an extra 0.9 percent for high earners. Here is the breakdown.</>}
      body={<><h2>Base Medicare tax</h2>
<p>1.45 percent on all wages, no wage base cap. Your employer matches the 1.45 percent on the employer side.</p>
<h2>Additional Medicare Tax</h2>
<p>An extra 0.9 percent applies to wages above $200,000 single or $250,000 married filing jointly. Employee-only, no employer match.</p>
<p>Employers withhold the Additional Medicare once your wages with that employer exceed $200,000 in a calendar year, regardless of filing status. If you have multiple jobs and your total wages exceed the threshold, you may owe more (or less) at filing time.</p>
<h2>What Medicare funds</h2>
<p>Hospital insurance for people 65 and older, certain disabled workers, and people with end-stage renal disease. Medicare Part A is funded primarily by this payroll tax.</p>
<h2>What Medicare does not change</h2>
<p>Pre-tax 401(k) contributions do not reduce Medicare wages. Section 125 health insurance does. HSA contributions through payroll do.</p>
<h2>How it shows on your pay stub</h2>
<p>Usually a single line labelled MED, MEDICARE, or FED MED. The Additional Medicare Tax appears as a separate line if applicable.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
