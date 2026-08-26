import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AppShell } from '@/components/AppShell';
import { rootMetadata, rootViewport } from '@/lib/root-layout-meta';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const viewport: Viewport = rootViewport;
export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
