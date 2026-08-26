import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Ohio Local Income Tax (RITA, CCA)",
  description: "How Ohio municipal income tax works. RITA, CCA, and city-administered taxes. Educational only.",
  alternates: { canonical: "/us/ohio-rita-cca" },
};

const FAQS = [{"q": "What is RITA?", "a": "Regional Income Tax Agency. A non-profit that administers municipal income tax for over 300 Ohio cities. Withholding appears on stubs labeled RITA plus the city name."}, {"q": "What is CCA?", "a": "Central Collection Agency. Administers municipal income tax for cities primarily in northeast Ohio, including Cleveland. Withholding appears as CCA plus the city name."}, {"q": "I work in Columbus but live in Dublin. Do I pay both?", "a": "Likely yes, with crediting. Columbus taxes you on Columbus-source wages. Dublin levies its residence rate but typically credits Columbus tax paid. Net result varies, but you do not usually pay full rates to both."}, {"q": "What is SDIT?", "a": "School District Income Tax. Some Ohio school districts levy this on residents to fund schools. Residence-based, not work-based."}];
const RELATED = [{"label": "Ohio paycheck calculator", "href": "/us/ohio/paycheck-calculator"}, {"label": "Local taxes overview", "href": "/us/local-taxes"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Ohio Local Tax (RITA, CCA)", "url": "/us/ohio-rita-cca"}];

export default function Page() {
  return (
    <RichArticle
      title="Ohio Local Income Tax (RITA, CCA)"
      url="/us/ohio-rita-cca"
      description="How Ohio municipal income tax works. RITA, CCA, and city-administered taxes. Educational only."
      intro={<>Ohio has a uniquely municipal-heavy local tax system. Most cities levy income tax. Two regional collection agencies (RITA and CCA) administer the tax for many of them. Some cities collect their own. School districts can add their own surtax via SDIT.</>}
      body={<><h2>RITA, the Regional Income Tax Agency</h2>
<p>RITA administers municipal income tax for over 300 Ohio cities. Withholding shows on pay stubs as RITA plus the city name. Common rates 1.5 to 2.5 percent.</p>
<h2>CCA, Central Collection Agency</h2>
<p>CCA administers tax for cities mostly in northeast Ohio. Cleveland is the largest CCA member. Withholding shows on pay stubs as CCA plus the city name.</p>
<h2>Self-administered cities</h2>
<p>Columbus, Cincinnati, Dayton, Toledo, others administer their own income tax (not via RITA or CCA).</p>
<h2>Reciprocity / credit between cities</h2>
<p>Ohio cities typically credit residents for tax paid to a work-location city. Some credit fully, others partially. The result is cross-city commuters often net at close to the resident rate, not double.</p>
<h2>School District Income Tax (SDIT)</h2>
<p>Some Ohio school districts levy an additional income tax on residents to fund schools. SDIT is residence-based, not work-based. Check your residence school district at tax.ohio.gov.</p>
<h2>Authoritative sources</h2>
<ul>
<li><a href="https://tax.ohio.gov" target="_blank" rel="noopener noreferrer">Ohio Department of Taxation</a></li>
<li><a href="https://www.ritaohio.com" target="_blank" rel="noopener noreferrer">Regional Income Tax Agency (RITA)</a></li>
<li><a href="https://ccatax.ci.cleveland.oh.us" target="_blank" rel="noopener noreferrer">Central Collection Agency (CCA)</a></li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
