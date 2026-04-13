import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Body = {
  name?: string;
  email?: string;
  company?: string;
  brief?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    const { name, email, company, brief } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ''),
      },
    });

    await transporter.sendMail({
      from: `"Invisigent Contact" <${process.env.GMAIL_USER}>`,
      to: 'vrisoai@gmail.com',
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; color: #1a1a1a;">
          <h2 style="margin: 0 0 24px; font-size: 20px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
            </tr>
            ${company?.trim() ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${company.trim()}</td>
            </tr>` : ''}
            ${brief?.trim() ? `
            <tr>
              <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Brief</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${brief.trim()}</td>
            </tr>` : ''}
          </table>
          <p style="margin: 32px 0 0; font-size: 12px; color: #9ca3af;">
            Sent via Invisigent contact form · Reply directly to respond to ${name.trim()}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact/route]', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
