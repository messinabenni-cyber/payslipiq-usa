import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glosario del cheque de pago | PayslipIQ (Beta)',
  description: 'Cada codigo, abreviatura y acronimo en un cheque de pago de EE.UU., explicado en espanol. Solo educativo.',
  alternates: {
    canonical: 'https://payslipiq.com/es/glosario/',
    languages: {
      'en-US': 'https://payslipiq.com/us/glossary/',
      'es-US': 'https://payslipiq.com/es/glosario/',
      'x-default': 'https://payslipiq.com/us/glossary/'
    }
  }
};

const TERMS = [
  ['401(k)', 'Plan de jubilacion patrocinado por el empleador. Las contribuciones tradicionales reducen tu salario imponible federal. Limite 2026: $24,500, $32,500 si tienes 50+.'],
  ['Adicional Medicare', '0.9% adicional sobre salarios anuales que superen $200,000 (soltero) o $250,000 (casado).'],
  ['Antes de impuestos', 'Una deduccion que se toma del salario bruto antes de calcular el impuesto federal. Reduce tu salario imponible.'],
  ['Bono', 'Pago de salarios suplementarios. Generalmente retenido al 22% federal fijo (37% si supera $1M anual).'],
  ['Bruto', 'Salario total antes de cualquier deduccion.'],
  ['CPA', 'Contador Publico Certificado. Profesional licenciado por el estado para hacer impuestos y auditorias.'],
  ['Despues de impuestos', 'Una deduccion tomada del pago neto despues de calcular los impuestos. Ej: Roth 401(k), embargos.'],
  ['Embargo', 'Deduccion ordenada por una corte. Ej: manutencion de hijos, deudas del IRS, prestamos estudiantiles en mora.'],
  ['FICA', 'Impuesto federal combinado: 6.2% Seguro Social (hasta limite anual) + 1.45% Medicare (sobre cada dolar).'],
  ['FSA', 'Cuenta de Gastos Flexibles. Antes de impuestos para gastos medicos o de cuidado de dependientes. Limite 2026: $3,400 medico, $5,000 cuidado de dependientes.'],
  ['HSA', 'Cuenta de Ahorros para la Salud. Antes de impuestos. Requiere plan de salud de deducible alto. Limite 2026: $4,400 individual, $8,750 familiar.'],
  ['Horas extras', 'Federal: 1.5x del salario por horas que superen 40 a la semana (FLSA). Algunos estados (CA, NV, AK, CO) requieren 1.5x despues de 8 horas/dia, 2x despues de 12.'],
  ['IRS', 'Servicio de Impuestos Internos. Agencia federal que cobra impuestos federales.'],
  ['Medicare', 'Seguro de salud federal para mayores de 65. Contribucion FICA del empleado: 1.45% sobre cada dolar.'],
  ['Neto', 'Pago final que llega a tu cuenta. Bruto menos impuestos y deducciones.'],
  ['Nomina', 'Departamento del empleador que procesa tu pago. Primer punto de contacto para preguntas sobre tu cheque.'],
  ['Pago suplementario', 'Bonos, comisiones, indemnizaciones, pagos atrasados. Tienen reglas de retencion distintas.'],
  ['PFL', 'Permiso Familiar Pagado. Programas estatales en NY, CA, NJ, MA, CT, OR, CO, WA, RI, DC, ME.'],
  ['Retencion', 'Dinero deducido del pago bruto y enviado al IRS o agencia estatal en tu nombre. Se reconcilia al declarar impuestos.'],
  ['Roth 401(k)', 'Contribucion a la jubilacion despues de impuestos. No reduce el salario imponible actual, pero los retiros calificados son libres de impuestos en la jubilacion.'],
  ['SDI', 'Seguro de Discapacidad Estatal. Programas en CA, NJ, NY, RI, HI.'],
  ['Seccion 125', 'Disposicion del IRS que permite deducciones de nomina antes de impuestos para salud, dental, vision, FSA.'],
  ['Seguro Social', 'Programa federal de jubilacion. Contribucion FICA del empleado: 6.2% hasta el limite anual de salarios.'],
  ['SS', 'Numero de Seguro Social. NUNCA lo subas a una herramienta sin cubrirlo primero.'],
  ['SSA', 'Administracion del Seguro Social. Agencia federal que administra el Seguro Social y Medicare.'],
  ['Tope salarial (Seguro Social)', 'Limite anual de salarios sujetos a Seguro Social. $184,500 en 2026. Por encima, no pagas mas Seguro Social (Medicare continua).'],
  ['W-2', 'Formulario fiscal anual que resume los salarios del ano y los impuestos retenidos. El empleador lo emite antes del 31 de enero.'],
  ['W-4', 'Formulario que entregas al empleador para configurar la retencion federal. La version actual usa cantidades en dolares, no exenciones.'],
  ['YTD (Year-To-Date)', 'Totales acumulados del ano calendario. Deben coincidir con la suma de tus cheques y reconciliarse con tu W-2.']
] as const;

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900 mb-6">
        <strong>Beta.</strong> Glosario introductorio. La <Link href="/us/glossary/" className="font-semibold underline">version completa en ingles</Link> tiene 50+ terminos.
      </div>

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Glosario</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Glosario del cheque de pago.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Cada codigo, abreviatura y acronimo que puedes ver en un cheque de pago de EE.UU., en espanol claro. Usa Cmd/Ctrl + F para buscar un termino rapido.
      </p>

      <dl className="mt-10 grid gap-3">
        {[...TERMS].sort((a, b) => a[0].localeCompare(b[0])).map(([term, body]) => (
          <div key={term} className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">{term}</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-slate-700">{body}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-10 text-[13px] text-slate-600 border-t border-slate-200 pt-6">
        <strong>Solo educativo.</strong> No es asesoramiento fiscal, legal, ni financiero. Verifica los detalles con un CPA o el IRS.
      </section>
    </main>
  );
}
