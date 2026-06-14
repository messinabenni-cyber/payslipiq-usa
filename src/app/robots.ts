import type { MetadataRoute } from 'next';

// PayslipIQ USA — host-aware robots policy.
// Unified AI bot policy: allow all major LLM training + search crawlers for
// citation surface area and parity with payslipiq.co.uk.
// Hard-block previews so staging deployments stay out of indexes.

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  const disallow = ['/api/', '/admin/', '/internal/', '/_next/', '/draft/', '/preview/'];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      // Search crawlers
      { userAgent: 'Googlebot', allow: '/', disallow },
      { userAgent: 'Bingbot', allow: '/', disallow },
      { userAgent: 'DuckDuckBot', allow: '/', disallow },
      // LLM search-time crawlers (these fetch pages to CITE — must be allowed)
      { userAgent: 'ChatGPT-User', allow: '/', disallow },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow },
      { userAgent: 'PerplexityBot', allow: '/', disallow },
      { userAgent: 'Perplexity-User', allow: '/', disallow },
      { userAgent: 'Claude-SearchBot', allow: '/', disallow },
      { userAgent: 'Claude-User', allow: '/', disallow },
      // LLM training crawlers (allow for citation surface area)
      { userAgent: 'GPTBot', allow: '/', disallow },
      { userAgent: 'ClaudeBot', allow: '/', disallow },
      { userAgent: 'anthropic-ai', allow: '/', disallow },
      { userAgent: 'Google-Extended', allow: '/', disallow },
      { userAgent: 'Applebot-Extended', allow: '/', disallow },
      { userAgent: 'CCBot', allow: '/', disallow },
      { userAgent: 'Amazonbot', allow: '/', disallow },
    ],
    // Single canonical sitemap. (Removed sitemap-us.xml — it 404s; all 1,358
    // URLs already live in sitemap.xml, so advertising a missing file only
    // wastes crawl budget and triggers GSC "couldn't fetch" sitemap errors.)
    sitemap: 'https://payslipiq.com/sitemap.xml',
    host: 'https://payslipiq.com',
  };
}
