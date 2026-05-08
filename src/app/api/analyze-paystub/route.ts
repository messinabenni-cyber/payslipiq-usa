// PayslipIQ USA, pay-stub AI analyzer endpoint.
// Country-bounded under /us/api/ to mirror the rest of the US site architecture.
// Accepts FormData with field "file" (PNG / JPG / WEBP / GIF, max 6MB).
// Calls Claude vision and returns structured extraction JSON.

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { PAYSTUB_ANALYZER_SYSTEM_PROMPT, PAYSTUB_ANALYZER_USER_PROMPT } from '@/lib/aiPrompts';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const MAX_FILE_BYTES = 6 * 1024 * 1024; // 6 MB
const ALLOWED_TYPES = new Set(['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif']);

function isAllowedRequest(req: NextRequest): boolean {
  const origin = req.headers.get('origin') ?? '';
  const referer = req.headers.get('referer') ?? '';
  const candidate = origin || referer;
  if (!candidate) return false;
  try {
    const url = new URL(candidate);
    const host = url.hostname;
    return (
      host === 'payslipiq.com' ||
      host === 'www.payslipiq.com' ||
      host.endsWith('.vercel.app') ||
      host === 'localhost' ||
      host === '127.0.0.1'
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!isAllowedRequest(req)) {
    return NextResponse.json({ error: 'origin_not_allowed' }, { status: 403 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          'AI provider not configured. Set ANTHROPIC_API_KEY in your environment to enable AI uploads. Manual entry still works.',
        manualFallback: true
      },
      { status: 503 }
    );
  }

  let file: File | null = null;
  try {
    const form = await req.formData();
    const f = form.get('file');
    if (f instanceof File) file = f;
  } catch {
    return NextResponse.json({ error: 'invalid_form_data' }, { status: 400 });
  }
  if (!file) return NextResponse.json({ error: 'no_file' }, { status: 400 });
  if (!ALLOWED_TYPES.has(file.type))
    return NextResponse.json({ error: `unsupported_type: ${file.type}` }, { status: 400 });
  if (file.size > MAX_FILE_BYTES)
    return NextResponse.json({ error: 'file_too_large_max_6mb' }, { status: 400 });

  const arrayBuf = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuf).toString('base64');
  const mediaType =
    file.type === 'image/jpg'
      ? 'image/jpeg'
      : (file.type as 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif');

  const client = new Anthropic({ apiKey });

  let response;
  try {
    response = await client.messages.create({
      model: process.env.ANTHROPIC_MODEL ?? 'claude-haiku-4-5-20251001',
      max_tokens: 3000,
      system: PAYSTUB_ANALYZER_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
            { type: 'text', text: PAYSTUB_ANALYZER_USER_PROMPT }
          ]
        }
      ]
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'AI provider error';
    return NextResponse.json({ error: 'ai_provider_error', detail: msg }, { status: 502 });
  }

  const block = response.content.find((b) => b.type === 'text');
  if (!block || block.type !== 'text')
    return NextResponse.json({ error: 'empty_response' }, { status: 502 });
  const raw = block.text.trim();

  // Strip code fences if the model added them despite the system prompt.
  const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();

  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    return NextResponse.json(
      {
        error: 'parse_error',
        detail: 'AI response was not valid JSON. Please try again or use manual entry.',
        raw: cleaned.slice(0, 400)
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    extraction: parsed,
    model: response.model,
    usage: { input_tokens: response.usage.input_tokens, output_tokens: response.usage.output_tokens }
  });
}
