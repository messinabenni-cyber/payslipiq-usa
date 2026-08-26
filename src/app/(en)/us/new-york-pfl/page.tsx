import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "New York Paid Family Leave (PFL)",
  description: "NY PFL is a separate employee-paid premium funding paid family leave benefits. Capped annually. Educational only.",
  alternates: { canonical: "/us/new-york-pfl" },
};

const FAQS = [{"q": "Is NY PFL the same as NY State Disability?", "a": "No. They are two separate programs with separate premiums. NY State Disability covers your own illness or injury. NY PFL covers leave to care for someone else or bond with a new child."}, {"q": "How much is the NY PFL premium?", "a": "A small percentage of wages, capped at an annual maximum. Set annually by NY State. Verify with the NY Workers' Compensation Board."}, {"q": "How many weeks of NY PFL can I take?", "a": "Up to 12 weeks per year, paid at roughly 67 percent of your average weekly wage capped at the statewide average."}];
const RELATED = [{"label": "New York paycheck calculator", "href": "/us/new-york/paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "New York PFL", "url": "/us/new-york-pfl"}];

export default function Page() {
  return (
    <RichArticle
      title="New York Paid Family Leave (PFL)"
      url="/us/new-york-pfl"
      description="NY PFL is a separate employee-paid premium funding paid family leave benefits. Capped annually. Educational only."
      intro={<>New York Paid Family Leave is a separate state program with its own employee-paid premium. Different from NY State Disability. Funds wage replacement for bonding with a new child, caring for a sick family member, or military deployment-related needs.</>}
      body={<><h2>What NY PFL funds</h2>
<p>Wage-replacement benefits for:</p>
<ul>
<li>Bonding with a new child (birth, adoption, foster placement)</li>
<li>Caring for a family member with a serious health condition</li>
<li>Military deployment-related needs</li>
</ul>
<h2>The premium</h2>
<p>A small percentage of wages, capped at an annual maximum dollar amount. Set annually by NY State. Verify current values at the NY State Workers' Compensation Board.</p>
<h2>NY PFL vs NY State Disability Insurance</h2>
<p>Two separate programs. Both employee-paid via payroll. NY State Disability covers short-term disability for the worker themselves. NY PFL covers leave to care for someone else (or bond with a new child).</p>
<h2>Benefit amount</h2>
<p>Roughly 67 percent of average weekly wage, capped at the statewide average weekly wage. Up to 12 weeks per year.</p>
<h2>Stub label</h2>
<p>Common labels: NY PFL, NYPFL, PFL.</p>
<h2>Authoritative source</h2>
<p><a href="https://paidfamilyleave.ny.gov" target="_blank" rel="noopener noreferrer">NY State Paid Family Leave</a></p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
