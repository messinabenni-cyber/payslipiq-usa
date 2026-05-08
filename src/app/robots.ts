import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const commonDisallow = ['/api/', '/admin/', '/_next/'];
  const indexers = ['*', 'Googlebot', 'Bingbot', 'Google-Extended', 'ChatGPT-User', 'PerplexityBot', 'Applebot-Extended'];
  const trainingBlockers = ['GPTBot', 'ClaudeBot', 'anthropic-ai', 'CCBot'];
  return {
    rules: [
      ...indexers.map((ua) => ({ userAgent: ua, allow: '/', disallow: commonDisallow })),
      ...trainingBlockers.map((ua) => ({ userAgent: ua, disallow: '/' })),
    ],
    sitemap: 'https://payslipiq.com/sitemap.xml',
    host: 'https://payslipiq.com',
  };
}
