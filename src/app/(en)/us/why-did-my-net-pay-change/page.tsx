import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {  title: 'How Much My Paycheck After Taxes? Why It Changed 2026',  description:    'Wondering how much your paycheck is after taxes, and why it just changed? 7 common reasons your US take-home moved this period — and how to check each on your pay stub.',  alternates: { canonical: '/us/why-did-my-net-pay-change', languages: { 'en-US': '/us/why-did-my-net-pay-change', 'x-default': '/us/why-did-my-net-pay-change' } },  openGraph: { title: 'How Much My Paycheck After Taxes? Why It Changed 2026', description: '7 common reasons your US take-home changed this paycheck. Plain-English breakdown for 2026.', url: 'https://payslipiq.com/us/why-did-my-net-pay-change', type: 'article', siteName: 'PayslipIQ', locale: 'en_US', images: [{ url: 'https://payslipiq.com/api/og?title=Why%20Did%20My%20Net%20Pay%20Change&eyebrow=USA%202026', width: 1200, height: 630, alt: 'Why did my net pay change — PayslipIQ 2026' }] },  twitter: { card: 'summary_large_image', title: 'How Much My Paycheck After Taxes? Why It Changed 2026', description: '7 common reasons your US take-home moved this paycheck.' },  other: { 'geo.region': 'US', 'geo.placename': 'United States' },};

const FAQS = [{"q": "My net pay went up in November and back down in January. Why?", "a": "You hit the Social Security wage base in November. Social Security tax (6.2 percent) stopped for the rest of the calendar year. On January 1, your YTD reset to zero and the tax started again."}, {"q": "I got a bonus, my net was much smaller than my regular check. Why?", "a": "Bonus was withheld at the federal supplemental rate (22 percent for amounts up to $1M annually). FICA still applied. Plus state supplemental, where applicable. The withholding looks high because payroll uses a flat rate. Final tax owed is settled when you file."}, {"q": "Should I worry if my net changes by a few dollars?", "a": "Usually no. Small variations come from rounding, a partial pay period, or a small differential. Larger swings (10 percent or more) deserve investigation."}];
const RELATED = [{"label": "Paycheck comparison", "href": "/us/paycheck-comparison"}, {"label": "Why is my paycheck lower?", "href": "/us/why-is-my-paycheck-lower"}, {"label": "Bonus tax", "href": "/us/bonus-tax-paycheck"}, {"label": "Pay stub mistakes", "href": "/us/pay-stub-mistakes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Why Did My Net Pay Change", "url": "/us/why-did-my-net-pay-change"}];

export default function Page() {
  return (
    <RichArticle
      title="Why Did My Net Pay Change?"
      url="/us/why-did-my-net-pay-change"
      description="Common reasons net pay changed between two paychecks. Mid-year W-4, benefits, FICA cap, supplemental wages. Educational only."
      intro={<>Same job, same hours, different net. Eight things explain almost every case.</>}
      body={<><h2>Eight things that change net pay</h2>
<ol>
<li><strong>You updated your W-4 mid-year.</strong> Different filing status, different dependents, different extra withholding.</li>
<li><strong>Open enrollment moved your benefits.</strong> A new health plan, a higher 401(k) percentage, an HSA election change.</li>
<li><strong>You crossed the Social Security wage base.</strong> Once year-to-date wages exceed the SS wage base in a calendar year, Social Security tax stops. Your check goes up. On January 1 it resets and the tax starts again.</li>
<li><strong>You earned over $200,000 single (or $250,000 MFJ).</strong> The 0.9 percent Additional Medicare Tax kicks in.</li>
<li><strong>A bonus or commission was added.</strong> Withheld at the supplemental rate (22 percent up to $1M, 37 percent above), plus FICA. Sometimes also at a higher state supplemental rate.</li>
<li><strong>Federal or state tax tables refreshed in January.</strong> Annual brackets, standard deduction and inflation adjustments shift.</li>
<li><strong>A garnishment started or ended.</strong> Wage garnishments must be applied per court order or IRS levy. They start abruptly.</li>
<li><strong>State of work changed.</strong> If you moved or your remote work address updated, the state tax line on your stub may shift.</li>
</ol>
<h2>How to investigate</h2>
<p>Open last paycheck and this one side by side. Compare line by line. Most changes show up as a single moved number. Use the <a href="/us/paycheck-comparison">paycheck comparison page</a> for a guided diff or the <a href="/us/ask-payroll-generator">Ask Payroll generator</a> to draft a question to HR.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
