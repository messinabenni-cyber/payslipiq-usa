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
    title: `${s.name} Pay Stub Laws — What Employers Must Provide`,
    description: `${s.name} pay stub access laws and employer requirements. Educational only.`,
    alternates: { canonical: `/us/${s.slug}/pay-stub-laws` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-slate-700">Home</Link> › <Link href={`/us/${s.slug}`} className="hover:text-slate-700">{s.name}</Link> › <span className="text-slate-700">Pay Stub Laws</span></nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Pay Stub Laws</h1>
      <article className="mt-6 prose prose-slate max-w-none">
        <p>Federal FLSA requires employers to keep payroll records but does not specifically require employers to provide pay stubs to employees. State laws vary.</p>
        <p>{s.name} requirements vary by employer, industry, and pay method. The most authoritative source for current state law is the {s.name} state Department of Labor.</p>
        <h2>What to do if you cannot access your pay stub</h2>
        <ol><li>Ask your employer&apos;s payroll team in writing.</li><li>If unresolved, contact your state&apos;s Department of Labor.</li><li>For wage discrepancies, the federal <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">DOL Wage and Hour Division</a> accepts complaints.</li></ol>
      </article>
      <div className="mt-10"><MasterDisclaimer variant="long" /></div>
    </main>
  );
}
