import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

/**
 * Dynamic Open Graph image generator.
 * GET /api/og?title=Some+Title&kind=guide
 * Used in page metadata: openGraph.images = [`/api/og?title=${encodeURIComponent(title)}`]
 *
 * Renders a branded 1200x630 PNG with the title, the PIQ wordmark, and a soft gradient.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') ?? 'Understand your paycheck.').slice(0, 120);
  const eyebrow = (searchParams.get('eyebrow') ?? 'PayslipIQ USA').slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", system-ui, sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-1px',
            }}
          >
            PIQ
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-1px' }}>PayslipIQ</div>
          <div
            style={{
              marginLeft: 12,
              padding: '6px 12px',
              borderRadius: 6,
              background: 'rgba(255,255,255,0.15)',
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            USA
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: title.length > 70 ? 64 : 84,
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <div>payslipiq.com</div>
          <div>Educational only. Not advice.</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
