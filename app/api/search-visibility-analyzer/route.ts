import { NextResponse } from 'next/server';

type Body = {
  keyword?: string;
  location?: string;
  websiteUrl?: string;
  email?: string;
  _honeypot?: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === 'string' && s.trim().length > 0;
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function normalizeUrl(raw: string): string | null {
  const t = raw.trim();
  if (!t) return null;
  try {
    const withProto = /^https?:\/\//i.test(t) ? t : `https://${t}`;
    const u = new URL(withProto);
    if (!u.hostname) return null;
    if (u.hostname !== 'localhost' && !u.hostname.includes('.')) return null;
    return u.toString();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (isNonEmpty(body._honeypot)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!isNonEmpty(body.keyword)) {
    return NextResponse.json({ ok: false, error: 'Keyword is required.' }, { status: 400 });
  }
  if (!isNonEmpty(body.location)) {
    return NextResponse.json({ ok: false, error: 'Location is required.' }, { status: 400 });
  }
  if (!isNonEmpty(body.websiteUrl) || !normalizeUrl(body.websiteUrl)) {
    return NextResponse.json({ ok: false, error: 'Enter a valid website URL.' }, { status: 400 });
  }
  if (!isNonEmpty(body.email) || !isValidEmail(body.email)) {
    return NextResponse.json({ ok: false, error: 'Enter a valid email address.' }, { status: 400 });
  }

  /* Wire to CRM, email, or queue here */
  return NextResponse.json(
    {
      ok: true,
      message: 'Request received. If delivery is configured, you will hear from us shortly.',
    },
    { status: 200 }
  );
}
