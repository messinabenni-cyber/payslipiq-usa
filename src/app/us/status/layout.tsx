import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'System Status',
  description:
    'Live status of PayslipIQ tools and pages — homepage, pay stub checker, paycheck calculator, and APIs. Service status only, educational use.',
  alternates: { canonical: 'https://payslipiq.com/us/status' },
  robots: { index: false, follow: true },
};

export default function StatusLayout({ children }: { children: ReactNode }) {
  return children;
}
