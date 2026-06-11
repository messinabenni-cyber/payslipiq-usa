/**
 * PayslipIQ — central structured-data engine (elite, future-proofed).
 *
 * Design principles (2026 best practice):
 *  1. ONE site-wide @graph with stable @id node references — never re-nest, always @id-link.
 *  2. Organization + WebSite defined ONCE (SiteSchema, mounted in layout) and referenced
 *     by @id from every page. Previously these only existed on `/`, so 1,300+ URLs had no
 *     entity grounding. Now every URL resolves the publisher entity.
 *  3. Entity grounding: core payroll concepts link to verified Wikidata + Wikipedia IDs via
 *     `about` / `sameAs`, so Google's Knowledge Graph and AI answer engines disambiguate the
 *     page to the correct entity. This is the single biggest GEO/AEO lever competitors ignore.
 *  4. YMYL E-E-A-T: Organization carries publishingPrinciples / correctionsPolicy /
 *     actionableFeedbackPolicy / ownershipFundingInfo; pages carry author + reviewedBy.
 *  5. No schema drift: every node maps to visible content. No fabricated ratings, no broken
 *     SearchAction, no LocalBusiness (PayslipIQ is national + online, never a walk-in shop).
 *
 * Rich-result reality check (June 2026): FAQPage and HowTo rich results are retired by Google.
 * We keep those types because they remain valid vocabulary that AI engines parse for extraction,
 * but the commercial value now lives in entity clarity, Article, Breadcrumb, Dataset and the
 * Organization knowledge panel — which this engine maximises.
 */

export const SITE = 'https://payslipiq.com';

// Stable @id anchors — reused verbatim across every page so engines resolve one entity.
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;
export const LOGO_ID = `${SITE}/#logo`;
export const EDITORIAL_TEAM_ID = `${SITE}/us/about-the-team/#editorial-team`;

/**
 * Verified Wikidata + Wikipedia entity IDs for core US-payroll concepts.
 * Q-IDs verified against the Wikidata API (June 2026). Use these in WebPage.about /
 * .mentions and DefinedTerm.sameAs to ground each explainer to the canonical entity.
 */
export const ENTITY: Record<
  string,
  { name: string; wikidata: string; wikipedia: string }
> = {
  fica: {
    name: 'Federal Insurance Contributions Act tax',
    wikidata: 'https://www.wikidata.org/wiki/Q5440261',
    wikipedia: 'https://en.wikipedia.org/wiki/Federal_Insurance_Contributions_Act',
  },
  socialSecurity: {
    name: 'Social Security (United States)',
    wikidata: 'https://www.wikidata.org/wiki/Q12184791',
    wikipedia: 'https://en.wikipedia.org/wiki/Social_Security_(United_States)',
  },
  medicare: {
    name: 'Medicare (United States)',
    wikidata: 'https://www.wikidata.org/wiki/Q559392',
    wikipedia: 'https://en.wikipedia.org/wiki/Medicare_(United_States)',
  },
  withholding: {
    name: 'Tax withholding in the United States',
    wikidata: 'https://www.wikidata.org/wiki/Q7689487',
    wikipedia: 'https://en.wikipedia.org/wiki/Tax_withholding_in_the_United_States',
  },
  incomeTax: {
    name: 'Income tax in the United States',
    wikidata: 'https://www.wikidata.org/wiki/Q1308197',
    wikipedia: 'https://en.wikipedia.org/wiki/Income_tax_in_the_United_States',
  },
  w4: {
    name: 'Form W-4',
    wikidata: 'https://www.wikidata.org/wiki/Q25004925',
    wikipedia: 'https://en.wikipedia.org/wiki/Form_W-4',
  },
  w2: {
    name: 'Form W-2',
    wikidata: 'https://www.wikidata.org/wiki/Q22909685',
    wikipedia: 'https://en.wikipedia.org/wiki/Form_W-2',
  },
  k401: {
    name: '401(k)',
    wikidata: 'https://www.wikidata.org/wiki/Q1206798',
    wikipedia: 'https://en.wikipedia.org/wiki/401(k)',
  },
  flsa: {
    name: 'Fair Labor Standards Act (overtime)',
    wikidata: 'https://www.wikidata.org/wiki/Q3064514',
    wikipedia: 'https://en.wikipedia.org/wiki/Fair_Labor_Standards_Act_of_1938',
  },
};

export type EntityKey = keyof typeof ENTITY;

/**
 * Authoritative external profiles for the Organization `sameAs`.
 * NOTE: only verified third-party profiles belong here — sameAs is meant to point at
 * authoritative references about the entity, NOT at the brand's own alternate domains
 * (the previous value listed payslipiq.net/.shop/.info/.store/.xyz, which reads as
 * self-referential and adds no disambiguation value). Populate with the real handles
 * when they exist (LinkedIn company page, Crunchbase, X, etc.).
 */
export const ORG_SAME_AS: string[] = [
  // 'https://www.linkedin.com/company/payslipiq',
  // 'https://www.crunchbase.com/organization/payslipiq',
  // 'https://x.com/payslipiq',
];

/** Build the canonical Organization node (defined once, referenced everywhere by ORG_ID). */
export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'PayslipIQ',
    alternateName: 'PayslipIQ USA',
    url: `${SITE}/us/`,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: `${SITE}/icon-512.png`,
      width: 512,
      height: 512,
      caption: 'PayslipIQ',
    },
    image: { '@id': LOGO_ID },
    slogan: 'Understand your paycheck with confidence.',
    description:
      'PayslipIQ is the plain-English paycheck-intelligence platform for American workers. Educational only — not tax, legal, payroll, accounting, HR, or financial advice. Independent and not affiliated with the IRS, SSA, Department of Labor, any state agency, employer, or payroll provider.',
    foundingDate: '2025',
    areaServed: { '@type': 'Country', name: 'United States' },
    knowsAbout: [
      'US payroll',
      'federal income tax withholding',
      'FICA',
      { '@type': 'Thing', name: 'Social Security tax', sameAs: ENTITY.socialSecurity.wikidata },
      { '@type': 'Thing', name: 'Medicare tax', sameAs: ENTITY.medicare.wikidata },
      'state income tax',
      'W-2',
      'W-4',
      '401(k)',
      'pay stub',
      'paycheck',
      'overtime pay',
      'FLSA',
      'pre-tax deductions',
      'post-tax deductions',
    ],
    // YMYL trust properties Google references for finance content.
    publishingPrinciples: `${SITE}/us/about-the-team`,
    actionableFeedbackPolicy: `${SITE}/us/contact`,
    ownershipFundingInfo: `${SITE}/us/about-the-team`,
    ...(ORG_SAME_AS.length ? { sameAs: ORG_SAME_AS } : {}),
  };
}

/** Build the canonical WebSite node. SearchAction points at the real /us/search route. */
export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'PayslipIQ',
    url: `${SITE}/us/`,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
    // /us/search is a real static route (takes precedence over the [state] dynamic segment),
    // so the SearchAction now resolves instead of returning "State not found".
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE}/us/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** The in-house editorial team as a named reviewer entity (honest — no fabricated CPA). */
export function editorialTeamNode() {
  return {
    '@type': 'Organization',
    '@id': EDITORIAL_TEAM_ID,
    name: 'PayslipIQ Editorial Team',
    url: `${SITE}/us/about-the-team`,
    parentOrganization: { '@id': ORG_ID },
    description:
      'PayslipIQ’s in-house editorial team reviews every page for clarity, accuracy against federal and state payroll authorities (IRS, SSA, DOL and state tax agencies), and absence of advice language.',
    knowsAbout: ['IRS Pub 15-T', 'FICA mechanics', 'state withholding', 'pay-stub anatomy', 'W-4 calibration'],
  };
}

interface Crumb {
  name: string;
  url: string;
}

interface PageGraphInput {
  /** Canonical URL of the page (absolute or path beginning with /). */
  url: string;
  /** WebPage / Article headline. */
  name: string;
  description: string;
  /** 'WebPage' (default), 'Article', 'CollectionPage', or 'WebApplication' wrapper handled by caller. */
  type?: 'WebPage' | 'Article' | 'CollectionPage';
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Crumb[];
  /** Primary entity this page is about. */
  about?: EntityKey;
  /** Secondary entities mentioned. */
  mentions?: EntityKey[];
  /** Add reviewedBy / author from the editorial team (YMYL pages). */
  reviewed?: boolean;
  /** Primary image (defaults to dynamic OG). */
  image?: string;
  /** Mark Article body speakable for voice surfaces. */
  speakable?: boolean;
}

function abs(u: string) {
  return u.startsWith('http') ? u : `${SITE}${u}`;
}

function entityThing(key: EntityKey) {
  const e = ENTITY[key];
  return {
    '@type': 'Thing',
    name: e.name,
    sameAs: [e.wikidata, e.wikipedia],
  };
}

/**
 * Build a full per-page @graph: WebPage/Article + BreadcrumbList, wired by @id to the
 * site-wide Organization + WebSite, grounded to Wikidata entities, with YMYL author/reviewer.
 * Returns the graph object — render with <SchemaGraph graph={...} />.
 */
export function pageGraph(input: PageGraphInput) {
  const {
    url,
    name,
    description,
    type = 'WebPage',
    datePublished,
    dateModified,
    breadcrumbs,
    about,
    mentions,
    reviewed,
    image,
    speakable,
  } = input;

  const pageUrl = abs(url);
  const pageId = `${pageUrl}#webpage`;
  const img = image ?? `${SITE}/api/og?title=${encodeURIComponent(name)}&eyebrow=PayslipIQ%20USA`;

  const graph: Record<string, unknown>[] = [];

  const primary: Record<string, unknown> = {
    '@type': type,
    '@id': pageId,
    url: pageUrl,
    name,
    headline: name,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    image: [img],
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(breadcrumbs && breadcrumbs.length ? { breadcrumb: { '@id': `${pageUrl}#breadcrumb` } } : {}),
    ...(about ? { about: entityThing(about) } : {}),
    ...(mentions && mentions.length ? { mentions: mentions.map(entityThing) } : {}),
    ...(reviewed
      ? {
          author: { '@id': EDITORIAL_TEAM_ID },
          reviewedBy: { '@id': EDITORIAL_TEAM_ID },
          lastReviewed: dateModified ?? datePublished,
        }
      : {}),
    ...(speakable
      ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.direct-answer'],
          },
        }
      : {}),
  };
  graph.push(primary);

  if (breadcrumbs && breadcrumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: abs(c.url),
      })),
    });
  }

  if (reviewed) graph.push(editorialTeamNode());

  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Serialise any schema object to a safe JSON-LD string. */
export function ld(obj: unknown): string {
  return JSON.stringify(obj);
}
