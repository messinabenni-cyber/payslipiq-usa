import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Philadelphia City Wage Tax",
  description: "Philadelphia City Wage Tax for residents and non-residents working in the city. Educational only.",
  alternates: { canonical: "/us/philadelphia-wage-tax" },
};

const FAQS = [{"q": "What is the Philadelphia wage tax rate?", "a": "Resident rate around 3.75 percent, non-resident around 3.44 percent. Verify current rates at the Philadelphia Department of Revenue."}, {"q": "I live in NJ and work in Philadelphia. Do I pay Philly tax?", "a": "Yes, the non-resident rate. NJ allows a credit on its return for tax paid to PA and Philadelphia."}, {"q": "I work in Philly but live in PA suburbs. Do I pay city tax and LEIT?", "a": "You pay the non-resident Philly wage tax on Philly-source wages. Your suburb's LEIT typically credits the Philly tax (in whole or part)."}];
const RELATED = [{"label": "Pennsylvania paycheck calculator", "href": "/us/pennsylvania/paycheck-calculator"}, {"label": "Multi-state payroll", "href": "/us/multi-state-payroll-guide"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Philadelphia Wage Tax", "url": "/us/philadelphia-wage-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="Philadelphia City Wage Tax"
      url="/us/philadelphia-wage-tax"
      description="Philadelphia City Wage Tax for residents and non-residents working in the city. Educational only."
      intro={<>Philadelphia is one of the few US cities that taxes both residents and non-residents who work in the city. The City Wage Tax has separate resident and non-resident rates and applies on top of Pennsylvania state tax and Local Earned Income Tax.</>}
      body={<><h2>Resident vs non-resident</h2>
<p>Philadelphia residents pay one rate (currently around 3.75 percent on wages, verify). Non-residents working in Philadelphia pay a slightly lower rate (around 3.44 percent, verify). Both are higher than typical PA municipal LEIT rates.</p>
<h2>Where the wage tax sits in the stack</h2>
<p>A Philadelphia resident sees:</p>
<ul>
<li>Federal income tax</li>
<li>Social Security 6.2 percent</li>
<li>Medicare 1.45 percent</li>
<li>PA state income tax (flat rate)</li>
<li>Philadelphia City Wage Tax (resident rate)</li>
</ul>
<h2>Suburbs that pay Philly tax</h2>
<p>If you live in a Pennsylvania suburb (Bucks, Montgomery, Delaware, Chester counties) and commute to a Philadelphia job, you pay the non-resident City Wage Tax on your Philadelphia-source wages. Your suburb's Local Earned Income Tax (LEIT) usually credits the Philadelphia tax.</p>
<h2>NJ commuters</h2>
<p>NJ residents who work in Philadelphia pay the non-resident wage tax. NJ allows a credit on its state return for tax paid to PA and Philadelphia.</p>
<h2>Authoritative source</h2>
<p><a href="https://www.phila.gov/services/payments-assistance-taxes/" target="_blank" rel="noopener noreferrer">City of Philadelphia Department of Revenue</a></p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
