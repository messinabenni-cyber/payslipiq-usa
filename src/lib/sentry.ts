/**
 * Sentry stub. Becomes active when SENTRY_DSN is set.
 * Use captureError() everywhere you would otherwise console.error a thrown exception.
 *
 * Why a stub instead of @sentry/nextjs? Adding the full Sentry SDK touches
 * package.json, sentry.client.config.ts, sentry.server.config.ts, instrumentation.ts,
 * and webpack config. The stub does the 80% (forwards to Sentry's REST API) without
 * the dependency churn. Swap to @sentry/nextjs when the team is ready.
 */

interface CaptureContext {
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
  level?: 'fatal' | 'error' | 'warning' | 'info';
}

export async function captureError(error: unknown, ctx: CaptureContext = {}) {
  const dsn = process.env.SENTRY_DSN;
  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error('[error]', message, ctx);

  if (!dsn) return;

  // Parse DSN: https://<key>@<host>/<project>
  let endpoint: string;
  let key: string;
  try {
    const url = new URL(dsn);
    key = url.username;
    const projectId = url.pathname.replace(/^\//, '');
    endpoint = `${url.protocol}//${url.host}/api/${projectId}/store/`;
  } catch {
    return;
  }

  const event = {
    event_id: crypto.randomUUID().replace(/-/g, ''),
    timestamp: Date.now() / 1000,
    level: ctx.level ?? 'error',
    platform: 'javascript',
    sdk: { name: 'payslipiq.sentry-stub', version: '0.1.0' },
    tags: { source: 'payslipiq-usa', ...(ctx.tags ?? {}) },
    extra: ctx.extra ?? {},
    exception: {
      values: [
        {
          type: error instanceof Error ? error.name : 'Error',
          value: message,
          stacktrace: stack ? { frames: parseStack(stack) } : undefined
        }
      ]
    }
  };

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Sentry-Auth': `Sentry sentry_version=7,sentry_key=${key},sentry_client=payslipiq.sentry-stub/0.1.0`
      },
      body: JSON.stringify(event)
    });
  } catch (e) {
    console.error('[error] sentry forward failed:', e);
  }
}

function parseStack(stack: string) {
  return stack.split('\n').slice(1, 11).map((line) => ({
    function: line.trim(),
    in_app: !line.includes('node_modules')
  }));
}
