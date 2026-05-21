const SECURITY_HEADERS = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), serial=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
  { key: 'X-XSS-Protection', value: '0' },
  { key: 'Origin-Agent-Cluster', value: '?1' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://plausible.io; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "connect-src 'self' https://va.vercel-scripts.com https://plausible.io https://vitals.vercel-insights.com; " +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "object-src 'none'; " +
      'upgrade-insecure-requests',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 1080, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 31536000,
  },
  experimental: { optimizePackageImports: [], typedRoutes: false, scrollRestoration: true },
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  async headers() { return [{ source: '/(.*)', headers: SECURITY_HEADERS }]; },
  async redirects() {
    return [
      { source: '/uk',           destination: '/', permanent: true },
      { source: '/uk/:path*',    destination: '/', permanent: true },
      { source: '/ie',           destination: '/', permanent: true },
      { source: '/ie/:path*',    destination: '/', permanent: true },
      { source: '/ca',           destination: '/', permanent: true },
      { source: '/ca/:path*',    destination: '/', permanent: true },
      { source: '/au',           destination: '/', permanent: true },
      { source: '/au/:path*',    destination: '/', permanent: true },
      { source: '/countries',    destination: '/', permanent: true },
      { source: '/countries/:path*', destination: '/', permanent: true },
      { source: '/global',       destination: '/', permanent: true },
      { source: '/global/:path*', destination: '/', permanent: true }, { source: '/us/after-tax/:amount', destination: '/us/paycheck-calculator', permanent: true }, { source: '/us/utah/after-tax/:amount', destination: '/us/utah', permanent: true }, { source: '/us/delaware/after-tax/:amount', destination: '/us/delaware', permanent: true }, { source: '/us/methodology', destination: '/methodology', permanent: true }, { source: '/us/florida/cities/:path*', destination: '/us/local-paycheck-taxes', permanent: true }, { source: '/us/problems/why-is-my-bonus-taxed-so-much', destination: '/us/bonus-tax-paycheck', permanent: true }, { source: '/us/new-jersey/after-tax/:amount', destination: '/us/new-jersey', permanent: true }, { source: '/us/:state/after-tax/:amount', destination: '/us/:state', permanent: true },
      // audit-v14: retire legacy / pre-restructure URL patterns that 404 (GSC "Not found")
      { source: '/us/about', destination: '/about', permanent: true },
      { source: '/us/terms', destination: '/terms', permanent: true },
      { source: '/us/privacy', destination: '/privacy', permanent: true },
      { source: '/us/contact', destination: '/contact', permanent: true },
      { source: '/us/disclaimer', destination: '/disclaimer', permanent: true },
      { source: '/us/deductions-explained', destination: '/us/deductions', permanent: true },
      { source: '/us/w4-paycheck-guide', destination: '/us/w4-guide', permanent: true },
      { source: '/us/pay-stub-glossary', destination: '/us/glossary', permanent: true },
      { source: '/us/:state/salary-after-tax', destination: '/us/salary-after-tax', permanent: true },
      { source: '/us/:state/payroll-deductions', destination: '/us/deductions', permanent: true },
      { source: '/us/:state/minimum-wage-paycheck', destination: '/us/:state', permanent: true },
      { source: '/us/:state/cities/:path*', destination: '/us/cities', permanent: true },
    ];
  },
};
export default nextConfig;
