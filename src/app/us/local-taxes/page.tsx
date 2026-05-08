import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Local Income Taxes (US Cities and Counties)",
  description: "Cities and counties that levy local income tax in addition to state. NYC, Yonkers, Philadelphia, Detroit, Ohio cities, and more. Educational only.",
  alternates: { canonical: "/us/local-taxes" },
};

const FAQS = [{"q": "Which US cities have a local income tax?", "a": "NYC, Yonkers, Philadelphia, Pittsburgh, Detroit, several Ohio cities, Wilmington DE, Newark NJ, Birmingham, Kansas City, St Louis, plus dozens of smaller cities and most Maryland counties, Indiana counties, and Kentucky cities."}, {"q": "Do I pay city tax if I work in a city but live elsewhere?", "a": "Depends on the city. NYC tax is residence-based (commuters from NJ do not pay NYC tax). Philadelphia, Detroit, most Ohio cities tax both residents and non-residents who work in the city, often at different rates."}, {"q": "How is local tax calculated?", "a": "Usually a flat percentage of taxable wages. Sometimes the percentage differs for residents vs non-residents. Verify with the city's Department of Revenue."}];
const RELATED = [{"label": "New York paycheck calculator", "href": "/us/new-york/paycheck-calculator"}, {"label": "Pennsylvania paycheck calculator", "href": "/us/pennsylvania/paycheck-calculator"}, {"label": "Ohio paycheck calculator", "href": "/us/ohio/paycheck-calculator"}, {"label": "Michigan paycheck calculator", "href": "/us/michigan/paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Local Taxes", "url": "/us/local-taxes"}];

export default function Page() {
  return (
    <RichArticle
      title="Local Income Taxes (US Cities and Counties)"
      url="/us/local-taxes"
      description="Cities and counties that levy local income tax in addition to state. NYC, Yonkers, Philadelphia, Detroit, Ohio cities, and more. Educational only."
      intro={<>Most US workers pay federal and state income tax. A subset also pay local income tax to a city, county, or special-purpose district. Here is the geography of US local income tax.</>}
      body={<><h2>States with notable local income taxes</h2>
<table>
<thead><tr><th>State</th><th>Localities</th></tr></thead>
<tbody>
<tr><td>New York</td><td>NYC residents (multi-bracket city tax) and Yonkers residents (surcharge)</td></tr>
<tr><td>Pennsylvania</td><td>Philadelphia City Wage Tax (residents and non-residents working in city). Most municipalities and school districts statewide levy a Local Earned Income Tax (LEIT).</td></tr>
<tr><td>Ohio</td><td>Most cities levy income tax administered by RITA, CCA, or the city directly. Common rates 1.5 to 2.5 percent. Some school districts also levy SDIT.</td></tr>
<tr><td>Michigan</td><td>Detroit (resident and non-resident rates), Grand Rapids, Lansing, Flint, Saginaw, Pontiac, others. About two dozen cities total.</td></tr>
<tr><td>Maryland</td><td>All counties piggyback on the state return. Plus Baltimore City.</td></tr>
<tr><td>Indiana</td><td>County income tax (CAGIT/COIT) statewide.</td></tr>
<tr><td>Kentucky</td><td>Many cities and counties levy occupational tax.</td></tr>
<tr><td>Missouri</td><td>Kansas City and St Louis levy 1 percent earnings tax.</td></tr>
<tr><td>Alabama</td><td>Birmingham, Bessemer, Macon County, others (occupational tax).</td></tr>
<tr><td>Delaware</td><td>Wilmington wage tax.</td></tr>
<tr><td>Iowa</td><td>Some school districts add a surtax.</td></tr>
<tr><td>Oregon</td><td>TriMet (Portland metro) and LTD (Lane County) transit taxes. Multnomah County and Portland Metro Supportive Housing Services.</td></tr>
<tr><td>New Jersey</td><td>Newark 1 percent payroll tax (employer-paid, but worth knowing).</td></tr>
</tbody>
</table>
<h2>Resident vs non-resident rules</h2>
<p>Many local taxes are residence-based: live there, you pay; work there but live elsewhere, you do not. NYC is the cleanest example. Others (Philadelphia, Detroit, most Ohio cities) tax both residents and non-residents who work in the city, often at different rates.</p>
<h2>Reciprocity and credits</h2>
<p>If you work in one local jurisdiction and live in another that also taxes income, the residence locality often credits tax paid to the work locality (in part or in full). The exact rule varies by state.</p>
<h2>How local tax shows on a pay stub</h2>
<p>Common labels: LOC, LIT, LST, CITY, OCC, LEIT, RITA, CCA, plus a city or county name. The amount is usually a flat percentage of taxable wages.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
