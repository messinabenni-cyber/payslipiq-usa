import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/state-tax/';

export const metadata: Metadata = {
  title: 'State Income Tax on Your Paycheck (USA, 2026)',
  description:
    'How state income tax works on a US paycheck. Nine no-state-income-tax states, flat-rate states, progressive-bracket states, and local taxes. Educational only.',
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'es-US': 'https://payslipiq.com/es/',
      'x-default': PAGE_URL
    }
  },
  openGraph: {
    title: 'State Income Tax on Your Paycheck (USA, 2026)',
    description:
      'Plain-English explanation of how state income tax works on a US paycheck. All 50 states + DC.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://payslipiq.com/api/og?title=State%20Income%20Tax&eyebrow=USA%202026',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State Income Tax on Your Paycheck (USA, 2026)',
    description: 'Plain-English. All 50 states + DC.'
  }
};

const NO_TAX = [
  { slug: 'alaska', name: 'Alaska' },
  { slug: 'florida', name: 'Florida' },
  { slug: 'nevada', name: 'Nevada' },
  { slug: 'new-hampshire', name: 'New Hampshire' },
  { slug: 'south-dakota', name: 'South Dakota' },
  { slug: 'tennessee', name: 'Tennessee' },
  { slug: 'texas', name: 'Texas' },
  { slug: 'washington', name: 'Washington' },
  { slug: 'wyoming', name: 'Wyoming' }
];

const FLAT = [
  { slug: 'arizona', name: 'Arizona', rate: '2.50%' },
  { slug: 'colorado', name: 'Colorado', rate: '4.40%' },
  { slug: 'idaho', name: 'Idaho', rate: '5.695%' },
  { slug: 'illinois', name: 'Illinois', rate: '4.95%' },
  { slug: 'indiana', name: 'Indiana', rate: '3.05%' },
  { slug: 'kentucky', name: 'Kentucky', rate: '4.0%' },
  { slug: 'michigan', name: 'Michigan', rate: '4.25%' },
  { slug: 'mississippi', name: 'Mississippi', rate: '4.7%' },
  { slug: 'north-carolina', name: 'North Carolina', rate: '4.5%' },
  { slug: 'pennsylvania', name: 'Pennsylvania', rate: '3.07%' },
  { slug: 'utah', name: 'Utah', rate: '4.55%' }
];

const PROGRESSIVE = [
  'alabama','arkansas','california','connecticut','delaware','district-of-columbia','georgia',
  'hawaii','iowa','kansas','louisiana','maine','maryland','massachusetts','minnesota','missouri',
  'montana','nebraska','new-jersey','new-mexico','new-york','north-dakota','ohio','oklahoma',
  'oregon','rhode-island','south-carolina','vermont','virginia','west-virginia','wisconsin'
];

const FAQS = [
  {
    q: 'Which states have no state income tax?',
    a: 'Nine states levy no state income tax on wages in 2026: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. New Hampshire taxes interest and dividends only, not wages. Workers in these states still pay federal income tax and FICA (Social Security and Medicare). Some still face local taxes or state-mandated worker contributions like Washington Cares.'
  },
  {
    q: 'How does state income tax show up on a pay stub?',
    a: 'State income tax appears as a separate withholding line, usually labeled with the two-letter state code or “SIT” (State Income Tax). The amount is calculated against the state-specific withholding tables, using the state version of a W-4 (e.g., DE 4 in California, IT-2104 in New York). Pre-tax 401(k) and Section 125 health premiums usually reduce state-taxable wages, the same way they reduce federal taxable wages.'
  },
  {
    q: 'Which states use flat rates and which use brackets?',
    a: 'About a dozen states use a single flat rate (Pennsylvania 3.07%, Illinois 4.95%, Colorado 4.40%, North Carolina 4.5%, Michigan 4.25%, Indiana 3.05%, Kentucky 4.0%, Utah 4.55%, Mississippi 4.7%, Idaho 5.695%, Arizona 2.50%). The remaining states (and DC) run progressive brackets that look similar in structure to federal brackets, with rates that climb from about 1% to 13.3% (California top rate, plus 1% mental health surcharge over $1M).'
  },
  {
    q: 'What is local income tax?',
    a: 'A handful of cities, counties, and school districts add their own income tax on top of state tax. The biggest examples are New York City and Yonkers (NY), Philadelphia (PA Earnings Tax), Detroit (MI), the Ohio RITA and CCA city/school-district network, several Indiana counties, several Maryland counties, Wilmington (DE), Kansas City (MO), and St. Louis (MO). PayslipIQ has a dedicated Local Tax Calculator at /us/local-paycheck-taxes/.'
  },
  {
    q: 'What if I work in one state but live in another?',
    a: 'Some pairs of states have reciprocity agreements that let you pay tax only in your state of residence (e.g., Pennsylvania and New Jersey, Indiana and Kentucky, Maryland and Virginia, Wisconsin and Illinois). Others, like New York and New Jersey, do not have reciprocity, and you may owe tax to both states with a credit on the home-state return. See PayslipIQ’s remote-worker state tax guide and verify with your state tax authority or a CPA.'
  },
  {
    q: 'Why does my paycheck show two different state taxes?',
    a: 'Two reasons. First, you might have moved mid-year, and the employer is withholding for two states until the W-4 update is processed. Second, your employer may have a multi-state nexus and follows the apportionment rules of both states. Verify with payroll if the split looks wrong.'
  }
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'State Income Tax', url: PAGE_URL }
];

export default function StateTaxHub() {
  return (
    <>
      <ArticleSchema headline="State Income Tax on Your Paycheck (USA, 2026)" description="Plain-English explanation of how state income tax works on a US paycheck." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-5xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">State Income Tax</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · 2026</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">State Income Tax on Your Paycheck</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            How state income tax works on a US paycheck, in plain English. Nine no-tax states.
            About a dozen flat-rate states. The rest use progressive brackets. Some cities and
            counties add a local tax on top.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Direct answer</h2>
          <p className="text-slate-700 dark:text-slate-300">
            State income tax is a separate withholding line on your US pay stub, calculated against
            your state’s own tables using a state-specific W-4. Nine states levy no income tax on
            wages. The rest use either a single flat rate or progressive brackets. Pre-tax 401(k),
            HSA, and Section 125 health premiums usually reduce state-taxable wages. Some cities
            add a local income tax on top.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">No state income tax (9 states)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {NO_TAX.map((s) => (
              <Link
                key={s.slug}
                href={`/us/${s.slug}/state-tax/`}
                className="block rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:border-slate-400"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Flat-rate states</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FLAT.map((s) => (
              <Link
                key={s.slug}
                href={`/us/${s.slug}/state-tax/`}
                className="flex items-center justify-between rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:border-slate-400"
              >
                <span>{s.name}</span>
                <span className="text-slate-500">{s.rate}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Progressive-bracket states (and DC)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {PROGRESSIVE.map((slug) => (
              <Link
                key={slug}
                href={`/us/${slug}/state-tax/`}
                className="block rounded-md border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:border-slate-400"
              >
                {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Local income tax</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            A handful of jurisdictions levy a local income tax on top of state tax. Common examples:
            New York City and Yonkers, Philadelphia, Detroit, the Ohio RITA and CCA networks,
            several Indiana and Maryland counties, Wilmington, Kansas City, and St. Louis.
          </p>
          <Link href="/us/local-paycheck-taxes/" className="underline hover:no-underline">
            Local Paycheck Tax Calculator →
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Frequently asked</h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Related tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/paycheck-calculator/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Paycheck Calculator</div>
              <div className="text-sm text-slate-500">All 50 states + DC. Federal, FICA, state.</div>
            </Link>
            <Link href="/us/gross-to-net-paycheck-calculator/" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
              <div className="font-medium">Gross to Net Calculator</div>
              <div className="text-sm text-slate-500">Any gross paycheck → estimated take-home.</div>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
    </>
  );
}
