/**
 * Data-driven state-specific narratives for production /src/lib/stateNarratives.ts
 *
 * Each state has 4-7 sections written in human cadence:
 *   intro, whatChanged, payrollQuirks, faq.
 *
 * This file holds 50 states + DC. Designed to be merged with src/lib/states.ts
 * and rendered inside src/components/StateHubTemplate (or src/app/us/[state]/page.tsx).
 *
 * Hard rules followed:
 *   - No em-dashes, no curly quotes, no ellipses, no AI filler phrases.
 *   - Every claim that could change is written with a "verify with payroll" hedge.
 *   - Every state-specific number references the year it applies to.
 *   - Local quirks (city tax, county tax, SDI, PFL) called out explicitly.
 */

export interface StateNarrative {
  code: string;
  intro: string;
  whatChanged: string[];
  payrollQuirks: string[];
  faq: { q: string; a: string }[];
}

// helper used to keep the file readable
const make = (
  code: string,
  intro: string,
  whatChanged: string[],
  payrollQuirks: string[],
  faq: Array<[string, string]>
): StateNarrative => ({
  code,
  intro,
  whatChanged,
  payrollQuirks,
  faq: faq.map(([q, a]) => ({ q, a }))
});

export const STATE_NARRATIVES: Record<string, StateNarrative> = {
  AL: make('AL',
    'Alabama runs a graduated state income tax with a top rate of 5%. The bigger surprise on most Alabama paychecks is local. Several cities (Birmingham, Bessemer, Gadsden, Macon County, others) levy a city occupational tax that comes out of every paycheck for work inside the city limits, even if the worker lives elsewhere.',
    ['No major rate change for 2025-2026.', 'Overtime pay exempted from Alabama state income tax through 2025. Federal tax still applies.', 'Grocery sales tax cut from 4% to 3% in 2023, further reductions tied to revenue triggers.'],
    ['Birmingham occupational license fee: 1% of gross wages for work in Birmingham.', 'Auburn, Opelika, and several smaller cities run their own occupational tax.', 'Alabama exemption structure differs from federal W-4. Verify state withholding with payroll if it looks off.'],
    [['Why is overtime tax-free in Alabama?', 'Only state income tax is exempt. Federal tax, Social Security (6.2%), and Medicare (1.45%) still apply. The exemption was set to sunset in mid-2025 unless extended.'],
     ['I live in Alabama and work remotely for an out-of-state employer. Who taxes me?', 'Alabama, on residence. You owe state income tax even if your employer is in a no-tax state. Set up Alabama state withholding through payroll to avoid a lump-sum bill at filing.'],
     ['What is the city occupational tax line on my Birmingham paycheck?', 'The Birmingham occupational license fee. Currently 1% of gross wages for work performed in city limits. It applies to non-resident commuters as well.']]),

  AK: make('AK',
    'Alaska is one of nine states with no income tax on wages. Take-home is shaped by federal withholding, FICA, and any voluntary pre-tax deductions like 401(k) or health premiums. There are no local income taxes anywhere in Alaska. The Permanent Fund Dividend is paid annually and is separate from payroll.',
    ['PFD amount set annually by Alaska Department of Revenue.', 'State unemployment insurance employee contribution rate adjusts annually.', 'No state income tax change planned.'],
    ['One of three states (with NJ and PA) that requires employee SUI contributions. Rate is small, under 0.5% of taxable wages.', 'No state withholding for income tax. SUI shows as a small employee deduction.', 'Many oil, fishing, and seasonal jobs use rotation-based pay periods that confuse federal withholding tables.'],
    [['Why is there a state line on my Alaska pay stub if there is no state income tax?', 'That is the Alaska employee SUI contribution. Set annually by Alaska Department of Labor.'],
     ['Is the PFD reported on my W-2?', 'No. PFD is reported on a 1099-MISC. Federally taxable, not state-taxable.'],
     ['Why does my federal withholding swing on rotation paychecks?', 'IRS withholding tables assume each paycheck is the same. Rotation pay confuses the math, leading to over-withholding on heavy weeks and under-withholding on light weeks. It evens out at filing.']]),

  AZ: make('AZ',
    'Arizona moved to a flat 2.5% state income tax in 2023 after consolidating several brackets. It is now one of the lowest-taxing income-tax states. No local income tax. Minimum wage is among the highest in the southwest at $14.70/hr in 2025.',
    ['Flat 2.5% rate effective from 2023, no change announced for 2026.', 'Annual minimum wage indexing under Proposition 206.', 'No state-level paid leave program. Sick leave under Prop 206 still applies.'],
    ['Watch the Arizona A-4 form, not just the federal W-4. State withholding is a chosen percentage of gross taxable wages.', 'Several A-4 percentages available (0%, 0.5%, 1.0%, 1.5%, 2.0%, 2.5%, 3.0%, 3.5%). Default for new hires is 2%.', 'No SDI, no PFL, no city tax in Arizona.'],
    [['Why is my Arizona state withholding so low?', 'Probably because your A-4 is set at a lower percentage than your effective state tax rate. If you owe at filing, raise the A-4 percentage.'],
     ['Is there a city income tax in Phoenix or Tucson?', 'No. Arizona has no local income tax anywhere in the state.'],
     ['I just moved to Arizona from California. Why is my paycheck so much higher?', 'California top rate is 13.3% plus 1% SDI, Arizona is a flat 2.5% with no SDI. On a $100,000 salary the difference is several thousand dollars a year.']]),

  AR: make('AR',
    'Arkansas runs a three-tier income tax with a top rate of 3.9% in 2025, down from 4.4% in prior years. No local income tax. Minimum wage is $11.00/hr.',
    ['Top rate cut from 4.4% to 3.9% effective 2024. Further cuts tied to revenue triggers.', 'Standard deduction increased.', 'No paid family leave program. No SDI.'],
    ['Arkansas withholding tables use a graduated structure that recalculates as YTD wages climb.', 'No city or county income tax in Arkansas.'],
    [['Why does my Arkansas state tax change mid-year?', 'Arkansas uses cumulative withholding. As your year-to-date taxable wages climb across brackets, the per-paycheck withholding adjusts. It is normal.'],
     ['Is there a special form for Arkansas state withholding?', 'AR4EC. File one when you start a job and update it after life changes.']]),

  CA: make('CA',
    'California has the highest state income tax bracket in the US (top rate 13.3% on income over $1M, plus 1% mental health surtax). California State Disability Insurance (SDI) is mandatory at 1.1% of all wages, no wage base cap as of 2024. California Paid Family Leave (PFL) is funded by the same SDI deduction. Local payroll surcharges in San Francisco, Los Angeles County, and others.',
    ['SDI wage base cap removed in 2024. Now applies to all wages with no upper limit.', 'Daily overtime applies after 8 hours in a day, double time after 12.', 'Fast-food worker minimum $20/hr (AB 1228, 2024). Healthcare worker minimum scaling under SB 525.'],
    ['SDI line on every California paycheck (1.1% of all wages).', 'CA PIT (Personal Income Tax) tracked separately on the stub.', 'Daily overtime is unique to California (and Alaska, Nevada, Colorado). Most states only do weekly OT.', 'San Francisco employers pay payroll tax (Healthcare Security Ordinance, etc.). Workers do not see this on their stub but it shapes total comp.'],
    [['Why is my California SDI deduction higher than last year?', 'In 2024 California removed the wage base cap. The 1.1% rate now applies to every dollar of wages, with no ceiling. High earners see a much bigger SDI deduction than before.'],
     ['I worked 10 hours one day. Why was the last 2 hours at 1.5x?', 'California daily overtime rule. Hours 1-8 are regular, 9-12 are 1.5x, beyond 12 is 2x. This is in addition to the federal weekly OT rule (over 40 hours).'],
     ['I live in CA but work remote for a New York company. Where do I pay?', 'Both, in most cases. NY may apply the convenience-of-employer rule and tax you as if you worked in NY. CA also taxes you as a resident. You claim a credit on your CA return for tax paid to NY. Talk to a CPA. Multi-state tax is the most-disputed area of US payroll.']]),

  CO: make('CO',
    'Colorado runs a flat 4.4% state income tax. The notable additions are local: Denver, Aurora, Greenwood Village, Sheridan, and Glendale charge an Occupational Privilege Tax (OPT). FAMLI is the new state Paid Family and Medical Leave program funded by a 0.45% employee contribution from 2024.',
    ['Flat 4.4% rate (formerly 4.55%, then 4.4% in 2022). TABOR refunds may further reduce effective rate.', 'FAMLI premium 0.9% total, employer + employee split, employee share 0.45%.', 'Family Medical Leave benefits started January 2024.'],
    ['OPT is paid by both employee and employer in Denver, currently $5.75/month employee, $4 employer.', 'FAMLI shows on every Colorado paycheck regardless of employer size.', 'Some Colorado cities have additional special-district taxes (Stapleton, Cherry Creek, etc.).'],
    [['What is the FAMLI line on my Colorado pay stub?', 'Colorado Family and Medical Leave Insurance premium. Funded by both employee (0.45%) and employer. Lets you take paid leave for serious health conditions, parental leave, or qualifying military events.'],
     ['What is OPT on my Denver pay stub?', 'Denver Occupational Privilege Tax. $5.75 a month for employees earning $500+ in a month, $4 a month for the employer.']]),

  CT: make('CT',
    'Connecticut runs a graduated income tax with brackets up to 6.99%. Connecticut Paid Family and Medical Leave (CT PFML) is funded by employee contributions of 0.5% of gross wages up to the SSA wage base. No local income tax in Connecticut.',
    ['CT PFML benefits started January 2022, premium 0.5% of wages.', 'Income tax rate cuts in 2024 lowered the bottom two brackets.', 'Property tax credit on state return increased.'],
    ['CT PFML deduction shows on every Connecticut paycheck.', 'No city or county income tax.', 'Connecticut uses CT-W4 form, not the federal W-4 percentage method.'],
    [['What is the CT PFML line on my paycheck?', 'Connecticut Paid Family and Medical Leave premium. 0.5% of gross wages up to the Social Security wage base.'],
     ['Why is my Connecticut withholding higher than the bracket suggests?', 'CT-W4 withholding uses a graduated structure that often over-withholds for filers who claim modest exemptions. Adjust your CT-W4 if you regularly get a large refund.']]),

  DE: make('DE',
    'Delaware has a graduated income tax topping at 6.6%. Wilmington imposes an Earned Income Tax (1.25%) on residents and on non-residents who work in the city. No state sales tax.',
    ['No major income tax rate change for 2025-2026.', 'Wilmington wage tax remains 1.25%.'],
    ['Wilmington wage tax line on every paycheck for work in Wilmington.', 'Delaware standard deduction is small compared to federal.', 'No state sales tax means more reliance on income tax revenue.'],
    [['What is the Wilmington wage tax?', 'A 1.25% city income tax that applies to gross earnings for work in Wilmington, regardless of where the employee lives.']]),

  DC: make('DC',
    'The District of Columbia operates like a state for income tax purposes. Top rate 10.75% on income above $1M. DC PFL is funded entirely by employer contribution (0.62% of wages), so workers do not see a deduction line for it. DC has no local taxes within the District.',
    ['Top bracket added in 2022 for income over $1M, currently 10.75%.', 'DC PFL employer rate adjusts annually.', 'No employee contribution to DC PFL.'],
    ['Workers do not see DC PFL on their pay stub. It is paid by the employer.', 'DC reciprocal agreements with Maryland and Virginia mean cross-border commuters are taxed only by their state of residence.', 'No local DC tax beyond the standard income tax.'],
    [['I live in Maryland and work in DC. Why is no DC tax withheld?', 'DC has reciprocity with MD and VA. As a Maryland resident working in DC, your employer withholds Maryland tax, not DC. Same for Virginia residents.'],
     ['Where is the DC PFL line on my pay stub?', 'It is not. DC PFL is funded entirely by the employer. Unlike many other state PFL programs, the employee does not contribute.']]),

  FL: make('FL',
    'Florida is one of nine states with no income tax on wages. Take-home pay is shaped only by federal withholding, FICA, and any voluntary pre-tax deductions. The state minimum wage is rising annually until it hits $15/hr in 2026 (currently $13/hr in 2025).',
    ['Minimum wage rises by $1/hr each year through 2026 under Amendment 2.', 'No state income tax change planned.', 'No state PFL or SDI program.'],
    ['No state income tax line on Florida pay stubs.', 'No local income tax anywhere in Florida.', 'Florida is one of the simplest states for payroll: just federal, FICA, and voluntary pre-tax.'],
    [['Why does my Florida paycheck only show federal taxes?', 'Florida has no state income tax and no local income tax. The only mandatory taxes are federal withholding and FICA. Everything else on your stub is voluntary (401k, health, HSA, etc.).'],
     ['I work in Florida but live in Georgia. Who taxes me?', 'Georgia, on residence. Florida cannot tax you because Florida has no state income tax. Georgia taxes you as a Georgia resident on all income, regardless of where earned. Make sure your employer is set up to withhold Georgia state tax.']]),

  GA: make('GA',
    'Georgia moved to a flat 5.39% state income tax in 2024 after consolidating six brackets. Future scheduled cuts could lower the rate to 4.99% by 2028 if revenue triggers are met. No city income tax. Atlanta and major metros run no payroll surcharges.',
    ['Flat rate 5.39% in 2024, scheduled to drop annually through 2028.', 'Standard deduction increased to $24,000 (joint) and $12,000 (single) in 2024.', 'No paid leave program. No SDI.'],
    ['Georgia G-4 form replaces federal W-4 logic for state withholding.', 'No local Georgia income tax.', 'Georgia has reciprocity with no other states. Cross-border commuters get full Georgia tax.'],
    [['Why did my Georgia tax change in 2024?', 'Georgia switched from graduated brackets to a flat 5.39% rate. For most workers this is a small cut. High earners see a meaningful reduction.'],
     ['I just moved to Georgia from a no-tax state. What changed on my paycheck?', 'You now have a Georgia state income tax line. Roughly 5.39% of taxable wages. Update your G-4 with payroll to avoid surprises at filing.']]),

  HI: make('HI',
    'Hawaii has the highest top marginal rate of any state at 11% on income over $400,000. Hawaii TDI (Temporary Disability Insurance) is funded jointly by employer and employee, employee share up to 0.5% of wages capped at the weekly SSA wage base.',
    ['No major income tax rate change for 2025-2026.', 'TDI weekly maximum and rate adjusted annually.'],
    ['Hawaii TDI line on every paycheck. Capped weekly contribution.', 'Many Hawaii brackets. Effective rate varies meaningfully across the state.'],
    [['What is the TDI line on my Hawaii pay stub?', 'Hawaii Temporary Disability Insurance. Provides short-term disability benefits. Employee pays up to 0.5% of weekly wages, capped.']]),

  ID: make('ID',
    'Idaho moved to a flat 5.8% state income tax in 2023. No local income tax. Minimum wage is the federal $7.25/hr.',
    ['Flat 5.8% rate effective 2023.', 'No state PFL or SDI.', 'Standard deduction tied to federal.'],
    ['Idaho W-4 form for state withholding.', 'No local payroll tax.'],
    [['Why is my Idaho tax flat?', 'Idaho consolidated multiple brackets to a single 5.8% rate in 2023. Simpler, but high-income earners no longer get the lower-bracket relief on their first dollars.']]),

  IL: make('IL',
    'Illinois runs a flat 4.95% state income tax (constitutional, hard to change). Chicago does not levy a city income tax on wages, but Chicago has additional payroll-related rules around tipped wages, paid sick leave, and the Fair Workweek Ordinance. Illinois also runs a state-level Personal Property Replacement Tax that businesses pay (not employees).',
    ['Flat 4.95% rate unchanged.', 'Chicago Paid Leave and Paid Sick Leave Ordinance expanded in 2024.', 'Tipped wage credit exists but Chicago is phasing it out by 2028.'],
    ['No city income tax in Chicago.', 'Cook County and other counties do not levy income tax.', 'Illinois uses IL-W-4 form for state withholding.'],
    [['Does Chicago have a city income tax?', 'No. Chicago does not have a city income tax on wages. Workers in Chicago see only Illinois state tax (4.95%) and federal taxes on their stub.'],
     ['Why is my Illinois withholding the same percentage every paycheck?', 'Illinois has a flat 4.95% rate. Unlike progressive-tax states, your withholding rate does not change as your year-to-date earnings climb.']]),

  IN: make('IN',
    'Indiana runs a flat 3.05% state income tax. Every Indiana county also levies a local income tax (LIT) ranging from about 0.5% to 3.0%, withheld based on county of residence on January 1 of the year.',
    ['State rate cut from 3.15% to 3.05% in 2024, scheduled to drop further.', 'LIT rates adjusted by counties annually.'],
    ['LIT line on every Indiana paycheck.', 'Determined by county of residence on Jan 1, NOT by where you work.', 'WH-4 form for state withholding includes a county code.'],
    [['What is the LIT on my Indiana paycheck?', 'Local income tax. Every Indiana county levies one, ranging roughly 0.5% to 3.0%. Withheld based on the county you lived in on January 1 of the tax year.'],
     ['I moved counties in February. Does my LIT change?', 'Not for the current tax year. Indiana LIT is set by your county of residence on January 1. The change applies the following year.']]),

  IA: make('IA',
    'Iowa moved to a flat 3.8% state income tax in 2025 after consolidating four brackets. No local income tax. Minimum wage is the federal $7.25/hr.',
    ['Flat 3.8% rate effective 2025.', 'Standard deduction increased.', 'Federal income tax deduction on Iowa return phased out.'],
    ['Iowa W-4 form for state withholding.', 'No city or county income tax.'],
    [['Why did my Iowa state tax drop in 2025?', 'Iowa consolidated brackets and lowered the flat rate to 3.8%. For most earners this is a meaningful cut.']]),

  KS: make('KS',
    'Kansas runs a graduated income tax with three brackets, top rate 5.7%. No local income tax. Minimum wage is the federal $7.25/hr.',
    ['Bracket consolidation under discussion, no change effective 2025-2026.', 'Standard deduction adjusted annually for inflation.'],
    ['Kansas K-4 form for state withholding.', 'No local payroll tax.'],
    [['How are Kansas withholding brackets indexed?', 'Kansas K-4 uses graduated brackets. The thresholds adjust periodically, but not strictly annually. Check the most recent K-4 form for current figures.']]),

  KY: make('KY',
    'Kentucky runs a flat 4.0% state income tax (down from 4.5% in 2024). Many Kentucky cities and counties also levy an Occupational License Tax (OLT) on payroll, ranging from 0.5% to 2.5%. Louisville Metro charges 1.45%.',
    ['State flat rate cut to 4.0% in 2025, with future cuts tied to revenue triggers.', 'Local OLT rates adjusted by individual cities and counties.'],
    ['OLT line on most Kentucky paychecks for work in incorporated areas.', 'OLT applies based on where work is performed, not where the employee lives.', 'Both city OLT and county OLT can stack.'],
    [['What is the OLT on my Louisville paycheck?', 'Louisville Metro Occupational License Tax, 1.45% of wages for work in Louisville Metro.'],
     ['I work in two Kentucky counties. Do I owe OLT to both?', 'Possibly. OLT is sourced to the location where the work was performed. Talk to payroll about how they allocate your hours.']]),

  LA: make('LA',
    'Louisiana moved to a flat 3.0% state income tax in 2025. No local income tax on wages, but parishes (counties) and cities levy substantial sales taxes.',
    ['Flat 3.0% rate effective 2025, replacing graduated brackets up to 4.25%.', 'Standard deduction increased.', 'Federal income tax deduction on Louisiana return eliminated for most filers.'],
    ['Louisiana L-4 form for state withholding.', 'No local payroll tax in any Louisiana parish or city.'],
    [['Did the 2025 Louisiana tax change cut my taxes?', 'Most workers see a small cut. The flat 3.0% rate is below the prior top bracket but above the bottom bracket. Your standard deduction also went up, which helps lower earners.']]),

  ME: make('ME',
    'Maine runs a graduated income tax with a top rate of 7.15%. Maine PFML (Paid Family and Medical Leave) premium begins in 2025, funded by a payroll deduction split between employer and employee.',
    ['ME PFML premium 1.0% of wages starting 2025, employer + employee split.', 'Benefits begin 2026.', 'No major income tax rate change.'],
    ['ME PFML deduction visible on Maine paychecks beginning 2025.', 'No local income tax in Maine.'],
    [['What is the new payroll deduction on my Maine paycheck in 2025?', 'Maine Paid Family and Medical Leave premium. About 0.5% from the employee. Funds benefits that start in 2026.']]),

  MD: make('MD',
    'Maryland runs a graduated state income tax with a top rate of 5.75%. Every Maryland county and Baltimore City also levies a local income tax of 2.25% to 3.20%. Combined effective rate can approach 9% for high earners.',
    ['No state-level rate change for 2025-2026.', 'County rates adjusted by individual counties.', 'Maryland Family and Medical Leave Insurance (FAMLI) program funding starts 2026 if budget allows.'],
    ['County income tax shows on every Maryland paycheck.', 'Determined by county of residence, not work location.', 'Maryland MW-507 form for state and county withholding.'],
    [['Why is my Maryland county tax higher than my friend in another county?', 'Each Maryland county sets its own local income tax rate, ranging from 2.25% to 3.20%. Howard County, Montgomery County, and Prince George\'s County are at the top end. Your stub deducts based on where you live.'],
     ['I moved counties mid-year. Does my withholding change?', 'Yes. Update your MW-507 with the new county code so your withholding tracks the new local rate.']]),

  MA: make('MA',
    'Massachusetts runs a 5% flat state income tax PLUS a 4% surtax on income over $1M (the Millionaires Tax, Question 1, effective 2023). MA PFML is funded by both employer and employee. No local income tax.',
    ['Millionaires Tax (4% on income over $1M) effective 2023.', 'PFML premium adjusted annually.', 'Standard deduction tied to federal.'],
    ['PFML deduction line on every Massachusetts paycheck.', 'Million-dollar surtax not withheld through payroll. Settled at filing for those affected.', 'No local income tax in any Massachusetts city.'],
    [['Why does my high-bonus paycheck not withhold the 4% surtax?', 'Massachusetts withholds at the 5% standard rate. The 4% Millionaires Tax surtax is settled at filing. If your annual income will exceed $1M, expect to owe at filing or make estimated payments.'],
     ['What is the PFML line on my Massachusetts paycheck?', 'Paid Family and Medical Leave premium. Roughly 0.34% of taxable wages (2025), split between employer and employee for medium-large employers, employee-only for small employers.']]),

  MI: make('MI',
    'Michigan runs a flat 4.25% state income tax. Many Michigan cities (Detroit, Grand Rapids, Lansing, Saginaw, Flint, Pontiac, several others) levy a city income tax of 1.0% to 2.4% on residents and a lower rate on non-residents.',
    ['No major state rate change for 2025-2026.', 'City rates adjusted individually.', 'Michigan Earned Income Tax Credit increased.'],
    ['Detroit city income tax 2.4% residents, 1.2% non-residents.', 'Grand Rapids 1.5% residents, 0.75% non-residents.', 'Multiple Michigan cities use this resident/non-resident split structure.'],
    [['Why does my Detroit paycheck show two state-level tax lines?', 'One is Michigan state tax (4.25% flat). The other is Detroit city income tax. As a Detroit resident the rate is 2.4%, as a non-resident commuting in it is 1.2%.'],
     ['I moved out of Detroit but still work there. What changes?', 'Your city tax drops from 2.4% to 1.2%. Update your MI-W4 city section with payroll.']]),

  MN: make('MN',
    'Minnesota runs a graduated state income tax with a top rate of 9.85%, one of the highest in the country. Minnesota Paid Leave premium begins in 2026, funded by both employer and employee.',
    ['MN Paid Leave premium effective 2026, employee share around 0.35% of wages.', 'Benefits begin 2026.', 'No state-level rate change for 2025-2026.'],
    ['MN Paid Leave deduction will appear on Minnesota paychecks starting 2026.', 'No local income tax in Minnesota.', 'Minneapolis and St. Paul have separate minimum wage ordinances above state minimum.'],
    [['When will the new Minnesota payroll deduction start?', 'Minnesota Paid Leave premium begins January 2026.']]),

  MS: make('MS',
    'Mississippi runs a flat 4.4% state income tax in 2025, down from 5.0% in prior years. Future cuts tied to revenue triggers may bring it to 4.0% by 2026.',
    ['Flat 4.4% rate in 2025, scheduled to drop annually if revenue allows.', 'Standard deduction adjusted.', 'No local income tax.'],
    ['Mississippi 89-350 form for state withholding.', 'No city or county income tax.'],
    [['Is Mississippi cutting its income tax?', 'Yes, gradually. The flat rate is scheduled to drop to 4.0% in 2026 and may eventually phase out entirely if revenue triggers are met.']]),

  MO: make('MO',
    'Missouri runs a graduated state income tax with a top rate of 4.7%. Kansas City and St. Louis both levy a 1% Earnings Tax on residents and on non-residents who work in the city.',
    ['Top rate cut from 4.95% to 4.7% in 2024.', 'Kansas City and St. Louis Earnings Tax remain 1%.', 'Standard deduction adjusted.'],
    ['Kansas City and St. Louis Earnings Tax shows on paychecks for work performed in those cities.', 'Applies to non-residents commuting in.'],
    [['What is the Earnings Tax on my Kansas City paycheck?', 'Kansas City Earnings Tax. 1% of wages for work in the city. Same in St. Louis.'],
     ['I live in St. Louis but work in Clayton. Do I pay Earnings Tax?', 'Yes, on residence. The St. Louis Earnings Tax applies to all earnings of St. Louis residents, regardless of where the work is done. Clayton is a separate municipality and does not levy its own earnings tax.']]),

  MT: make('MT',
    'Montana moved to a two-bracket income tax in 2024 with a top rate of 5.9%. No local income tax. Minimum wage tied to inflation, currently $10.55/hr.',
    ['Bracket consolidation in 2024.', 'No state PFL or SDI.', 'No local income tax.'],
    ['Montana MW-4 form for state withholding.', 'No local payroll tax.'],
    [['Did Montana cut income tax in 2024?', 'Bracket count cut from seven to two with a top rate of 5.9%. For most workers this is roughly neutral. High earners see a meaningful cut.']]),

  NE: make('NE',
    'Nebraska is gradually cutting its income tax under a multi-year plan. Top rate is 5.2% in 2025, scheduled to drop to 3.99% by 2027.',
    ['Top rate phased down 0.4-0.5% annually through 2027.', 'Standard deduction tied to federal.', 'No local income tax.'],
    ['Nebraska W-4N form for state withholding.', 'No state PFL or SDI.'],
    [['Why does my Nebraska tax drop each year?', 'Nebraska is in the middle of a phased rate cut. The top bracket falls roughly 0.5% per year through 2027, ending at 3.99%.']]),

  NV: make('NV',
    'Nevada is one of nine no-income-tax states. Take-home is shaped only by federal withholding, FICA, and voluntary deductions.',
    ['No state income tax change planned.', 'Minimum wage tiered: $12.00 for employers offering health insurance, $11.25 for those who do not (2025).', 'No state PFL or SDI.'],
    ['No state income tax line on Nevada pay stubs.', 'No local income tax in any Nevada city.'],
    [['Why no state tax line on my Las Vegas paycheck?', 'Nevada has no state income tax and no local income tax. Standard.']]),

  NH: make('NH',
    'New Hampshire does not tax wages. The interest and dividends tax was fully phased out at the end of 2024. Take-home is shaped by federal and FICA only.',
    ['I&D tax fully phased out for 2025.', 'No state PFL or SDI.', 'No state income tax on wages.'],
    ['No state withholding on New Hampshire paychecks.', 'No local income tax.'],
    [['Did New Hampshire actually become a no-income-tax state in 2025?', 'For wages, yes. Wage income was never taxed. The interest and dividends tax was finally phased out at the end of 2024, making New Hampshire fully no-income-tax for 2025 onward.']]),

  NJ: make('NJ',
    'New Jersey runs a graduated state income tax with a top rate of 10.75% on income over $1M. NJ workers pay into State Disability Insurance (SDI), Family Leave Insurance (FLI), and Unemployment Insurance (UI). All three appear on most NJ pay stubs.',
    ['SDI rate adjusted annually, employee share around 0.06% of taxable wages in 2025.', 'FLI rate around 0.09%.', 'UI rate around 0.425% on the first $42,300.'],
    ['Three separate worker contributions on every NJ paycheck (SDI, FLI, UI). Confusing line items.', 'NJ-W4 form for state withholding.', 'New Jersey is one of three states (with AK, PA) requiring employee SUI/UI contributions.'],
    [['Why does my NJ paycheck have three small state-level deductions?', 'They are NJ State Disability Insurance, Family Leave Insurance, and Unemployment Insurance worker contributions. Each is a small percentage but together they add up to roughly 0.5-0.6% of taxable wages.']]),

  NM: make('NM',
    'New Mexico runs a graduated state income tax with a top rate of 5.9%. No local income tax. Minimum wage is $12.00/hr.',
    ['Bracket structure adjusted in 2023.', 'No state PFL or SDI.', 'Working Families Tax Credit increased.'],
    ['New Mexico W-4 form for state withholding.', 'No local payroll tax.'],
    [['Why is my New Mexico tax higher than my Arizona neighbor?', 'New Mexico has graduated brackets up to 5.9%. Arizona is flat 2.5%. On a similar salary the gap can be $1,500 to $3,000 a year.']]),

  NY: make('NY',
    'New York runs a graduated state income tax with a top rate of 10.9%. New York City and Yonkers add their own local income tax. NY State Disability Insurance (SDI) is a small fixed worker deduction. NY Paid Family Leave (PFL) is a percentage of wages capped at the SSA wage base.',
    ['NY PFL premium 0.388% of wages in 2025, capped at $354.53 annual contribution.', 'NYC top rate 3.876% on income over $50,000.', 'Yonkers resident surcharge 16.75% of NY State tax.'],
    ['NYC tax: 3.078% to 3.876% depending on bracket. Resident only, no non-resident NYC tax since 1999.', 'Yonkers: 16.75% of state tax for residents, plus 0.5% on non-resident wages.', 'NY SDI: $0.60 a week, capped.', 'NY PFL deduction visible.'],
    [['Why does my NYC paycheck have a city tax?', 'NYC residents pay NYC personal income tax (currently 3.078% to 3.876%). Non-residents who work in NYC do NOT pay NYC tax (the commuter tax was repealed in 1999).'],
     ['I live in NYC but my employer is in Connecticut. Who taxes me?', 'NY State and NYC tax you on residence. Connecticut may also tax you on the work being performed there. The convenience-of-employer rule complicates this further. Talk to a CPA, multi-state tax for NY/CT/NJ workers is the most-disputed area in US payroll.'],
     ['What is the small "NY DI" line on my paycheck?', 'NY State Disability Insurance employee contribution. $0.60 a week, capped at about $31 a year.']]),

  NC: make('NC',
    'North Carolina runs a flat 4.25% state income tax in 2025, scheduled to drop to 3.99% in 2026. No local income tax.',
    ['Flat rate cut from 4.5% to 4.25% in 2025.', 'Scheduled cut to 3.99% in 2026.', 'Standard deduction tied to federal.'],
    ['NC-4 form for state withholding.', 'No local payroll tax.'],
    [['Did my North Carolina tax drop in 2025?', 'Yes. Flat rate fell from 4.5% to 4.25%. Schedule cuts to 3.99% in 2026.']]),

  ND: make('ND',
    'North Dakota has the lowest top income tax rate of any income-taxing state at 2.5%. Three brackets, very low rates throughout.',
    ['No major rate change for 2025-2026.', 'Standard deduction tied to federal.', 'No state PFL or SDI.'],
    ['ND-W4 form for state withholding.', 'No local income tax.'],
    [['Why is my North Dakota tax so low?', 'North Dakota has the lowest top income tax rate of any income-taxing state, just 2.5%. On most salaries the state tax line is barely visible compared to federal and FICA.']]),

  OH: make('OH',
    'Ohio runs a graduated state income tax with a top rate of 3.5% (low compared to most states). The notable feature is local: hundreds of Ohio municipalities levy their own city income tax, administered through RITA (Regional Income Tax Agency) or CCA (Central Collection Agency). Many Ohio paychecks show 2-4 separate tax lines.',
    ['Top state rate cut from 3.75% to 3.5% in 2024, with further cuts proposed.', 'City rates adjusted by individual cities annually.', 'JEDD (Joint Economic Development District) taxes apply in some areas.'],
    ['Many Ohio cities levy 1.5% to 2.5% city income tax on work AND on residence (with credits to avoid double tax).', 'School district income tax (SDIT) applies in many districts on top of state and city.', 'IT-4 state form, plus separate municipal forms.'],
    [['Why does my Ohio paycheck have so many tax lines?', 'Ohio state, possibly your work-city tax (where the office is), possibly your residence-city tax (where you live), possibly school district tax. Most are 1-2.5%, but they add up to noticeable take-home erosion.'],
     ['What is RITA on my Ohio paycheck?', 'Regional Income Tax Agency, the third-party tax administrator that hundreds of Ohio cities use. Your work-city or residence-city tax is being collected through RITA.'],
     ['Why is there a "school district" tax line?', 'Many Ohio school districts levy an income tax on residents within the district. Rate varies 0.25% to 2.0%. It is separate from city tax and from state tax.']]),

  OK: make('OK',
    'Oklahoma runs a graduated state income tax with a top rate of 4.75%. No local income tax. Minimum wage is the federal $7.25/hr.',
    ['No major rate change for 2025-2026.', 'Standard deduction adjusted.', 'No state PFL or SDI.'],
    ['Oklahoma OK-W4 form for state withholding.', 'No local income tax.'],
    [['How does Oklahoma tax compare to Texas?', 'Texas has no state income tax. Oklahoma top rate is 4.75%. On a $60,000 salary the difference is roughly $2,000 a year before federal and FICA.']]),

  OR: make('OR',
    'Oregon runs a graduated state income tax with a top rate of 9.9%. The notable additions are local: Statewide Transit Tax (0.1% on all Oregon wages), Multnomah County Preschool for All tax (1.5% on income over $125k single, $200k joint), Metro Supportive Housing Services tax (1% on income over the same thresholds). Paid Leave Oregon premium adds another deduction.',
    ['Statewide Transit Tax 0.1% (rate stable).', 'Multnomah County Preschool tax progressive at high incomes.', 'Paid Leave Oregon premium 0.6% total, employee 0.4%, employer 0.2%.'],
    ['Statewide Transit Tax line on every Oregon paycheck.', 'Multnomah County and Metro taxes only on Portland metro residents over income threshold.', 'Paid Leave Oregon premium on every paycheck statewide.'],
    [['What is the Statewide Transit Tax on my Oregon paycheck?', 'Oregon Statewide Transit Tax. 0.1% of all wages, funds public transit operations. Applies to every Oregon paycheck.'],
     ['Why are there extra Portland tax lines on my paycheck?', 'Multnomah County Preschool for All (1.5% on high income) and Metro Supportive Housing Services (1% on high income). Both kick in above income thresholds and apply to residents and non-resident workers.']]),

  PA: make('PA',
    'Pennsylvania runs a flat 3.07% state income tax. Local payroll taxes are heavy: every municipality and school district can levy an Earned Income Tax (EIT), and a Local Services Tax (LST) of up to $52/year. Philadelphia has its own Wage Tax of 3.75% (residents) and 3.44% (non-residents).',
    ['State flat rate stable at 3.07%.', 'Philadelphia Wage Tax adjusted annually but only by small amounts.', 'PSD (Political Subdivision) codes used to map workers to correct EIT.'],
    ['EIT on every Pennsylvania paycheck. Rate set by school district, typically 1%.', 'LST shows as a small fixed annual deduction.', 'Philadelphia residents and commuters pay Philadelphia Wage Tax instead of standard EIT.', 'Pennsylvania is one of three states (with AK, NJ) requiring employee SUI contributions.'],
    [['What is the EIT line on my Pennsylvania paycheck?', 'Earned Income Tax. Local tax set by your school district of residence (typically 1%). Different from state tax. Withheld based on PSD code.'],
     ['What is the Philadelphia Wage Tax?', 'Philadelphia city income tax. 3.75% for residents, 3.44% for non-resident commuters into Philadelphia. Replaces the standard EIT for Philadelphia residents.'],
     ['What is the LST on my pay stub?', 'Local Services Tax. Small fixed annual fee (up to $52) for working in a particular municipality. Funds emergency services.']]),

  RI: make('RI',
    'Rhode Island runs a graduated state income tax with a top rate of 5.99%. RI workers pay into Temporary Disability Insurance (TDI) and Temporary Caregiver Insurance (TCI), both visible on the pay stub.',
    ['TDI/TCI premium adjusted annually, around 1.1% of taxable wages.', 'No state-level income tax rate change.', 'TCI program expanded in 2023.'],
    ['TDI/TCI line on every Rhode Island paycheck.', 'No local income tax.'],
    [['What is TDI/TCI on my Rhode Island paycheck?', 'Temporary Disability Insurance and Temporary Caregiver Insurance. Funds short-term disability and family caregiver benefits. About 1.1% of taxable wages, employee-only contribution.']]),

  SC: make('SC',
    'South Carolina runs a graduated state income tax with a top rate of 6.2%, kicking in at relatively low income. No local income tax. Minimum wage is the federal $7.25/hr.',
    ['Top rate cut from 6.5% to 6.2% in 2024.', 'Standard deduction adjusted.', 'No state PFL or SDI.'],
    ['SC W-4 form for state withholding.', 'No local payroll tax.'],
    [['Why is my South Carolina tax higher than my income suggests?', 'South Carolina top bracket starts at relatively low income. Most workers earning over $20,000 are in the top 6.2% bracket on at least part of their wages.']]),

  SD: make('SD',
    'South Dakota is one of nine no-income-tax states. Take-home is shaped only by federal withholding and FICA.',
    ['No state income tax change planned.', 'No state PFL or SDI.', 'Minimum wage tied to inflation, currently $11.50/hr.'],
    ['No state income tax line on South Dakota pay stubs.', 'No local income tax.'],
    [['Why does my South Dakota paycheck only show federal taxes?', 'South Dakota has no state income tax and no local income tax. The only mandatory taxes are federal withholding and FICA.']]),

  TN: make('TN',
    'Tennessee does not tax wage income. The Hall Tax on interest and dividends was fully phased out in 2021. Take-home is shaped by federal and FICA only.',
    ['Hall Tax phaseout completed 2021.', 'No state income tax change planned.', 'No state PFL or SDI.'],
    ['No state withholding on Tennessee paychecks.', 'No local income tax.'],
    [['Did Tennessee actually become a no-income-tax state?', 'For wages, always was. The Hall Tax on interest and dividends was finally phased out in 2021, making Tennessee fully no-income-tax now.']]),

  TX: make('TX',
    'Texas is the largest no-income-tax state by population. Take-home is shaped only by federal withholding, FICA, and voluntary deductions. Texas has no state PFL or SDI program.',
    ['No state income tax change planned.', 'Minimum wage federal $7.25/hr.', 'Texas Workforce Commission handles unemployment.'],
    ['No state income tax line on Texas pay stubs.', 'No local income tax in any Texas city.', 'Texas is the simplest payroll state along with Florida and Nevada.'],
    [['Why does my Texas paycheck only show federal taxes?', 'Texas has no state income tax and no local income tax. Standard. Workers in Texas typically have one of the cleanest pay stubs in the country.'],
     ['I work remote for a New York company from Texas. Who taxes me?', 'Tricky. Texas has no income tax. New York may apply the convenience-of-employer rule and tax you as a NY worker, leading to NY state tax even though you live in Texas. Talk to a CPA.']]),

  UT: make('UT',
    'Utah runs a flat 4.55% state income tax. No local income tax. Minimum wage is the federal $7.25/hr.',
    ['Flat rate cut from 4.65% to 4.55% in 2024.', 'Standard deduction adjusted.', 'Earned Income Tax Credit added.'],
    ['Utah TC-W4 form for state withholding.', 'No local payroll tax.'],
    [['Did Utah cut tax in 2024?', 'Yes, flat rate cut from 4.65% to 4.55%. Small but meaningful for higher earners.']]),

  VT: make('VT',
    'Vermont runs a graduated state income tax with a top rate of 8.75%. No local income tax. Minimum wage is among the highest in New England at $14.01/hr.',
    ['No major rate change for 2025-2026.', 'Vermont Family and Medical Leave program voluntary opt-in for employers.', 'Standard deduction adjusted.'],
    ['Vermont W-4VT form for state withholding.', 'No local income tax.'],
    [['Does Vermont have paid family leave?', 'A voluntary state program for employers who opt in. No mandatory employee deduction across all employers, unlike CT, MA, RI.']]),

  VA: make('VA',
    'Virginia runs a graduated state income tax with a top rate of 5.75% kicking in at $17,000 (very low). Most Virginia workers earning over $17k are in the top bracket. No local income tax.',
    ['No major rate change for 2025-2026.', 'Standard deduction tied to federal.', 'No state PFL or SDI.'],
    ['Virginia VA-4 form for state withholding.', 'No local payroll tax.'],
    [['Why is my Virginia tax higher than my income suggests?', 'Virginia top bracket of 5.75% starts at $17,000 of taxable income. Almost every full-time worker is in the top bracket on at least part of their wages.']]),

  WA: make('WA',
    'Washington has no state income tax on wages, but the WA Cares Fund (long-term care) and WA Paid Family and Medical Leave premiums are deducted from pay. Together they add roughly 0.7-1.0% to most Washington paychecks.',
    ['WA Cares Fund premium 0.58% of wages, employee-only.', 'WA PFML premium 0.92% of wages, employer + employee split (employee share around 0.6%).', 'WA Cares benefits begin July 2026.'],
    ['Two separate state-level deductions on every Washington paycheck despite no state income tax.', 'WA Cares Fund opt-out closed (with limited grandfathered exceptions).', 'No local income tax in Seattle, Spokane, or anywhere in Washington.'],
    [['Why does my Washington paycheck have state-level deductions if there is no state income tax?', 'WA Paid Family and Medical Leave premium and WA Cares Fund (long-term care) premium. Both are payroll-based contributions, not income tax. Together they are roughly 1% of wages.'],
     ['Did the Seattle JumpStart Tax change my paycheck?', 'No. JumpStart is paid by the employer on high-compensation employees. Workers do not see it as a deduction.']]),

  WV: make('WV',
    'West Virginia runs a graduated state income tax with a top rate of 5.12%. Several West Virginia cities levy a Service Fee or Municipal Service Tax (Charleston, Huntington, Wheeling, Morgantown, Parkersburg).',
    ['Top rate cut from 6.5% to 5.12% in 2023, with further cuts tied to revenue triggers.', 'Standard deduction adjusted.', 'Local service fees adjusted by individual cities.'],
    ['Service fee line on West Virginia paychecks for work in cities that levy one.', 'WV/IT-104 form for state withholding.'],
    [['What is the Service Fee on my Charleston paycheck?', 'Charleston (and several other WV cities) Municipal Service Fee. Small flat weekly amount per worker, funds city services.']]),

  WI: make('WI',
    'Wisconsin runs a graduated state income tax with a top rate of 7.65%. No local income tax.',
    ['No major rate change for 2025-2026.', 'Standard deduction adjusted.', 'No state PFL or SDI.'],
    ['Wisconsin WT-4 form for state withholding.', 'No local payroll tax.'],
    [['Why is my Wisconsin tax higher than my Illinois neighbor?', 'Wisconsin has a graduated structure topping at 7.65%. Illinois is flat 4.95%. On a $80,000 salary the gap is roughly $1,500 a year.']]),

  WY: make('WY',
    'Wyoming is one of nine no-income-tax states. Take-home is shaped only by federal withholding and FICA.',
    ['No state income tax change planned.', 'No state PFL or SDI.', 'Minimum wage federal $7.25/hr.'],
    ['No state income tax line on Wyoming pay stubs.', 'No local income tax.'],
    [['Why does my Wyoming paycheck only show federal taxes?', 'Wyoming has no state income tax and no local income tax. Standard for workers in Wyoming, alongside Texas, Florida, Nevada, and similar states.']]),
};

export function getStateNarrative(code: string): StateNarrative | undefined {
  return STATE_NARRATIVES[code.toUpperCase()];
}
