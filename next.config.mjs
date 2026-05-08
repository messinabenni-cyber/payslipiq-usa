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
      { source: '/global/:path*', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
