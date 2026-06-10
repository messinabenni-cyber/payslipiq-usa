import type { Metadata } from 'next';
import USHomepage from '@/components/USHomepage';

// Cross-domain hreflang: declare PayslipIQ's UK sister site (payslipiq.co.uk)
// so Google serves .co.uk to UK searchers and .com to US searchers, preventing
// cross-region cannibalisation on generic English paycheck / pay-stub queries.
// NOTE: the reciprocal block must exist on payslipiq.co.uk's homepage for Google
// to honour the cluster (hreflang requires both sides to confirm each other).
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://payslipiq.com/',
    languages: {
      'en-US': 'https://payslipiq.com/',
      'es-US': 'https://payslipiq.com/es',
      'en-GB': 'https://payslipiq.co.uk/',
      'x-default': 'https://payslipiq.com/',
    },
  },
};

export default function Page() {
  return <USHomepage />;
}
