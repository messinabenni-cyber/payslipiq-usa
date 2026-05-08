// Source of truth for all 50 states + DC.
// Used for: routing (/us/{slug}), navigation, sitemap, calculator state-tax tables.

export interface StateData {
  slug: string;            // URL slug, lowercase-hyphen
  name: string;            // Display name
  abbr: string;            // 2-letter postal abbreviation
  category: 'no-income-tax' | 'flat' | 'progressive';
  taxRate?: number;        // Flat rate (decimal). For progressive, see brackets.
  brackets?: Array<[number, number]>; // [upperBound, marginalRate], last upper = Infinity
  hasLocalTax: boolean;
  hasSDI: boolean;
  hasPFL: boolean;
  dailyOvertime: boolean;  // Has stricter daily overtime than federal FLSA
  taxAuthority: string;
  taxAuthorityUrl: string;
  notes?: string;
}

export const STATES: StateData[] = [
  { slug: 'alabama', name: 'Alabama', abbr: 'AL', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Alabama Department of Revenue', taxAuthorityUrl: 'https://www.revenue.alabama.gov/' },
  { slug: 'alaska', name: 'Alaska', abbr: 'AK', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: true, taxAuthority: 'Alaska Department of Revenue', taxAuthorityUrl: 'https://tax.alaska.gov/' },
  { slug: 'arizona', name: 'Arizona', abbr: 'AZ', category: 'flat', taxRate: 0.025, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Arizona Department of Revenue', taxAuthorityUrl: 'https://azdor.gov/' },
  { slug: 'arkansas', name: 'Arkansas', abbr: 'AR', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Arkansas DFA', taxAuthorityUrl: 'https://www.dfa.arkansas.gov/' },
  { slug: 'california', name: 'California', abbr: 'CA', category: 'progressive', hasLocalTax: false, hasSDI: true, hasPFL: true, dailyOvertime: true, taxAuthority: 'California Franchise Tax Board / EDD', taxAuthorityUrl: 'https://www.ftb.ca.gov/' },
  { slug: 'colorado', name: 'Colorado', abbr: 'CO', category: 'flat', taxRate: 0.044, hasLocalTax: false, hasSDI: false, hasPFL: true, dailyOvertime: true, taxAuthority: 'Colorado Department of Revenue', taxAuthorityUrl: 'https://tax.colorado.gov/' },
  { slug: 'connecticut', name: 'Connecticut', abbr: 'CT', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'Connecticut Department of Revenue Services', taxAuthorityUrl: 'https://portal.ct.gov/drs' },
  { slug: 'delaware', name: 'Delaware', abbr: 'DE', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'Delaware Division of Revenue', taxAuthorityUrl: 'https://revenue.delaware.gov/' },
  { slug: 'district-of-columbia', name: 'District of Columbia', abbr: 'DC', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'DC Office of Tax and Revenue', taxAuthorityUrl: 'https://otr.cfo.dc.gov/' },
  { slug: 'florida', name: 'Florida', abbr: 'FL', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Florida Department of Revenue', taxAuthorityUrl: 'https://floridarevenue.com/' },
  { slug: 'georgia', name: 'Georgia', abbr: 'GA', category: 'flat', taxRate: 0.0539, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Georgia Department of Revenue', taxAuthorityUrl: 'https://dor.georgia.gov/' },
  { slug: 'hawaii', name: 'Hawaii', abbr: 'HI', category: 'progressive', hasLocalTax: false, hasSDI: true, hasPFL: false, dailyOvertime: false, taxAuthority: 'Hawaii Department of Taxation', taxAuthorityUrl: 'https://tax.hawaii.gov/' },
  { slug: 'idaho', name: 'Idaho', abbr: 'ID', category: 'flat', taxRate: 0.058, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Idaho State Tax Commission', taxAuthorityUrl: 'https://tax.idaho.gov/' },
  { slug: 'illinois', name: 'Illinois', abbr: 'IL', category: 'flat', taxRate: 0.0495, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Illinois Department of Revenue', taxAuthorityUrl: 'https://tax.illinois.gov/' },
  { slug: 'indiana', name: 'Indiana', abbr: 'IN', category: 'flat', taxRate: 0.0305, hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Indiana Department of Revenue', taxAuthorityUrl: 'https://www.in.gov/dor/' },
  { slug: 'iowa', name: 'Iowa', abbr: 'IA', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Iowa Department of Revenue', taxAuthorityUrl: 'https://tax.iowa.gov/' },
  { slug: 'kansas', name: 'Kansas', abbr: 'KS', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Kansas Department of Revenue', taxAuthorityUrl: 'https://www.ksrevenue.gov/' },
  { slug: 'kentucky', name: 'Kentucky', abbr: 'KY', category: 'flat', taxRate: 0.04, hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Kentucky Department of Revenue', taxAuthorityUrl: 'https://revenue.ky.gov/' },
  { slug: 'louisiana', name: 'Louisiana', abbr: 'LA', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Louisiana Department of Revenue', taxAuthorityUrl: 'https://revenue.louisiana.gov/' },
  { slug: 'maine', name: 'Maine', abbr: 'ME', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Maine Revenue Services', taxAuthorityUrl: 'https://www.maine.gov/revenue/' },
  { slug: 'maryland', name: 'Maryland', abbr: 'MD', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'Comptroller of Maryland', taxAuthorityUrl: 'https://www.marylandtaxes.gov/' },
  { slug: 'massachusetts', name: 'Massachusetts', abbr: 'MA', category: 'flat', taxRate: 0.05, hasLocalTax: false, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'Massachusetts Department of Revenue', taxAuthorityUrl: 'https://www.mass.gov/orgs/massachusetts-department-of-revenue' },
  { slug: 'michigan', name: 'Michigan', abbr: 'MI', category: 'flat', taxRate: 0.0425, hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Michigan Department of Treasury', taxAuthorityUrl: 'https://www.michigan.gov/treasury' },
  { slug: 'minnesota', name: 'Minnesota', abbr: 'MN', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Minnesota Department of Revenue', taxAuthorityUrl: 'https://www.revenue.state.mn.us/' },
  { slug: 'mississippi', name: 'Mississippi', abbr: 'MS', category: 'flat', taxRate: 0.044, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Mississippi Department of Revenue', taxAuthorityUrl: 'https://www.dor.ms.gov/' },
  { slug: 'missouri', name: 'Missouri', abbr: 'MO', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Missouri Department of Revenue', taxAuthorityUrl: 'https://dor.mo.gov/' },
  { slug: 'montana', name: 'Montana', abbr: 'MT', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Montana Department of Revenue', taxAuthorityUrl: 'https://mtrevenue.gov/' },
  { slug: 'nebraska', name: 'Nebraska', abbr: 'NE', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Nebraska Department of Revenue', taxAuthorityUrl: 'https://revenue.nebraska.gov/' },
  { slug: 'nevada', name: 'Nevada', abbr: 'NV', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: true, taxAuthority: 'Nevada Department of Taxation', taxAuthorityUrl: 'https://tax.nv.gov/' },
  { slug: 'new-hampshire', name: 'New Hampshire', abbr: 'NH', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'New Hampshire Department of Revenue Administration', taxAuthorityUrl: 'https://www.revenue.nh.gov/' },
  { slug: 'new-jersey', name: 'New Jersey', abbr: 'NJ', category: 'progressive', hasLocalTax: true, hasSDI: true, hasPFL: true, dailyOvertime: false, taxAuthority: 'New Jersey Division of Taxation', taxAuthorityUrl: 'https://www.state.nj.us/treasury/taxation/' },
  { slug: 'new-mexico', name: 'New Mexico', abbr: 'NM', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'New Mexico Taxation and Revenue Department', taxAuthorityUrl: 'https://www.tax.newmexico.gov/' },
  { slug: 'new-york', name: 'New York', abbr: 'NY', category: 'progressive', hasLocalTax: true, hasSDI: true, hasPFL: true, dailyOvertime: false, taxAuthority: 'NY State Department of Taxation and Finance', taxAuthorityUrl: 'https://www.tax.ny.gov/' },
  { slug: 'north-carolina', name: 'North Carolina', abbr: 'NC', category: 'flat', taxRate: 0.045, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'NC Department of Revenue', taxAuthorityUrl: 'https://www.ncdor.gov/' },
  { slug: 'north-dakota', name: 'North Dakota', abbr: 'ND', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'ND Office of State Tax Commissioner', taxAuthorityUrl: 'https://www.tax.nd.gov/' },
  { slug: 'ohio', name: 'Ohio', abbr: 'OH', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Ohio Department of Taxation', taxAuthorityUrl: 'https://tax.ohio.gov/' },
  { slug: 'oklahoma', name: 'Oklahoma', abbr: 'OK', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Oklahoma Tax Commission', taxAuthorityUrl: 'https://oklahoma.gov/tax.html' },
  { slug: 'oregon', name: 'Oregon', abbr: 'OR', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'Oregon Department of Revenue', taxAuthorityUrl: 'https://www.oregon.gov/dor/' },
  { slug: 'pennsylvania', name: 'Pennsylvania', abbr: 'PA', category: 'flat', taxRate: 0.0307, hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Pennsylvania Department of Revenue', taxAuthorityUrl: 'https://www.revenue.pa.gov/' },
  { slug: 'rhode-island', name: 'Rhode Island', abbr: 'RI', category: 'progressive', hasLocalTax: false, hasSDI: true, hasPFL: false, dailyOvertime: false, taxAuthority: 'Rhode Island Division of Taxation', taxAuthorityUrl: 'https://tax.ri.gov/' },
  { slug: 'south-carolina', name: 'South Carolina', abbr: 'SC', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'SC Department of Revenue', taxAuthorityUrl: 'https://dor.sc.gov/' },
  { slug: 'south-dakota', name: 'South Dakota', abbr: 'SD', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'SD Department of Revenue', taxAuthorityUrl: 'https://dor.sd.gov/' },
  { slug: 'tennessee', name: 'Tennessee', abbr: 'TN', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Tennessee Department of Revenue', taxAuthorityUrl: 'https://www.tn.gov/revenue.html' },
  { slug: 'texas', name: 'Texas', abbr: 'TX', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Texas Comptroller', taxAuthorityUrl: 'https://comptroller.texas.gov/' },
  { slug: 'utah', name: 'Utah', abbr: 'UT', category: 'flat', taxRate: 0.0455, hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Utah State Tax Commission', taxAuthorityUrl: 'https://tax.utah.gov/' },
  { slug: 'vermont', name: 'Vermont', abbr: 'VT', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Vermont Department of Taxes', taxAuthorityUrl: 'https://tax.vermont.gov/' },
  { slug: 'virginia', name: 'Virginia', abbr: 'VA', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Virginia Department of Taxation', taxAuthorityUrl: 'https://www.tax.virginia.gov/' },
  { slug: 'washington', name: 'Washington', abbr: 'WA', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: true, dailyOvertime: false, taxAuthority: 'Washington Department of Revenue', taxAuthorityUrl: 'https://dor.wa.gov/' },
  { slug: 'west-virginia', name: 'West Virginia', abbr: 'WV', category: 'progressive', hasLocalTax: true, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'WV State Tax Department', taxAuthorityUrl: 'https://tax.wv.gov/' },
  { slug: 'wisconsin', name: 'Wisconsin', abbr: 'WI', category: 'progressive', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Wisconsin Department of Revenue', taxAuthorityUrl: 'https://www.revenue.wi.gov/' },
  { slug: 'wyoming', name: 'Wyoming', abbr: 'WY', category: 'no-income-tax', hasLocalTax: false, hasSDI: false, hasPFL: false, dailyOvertime: false, taxAuthority: 'Wyoming Department of Revenue', taxAuthorityUrl: 'https://revenue.wyo.gov/' },
];

export const STATE_BY_SLUG = Object.fromEntries(STATES.map((s) => [s.slug, s])) as Record<string, StateData>;

export function getStateBySlug(slug: string): StateData | undefined {
  return STATE_BY_SLUG[slug];
}

export const PRIORITY_STATES = [
  'california', 'texas', 'florida', 'new-york', 'pennsylvania',
  'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan',
  'new-jersey', 'virginia', 'washington', 'arizona', 'massachusetts',
];
