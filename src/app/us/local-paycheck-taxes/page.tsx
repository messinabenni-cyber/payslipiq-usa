import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { LocalTaxCalculator } from '@/components/LocalTaxCalculator';

import { SoftwareApplicationLd, HowToLd } from '@/components/ToolSchemas';
const PAGE_URL = 'https://payslipiq.com/us/local-paycheck-taxes';

export const metadata: Metadata = {
  title: 'Local Paycheck Taxes (USA, 2026) | PayslipIQ',
  description: 'NYC, Yonkers, PA EIT, Ohio RITA, MD county, Wilmington, KC/STL, IN county, Detroit. Plain-English guide to US local income tax + an estimator.',
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    title: 'Local Paycheck Taxes (USA, 2026)',
    description: 'NYC, Yonkers, PA EIT, Ohio RITA, MD county, Wilmington, KC/STL, IN county, Detroit. Estimator + plain-English guide.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: 'https://payslipiq.com/api/og?title=Local%20Paycheck%20Taxes&eyebrow=USA%202026', width: 1200, height: 630 }]
  }
};

const FAQS = [
  { q: 'What is a local income tax?', a: 'A tax levied by a city, county, or school district on wage income on top of federal and state tax. Some localities tax residents only (NYC, Yonkers). Others tax anyone who works there (Kansas City, St. Louis earnings tax, Detroit nonresident, Wilmington wage tax). PA cities use Earned Income Tax (EIT) under Act 32 with a rate that varies by municipality and school district.' },
  { q: 'Do all states have local income taxes?', a: 'No. Most do not. The big locality clusters are Pennsylvania (every municipality and school district has an EIT), Ohio (RITA / CCA cities), Maryland (every county piggybacks on state tax), Indiana (every county), Michigan (city of Detroit and ~22 others), New York (NYC + Yonkers residents), Kansas City and St. Louis (earnings tax), and Wilmington DE. California, Texas, Florida, and most states do not have employee local income tax.' },
  { q: 'How do I find my local rate?', a: 'PA: PA DCED Local Tax Finder by address. Ohio: RITA or CCA city register. Maryland: Comptroller of MD county tax table. Indiana: Indiana DOR County Tax Rates. Michigan: city treasurer. NYC / Yonkers: NY Department of Taxation and Finance. Kansas City / St. Louis: city Revenue Division. Wilmington: City of Wilmington Earned Income Tax. Always verify with the official agency, not a third-party blog.' },
  { q: 'Does the calculator on this page handle all of them?', a: 'It estimates the most common locality patterns: NYC top-marginal resident rate, Yonkers surcharge, PA EIT (you enter your rate), Ohio RITA / CCA (you enter), Maryland county (you enter or use mid-range default), Indiana county (you enter), Michigan city (you enter), Wilmington 1.25%, KC and STL 1%. It does not handle every special school-district or transit add-on. For unusual cases, use the city revenue agency directly.' },
  { q: 'Is my employer required to withhold local tax?', a: 'In some states (PA Act 32, Ohio courtesy withholding rules, Maryland piggyback) employers must withhold for the work location, the resident location, or both. In states without local income tax, the locality lines on your stub will be blank. If you live in a locality with tax but your employer is not withholding, you may owe at filing. Check with payroll and the city revenue agency.' },
  { q: 'Why is NYC so much higher than Yonkers?', a: 'NYC has its own progressive income tax with a top resident rate around 3.876% of taxable income. Yonkers does not have its own income tax in the same form, it instead applies a 16.75% surcharge to your New York State personal income tax liability (NYS Pub NYS-50-T-Y). Because the base is your NYS tax owed (not your wages), the effective additional rate on a mid-income Yonkers resident lands around 1% of wages, much lower than NYC. Both apply only to residents, not to commuters who work in those cities but live elsewhere.' },
  { q: 'Do remote workers pay local tax?', a: 'Usually based on where you actually perform the work. If you live and work remotely in a locality with tax, that locality typically taxes you. If you live in one locality and your employer is in another, rules vary by state (PA has an out-of-state credit, Ohio has the Reform Act, NYC convenience-of-employer rules apply for nonresidents who occasionally work elsewhere). This is a frequent area for tax preparer questions.' },
  { q: 'Is local tax deductible on my federal return?', a: 'It can be part of the State and Local Tax (SALT) deduction if you itemize, currently capped at $10,000 combined federal limit. For most filers under the standard deduction, the local tax simply reduces your take-home and does not appear separately on your federal return. This is educational only, not tax advice.' }
];

const CITIES = [
  { city: 'New York City (NY)', rate: '~3.876% top resident', who: 'Residents', source: 'https://www.tax.ny.gov/' },
  { city: 'Yonkers (NY)', rate: '16.75% of NYS tax owed (≈ 1% of wages at mid-income)', who: 'Residents', source: 'https://www.tax.ny.gov/pdf/publications/withholding/nys50_t_y.pdf' },
  { city: 'Philadelphia, Pittsburgh, every PA muni', rate: '1-3.5% EIT (Act 32)', who: 'Resident OR work location', source: 'https://dced.pa.gov/local-government/local-income-tax-information/' },
  { city: 'Ohio RITA / CCA cities', rate: '1-3% typical', who: 'Resident + work location with credits', source: 'https://www.ritaohio.com/' },
  { city: 'Maryland counties', rate: '2.25-3.2% piggyback', who: 'County of residence', source: 'https://www.marylandtaxes.gov/' },
  { city: 'Indiana counties', rate: '0.35-3.38%', who: 'County of residence on Jan 1', source: 'https://www.in.gov/dor/' },
  { city: 'Detroit & ~22 MI cities', rate: 'Detroit 2.4% resident / 1.2% nonresident', who: 'Resident OR work location', source: 'https://www.michigan.gov/treasury' },
  { city: 'Wilmington, DE', rate: '1.25% wage tax', who: 'Wages earned in Wilmington', source: 'https://www.wilmingtonde.gov/' },
  { city: 'Kansas City, MO', rate: '1% earnings tax', who: 'Resident + nonresident worked-in', source: 'https://www.kcmo.gov/' },
  { city: 'St. Louis, MO', rate: '1% earnings tax', who: 'Resident + nonresident worked-in', source: 'https://www.stlouis-mo.gov/' },
  { city: 'San Francisco, CA', rate: 'Payroll Expense Tax (employer)', who: 'Employer-paid, not employee withholding', source: 'https://sftreasurer.org/' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[{ name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' }, { name: 'Local Paycheck Taxes', url: PAGE_URL }]} />
      <ArticleSchema headline="Local Paycheck Taxes (USA, 2026)" description="NYC, Yonkers, PA EIT, Ohio RITA, MD county, Wilmington, KC/STL, Indiana county, Detroit. Plain-English guide and estimator." url={PAGE_URL} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Local taxes</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Local paycheck taxes, in plain English.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        US cities and counties that levy income tax on residents, on workers, or on both, with verified rates and an estimator. This is the layer the standard paycheck calculator usually skips.
      </p>

      <ReviewedBy />

      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-2">In plain English</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          A local income tax is a city, county, or school-district tax on wages, on top of federal and state tax. Most US workers do not pay one, but if you live or work in NYC, Yonkers, any Pennsylvania municipality, an Ohio RITA / CCA city, a Maryland county, an Indiana county, Detroit (or ~22 other Michigan cities), Wilmington DE, Kansas City MO, or St. Louis MO, your paycheck has an extra line. Rates range from 1% (Wilmington, KC, STL) to ~3.9% (NYC top marginal). PayslipIQ&apos;s estimator below approximates the most common patterns. Verify with your city or county revenue agency before relying on a number.
        </p>
      </section>

      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only. Local rules change frequently and vary by residency, work location, school district, and special assessments. Verify with the official city or county revenue agency.
      </aside>

      <LocalTaxCalculator />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Verified locality table</h2>
        <p className="mt-3 text-[15px] text-ink/80">Verified 2026-05-06. Rates change, click through to the official source for the current figure.</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border border-line bg-white rounded">
            <thead>
              <tr className="bg-paper text-left text-xs uppercase tracking-wider text-ink/60">
                <th className="px-3 py-2">City / cluster</th>
                <th className="px-3 py-2">Approx rate</th>
                <th className="px-3 py-2">Who pays</th>
                <th className="px-3 py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              {CITIES.map((c) => (
                <tr key={c.city} className="border-t border-line">
                  <td className="px-3 py-2 font-medium">{c.city}</td>
                  <td className="px-3 py-2 tabular-nums">{c.rate}</td>
                  <td className="px-3 py-2 text-ink/70">{c.who}</td>
                  <td className="px-3 py-2"><a href={c.source} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">Open</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">When this matters</h2>
        <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
          <li>You moved into or out of a city with local tax mid-year (proration applies).</li>
          <li>You live in one PA municipality and work in another (Act 32 source rule).</li>
          <li>You are a remote worker with a different residence vs employer city.</li>
          <li>Your stub shows a deduction labelled CITY, RITA, EIT, or LST that you do not recognise.</li>
          <li>You are filing a multi-locality return for the first time.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 border-l-4 border-accent bg-cyan-50 px-4 py-3 rounded">
        <div className="font-semibold text-sm mb-1">Pair this with the gross-to-net calculator</div>
        <p className="text-sm text-ink/80">
          The estimator above is local tax in isolation. For a complete pre-tax to take-home view, use the
          {' '}<Link href="/us/gross-to-net-paycheck-calculator" className="text-accent underline">Gross to Net Paycheck Calculator</Link>
          {' '}and add the local figure to its state tax line.
        </p>
      </section>

      <nav className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm" aria-label="Core PayslipIQ pages">
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/pay-stub-checker">Pay Stub Checker</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/gross-to-net-paycheck-calculator">Gross to Net</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained">FICA explained</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/w4-guide">W-4 Guide</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/state-tax">State index</Link>
      </nav>

      <div className="mt-12">
      <SoftwareApplicationLd url="https://payslipiq.com/us/local-paycheck-taxes" name="PayslipIQ Local Tax Calculator" description="Free local-tax estimator covering NYC, Yonkers, Philadelphia, Detroit, Ohio RITA and CCA cities, Indiana and Maryland counties. Educational only." category="FinanceApplication" />
      <HowToLd name="How to use the PayslipIQ Local Tax Calculator" description="Step-by-step guide to using the PayslipIQ Local Tax Calculator." steps={[ { name: "Enter your gross pay", text: "Type your per-period gross pay so the calculator can apply local rates." }, { name: "Select your locality", text: "Pick from NYC, Yonkers, Philadelphia, Detroit, Ohio RITA / CCA, Indiana and Maryland counties." }, { name: "Review the breakdown", text: "The calculator returns the local tax line in plain English with a one-line explanation." } ]} />
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
