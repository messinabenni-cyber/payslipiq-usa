import type { Metadata } from 'next';
import USHomepage from '@/components/USHomepage';

// Cross-domain hreflang cluster: declares PayslipIQ's UK/IE sister site
// (payslipiq.co.uk) so Google serves the right regional site — .com to US,
// .co.uk to UK/IE — preventing cross-region cannibalisation on generic English
// paycheck / pay-stub queries. Reciprocal block lives on payslipiq.co.uk's homepage.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://payslipiq.com/',
    languages: {
      'en-US': 'https://payslipiq.com/',
      'es-US': 'https://payslipiq.com/es',
      'en-GB': 'https://payslipiq.co.uk/',
      'en-IE': 'https://payslipiq.co.uk/ie',
      'x-default': 'https://payslipiq.com/',
    },
  },
};

export default function Page() {
  return <USHomepage />;
}
