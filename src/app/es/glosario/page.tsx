import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glosario del cheque de pago | PayslipIQ (Beta)',
  description: 'Cada código, abreviatura y acrónimo en un cheque de pago de EE. UU., explicado en español. Solo educativo.',
  alternates: {
    canonical: 'https://payslipiq.com/es/glosario',
    languages: {
      'en-US': 'https://payslipiq.com/us/glossary',
      'es-US': 'https://payslipiq.com/es/glosario',
      'x-default': 'https://payslipiq.com/us/glossary'
    }
  }
};

const TERMS = [
  ['401(k)', 'Plan de jubilación patrocinado por el empleador. Las contribuciones tradicionales reducen tu salario imponible federal. Límite 2025: $23,500; $31,000 si tienes 50+.'],
  ['Adicional Medicare', '0.9% adicional sobre salarios anuales que superen $200,000 (soltero) o $250,000 (casado).'],
  ['Antes de impuestos', 'Una deducción que se toma del salario bruto antes de calcular el impuesto federal. Reduce tu salario imponible.'],
  ['Bono', 'Pago de salarios suplementarios. Generalmente retenido al 22% federal fijo (37% si supera $1M anual).'],
  ['Bruto', 'Salario total antes de cualquier deducción.'],
  ['CPA', 'Contador Público Certificado. Profesional licenciado por el estado para hacer impuestos y auditorías.'],
  ['Despues de impuestos', 'Una deducción tomada del pago neto después de calcular los impuestos. Ej.: Roth 401(k), embargos.'],
  ['Embargo', 'Deducción ordenada por un tribunal. Ej.: manutención de hijos, deudas del IRS, préstamos estudiantiles en mora.'],
  ['FICA', 'Impuesto federal combinado: 6.2% Seguro Social (hasta el límite anual) + 1.45% Medicare (sobre cada dólar).'],
  ['FSA', 'Cuenta de Gastos Flexibles. Antes de impuestos para gastos médicos o de cuidado de dependientes. Límite 2025: $3,300 médico, $5,000 cuidado de dependientes.'],
  ['HSA', 'Cuenta de Ahorros para la Salud. Antes de impuestos. Requiere un plan de salud de deducible alto. Límite 2025: $4,300 individual, $8,550 familiar.'],
  ['Horas extras', 'Federal: 1.5x del salario por las horas que superen 40 a la semana (FLSA). Algunos estados (CA, NV, AK, CO) exigen 1.5x después de 8 horas/día y 2x después de 12.'],
  ['IRS', 'Servicio de Impuestos Internos. Agencia federal que cobra impuestos federales.'],
  ['Medicare', 'Seguro de salud federal para mayores de 65. Contribución FICA del empleado: 1.45% sobre cada dólar.'],
  ['Neto', 'Pago final que llega a tu cuenta. Bruto menos impuestos y deducciones.'],
  ['Nomina', 'Departamento del empleador que procesa tu pago. Primer punto de contacto para preguntas sobre tu cheque.'],
  ['Pago suplementario', 'Bonos, comisiones, indemnizaciones, pagos atrasados. Tienen reglas de retención distintas.'],
  ['PFL', 'Permiso Familiar Pagado. Programas estatales en NY, CA, NJ, MA, CT, OR, CO, WA, RI, DC, ME.'],
  ['Retencion', 'Dinero deducido del pago bruto y enviado al IRS o a la agencia estatal en tu nombre. Se reconcilia al declarar impuestos.'],
  ['Roth 401(k)', 'Contribución a la jubilación después de impuestos. No reduce el salario imponible actual, pero los retiros calificados son libres de impuestos en la jubilación.'],
  ['SDI', 'Seguro de Discapacidad Estatal. Programas en CA, NJ, NY, RI, HI.'],
  ['Seccion 125', 'Disposición del IRS que permite deducciones de nómina antes de impuestos para salud, dental, visión y FSA.'],
  ['Seguro Social', 'Programa federal de jubilación. Contribución FICA del empleado: 6.2% hasta el límite anual de salarios.'],
  ['SS', 'Número de Seguro Social. NUNCA lo subas a una herramienta sin cubrirlo primero.'],
  ['SSA', 'Administración del Seguro Social. Agencia federal que administra el Seguro Social y Medicare.'],
  ['Tope salarial (Seguro Social)', 'Límite anual de salarios sujetos al Seguro Social: $184,500 en 2026. Por encima, no pagas más Seguro Social (Medicare continúa).'],
  ['W-2', 'Formulario fiscal anual que resume los salarios del año y los impuestos retenidos. El empleador lo emite antes del 31 de enero.'],
  ['W-4', 'Formulario que entregas al empleador para configurar la retención federal. La versión actual usa cantidades en dólares, no exenciones.'],
  ['YTD (Year-To-Date)', 'Totales acumulados del año calendario. Deben coincidir con la suma de tus cheques y reconciliarse con tu W-2.']
] as const;

export default function Page() {
  return (
    <main lang="es-US" className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-[13px] text-amber-900 mb-6">
        <strong>Beta.</strong> Glosario introductorio. La <Link href="/us/glossary" className="font-semibold underline">versión completa en inglés</Link> tiene más de 50 términos.
      </div>

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Glosario</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 piq-display">Glosario del cheque de pago.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Cada código, abreviatura y acrónimo que puedes ver en un cheque de pago de EE. UU., en español claro. Usa Cmd/Ctrl + F para buscar un término rápido.
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
        <strong>Solo educativo.</strong> No es asesoramiento fiscal, legal ni financiero. Verifica los detalles con un CPA o el IRS.
      </section>
    </main>
  );
}
