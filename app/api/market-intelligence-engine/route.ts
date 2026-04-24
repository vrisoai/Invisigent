import { NextResponse } from 'next/server';

type Body = {
  stock?: string;
  _honeypot?: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === 'string' && s.trim().length > 0;
}

const MAX_LEN = 120;

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

  const stock = typeof body.stock === 'string' ? body.stock.trim() : '';
  if (!stock) {
    return NextResponse.json({ ok: false, error: 'Enter a company or ticker to analyze.' }, { status: 400 });
  }
  if (stock.length > MAX_LEN) {
    return NextResponse.json({ ok: false, error: 'Stock name is too long.' }, { status: 400 });
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    return NextResponse.json({ ok: false, error: 'API not configured.' }, { status: 500 });
  }

  try {
    const res = await fetch(`${apiUrl}/research`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ticker: stock }),
    });

    let data: unknown;
    try {
      data = await res.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'Analysis service returned an unreadable response.' }, { status: 502 });
    }

    if (!res.ok) {
      const msg =
        data && typeof data === 'object' && 'detail' in data
          ? String((data as Record<string, unknown>).detail)
          : data && typeof data === 'object' && 'error' in data
          ? String((data as Record<string, unknown>).error)
          : `Analysis service error (${res.status}).`;
      return NextResponse.json({ ok: false, error: msg }, { status: 502 });
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to reach analysis service.' }, { status: 502 });
  }
}
