import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATES, getStateBySlug } from '@/lib/states';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

interface PageProps { params: { state: string }; }

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return { title: 'State not found' };
  return {
    title: `${s.name} Overtime Pay Rules (2026)`,
    description: `${s.name} overtime: ${s.dailyOvertime ? 'has stricter daily-overtime rules than federal FLSA' : 'follows federal FLSA (1.5× over 40/week)'}. Educational only.`,
    alternates: { canonical: `/us/${s.slug}/overtime-pay` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-slate-700">Home</Link> › <Link href={`/us/${s.slug}`} className="hover:text-slate-700">{s.name}</Link> › <span className="text-slate-700">Overtime</span></nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Overtime Pay Rules</h1>
      <article className="mt-6 prose prose-slate max-w-none">
        <p>Federal FLSA requires 1.5× the regular rate for hours over 40 in a workweek for non-exempt employees.</p>
        {s.dailyOvertime ? (
          <p><strong>{s.name} has stricter daily-overtime rules than federal FLSA.</strong> Verify the specifics with the {s.taxAuthority} or the {s.name} state Department of Labor.</p>
        ) : (
          <p>{s.name} follows federal FLSA. There is no daily-overtime overlay in {s.name}.</p>
        )}
        <h2>The tax myth</h2>
        <p>Overtime is paid at a higher rate but taxed at the same rate as regular wages. A single big paycheck may be over-withheld because payroll annualizes it; that comes back at filing time.</p>
        <h2>Authoritative source</h2>
        <p><a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor, Wage and Hour Division</a></p>
      </article>
      <div className="mt-10"><MasterDisclaimer variant="long" /></div>
    </main>
  );
}
