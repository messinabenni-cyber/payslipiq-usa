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
      // LLM search-time crawlers
      { userAgent: 'ChatGPT-User', allow: '/', disallow },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow },
      { userAgent: 'PerplexityBot', allow: '/', disallow },
      // LLM training crawlers (allow for citation surface area)
      { userAgent: 'GPTBot', allow: '/', disallow },
      { userAgent: 'ClaudeBot', allow: '/', disallow },
      { userAgent: 'anthropic-ai', allow: '/', disallow },
      { userAgent: 'Google-Extended', allow: '/', disallow },
      { userAgent: 'Applebot-Extended', allow: '/', disallow },
      { userAgent: 'CCBot', allow: '/', disallow },
      { userAgent: 'Amazonbot', allow: '/', disallow },
    ],
    sitemap: [
      'https://payslipiq.com/sitemap.xml',
      'https://payslipiq.com/sitemap-us.xml',
    ],
    host: 'https://payslipiq.com',
  };
}
