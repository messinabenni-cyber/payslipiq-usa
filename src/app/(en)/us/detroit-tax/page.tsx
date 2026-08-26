import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Detroit and Michigan City Income Taxes",
  description: "Detroit resident and non-resident income tax, plus other Michigan cities. Educational only.",
  alternates: { canonical: "/us/detroit-tax" },
};

const FAQS = [{"q": "Does Michigan have city income tax?", "a": "Yes, about two dozen cities. Detroit, Grand Rapids, Lansing, Flint, Saginaw, Pontiac and others. Each city has separate resident and non-resident rates."}, {"q": "I live in Detroit but work in Dearborn. Do I pay Detroit tax?", "a": "You owe Detroit resident tax on all wages. Dearborn does not levy a city income tax (verify), so no Dearborn tax. If your work city did levy a non-resident tax, Detroit would typically credit it."}, {"q": "Are Michigan city taxes pre-tax or post-tax?", "a": "Withheld from wages, similar to state tax. They reduce net pay but do not reduce federal income tax wages."}];
const RELATED = [{"label": "Michigan paycheck calculator", "href": "/us/michigan/paycheck-calculator"}, {"label": "Local taxes overview", "href": "/us/local-taxes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Detroit and Michigan Cities", "url": "/us/detroit-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="Detroit and Michigan City Income Taxes"
      url="/us/detroit-tax"
      description="Detroit resident and non-resident income tax, plus other Michigan cities. Educational only."
      intro={<>About two dozen Michigan cities levy income tax. Detroit is the largest. Each has separate resident and non-resident rates. The taxes apply on top of the Michigan state flat tax.</>}
      body={<><h2>Detroit</h2>
<p>Detroit residents pay around 2.4 percent on wages, non-residents around 1.2 percent (verify current rates with the City of Detroit Income Tax Division). Both are calculated on top of the Michigan state flat tax.</p>
<h2>Other Michigan cities</h2>
<p>Common pattern: resident rate around 1 to 2.4 percent, non-resident rate around half. Cities include Grand Rapids, Lansing, Flint, Saginaw, Pontiac, Highland Park, Hamtramck, Battle Creek, Big Rapids, East Lansing, Ionia, Jackson, Lapeer, Muskegon, Muskegon Heights, Port Huron, Springfield, Walker, and several others.</p>
<h2>Crediting between cities</h2>
<p>Most Michigan cities credit residents for tax paid to a work-location city. The mechanics differ by city, so cross-city commuters end up paying close to the resident-city rate, not double.</p>
<h2>Authoritative sources</h2>
<ul>
<li><a href="https://www.michigan.gov/treasury" target="_blank" rel="noopener noreferrer">Michigan Department of Treasury</a></li>
<li><a href="https://detroitmi.gov/departments/office-chief-financial-officer/ocfo-divisions/office-treasury/income-tax-information" target="_blank" rel="noopener noreferrer">City of Detroit Income Tax Division</a></li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
