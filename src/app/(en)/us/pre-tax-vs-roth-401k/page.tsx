import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Pre-Tax 401(k) vs Roth 401(k)",
  description: "Pre-tax versus Roth 401(k). Tax now or tax later. Match still works. Limits are combined. Educational only.",
  alternates: { canonical: "/us/pre-tax-vs-roth-401k" },
};

const FAQS = [{"q": "Can I split contributions between pre-tax and Roth?", "a": "Yes. Most plans allow you to allocate any percentage to each. The total stays under the IRS annual limit."}, {"q": "Does Roth 401(k) avoid FICA?", "a": "No. FICA applies to your gross before the Roth contribution. Roth only changes federal and state income tax timing."}, {"q": "What is the income limit for Roth 401(k)?", "a": "There is none. Roth 401(k) is open at any income, unlike Roth IRA which has income phase-outs."}];
const RELATED = [{"label": "401(k) deductions", "href": "/us/401k-deductions"}, {"label": "401(k) contribution limits", "href": "/us/401k-contribution-limits"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Pre-Tax vs Roth 401(k)", "url": "/us/pre-tax-vs-roth-401k"}];

export default function Page() {
  return (
    <RichArticle
      title="Pre-Tax 401(k) vs Roth 401(k)"
      url="/us/pre-tax-vs-roth-401k"
      description="Pre-tax versus Roth 401(k). Tax now or tax later. Match still works. Limits are combined. Educational only."
      intro={<>Same plan, different tax timing. Pre-tax cuts your taxable wages now and you pay tax in retirement. Roth is the reverse. Same employer match either way. Annual contribution limit is shared.</>}
      body={<><h2>Pre-tax 401(k)</h2>
<p>Contributions reduce taxable wages now. Federal income tax does not apply to the contribution. State income tax usually does not apply (a few states differ). FICA still applies on the contribution. In retirement, qualified withdrawals are taxed as ordinary income.</p>
<h2>Roth 401(k)</h2>
<p>Contributions are post-tax. No reduction in current taxable wages. In retirement, qualified withdrawals (account 5+ years old, age 59.5 or other qualifying event) are tax-free. FICA applied on the contribution.</p>
<h2>The shared annual limit</h2>
<p>The IRS sets a combined annual employee contribution limit across pre-tax and Roth (for 2024 it was $23,000 with $7,500 catch-up at 50+). You cannot put $23,000 in pre-tax and another $23,000 in Roth, the limit is across both.</p>
<h2>Employer match treatment</h2>
<p>Match goes into a pre-tax sub-account regardless of whether your contribution is pre-tax or Roth. SECURE 2.0 lets employers offer Roth match, but adoption is uneven, check your plan documents.</p>
<h2>How to choose</h2>
<p>If you expect your retirement tax bracket to be lower than today, pre-tax is mathematically advantaged. If higher, Roth is. Most people split because future brackets are unknown. Many advisors suggest younger savers favor Roth, mid-career savers favor pre-tax. Talk to a financial advisor.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
