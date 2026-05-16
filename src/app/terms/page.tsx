import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Terms of Service, PayslipIQ (US)",
  description: "PayslipIQ Terms of Service: educational use, no advice, no warranties, US jurisdiction, account terms.",
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p><strong>Effective:</strong> 2026-05-16. By using PayslipIQ you agree to these terms.</p>
        <h2>1. Educational use only</h2>
        <p>PayslipIQ is an educational paycheck explainer. It is not tax, legal, financial, accounting, employment, benefits, or payroll advice.</p>
        <h2>2. No warranties</h2>
        <p>The Service is provided &quot;as is&quot;. We make no warranty of accuracy, completeness, or fitness for a particular purpose. Always verify with your payroll team, a CPA, or the appropriate authority.</p>
        <h2>3. Account terms</h2>
        <p>Premium accounts are subject to subscription billing terms displayed at signup. Cancel anytime via the account settings.</p>
        <h2>4. Acceptable use</h2>
        <p>Do not attempt to scrape, reverse-engineer, or attack the Service. Do not upload others&apos; pay stubs without their consent.</p>
        <h2>5. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, PayslipIQ is not liable for indirect, incidental, special, consequential, or exemplary damages arising from use of the Service, even if advised of the possibility. Where liability cannot be excluded, total liability is limited to the greater of (a) the amount you paid PayslipIQ in the prior twelve months, or (b) US$50.</p>
        <h2>6. Indemnity</h2>
        <p>You agree to indemnify and hold PayslipIQ harmless from any claims arising from your use of the Service or any content you submit.</p>
        <h2>7. Jurisdiction and governing law</h2>
        <p>These terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws principles. Subject to the arbitration agreement in section 8, you and PayslipIQ submit to the exclusive jurisdiction of the state and federal courts located in Delaware for any dispute, except where applicable consumer-protection law requires otherwise.</p>
        <h2>8. Arbitration agreement and class-action waiver</h2>
        <p><strong>Please read this section carefully. It affects your legal rights.</strong></p>
        <p>Any dispute, claim, or controversy arising out of or relating to your use of PayslipIQ, these Terms, or the relationship between you and PayslipIQ (a &quot;Dispute&quot;) will be resolved by binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, except that either party may bring an individual action in small-claims court if the claim qualifies and remains in that court. The arbitrator, not any court or agency, has exclusive authority to resolve any Dispute, including the scope and enforceability of this arbitration agreement.</p>
        <p>The arbitration will be conducted in English, in the State of Delaware, unless the AAA Consumer Rules require otherwise. PayslipIQ will pay the AAA filing, administrative, and arbitrator fees for any individual arbitration to the extent the AAA Consumer Rules require. Each party is otherwise responsible for its own attorneys&apos; fees, except as a statute, contract, or court order may require.</p>
        <p><strong>Class-action waiver.</strong> You and PayslipIQ agree that Disputes will be brought only in an individual capacity, not as a plaintiff or class member in any purported class, collective, consolidated, or representative proceeding. The arbitrator may not consolidate more than one person&apos;s claims and may not preside over any form of representative or class proceeding. If a court decides that this class-action waiver is unenforceable as to any Dispute, that Dispute (and only that Dispute) will be severed from this arbitration agreement and brought in court.</p>
        <p><strong>Jury-trial waiver.</strong> You and PayslipIQ each waive the right to a trial by jury for any Dispute that is allowed by law to proceed in court.</p>
        <p><strong>30-day opt-out.</strong> You may opt out of this arbitration agreement and class-action waiver by emailing <a href="mailto:legal@payslipiq.com">legal@payslipiq.com</a> within thirty (30) days of first accepting these Terms, with the subject line &quot;Arbitration opt-out&quot; and including your full name and the email address you used with PayslipIQ. Opting out will not affect any other provision of these Terms.</p>
        <p><strong>Severability.</strong> If any portion of this arbitration agreement is found unenforceable, the remainder will continue to apply. If the class-action waiver is found unenforceable in its entirety, the entire arbitration agreement will be unenforceable.</p>
        <h2>9. Age representation</h2>
        <p>By using PayslipIQ you represent that you are at least eighteen (18) years old, the age of majority in your jurisdiction, or that you are using the Service with the consent of a parent or legal guardian. PayslipIQ is not directed at children under thirteen (13) and does not knowingly collect personal information from anyone under thirteen.</p>
        <h2>10. DMCA / copyright</h2>
        <p>If you believe content on PayslipIQ infringes your copyright, send a notice to <a href="mailto:legal@payslipiq.com">legal@payslipiq.com</a> with: (a) your signature (physical or electronic); (b) identification of the copyrighted work claimed to be infringed; (c) identification of the material claimed to be infringing and where it appears on the site; (d) your contact information; (e) a statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent, or the law; and (f) a statement, under penalty of perjury, that the information in the notice is accurate and that you are authorised to act on behalf of the owner of the right that is allegedly infringed.</p>
        <h2>11. Severability and entire agreement</h2>
        <p>If any provision of these Terms is held invalid, the remaining provisions remain in effect. These Terms, the <Link href="/privacy">privacy notice</Link>, the <Link href="/us/methodology/">methodology page</Link>, and any other notices linked from the site together constitute the entire agreement between you and PayslipIQ.</p>
        <h2>12. Contact</h2>
        <p><a href="mailto:legal@payslipiq.com">legal@payslipiq.com</a></p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
