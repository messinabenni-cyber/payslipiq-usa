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

  experimental: {
    optimizePackageImports: [],
    typedRoutes: false,
    scrollRestoration: true,
  },

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },

  async redirects() {
    // Catch any visitor coming from old multi-country URLs and route to the matching USA equivalent.
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
