import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL =
  'https://primary-production-91c6.up.railway.app/webhook/31344f1e-117a-4839-bfd0-a6c31aacf593';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, ip }),
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
