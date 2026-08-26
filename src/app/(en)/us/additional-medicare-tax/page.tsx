import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Additional Medicare Tax (0.9 Percent)",
  description: "Additional Medicare Tax: 0.9 percent on wages above $200,000 single or $250,000 MFJ. Employee-only. Form 8959 reconciliation. Educational only.",
  alternates: { canonical: "/us/additional-medicare-tax" },
};

const FAQS = [{"q": "What is the Additional Medicare Tax?", "a": "A 0.9 percent surcharge on Medicare wages above $200,000 single or $250,000 married filing jointly. Created by the Affordable Care Act. Employee-only, no employer match."}, {"q": "Does my employer withhold it automatically?", "a": "Only on wages above $200,000 in a calendar year with that employer. With multiple jobs, the threshold may not trigger automatically and you reconcile at filing time using Form 8959."}, {"q": "Are the thresholds indexed for inflation?", "a": "No. They have been the same since 2013."}, {"q": "Is this the same as the Net Investment Income Tax?", "a": "No. NIIT is a separate 3.8 percent tax on investment income for high earners. Different tax, different form (Form 8960)."}];
const RELATED = [{"label": "Medicare tax", "href": "/us/medicare-tax"}, {"label": "FICA", "href": "/us/fica-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Additional Medicare Tax", "url": "/us/additional-medicare-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="Additional Medicare Tax (0.9 Percent)"
      url="/us/additional-medicare-tax"
      description="Additional Medicare Tax: 0.9 percent on wages above $200,000 single or $250,000 MFJ. Employee-only. Form 8959 reconciliation. Educational only."
      intro={<>An extra 0.9 percent Medicare surcharge on high earners. Created by the Affordable Care Act. Different rules than base Medicare and worth understanding if you cross the threshold.</>}
      body={<><h2>The thresholds</h2>
<ul>
<li>$200,000 for single, head of household</li>
<li>$250,000 for married filing jointly</li>
<li>$125,000 for married filing separately</li>
</ul>
<p>These thresholds are NOT indexed to inflation. They have been the same since 2013.</p>
<h2>Employer withholding rule</h2>
<p>Employers must withhold the 0.9 percent on wages above $200,000 in a calendar year per employer, regardless of your filing status. So a married filer earning $300,000 from one employer has the surcharge withheld on $100,000 even though their MFJ threshold is $250,000.</p>
<h2>Multi-job complication</h2>
<p>Each employer withholds based on wages with that employer alone. If you and your spouse each earn $150,000 (combined $300,000 MFJ), neither employer triggers the withholding (each is below $200k), but you owe the surcharge on $50,000 at filing time.</p>
<p>Or: you earn $250k from one employer who withheld on $50k of wages. Your spouse earns $50k. Combined $300k MFJ exceeds $250k by $50k. Withholding matched the actual liability. Form 8959 reconciles the math.</p>
<h2>Self-employment</h2>
<p>1099 contractors pay 0.9 percent self-employment Medicare above the same thresholds.</p>
<h2>Investment income surcharge</h2>
<p>The Net Investment Income Tax (NIIT) is a separate 3.8 percent tax on investment income for high earners (same income thresholds). Different tax, different form (Form 8960). Often confused with Additional Medicare.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
