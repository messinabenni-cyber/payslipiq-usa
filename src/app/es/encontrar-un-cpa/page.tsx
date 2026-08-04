import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Encontrar un CPA o preparador de impuestos | PayslipIQ (Beta)',
  description: 'Cómo encontrar un CPA bilingüe o un preparador de impuestos calificado en EE. UU. Solo educativo.',
  alternates: {
    canonical: 'https://payslipiq.com/es/encontrar-un-cpa',
    languages: {
      'en-US': 'https://payslipiq.com/us/find-a-cpa',
      'es-US': 'https://payslipiq.com/es/encontrar-un-cpa',
      'x-default': 'https://payslipiq.com/us/find-a-cpa'
    }
  }
};

const DIRECTORIES = [
  { name: 'Directorio del IRS de Preparadores de Impuestos Federales', url: 'https://irs.treasury.gov/rpo/rpo.jsf', note: 'Filtra por código postal y por credencial (CPA, EA, abogado).' },
  { name: 'AICPA Find a CPA', url: 'https://www.aicpa-cima.com/topic/find-a-cpa', note: 'Directorio nacional del Instituto Americano de CPAs.' },
  { name: 'NAEA Find an Enrolled Agent', url: 'https://taxexperts.naea.org/', note: 'Asociación Nacional de Agentes Inscritos. Muchos son bilingües.' },
  { name: 'ALPFA (profesionales latinos en finanzas y contabilidad)', url: 'https://www.alpfa.org/', note: 'Asociación de Latino Professionals For America. Excelente recurso para encontrar contadores bilingües.' }
];

export default function Page() {
  return (
    <main lang="es-US" className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900 mb-6">
        <strong>Beta.</strong> Esta versión es introductoria. La <Link href="/us/find-a-cpa" className="font-semibold underline">versión completa en inglés</Link> tiene más detalles y preguntas para tu CPA.
      </div>

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Directorio</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Encontrar un CPA bilingüe.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Cuando una pregunta sobre tu cheque de pago supera lo que puede explicar una herramienta educativa, deberías hablar con un profesional certificado. Los directorios oficiales de abajo son los recursos verificados.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Directorios verificados</h2>
        <ul className="mt-5 grid gap-3">
          {DIRECTORIES.map((d) => (
            <li key={d.url} className="rounded-lg border border-slate-200 bg-white p-4">
              <a href={d.url} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-blue-600 hover:underline">{d.name}</a>
              <p className="mt-1 text-[14px] text-slate-700">{d.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12.5px] text-slate-500">PayslipIQ es independiente. Estos directorios se incluyen como información, no como respaldo.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Cuándo buscar un CPA</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[15px] text-slate-700">
          <li>Trabajaste en dos o más estados durante el año.</li>
          <li>Recibiste compensación en acciones (RSU, ESPP, ISO).</li>
          <li>Tu bono superó los $10,000 y quieres planificar las retenciones.</li>
          <li>Apareció un embargo de salario en tu cheque.</li>
          <li>Sospechas un error real del empleador.</li>
          <li>Cambiaste entre W-2 y 1099 durante el año.</li>
          <li>La casilla 1 de tu W-2 parece equivocada por más de $1,000.</li>
        </ul>
      </section>

      <section className="mt-10 text-[13px] text-slate-600 border-t border-slate-200 pt-6">
        <strong>Solo educativo.</strong> No es asesoramiento fiscal, legal ni financiero. Verifica con un CPA, un agente inscrito o un abogado calificado.
      </section>
    </main>
  );
}
