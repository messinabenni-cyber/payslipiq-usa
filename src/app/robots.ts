import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const commonDisallow = ['/api/', '/admin/', '/_next/', '/us/premium-pay-stub-report/checkout', '/us/monthly-paycheck-monitor/checkout'];
  // AI crawlers are deliberately ALLOWED: AI-search visibility (ChatGPT, Claude,
  // Perplexity, Gemini) is a distribution channel for PayslipIQ, and /llms.txt
  // is published for the same reason. Do not re-block without a strategy change.
  const indexers = ['*', 'Googlebot', 'Bingbot', 'Google-Extended', 'ChatGPT-User', 'OAI-SearchBot', 'GPTBot', 'ClaudeBot', 'Claude-SearchBot', 'anthropic-ai', 'PerplexityBot', 'Applebot-Extended', 'CCBot'];
  return {
    rules: indexers.map((ua) => ({ userAgent: ua, allow: '/', disallow: commonDisallow })),
    sitemap: 'https://payslipiq.com/sitemap.xml',
    host: 'https://payslipiq.com',
  };
}
