# PayslipIQ USA

The plain-English paycheck intelligence platform for American workers.

- 50 state pages + 50 calculators + 50 state-tax + 50 overtime + 50 pay-stub-law pages (auto-generated from `src/lib/states.ts`).
- Federal cluster: FICA, federal withholding, Social Security, Medicare, W-4, W-2, 401(k), benefits, bonus tax, pre/post-tax, gross/net.
- Trust Center: trust, security, AI transparency, methodology, how it works, privacy (US), terms, disclaimer.
- Real paycheck calculator (rule-based, unit-testable) at `src/lib/calc.ts`.
- Educational only — not tax, legal, financial, or payroll advice.

## Stack
- Next.js 14 (App Router)
- TypeScript strict
- Tailwind CSS
- Vercel

## Dev
```bash
pnpm install
pnpm dev
```

## Build
```bash
pnpm build
```

## Deploy
Connected to Vercel project `payslipiq-usa` (production branch: `main`).
Custom domain: `payslipiq.com`.
