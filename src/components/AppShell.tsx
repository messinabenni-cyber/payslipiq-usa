import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SiteSchema } from '@/components/SiteSchema';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteSchema />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </>
  );
}
