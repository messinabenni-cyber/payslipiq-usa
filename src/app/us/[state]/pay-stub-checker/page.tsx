import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATES, getStateBySlug, type StateData } from '@/lib/states';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

interface PageProps { params: { state: string }; }

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

function ratePct(rate: number): string {
  return (rate * 100).toFixed(2).replace(/\.?0+$/, '');
}

function stateTaxSentence(s: StateData): string {
  if (s.category === 'no-income-tax') {
    return `${s.name} does not levy a state income tax on wages, so a ${s.name} pay stub shows no state income tax line. Federal income tax and FICA still apply.`;
  }
  if (s.category === 'flat' && typeof s.taxRate === 'number') {
    return `${s.name} applies a flat state income tax of about ${ratePct(s.taxRate)}% to wages, so the state income tax line is relatively predictable.`;
  }
  return `${s.name} uses progressive state income tax brackets, so the state income tax line depends on your income level and filing status.`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return { title: 'State not found' };
  const url = `https://payslipiq.com/us/${s.slug}/pay-stub-checker`;
  return {
    title: `${s.name} Pay Stub Checker (Free, 2026)`,
    description: `Read a ${s.name} pay stub line by line: gross pay, federal tax, FICA, ${s.category === 'no-income-tax' ? 'no state income tax' : `${s.name} state tax`}${s.hasLocalTax ? ', local tax' : ''}, deductions, and net pay. Educational only.`,
    alternates: { canonical: `/us/${s.slug}/pay-stub-checker` },
    openGraph: {
      title: `${s.name} Pay Stub Checker (2026)`,
      description: `Plain-English, line-by-line walkthrough of a ${s.name} pay stub. Educational only.`,
      url,
      type: 'website',
    },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();

  const url = `https://payslipiq.com/us/${s.slug}/pay-stub-checker`;
  const taxLine = stateTaxSentence(s);
  const hasWorkerContrib = s.hasSDI || s.hasPFL;

  const FAQS = [
    {
      q: `Does ${s.name} have a state income tax?`,
      a: s.category === 'no-income-tax'
        ? `No. ${s.name} does not tax wage income, so a ${s.name} pay stub has no state income tax line. You will still see federal income tax and FICA (Social Security and Medicare).`
        : s.category === 'flat' && typeof s.taxRate === 'number'
          ? `Yes. ${s.name} levies a flat state income tax of about ${ratePct(s.taxRate)}% on wages. Verify the current rate with the ${s.taxAuthority}.`
          : `Yes. ${s.name} uses progressive state income tax brackets, so the rate rises with income. Verify the current brackets with the ${s.taxAuthority}.`,
    },
    {
      q: `What should I check on a ${s.name} pay stub?`,
      a: `Compare gross pay to your rate and hours, check federal income tax withholding against your W-4, confirm Social Security (6.2% up to the 2026 wage base of $184,500) and Medicare (1.45%), review the ${s.category === 'no-income-tax' ? 'absence of a state income tax line' : `${s.name} state income tax line`}${s.hasLocalTax ? ', look for any local or city tax' : ''}, and confirm pre-tax and post-tax deductions before net pay.`,
    },
    {
      q: 'Is uploading a pay stub safe?',
      a: 'Before sharing any pay stub, cover or remove personal identifiers: Social Security number, bank account details, home address, employee ID, employer reference numbers, QR codes, and barcodes. PayslipIQ is an educational tool and cannot confirm whether your paycheck is correct.',
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ArticleSchema
        headline={`${s.name} Pay Stub Checker (2026)`}
        description={`Plain-English, line-by-line walkthrough of a ${s.name} pay stub. Educational only.`}
        url={url}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://payslipiq.com/' },
          { name: s.name, url: `https://payslipiq.com/us/${s.slug}` },
          { name: 'Pay Stub Checker', url },
        ]}
      />
      <FAQSchema items={FAQS} />

      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">Home</Link> ›{' '}
        <Link href={`/us/${s.slug}`} className="hover:text-slate-700">{s.name}</Link> ›{' '}
        <span className="text-slate-700">Pay Stub Checker</span>
      </nav>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Pay Stub Checker</h1>
      <p className="mt-3 text-lg leading-relaxed text-slate-700">
        Read a {s.name} pay stub line by line — gross pay, federal tax, FICA, {s.category === 'no-income-tax' ? 'no state income tax' : `${s.name} state tax`}{s.hasLocalTax ? ', local tax' : ''}, deductions, and net pay — in plain English.
      </p>

      <section className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">In short</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          A {s.name} pay stub shows the same federal lines as any US stub — federal income tax,
          Social Security, and Medicare — plus state-specific lines. {taxLine}{' '}
          {hasWorkerContrib ? `${s.name} workers may also see a state disability or paid-leave contribution line. ` : ''}
          PayslipIQ explains each line so you can spot what to verify. Educational only.
        </p>
      </section>

      <div className="mt-6">
        <MasterDisclaimer variant="long" />
      </div>

      <article className="mt-8 prose prose-slate max-w-none prose-a:text-blue-700">
        <h2>What is on a {s.name} pay stub</h2>
        <p><strong>Gross pay.</strong> Total earnings for the pay period before any deductions — rate times hours, or salary divided by pay periods, plus overtime and any bonuses.</p>
        <p><strong>Federal income tax.</strong> Withheld from every US paycheck using your W-4 and the IRS Publication 15-T method. This is the same in {s.name} as in every other state.</p>
        <p><strong>FICA — Social Security and Medicare.</strong> Social Security is 6.2% of wages up to the 2026 wage base of $184,500; Medicare is 1.45% of all wages, with an extra 0.9% Additional Medicare Tax on wages above $200,000 for a single filer.</p>
        <p><strong>State income tax.</strong> {taxLine}</p>
        {s.hasLocalTax ? (
          <p><strong>Local tax.</strong> Some {s.name} cities or counties levy a local income tax. Check your stub for a separate city or county tax line and verify it with your local authority.</p>
        ) : null}
        {hasWorkerContrib ? (
          <p><strong>State worker contributions.</strong> {s.name} runs {s.hasSDI ? 'a state disability insurance program' : ''}{s.hasSDI && s.hasPFL ? ' and ' : ''}{s.hasPFL ? 'a paid family leave program' : ''}, so you may see a small employee contribution line. Amounts are set annually by the state.</p>
        ) : null}
        <p><strong>Pre-tax and post-tax deductions.</strong> Pre-tax items (traditional 401(k), HSA, Section 125 health premiums) reduce taxable wages. Post-tax items (Roth contributions, garnishments) come off after tax.</p>
        <p><strong>Net pay.</strong> Take-home pay — gross minus every tax and deduction above.</p>

        <h2>Estimate a {s.name} paycheck</h2>
        <p>
          To estimate take-home pay from gross, use the{' '}
          <Link href={`/us/${s.slug}/paycheck-calculator`}>{s.name} paycheck calculator</Link>, which
          pre-selects {s.name} state settings. To walk through a real stub line by line, use the{' '}
          <Link href="/us/pay-stub-checker">PayslipIQ Pay Stub Checker</Link>.
        </p>

        <h2>Official {s.name} source</h2>
        <p>
          For current {s.name} withholding rules and rates, see the{' '}
          <a href={s.taxAuthorityUrl} target="_blank" rel="nofollow noopener">{s.taxAuthority}</a>.
          PayslipIQ is independent and not affiliated with any state agency.
        </p>
      </article>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Frequently asked</h2>
        <dl className="mt-4 space-y-5">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-slate-900">{f.q}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related</p>
        <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-blue-700 sm:grid-cols-2">
          <li><Link href="/us/pay-stub-checker">Pay Stub Checker (all states) →</Link></li>
          <li><Link href={`/us/${s.slug}/paycheck-calculator`}>{s.name} Paycheck Calculator →</Link></li>
          <li><Link href={`/us/${s.slug}`}>{s.name} paycheck guide →</Link></li>
          <li><Link href="/us/pay-stub-anatomy">How to read a pay stub →</Link></li>
        </ul>
      </section>
    </main>
  );
}
