import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATES, getStateBySlug } from '@/lib/states';
import { getStateNarrative } from '@/lib/stateNarratives';
import { computePaycheck, formatUSD } from '@/lib/calc';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PayNumbers2026 } from '@/components/PayNumbers2026';
import { NextStepsBlock } from '@/components/NextStepsBlock';
import { SALARY_LADDER } from '@/lib/takeHomeSalaries';

interface PageProps { params: { state: string }; }

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return { title: 'State not found', robots: { index: false, follow: false } };
  const taxLabel = s.category === 'no-income-tax' ? 'no state income tax' : s.category === 'flat' ? 'a flat state income tax' : 'progressive state income tax';
  return {
    title: `${s.name} Paycheck Guide 2026: Tax, FICA & Take-Home`,
    description: `How a ${s.name} paycheck works in 2026: federal tax, FICA (Social Security and Medicare), ${taxLabel}, deductions and overtime, with take-home pay by salary. Educational only.`,
    alternates: { canonical: `/us/${s.slug}` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();

  const narrative = getStateNarrative(s.abbr);

  const taxLine =
    s.category === 'no-income-tax'
      ? `${s.name} has no state income tax. Your paycheck only has federal tax (income tax + FICA) and any local taxes that apply.`
      : s.category === 'flat'
      ? `${s.name} uses a flat state income tax. Everyone pays the same percentage on taxable wages, regardless of income.`
      : `${s.name} uses progressive tax brackets. Higher portions of pay are taxed at higher rates.`;

  // 2026-05-16: example table now generated from the same engine the live calculator
  // uses (computePaycheck in src/lib/calc.ts), not hand-keyed. Previous version
  // used `biweekly * 0.10` for federal which produced a ~$250 figure for $65k single
  // (effectively 10% effective tax — wrong; real Pub 15-T result is ~$280). Also
  // used `$${n.toFixed(2)}` which dropped thousands separators ($2500.00 instead
  // of $2,500.00). Both bugs fixed by routing through computePaycheck + formatUSD.
  const exampleSalary = 65000;
  const example = computePaycheck({
    grossPerPeriod: exampleSalary / 26,
    freq: 'biweekly',
    stateSlug: s.slug,
    filing: 'single',
  });
  const biweekly = example.grossPerPeriod;
  const fedTax = example.federalTaxPerPeriod;
  const ssTax = example.fica.socialSecurity / 26;
  const medTax = example.fica.medicare / 26;
  const stateTax = example.stateTaxPerPeriod;
  const net = example.netPerPeriod;
  const fmt = (n: number) => formatUSD(n);
  const fmt0 = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
  // High-interest salaries that have a real take-home page in the Wave 1 ladder.
  const featuredSalaries = SALARY_LADDER.filter((n) => [40000, 50000, 60000, 75000, 90000, 100000, 125000, 150000].includes(n));

  const stateFaqs = [
    {
      q: `Does ${s.name} have state income tax?`,
      a: s.category === 'no-income-tax'
        ? `No. ${s.name} levies no state income tax on wages.`
        : s.category === 'flat'
        ? `Yes. ${s.name} uses a flat state income tax rate. Verify the current rate with the ${s.taxAuthority}.`
        : `Yes. ${s.name} uses progressive brackets. Verify with the ${s.taxAuthority}.`,
    },
    {
      q: `Are there local income taxes in ${s.name}?`,
      a: s.hasLocalTax
        ? `Yes. ${s.name} has cities or counties that add local income tax on top of state tax. Check your specific city.`
        : `No. ${s.name} does not have local income taxes on wages.`,
    },
    {
      q: `Does ${s.name} have State Disability Insurance or Paid Family Leave premiums?`,
      a: (s.hasSDI || s.hasPFL)
        ? `${s.hasSDI ? `${s.name} has employee-paid SDI premiums. ` : ''}${s.hasPFL ? `${s.name} has a Paid Family Leave program with employee-paid premiums.` : ''}`.trim()
        : `No. ${s.name} does not have state-mandated SDI or PFL employee premiums.`,
    },
    {
      q: `Does ${s.name} have daily-overtime rules?`,
      a: s.dailyOvertime
        ? `Yes. ${s.name} has stricter daily-overtime rules than federal FLSA. See the overtime page.`
        : `No. ${s.name} follows federal FLSA: 1.5x for hours above 40 in a workweek.`,
    },
    {
      q: `What is FICA on a ${s.name} paycheck?`,
      a: `FICA is federal: 6.2 percent Social Security up to the annual wage base, plus 1.45 percent Medicare on every dollar. The 0.9 percent Additional Medicare Tax applies above $200,000 single or $250,000 married filing jointly. FICA applies in every state.`,
    },
    {
      q: `Where do I verify ${s.name} state tax withholding?`,
      a: `The ${s.taxAuthority} (${s.taxAuthorityUrl}) is the authoritative source. For your specific paycheck, contact your employer's payroll team or a CPA.`,
    },
  ];

  // Combine state-template FAQs with hand-written narrative FAQs (if any).
  const allFaqs = narrative ? [...stateFaqs, ...narrative.faq] : stateFaqs;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ArticleSchema
        headline={`${s.name} Paycheck Guide`}
        description={`How a ${s.name} paycheck works. Federal tax, FICA, state tax, overtime, deductions.`}
        url={`https://payslipiq.com/us/${s.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'PayslipIQ', url: '/' },
          { name: 'US', url: '/us/learn' },
          { name: s.name, url: `/us/${s.slug}` },
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">Home</Link> ›{' '}
        <Link href="/us/learn" className="hover:text-slate-700">US</Link> ›{' '}
        <span className="text-slate-700">{s.name}</span>
      </nav>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Paycheck Guide</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">{taxLine}</p>

      <ReviewedBy />

      {/* AEO direct-answer block, message-matched to "[State] paycheck" intent. */}
      <section className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">In short</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          A {s.name} paycheck has federal income tax, Social Security (6.2% up to the 2026 wage base of $184,500), and Medicare (1.45%){s.category === 'no-income-tax' ? ', and no state income tax on wages' : s.category === 'flat' && s.taxRate ? `, plus a flat ${(s.taxRate * 100).toFixed(2)}% ${s.name} state income tax` : `, plus progressive ${s.name} state income tax`}{s.hasLocalTax ? ', and local income tax in some cities' : ''}. On a $65,000 single-filer salary, estimated {s.name} take-home is about {fmt0(example.netAnnual)} a year, or {fmt0(net)} per biweekly paycheck.
        </p>
      </section>

      <div className="mt-6">
        <MasterDisclaimer variant="long" />
      </div>

      {narrative && (
        <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">{s.name}: the local picture</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">{narrative.intro}</p>
        </section>
      )}

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link href={`/us/${s.slug}/paycheck-calculator`} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-300">
          <h2 className="text-base font-semibold text-slate-900">{s.name} Paycheck Calculator</h2>
          <p className="mt-1 text-sm text-slate-600">Estimate take-home pay for {s.name}.</p>
        </Link>
        <Link href={`/us/${s.slug}/state-tax`} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-300">
          <h2 className="text-base font-semibold text-slate-900">{s.name} State Tax</h2>
          <p className="mt-1 text-sm text-slate-600">{s.name} tax structure and rates.</p>
        </Link>
        <Link href={`/us/${s.slug}/overtime-pay`} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-300">
          <h2 className="text-base font-semibold text-slate-900">{s.name} Overtime</h2>
          <p className="mt-1 text-sm text-slate-600">{s.dailyOvertime ? 'Stricter daily-OT rules.' : 'Federal FLSA applies.'}</p>
        </Link>
        <Link href={`/us/${s.slug}/pay-stub-laws`} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-300">
          <h2 className="text-base font-semibold text-slate-900">{s.name} Pay Stub Laws</h2>
          <p className="mt-1 text-sm text-slate-600">Employer pay stub requirements in {s.name}.</p>
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">{s.name} take-home pay by salary (2026)</h2>
        <p className="mt-2 text-slate-700">See estimated {s.name} take-home for common salaries. Each page has a full federal, FICA, and {s.name} breakdown with per-paycheck figures.</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          {featuredSalaries.map((sal) => (
            <Link key={sal} href={`/us/take-home-pay/${s.slug}/${sal}`} className="block rounded border border-slate-200 bg-white p-2 text-center hover:border-blue-300">{fmt0(sal)} after tax</Link>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href={`/us/take-home-pay/${s.slug}`} className="inline-block rounded bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700">All {s.name} salaries</Link>
          <Link href={`/us/gross-to-net-paycheck/${s.slug}`} className="inline-block rounded border border-slate-200 px-4 py-2 font-medium hover:border-blue-300">{s.name} gross-to-net calculator</Link>
        </div>
      </section>

      <article className="mt-12 prose prose-slate max-w-none">
        <h2>How a {s.name} paycheck is built</h2>
        <p>Every {s.name} worker pays federal income tax, calculated on the W-4 you submitted to your employer using the IRS Publication 15-T tables. Federal income tax is followed by FICA: 6.2 percent Social Security up to the annual wage base, plus 1.45 percent Medicare on every dollar. The 0.9 percent Additional Medicare Tax applies once year-to-date wages cross $200,000 single or $250,000 married filing jointly.</p>
        {s.category === 'no-income-tax' ? (
          <p>{s.name} levies no state income tax on wages. Your paycheck has only federal layers, no state line.</p>
        ) : s.category === 'flat' && s.taxRate ? (
          <p>{s.name} adds a flat state income tax of approximately {(s.taxRate * 100).toFixed(2)} percent. Verify the current rate with the {s.taxAuthority}.</p>
        ) : (
          <p>{s.name} adds progressive state income tax. The bracket you fall into depends on filing status and taxable income. Verify current brackets with the {s.taxAuthority}.</p>
        )}
        {s.hasLocalTax ? <p><strong>Local taxes:</strong> {s.name} has cities or counties that levy local income tax on top of state tax. Common examples are noted on the local-tax page.</p> : null}
        {s.hasSDI ? <p><strong>State Disability Insurance:</strong> {s.name} has employee-paid SDI premiums. The amount and cap are set by the state and shown as a separate line on your stub.</p> : null}
        {s.hasPFL ? <p><strong>Paid Family Leave:</strong> {s.name} has a Paid Family Leave program with employee-paid premiums.</p> : null}
        {s.dailyOvertime ? <p><strong>Daily overtime:</strong> {s.name} requires daily-overtime payment for hours above a daily threshold, on top of the federal weekly FLSA rule. See the overtime page.</p> : null}

        {narrative && narrative.whatChanged.length > 0 && (
          <>
            <h2>What changed recently in {s.name}</h2>
            <ul>
              {narrative.whatChanged.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </>
        )}

        {narrative && narrative.payrollQuirks.length > 0 && (
          <>
            <h2>{s.name} payroll quirks workers should know</h2>
            <ul>
              {narrative.payrollQuirks.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </>
        )}

        <h2>Example breakdown</h2>
        <p>A hypothetical {s.name} worker on a $65,000 annual salary, paid bi-weekly, single filer, no extra adjustments. Educational only, your real paycheck differs.</p>
        <table>
          <tbody>
            <tr><td>Gross (bi-weekly)</td><td>{fmt(biweekly)}</td></tr>
            <tr><td>Federal income tax</td><td>-{fmt(fedTax)}</td></tr>
            <tr><td>Social Security (6.2%)</td><td>-{fmt(ssTax)}</td></tr>
            <tr><td>Medicare (1.45%)</td><td>-{fmt(medTax)}</td></tr>
            <tr><td>{s.name} state tax</td><td>{stateTax > 0 ? `-${fmt(stateTax)}` : '$0.00 (no state income tax)'}</td></tr>
            <tr><td><strong>Estimated take-home</strong></td><td><strong>{fmt(net)}</strong></td></tr>
          </tbody>
        </table>
        <p>Run your own numbers in the <Link href={`/us/${s.slug}/paycheck-calculator`}>{s.name} paycheck calculator</Link>.</p>

        <h2>Authoritative sources</h2>
        <ul>
          <li><a href={s.taxAuthorityUrl} target="_blank" rel="noopener noreferrer">{s.taxAuthority}</a></li>
          <li><a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS, federal income tax</a></li>
          <li><a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor, Wage and Hour Division</a></li>
        </ul>
      </article>

      <div className="mt-12">
        <PayNumbers2026 variant="compact" />
      </div>

      <div className="mt-10">
        <NextStepsBlock />
      </div>

      <FAQSchema items={allFaqs} />
    </main>
  );
}
