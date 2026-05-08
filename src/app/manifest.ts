import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PayslipIQ",
    short_name: 'PayslipIQ',
    description: "Plain-English paycheck explainer for American workers.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a',
    icons: [
      { src: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
    ],
  };
}
