import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

const PAGE_URL = 'https://payslipiq.com/us/salary-after-tax';

export const metadata: Metadata = {  title: 'How Much Is My Paycheck After Taxes? Salary Calc 2026',  description:    'How much is my paycheck after taxes? Enter your annual US salary and state — see federal tax, FICA and state withholding for 2026 across all 50 states.',  alternates: {    canonical: PAGE_URL,    languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL },  },  openGraph: {    title: 'How Much Is My Paycheck After Taxes? Salary Calc 2026',    description: 'Annual salary in, take-home out. Federal, FICA and state tax for all 50 states. Free 2026 US calculator.',    url: PAGE_URL,    type: 'website',    siteName: 'PayslipIQ',    locale: 'en_US',    images: [{ url: 'https://payslipiq.com/api/og?title=Salary%20After%20Tax&eyebrow=USA%202026', width: 1200, height: 630, alt: 'PayslipIQ Salary After Tax Calculator' }],  },  twitter: {    card: 'summary_large_image',    title: 'How Much Is My Paycheck After Taxes? Salary Calc 2026',    description: 'Annual salary → take-home. All 50 states. Free 2026 US calc.',  },  other: { 'geo.region': 'US', 'geo.placename': 'United States' },};

const FAQS = [{"q": "What is take-home pay on a $100,000 salary?", "a": "Roughly $72,000 to $78,000 in most states for a single filer with no benefits. California or NYC residents see less. State with no income tax sees more. Run real numbers in the calculator."}, {"q": "Does the calculator include state tax?", "a": "Yes, all 50 states plus DC. Pre-selected when you pick your state."}, {"q": "What about 401(k) and benefits?", "a": "Optional inputs in the calculator. Pre-tax contributions reduce taxable wages and your take-home estimate."}];
const RELATED = [{"label": "Paycheck calculator", "href": "/us/paycheck-calculator"}, {"label": "Hourly calculator", "href": "/us/hourly-paycheck-calculator"}, {"label": "Salaried worker guide", "href": "/us/salaried-worker-paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Salary After Tax", "url": "/us/salary-after-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="Salary After Tax (US)"
      url="/us/salary-after-tax"
      description="Estimate take-home pay from an annual US salary. Federal, FICA, state, all 50 states. Educational only."
      intro={<>Annual salary in, take-home out. PayslipIQ runs federal income tax, FICA, and state withholding to estimate what you actually keep.</>}
      directAnswer={<>Salary after tax is your annual pay minus federal income tax, Social Security (6.2%), Medicare (1.45%), and any state income tax. On a $100,000 salary a single filer typically keeps roughly $72,000–$78,000, depending on the state and pre-tax benefits like a 401(k). These are estimates only — your real take-home depends on your W-4, deductions, and where you live.</>}
      body={<><h2>Run your number</h2>
<p>Use the <a href="/us/paycheck-calculator">paycheck calculator</a>, set frequency to Annual, enter your salary, and pick your state. Or set frequency to Bi-weekly and enter your bi-weekly amount — the math comes out the same.</p>
<h2>Rough order of magnitude</h2>
<table>
<thead><tr><th>Annual salary</th><th>State with no income tax</th><th>California (single)</th><th>NYC resident (single)</th></tr></thead>
<tbody>
<tr><td>$50,000</td><td>~$41,500 net</td><td>~$39,000 net</td><td>~$37,500 net</td></tr>
<tr><td>$75,000</td><td>~$60,000 net</td><td>~$56,000 net</td><td>~$53,500 net</td></tr>
<tr><td>$100,000</td><td>~$77,500 net</td><td>~$72,500 net</td><td>~$69,000 net</td></tr>
<tr><td>$150,000</td><td>~$112,000 net</td><td>~$104,000 net</td><td>~$98,000 net</td></tr>
</tbody>
</table>
<p>Estimates only. Run real numbers in the calculator. Pre-tax 401(k) and benefits change the math.</p>
<h2>State-by-state guides</h2>
<p>Every state has a dedicated paycheck guide. Start with the top-five population states: <a href="/us/california">California</a>, <a href="/us/texas">Texas</a>, <a href="/us/florida">Florida</a>, <a href="/us/new-york">New York</a>, and <a href="/us/pennsylvania">Pennsylvania</a>. Or browse all from the <a href="/us/learn">Learn page</a>.</p>
<h2>Salary calculations the brief includes</h2>
<ul>
<li>Federal income tax via IRS Publication 15-T</li>
<li>FICA (Social Security up to wage base, Medicare on every dollar)</li>
<li>Additional Medicare (0.9 percent above $200k single, $250k MFJ)</li>
<li>State income tax (where applicable, flat or progressive)</li>
<li>Pre-tax deductions (401(k), HSA, Section 125 health) optional</li>
<li>Post-tax deductions (Roth, garnishments) optional</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
