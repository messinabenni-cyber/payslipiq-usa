import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: 'https://payslipiq.com/sitemap.xml',
    host: 'https://payslipiq.com',
  };
}
