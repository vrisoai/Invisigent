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

  /* Wire to market data / LLM pipeline here */
  return NextResponse.json(
    {
      ok: true,
      message: `Request recorded for “${stock}”. Connect this route to your data sources to return live intelligence.`,
    },
    { status: 200 }
  );
}
