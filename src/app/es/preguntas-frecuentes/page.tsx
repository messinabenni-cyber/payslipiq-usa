import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre tu cheque de pago | PayslipIQ (Beta)',
  description: 'Respuestas a las preguntas más comunes de los trabajadores en EE. UU. sobre su cheque de pago, impuestos y deducciones. Solo educativo.',
  alternates: {
    canonical: 'https://payslipiq.com/es/preguntas-frecuentes',
    languages: {
      'en-US': 'https://payslipiq.com/us/why-is-my-paycheck-lower',
      'es-US': 'https://payslipiq.com/es/preguntas-frecuentes',
      'x-default': 'https://payslipiq.com/us/why-is-my-paycheck-lower'
    }
  }
};

const FAQS = [
  { q: '¿Por qué mi cheque es más bajo de lo esperado?', a: 'Razones comunes: nuevas deducciones de salud o 401(k), aumento de la retención federal por bonos, cruzar al siguiente tramo fiscal o un error de nómina. Compara este cheque con el anterior línea por línea.' },
  { q: '¿Qué es FICA en mi cheque?', a: 'FICA combina dos impuestos federales: Seguro Social (6.2% hasta el límite anual de salarios) y Medicare (1.45% sobre cada dólar). Si tus salarios anuales superan $200,000, también pagas un 0.9% adicional de Medicare.' },
  { q: '¿Por qué retuvieron tanto de mi bono?', a: 'Los bonos suelen retenerse al 22% federal fijo (37% si tus salarios suplementarios anuales superan $1M). Esta es la retención, no el impuesto final. Al declarar tus impuestos, la cantidad correcta se reconcilia.' },
  { q: '¿Cuál es la diferencia entre antes y después de impuestos?', a: 'Antes de impuestos: 401(k) tradicional, HSA, FSA, primas de salud (Sección 125). Reducen tu salario imponible. Después de impuestos: Roth 401(k), embargos, seguros después de impuestos. No reducen tu salario imponible.' },
  { q: 'Mi pago neto cambió sin razón. ¿Qué debo verificar?', a: 'Compara los rubros del cheque actual con el anterior: pago bruto, retenciones federales y estatales, deducciones de salud, contribuciones al 401(k). Pregunta a tu departamento de nómina si algo cambió.' },
  { q: 'Trabajo remoto desde otro estado. ¿Quién me cobra impuestos?', a: 'Generalmente el estado donde resides. Pero algunos estados (NY, MA, CT) aplican la regla de "conveniencia del empleador", que puede gravarte como si trabajaras en su estado. Consulta con un CPA si trabajas en varios estados.' }
];

export default function Page() {
  return (
    <main lang="es-US" className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900 mb-6">
        <strong>Beta.</strong> Cobertura limitada en español. Para guías detalladas, visita la <Link href="/us" className="font-semibold underline">versión en inglés</Link>.
      </div>

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Preguntas Frecuentes</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Preguntas frecuentes.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Las preguntas más comunes de los trabajadores en EE. UU. sobre su cheque de pago, en español claro. Solo educativo, no es asesoramiento.
      </p>

      <dl className="mt-10 grid gap-5">
        {FAQS.map((f) => (
          <div key={f.q} className="rounded-lg border border-slate-200 bg-white p-5">
            <dt className="font-semibold text-slate-900">{f.q}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-slate-700">{f.a}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-10 text-[13px] text-slate-600 border-t border-slate-200 pt-6">
        <strong>Solo educativo.</strong> No es asesoramiento fiscal, legal ni financiero. Verifica los detalles importantes con tu departamento de nómina, un CPA o el IRS.
      </section>
    </main>
  );
}
