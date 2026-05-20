import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de cheque de pago | PayslipIQ (Beta)',
  description: 'Calcula tu pago neto a partir del salario bruto. Impuesto federal, FICA, e impuesto estatal. Solo educativo, no es asesoramiento.',
  alternates: {
    canonical: 'https://payslipiq.com/es/calculadora-de-cheque/',
    languages: {
      'en-US': 'https://payslipiq.com/us/paycheck-calculator/',
      'es-US': 'https://payslipiq.com/es/calculadora-de-cheque/',
      'x-default': 'https://payslipiq.com/us/paycheck-calculator/'
    }
  }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900 mb-6">
        <strong>Beta.</strong> La version en espanol esta en desarrollo. Para usar la calculadora interactiva completa, usa la <Link href="/us/paycheck-calculator/" className="font-semibold underline">version en ingles</Link>.
      </div>

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Calculadora</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Calculadora de cheque de pago.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Calcula tu pago neto a partir del salario bruto en EE.UU. Esta pagina explica como funciona el calculo. La calculadora interactiva esta en la version en ingles.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Como se calcula tu pago neto</h2>
        <ol className="mt-5 list-decimal pl-6 text-[15px] text-slate-700 leading-relaxed space-y-3">
          <li><strong>Salario bruto.</strong> Tu pago total antes de cualquier deduccion.</li>
          <li><strong>Deducciones antes de impuestos.</strong> 401(k), HSA, FSA, primas de seguro de salud (Seccion 125). Reducen tu salario imponible federal.</li>
          <li><strong>Impuesto federal.</strong> Calculado segun tu W-4 usando las tablas del IRS Pub 15-T.</li>
          <li><strong>FICA.</strong> 6.2% de Seguro Social hasta el limite anual ($184,500 en 2026), mas 1.45% de Medicare en cada dolar.</li>
          <li><strong>Medicare adicional.</strong> 0.9% sobre los salarios anuales que superen $200,000 (soltero) o $250,000 (casado).</li>
          <li><strong>Impuesto estatal.</strong> Varia por estado. Algunos estados (FL, TX, NV, WA, etc.) no tienen impuesto sobre la renta.</li>
          <li><strong>Impuesto local.</strong> Aplicable en algunas ciudades (NYC, Filadelfia, Detroit, ciudades de Ohio, etc.).</li>
          <li><strong>Deducciones despues de impuestos.</strong> Roth 401(k), embargos de salario, primas de seguros despues de impuestos.</li>
          <li><strong>Pago neto.</strong> Lo que llega a tu cuenta bancaria.</li>
        </ol>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Recursos en espanol</h2>
        <ul className="mt-3 space-y-2 text-[15px] text-slate-700">
          <li>IRS en espanol: <a href="https://www.irs.gov/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">irs.gov/es</a></li>
          <li>SSA en espanol: <a href="https://www.ssa.gov/espanol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ssa.gov/espanol</a></li>
          <li>Departamento del Trabajo: <a href="https://www.dol.gov/general/espanol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dol.gov/general/espanol</a></li>
        </ul>
      </section>

      <section className="mt-10 text-[13px] text-slate-600 border-t border-slate-200 pt-6">
        <strong>Solo educativo.</strong> No es asesoramiento fiscal, legal, ni financiero. PayslipIQ no esta afiliado al IRS, SSA, ni a ningun empleador. Los calculos son estimados, tu cheque real puede diferir. Verifica con tu departamento de nomina, un CPA, o el IRS.
      </section>
    </main>
  );
}
