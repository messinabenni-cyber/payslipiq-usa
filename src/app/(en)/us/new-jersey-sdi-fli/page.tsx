import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "New Jersey SDI and FLI",
  description: "NJ Temporary Disability Insurance (SDI) and Family Leave Insurance (FLI) employee-paid premiums. Educational only.",
  alternates: {
    canonical: 'https://payslipiq.com/us/new-jersey-sdi-fli',
    languages: {
      'en-US': 'https://payslipiq.com/us/new-jersey-sdi-fli',
      'en-GB': 'https://payslipiq.co.uk',
      'en-IE': 'https://payslipiq.co.uk/ie',
      'x-default': 'https://payslipiq.com/us/new-jersey-sdi-fli'
    }
  },
};

const FAQS = [{"q": "What is NJ TDI?", "a": "Temporary Disability Insurance. Short-term disability benefits for NJ workers, funded by employee-paid payroll premiums. Often labeled SDI on stubs."}, {"q": "Is NJ FLI separate from NJ TDI?", "a": "Yes, two separate programs with separate premiums. TDI covers your own disability. FLI covers leave to care for someone else."}, {"q": "Are the premiums capped?", "a": "Yes, both have annual caps set by the NJ Department of Labor. Verify current values at myleavebenefits.nj.gov."}];
const RELATED = [{"label": "New Jersey paycheck calculator", "href": "/us/new-jersey/paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "NJ SDI and FLI", "url": "/us/new-jersey-sdi-fli"}];

export default function Page() {
  return (
    <RichArticle
      title="New Jersey SDI and FLI"
      url="/us/new-jersey-sdi-fli"
      description="NJ Temporary Disability Insurance (SDI) and Family Leave Insurance (FLI) employee-paid premiums. Educational only."
      intro={<>New Jersey runs two state insurance programs funded by separate employee-paid payroll premiums: Temporary Disability Insurance (TDI, often labeled SDI on stubs) and Family Leave Insurance (FLI). Both funded by small percentages of wages, both capped annually.</>}
      body={<><h2>Two separate premiums</h2>
<ul>
<li><strong>NJ TDI/SDI:</strong> short-term disability for the worker.</li>
<li><strong>NJ FLI:</strong> family leave to care for others or bond with a new child.</li>
</ul>
<h2>The rates</h2>
<p>2026 employee rates (NJ DOL, myleavebenefits.nj.gov): TDI/SDI 0.19% on the first $171,100 (max $325.09). FLI 0.23% on the first $171,100 (max $393.53). Set annually. Verify current values at the source.</p>
<h2>Benefit amounts</h2>
<p>Roughly 85 percent of average weekly wage, capped at a statewide maximum. Specific replacement rate is set by NJ.</p>
<h2>Stub labels</h2>
<p>Common: NJ SDI, NJ TDI, NJ FLI.</p>
<h2>Authoritative source</h2>
<p><a href="https://myleavebenefits.nj.gov" target="_blank" rel="noopener noreferrer">NJ Department of Labor: My Leave Benefits</a></p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
