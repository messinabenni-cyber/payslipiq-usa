import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Nurse Paycheck Guide (Shifts, Overtime, Travel Nurse)",
  description: "Shift differentials, mandatory overtime, travel nurse stipends, and how each shows on a nurse pay stub. Educational only.",
  alternates: { canonical: "/us/nurse-paycheck-guide" },
};

const FAQS = [{"q": "Are shift differentials taxed?", "a": "Yes. Differentials are wages and are taxed and FICA-taxed like regular wages."}, {"q": "How is overtime calculated when I have multiple rates?", "a": "FLSA requires a weighted-average regular rate including all non-discretionary differentials and bonuses. Overtime is 1.5x that weighted rate."}, {"q": "Are travel nurse stipends taxable?", "a": "Tax-free only if you maintain a separate tax home and the assignment is genuinely temporary (under 12 months). Otherwise taxable. The IRS scrutinizes this."}, {"q": "Why is my overtime more than 1.5x base?", "a": "Because it includes shift differentials. 1.5 times (base plus $4 differential) is bigger than 1.5 times base alone."}];
const RELATED = [{"label": "Hourly calculator", "href": "/us/hourly-worker-paycheck-calculator"}, {"label": "Overtime explained", "href": "/us/overtime-paycheck"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Nurse Paycheck Guide", "url": "/us/nurse-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Nurse Paycheck Guide (Shifts, Overtime, Travel Nurse)"
      url="/us/nurse-paycheck-guide"
      description="Shift differentials, mandatory overtime, travel nurse stipends, and how each shows on a nurse pay stub. Educational only."
      intro={<>Nurse pay can look unusual. Multiple rates per shift, weekend and holiday uplifts, mandatory overtime in some hospitals, and (for travel nurses) tax-free stipends layered on top of taxable wages. Here is how each maps onto a stub.</>}
      body={<><h2>Shift differentials</h2>
<p>Hospitals pay extra for evening, night, weekend and holiday shifts. The differential is either a flat dollar amount per hour or a percentage. Differentials count for FLSA overtime: a 12-hour night shift with a $4 differential has overtime calculated at 1.5 times (base + $4), not 1.5 times base.</p>
<h2>Mandatory overtime</h2>
<p>Some states (CA, NY, NJ, IL, MN, OR, PA, RI, WV) restrict mandatory overtime for nurses. Voluntary overtime is paid at FLSA-required rate (1.5x weighted regular rate above 40 per week, plus state daily-OT rules where applicable).</p>
<h2>Travel nurse stipends</h2>
<p>Travel nurses often earn a low taxable hourly rate plus tax-free stipends for housing, meals and incidentals. The IRS allows tax-free stipends only if the nurse maintains a separate tax home and the assignment is genuinely temporary (under 12 months). Misuse triggers audit risk. Talk to a CPA before structuring travel nurse pay.</p>
<h2>Common stub lines</h2>
<ul>
<li>Base hourly times hours.</li>
<li>Shift differential times qualifying hours.</li>
<li>Weekend differential.</li>
<li>Holiday pay (often 1.5x or 2x).</li>
<li>Overtime calculated on the weighted regular rate.</li>
<li>On-call or call-back pay (varies).</li>
<li>Tax-free stipends (travel only).</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
