import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PayslipIQ — paycheck intelligence for American workers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 80,
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, marginBottom: 24 }}>PayslipIQ · USA</div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Understand your paycheck with confidence.
        </div>
        <div style={{ fontSize: 28, opacity: 0.9, marginTop: 28, maxWidth: 900 }}>
          Plain-English help for American workers — pay stubs, FICA, federal &amp; state withholding,
          deductions, overtime, 401(k), take-home pay.
        </div>
      </div>
    ),
    size,
  );
}
