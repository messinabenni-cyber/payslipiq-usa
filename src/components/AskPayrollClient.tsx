'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const FAQS = [
  {
    q: 'What does the Ask Payroll Generator do?',
    a: 'It drafts a polite, factual message you can send to your HR or payroll team about a paycheck question. You fill in a few details — your name, pay period, the line you have a question about, and what you noticed — and the generator returns a short message ready to copy. PayslipIQ does not send the message on your behalf. The drafting is fully client-side.'
  },
  {
    q: 'Does PayslipIQ store my message?',
    a: 'No. The Ask Payroll Generator runs entirely in your browser. Nothing is sent to PayslipIQ servers, no draft is stored, no analytics event captures the body of the message. Once you close the page, the draft is gone.'
  },
  {
    q: 'Should I include my Social Security number or bank details?',
    a: 'No. Never include your SSN, bank account number, or full address in an HR or payroll message. The generator omits these by design. Use your employee ID instead, and let HR look you up internally.'
  },
  {
    q: 'What kind of questions is it best for?',
    a: 'Straightforward, factual questions: "My federal withholding looks different this period — can you confirm the W-4 on file?", "My pre-tax 401(k) line is missing this month — could you check my enrolment?", "My state tax line shows X — is my work state still correct?". The generator is not for adversarial or formal disputes; for those, see a CPA or an employment attorney.'
  },
  {
    q: 'Can it replace a CPA or an employment attorney?',
    a: 'No. The generator is a writing aid only. It does not provide tax, legal, financial, employment, or HR advice. For a binding answer, see a qualified professional.'
  }
];

export function AskPayrollClient() {
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [period, setPeriod] = useState('');
  const [topic, setTopic] = useState('Federal withholding');
  const [detail, setDetail] = useState('');
  const [copied, setCopied] = useState(false);

  const draft = useMemo(() => {
    const greeting = 'Hi Payroll team,';
    const opener =
      name && empId
        ? `My name is ${name} (Employee ID ${empId}).`
        : name
          ? `My name is ${name}.`
          : 'Hello.';
    const periodLine = period ? `I am writing about my paycheck for the period ${period}.` : 'I am writing about a recent paycheck.';
    const body = `On that pay stub I noticed that the ${topic.toLowerCase()} line ${detail ? 'shows ' + detail : 'looks different from what I expected'}.`;
    const ask = 'Could you confirm whether this is correct, and let me know what is driving the figure?';
    const closing = "I appreciate your help. I'm not raising a formal dispute — just trying to understand the calculation. Happy to share the stub if useful.";
    const sign = 'Thank you,\n' + (name || '[Your name]');
    return [greeting, opener, periodLine, body, ask, closing, sign].join('\n\n');
  }, [name, empId, period, topic, detail]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore — user can select+copy manually
    }
  };

  return (
    <>
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-5">
          <h2 className="font-medium mb-4">Your details</h2>
          <div className="space-y-3 text-sm">
            <label className="block">
              <span className="block text-slate-600 dark:text-slate-300">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2"
                placeholder="e.g. Jordan Lee"
              />
            </label>
            <label className="block">
              <span className="block text-slate-600 dark:text-slate-300">Employee ID (optional)</span>
              <input
                type="text"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2"
                placeholder="e.g. 12345"
              />
            </label>
            <label className="block">
              <span className="block text-slate-600 dark:text-slate-300">Pay period</span>
              <input
                type="text"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2"
                placeholder="e.g. April 16–30"
              />
            </label>
            <label className="block">
              <span className="block text-slate-600 dark:text-slate-300">Topic</span>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2"
              >
                <option>Federal withholding</option>
                <option>State withholding</option>
                <option>Local tax</option>
                <option>Social Security</option>
                <option>Medicare</option>
                <option>Pre-tax 401(k)</option>
                <option>Roth 401(k)</option>
                <option>HSA / FSA</option>
                <option>Health insurance premium</option>
                <option>Overtime</option>
                <option>Bonus / supplemental wages</option>
                <option>Garnishment</option>
                <option>Reimbursement / expense</option>
                <option>YTD totals</option>
                <option>Net pay</option>
              </select>
            </label>
            <label className="block">
              <span className="block text-slate-600 dark:text-slate-300">What did you notice? (optional)</span>
              <textarea
                rows={3}
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2"
                placeholder="e.g. an amount about $40 higher than last period"
              />
            </label>
            <p className="text-xs text-slate-500">
              Do not include your SSN, bank account number, or full address. Use your employee ID instead.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Draft message</h2>
            <button
              type="button"
              onClick={copy}
              className="text-sm rounded-md border border-slate-300 dark:border-slate-600 px-3 py-1 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {copied ? 'Copied' : 'Copy to clipboard'}
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-sm bg-slate-50 dark:bg-slate-900 rounded-md p-4 border border-slate-200 dark:border-slate-700">
{draft}
          </pre>
          <p className="mt-3 text-xs text-slate-500">
            Review the message yourself before sending. PayslipIQ does not contact your employer.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Frequently asked</h2>
        <dl className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-slate-700 dark:text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Related tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/us/paycheck-calculator" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
            <div className="font-medium">Paycheck Calculator</div>
            <div className="text-sm text-slate-500">Estimate the figure you would expect, then verify with payroll.</div>
          </Link>
          <Link href="/us/pay-stub-checker" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
            <div className="font-medium">Pay Stub Checker</div>
            <div className="text-sm text-slate-500">Plain-English walkthrough of every line on a pay stub.</div>
          </Link>
          <Link href="/us/why-is-my-paycheck-lower" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
            <div className="font-medium">Why is my paycheck lower?</div>
            <div className="text-sm text-slate-500">Common reasons take-home pay drops.</div>
          </Link>
          <Link href="/us/pay-stub-mistakes" className="block rounded-md border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-400">
            <div className="font-medium">Pay Stub Mistakes</div>
            <div className="text-sm text-slate-500">Twelve common payroll errors and how to spot them.</div>
          </Link>
        </div>
      </section>
    </>
  );
}
