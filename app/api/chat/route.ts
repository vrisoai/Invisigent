import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * POST /api/chat
 *
 * Forwards the user message to an n8n webhook.
 * n8n handles AI model calls, memory, and returns the reply.
 *
 * Required env var:
 *   N8N_WEBHOOK_URL  — the full webhook URL from your n8n workflow
 *                      e.g. https://your-n8n.app.n8n.cloud/webhook/invisigent-chat
 *
 * Expected n8n response shape (configure your Respond to Webhook node):
 *   { "reply": "..." }
 *   or: { "output": "..." }  (default from AI Agent node)
 *   or: { "text": "..." }
 */

interface ChatRequest {
  message: string;
  sessionId: string;
}

interface N8nResponse {
  reply?: string;
  output?: string;
  text?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json() as ChatRequest;

    if (!message?.trim()) {
      return NextResponse.json({ reply: 'Please enter a message.' }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { reply: "I'm not fully configured yet. Please reach out via the contact page and we'll get back to you shortly." },
        { status: 200 }
      );
    }

    const n8nRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message.trim(),
        sessionId,                    // n8n AI Agent memory key
        chatInput: message.trim(),    // alias — some n8n AI nodes use this field name
      }),
    });

    if (!n8nRes.ok) {
      throw new Error(`n8n webhook returned ${n8nRes.status}`);
    }

    const data = await n8nRes.json() as N8nResponse;

    // Normalise whichever field n8n sends back
    const reply =
      data.reply   ??
      data.output  ??
      data.text    ??
      data.message ??
      "I couldn't get a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('[chat/route]', err);
    return NextResponse.json(
      { reply: 'Something went wrong on our end. Please try again or reach us at /contact.' },
      { status: 200 }
    );
  }
}
