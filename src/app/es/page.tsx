import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PayslipIQ en espanol | Tu cheque, en ingles claro',
  description: 'PayslipIQ ayuda a los trabajadores en EE.UU. a entender su cheque de pago, los impuestos federales y estatales, FICA, y las deducciones. Solo educativo, no es asesoramiento.',
  alternates: {
    canonical: 'https://payslipiq.com/es',
    languages: { 'en-US': '/us/', 'es-US': '/es/', 'x-default': '/us/' }
  }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">PayslipIQ en espanol</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">
        Entiende tu cheque de pago.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        PayslipIQ explica los talones de pago de los trabajadores en Estados Unidos en ingles claro. Federal tax, FICA, impuestos estatales, deducciones, horas extras, y pago neto. Solo educativo, no es asesoramiento fiscal, legal, ni financiero.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/us/pay-stub-checker" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700">
          Revisar mi talon de pago
        </Link>
        <Link href="/us/paycheck-calculator" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400">
          Calcular pago neto
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Mientras la version completa en espanol llega</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
          La version completa de PayslipIQ en espanol esta en desarrollo. Por ahora, las herramientas y guias en ingles cubren las mismas reglas federales y estatales que se aplican a tu cheque. Si tienes preguntas, escribe a{' '}
          <a href="mailto:hola@payslipiq.com" className="text-blue-600 font-semibold hover:underline">hola@payslipiq.com</a>{' '}
          y la respuesta llegara en espanol.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          PayslipIQ no esta afiliado al IRS, al SSA, al Departamento de Trabajo, ni a ningun empleador o proveedor de nomina. Solo educativo. Verifica los detalles importantes con tu departamento de nomina, un CPA, o el IRS.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Lo mas usado en ingles</h2>
        <ul className="mt-4 grid gap-2 text-[15px] text-slate-700">
          <li><Link href="/us/why-is-my-paycheck-lower" className="text-blue-600 hover:underline">Why is my paycheck lower than expected?</Link></li>
          <li><Link href="/us/fica-explained" className="text-blue-600 hover:underline">FICA explained (Social Security + Medicare)</Link></li>
          <li><Link href="/us/state-tax" className="text-blue-600 hover:underline">State tax index (50 estados + DC)</Link></li>
          <li><Link href="/us/find-a-cpa" className="text-blue-600 hover:underline">Find a CPA (encuentra un contador)</Link></li>
        </ul>
      </section>
    </main>
  );
}
