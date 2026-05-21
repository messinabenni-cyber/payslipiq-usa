import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "401(k) Contribution Limits 2026 — $24,500 + Catch-Up",
  description: "IRS 2026 401(k) elective deferral limit is $24,500. Age 50+ catch-up is $8,000. SECURE 2.0 super catch-up (ages 60–63) is $11,250. Educational only.",
  alternates: { canonical: "/us/401k-contribution-limits" },
};

const FAQS = [
  { q: "What is the 2026 401(k) contribution limit?", a: "$24,500 for elective deferrals. This is the IRC Section 402(g)(1) limit, increased from $23,500 in 2025. Source: IRS Notice 2025-67." },
  { q: "What is the 2026 age-50 catch-up contribution?", a: "$8,000. This is added on top of the $24,500 base, so a worker 50 or older can contribute up to $32,500 in 2026 in elective deferrals. Source: IRS Notice 2025-67." },
  { q: "What is the SECURE 2.0 super catch-up for ages 60–63 in 2026?", a: "$11,250. Workers who turn 60, 61, 62, or 63 during 2026 can use this higher catch-up in place of the regular $8,000 catch-up. They cannot stack both. Source: IRS Notice 2025-67; SECURE 2.0 §109." },
  { q: "Do I have to make catch-up contributions as Roth in 2026?", a: "Only if you earned more than $150,000 in FICA wages from the same employer in 2025. Starting January 1, 2026, SECURE 2.0 §603 requires those high-earner catch-up contributions to be made on a Roth (after-tax) basis. Workers under that wage threshold can still choose pre-tax catch-up. Verify with your plan administrator." },
  { q: "Does the limit include employer match?", a: "No. The $24,500 / $32,500 limits cover only your elective deferrals. Employer match and profit-sharing contribute toward a separate, much higher IRC §415(c) annual additions limit (for 2026, $72,000 base + applicable catch-up)." },
  { q: "What if I change jobs mid-year?", a: "Your total elective deferrals across every 401(k) you participate in during 2026 cannot exceed $24,500 (or $32,500 / $35,750 with catch-up). Track contributions to both the old and new employer plans. If you exceed the limit, you have until April 15, 2027 to request a corrective distribution of the excess." },
  { q: "What about Highly Compensated Employees (HCEs)?", a: "HCEs are workers earning above an IRS-set threshold (for 2026 testing, generally $160,000 in 2025 wages). If the plan fails non-discrimination (ADP/ACP) testing, the plan administrator may have to refund some HCE contributions. This does not change your statutory limit, only what the plan actually accepts." },
];

const RELATED = [
  { label: "401(k) deductions", href: "/us/401k-deductions" },
  { label: "Pre-tax vs Roth 401(k)", href: "/us/pre-tax-vs-roth-401k" },
  { label: "HSA vs FSA", href: "/us/hsa-vs-fsa" },
  { label: "Methodology", href: "/methodology" },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "US", url: "/us/learn" },
  { name: "401(k) Contribution Limits 2026", url: "/us/401k-contribution-limits" },
];

export default function Page() {
  return (
    <RichArticle
      title="401(k) Contribution Limits 2026"
      url="/us/401k-contribution-limits"
      description="IRS 2026 401(k) elective deferral limit is $24,500. Age 50+ catch-up is $8,000. SECURE 2.0 super catch-up (ages 60–63) is $11,250. New: high-earner Roth-mandatory catch-up."
      intro={<>The IRS publishes 401(k) contribution limits annually. The 2026 numbers were set in <a href="https://www.irs.gov/pub/irs-drop/n-25-67.pdf" target="_blank" rel="noopener noreferrer">IRS Notice 2025-67</a>. Educational only — verify with your plan administrator before relying on anything.</>}
      body={<><h2>2026 base limit: $24,500</h2>
<p>The IRC §402(g)(1) limit on elective deferrals to a 401(k), 403(b), governmental 457(b), or Thrift Savings Plan is <strong>$24,500 for 2026</strong>, up from $23,500 in 2025. This is the elective deferral cap before any catch-up.</p>
<h2>Age 50+ catch-up: $8,000</h2>
<p>Once you turn 50 in calendar year 2026, you can add a catch-up contribution on top of the base limit. The 2026 catch-up under IRC §414(v)(2)(B)(i) is <strong>$8,000</strong>, up from $7,500 in 2025. Combined ceiling for age 50+ workers in 2026: <strong>$32,500</strong>.</p>
<h2>SECURE 2.0 super catch-up (ages 60–63): $11,250</h2>
<p>If you turn 60, 61, 62, or 63 during 2026 and your plan offers it, you can substitute the SECURE 2.0 §109 higher catch-up in place of the regular age-50 catch-up. For 2026 this is <strong>$11,250</strong>. Combined ceiling for ages 60–63 in 2026: <strong>$35,750</strong>. You cannot stack the $8,000 catch-up and the $11,250 super catch-up — you pick the one your age makes you eligible for.</p>
<h2>NEW for 2026: high-earner Roth-mandatory catch-up</h2>
<p>Starting <strong>January 1, 2026</strong>, SECURE 2.0 §603 requires catch-up contributions to be made as <strong>Roth (after-tax)</strong> for workers whose FICA wages from the same employer in the prior year exceeded <strong>$150,000</strong>. If you earned $150,001+ in W-2 wages from your employer in 2025, your 2026 catch-up to that employer&apos;s plan cannot be pre-tax. Workers below the threshold can still choose pre-tax catch-up.</p>
<p>Practical effect: high earners no longer get the immediate income-tax deduction on catch-up dollars. They get tax-free withdrawals in retirement instead.</p>
<h2>Combined employee + employer limit</h2>
<p>Total annual additions (your deferrals + employer match + profit-sharing) to a single 401(k) plan are capped by IRC §415(c). For 2026 this is <strong>$72,000</strong> (excluding catch-up), up from $70,000 in 2025. Catch-up amounts are added on top. Most workers never approach this combined limit.</p>
<h2>Multiple employers in one year</h2>
<p>The §402(g) elective deferral limit is <em>per individual, per year</em>, aggregated across every 401(k), 403(b), and 457(b) plan you participate in. If you change jobs and contribute to two employer plans in 2026, the combined cannot exceed $24,500 (or the applicable catch-up ceiling). Excess deferrals are subject to a 6% excise tax unless distributed by April 15, 2027.</p>
<h2>How this affects your paycheck</h2>
<p>Pre-tax 401(k) deductions reduce federal-taxable wages and most states&apos; state-taxable wages on each paycheck. They do not reduce FICA wages — you still pay Social Security (6.2% to $184,500) and Medicare (1.45%) on every dollar deferred. Use the <a href="/us/paycheck-calculator/">Paycheck Calculator</a> to see how raising your 401(k) deferral changes take-home pay.</p>
<h2>Sources</h2>
<p>IRS Notice 2025-67 (2026 amounts relating to retirement plans and IRAs). IRS News Release: &ldquo;401(k) limit increases to $24,500 for 2026.&rdquo; SECURE 2.0 Act of 2022, §109 (super catch-up) and §603 (Roth catch-up for high earners). Verify the current figures at <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer">irs.gov</a> before relying on them.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
