import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PayslipIQ en español | Entiende tu cheque de pago (EE. UU.)',
  description:
    'PayslipIQ explica en español claro los talones de pago en Estados Unidos: impuestos federales y estatales, FICA, deducciones, horas extra y pago neto. Solo educativo.',
  alternates: {
    canonical: 'https://payslipiq.com/es',
    languages: { 'en-US': '/', 'es-US': '/es', 'x-default': '/' }
  }
};

export default function Page() {
  return (
    <main lang="es-US" className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">PayslipIQ en español</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">
        Entiende tu cheque de pago.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        PayslipIQ explica en español claro los talones de pago de los trabajadores en Estados Unidos:
        impuesto federal, FICA, impuestos estatales, deducciones, horas extra y pago neto. Solo
        educativo: no es asesoramiento fiscal, legal ni financiero.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/es/calculadora-de-cheque" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700">
          Calcular mi pago neto
        </Link>
        <Link href="/us/pay-stub-checker" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400">
          Revisar mi talón de pago
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Herramientas en español</h2>
        <ul className="mt-4 grid gap-2 text-[15px] text-slate-700">
          <li><Link href="/es/calculadora-de-cheque" className="text-blue-600 hover:underline">Calculadora de cheque de pago</Link></li>
          <li><Link href="/es/preguntas-frecuentes" className="text-blue-600 hover:underline">Preguntas frecuentes sobre el cheque de pago</Link></li>
          <li><Link href="/es/glosario" className="text-blue-600 hover:underline">Glosario del talón de pago</Link></li>
          <li><Link href="/es/encontrar-un-cpa" className="text-blue-600 hover:underline">Cómo encontrar un CPA</Link></li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Mientras llega la versión completa en español</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
          La versión completa de PayslipIQ en español está en desarrollo. Por ahora, las herramientas
          y guías en inglés cubren las mismas reglas federales y estatales que se aplican a tu cheque.
          Si tienes preguntas, escribe a{' '}
          <a href="mailto:hola@payslipiq.com" className="text-blue-600 font-semibold hover:underline">hola@payslipiq.com</a>{' '}
          y la respuesta llegará en español.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          PayslipIQ no está afiliado al IRS, a la SSA, al Departamento de Trabajo ni a ningún
          empleador o proveedor de nómina. Es un recurso solo educativo. Verifica los detalles
          importantes con tu departamento de nómina, un CPA o el IRS.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Lo más usado (por ahora en inglés)</h2>
        <ul className="mt-4 grid gap-2 text-[15px] text-slate-700">
          <li><Link href="/us/why-is-my-paycheck-lower" className="text-blue-600 hover:underline">¿Por qué mi cheque es más bajo de lo esperado?</Link></li>
          <li><Link href="/us/fica-explained" className="text-blue-600 hover:underline">FICA explicado (Seguro Social + Medicare)</Link></li>
          <li><Link href="/us/state-tax" className="text-blue-600 hover:underline">Índice de impuestos estatales (50 estados + DC)</Link></li>
          <li><Link href="/us/w4-guide" className="text-blue-600 hover:underline">Guía del formulario W-4</Link></li>
        </ul>
      </section>
    </main>
  );
}
