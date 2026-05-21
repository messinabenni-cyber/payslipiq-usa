import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre tu cheque de pago | PayslipIQ (Beta)',
  description: 'Respuestas a las preguntas mas comunes de los trabajadores en EE.UU. sobre su cheque de pago, impuestos, y deducciones. Solo educativo.',
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
  { q: 'Por que mi cheque es mas bajo de lo esperado?', a: 'Razones comunes: nuevas deducciones de salud o 401(k), aumento del tipo de retencion federal por bonos, cruzar al siguiente bracket fiscal, o un error de nomina. Compara este cheque con el anterior linea por linea.' },
  { q: 'Que es FICA en mi cheque?', a: 'FICA combina dos impuestos federales: Seguro Social (6.2% hasta el limite anual de salarios) y Medicare (1.45% sobre cada dolar). Si tus salarios anuales superan $200,000, tambien pagas un 0.9% adicional de Medicare.' },
  { q: 'Por que retuvieron tanto de mi bono?', a: 'Los bonos suelen retenerse al 22% federal fijo (37% si tus salarios suplementarios anuales superan $1M). Esta es la retencion, no el impuesto final. Al declarar tus impuestos, la cantidad correcta se reconcilia.' },
  { q: 'Que es la diferencia entre antes y despues de impuestos?', a: 'Antes de impuestos: 401(k) tradicional, HSA, FSA, primas de salud (Seccion 125). Reducen tu salario imponible. Despues de impuestos: Roth 401(k), embargos, seguros despues de impuestos. No reducen tu salario imponible.' },
  { q: 'Mi pago neto cambio sin razon. Que debo verificar?', a: 'Compara los rubros del cheque actual con el anterior: pago bruto, retenciones federales y estatales, deducciones de salud, contribuciones a 401(k). Pregunta a tu departamento de nomina si algo cambio.' },
  { q: 'Trabajo remoto desde otro estado. Quien me cobra impuestos?', a: 'Generalmente el estado donde resides. Pero algunos estados (NY, MA, CT) aplican la regla de "convenience of employer" que puede gravarte como si trabajaras en su estado. Consulta con un CPA si trabajas multi-estado.' }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900 mb-6">
        <strong>Beta.</strong> Cobertura limitada en espanol. Para guias detalladas, ve la <Link href="/us" className="font-semibold underline">version en ingles</Link>.
      </div>

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Preguntas Frecuentes</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Preguntas frecuentes.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Las preguntas mas comunes de los trabajadores en EE.UU. sobre su cheque de pago, en espanol claro. Solo educativo, no es asesoramiento.
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
        <strong>Solo educativo.</strong> No es asesoramiento fiscal, legal, ni financiero. Verifica los detalles importantes con tu departamento de nomina, un CPA, o el IRS.
      </section>
    </main>
  );
}
