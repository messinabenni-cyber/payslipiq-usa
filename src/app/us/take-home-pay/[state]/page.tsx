import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { STATE_CONFIGS, getStateConfig } from '@/components/StateGrossToNetConfig';
import { SALARY_LADDER } from '@/lib/takeHomeSalaries';

export function generateStaticParams() {
  return STATE_CONFIGS.map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

function fmt0(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const cfg = getStateConfig(params.state);
  if (!cfg) return { title: 'Page not found', robots: { index: false, follow: false } };
  const url = `https://payslipiq.com/us/take-home-pay/${cfg.slug}/`;
  return {
    title: `${cfg.name} Take-Home Pay by Salary (2026) | PayslipIQ`,
    description: `See estimated take-home pay for common salaries in ${cfg.name} for 2026 — from ${fmt0(SALARY_LADDER[0])} to ${fmt0(SALARY_LADDER[SALARY_LADDER.length - 1])} after federal tax, FICA${cfg.noIncomeTax ? '' : ' and state tax'}. Educational only.`,
    alternates: { canonical: url, languages: { 'en-US': url, 'x-default': url } },
  };
}

export default function Page({ params }: { params: { state: string } }) {
  const cfg = getStateConfig(params.state);
  if (!cfg) notFound();
  const url = `https://payslipiq.com/us/take-home-pay/${cfg!.slug}/`;

  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Take-home pay', url: 'https://payslipiq.com/us/take-home-pay' },
        { name: cfg!.name, url },
      ]} />
      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">{cfg!.name} · USA 2026</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">{cfg!.name} take-home pay by salary.</h1>
      <p className="mt-5 text-[17px] text-ink/85 leading-relaxed">
        Pick a salary to see the estimated {cfg!.name} take-home pay for 2026 — the full breakdown of federal income tax, Social Security, Medicare{cfg!.noIncomeTax ? ' (no state income tax in ' + cfg!.name + ')' : ', and ' + cfg!.name + ' state income tax'}, with per-paycheck figures and the marginal vs average rate.
      </p>
      <ReviewedBy />

      <section className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[15px]">
          {SALARY_LADDER.map((sal) => (
            <Link key={sal} href={`/us/take-home-pay/${cfg!.slug}/${sal}`} className="block bg-white border border-line rounded p-3 text-center hover:border-accent font-medium">{fmt0(sal)} after tax</Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Want an exact figure?</h2>
        <p className="mt-2 text-[15px] text-ink/80">These pages use round salaries and a single-filer assumption. For your exact gross, filing status, and deductions, use the {cfg!.name} calculator.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-[14px]">
          <Link href={`/us/gross-to-net-paycheck/${cfg!.slug}`} className="inline-block bg-accent text-white rounded px-4 py-2 font-medium hover:opacity-90">{cfg!.name} gross-to-net calculator</Link>
          <Link href={`/us/${cfg!.slug}`} className="inline-block bg-white border border-line rounded px-4 py-2 font-medium hover:border-accent">{cfg!.name} paycheck hub</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Other states</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[14px]">
          {STATE_CONFIGS.filter((s) => s.slug !== cfg!.slug).map((s) => (
            <Link key={s.slug} href={`/us/take-home-pay/${s.slug}`} className="block bg-white border border-line rounded p-2 text-center hover:border-accent">{s.name}</Link>
          ))}
        </div>
      </section>

      <div className="mt-12"><MasterDisclaimer variant="long" /></div>
    </main>
  );
}
