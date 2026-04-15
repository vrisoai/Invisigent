import type { Metadata } from 'next';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import { LetsTalkForm } from './LetsTalkForm';

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    'Start a conversation with Invisigent about enterprise AI systems, automation workflows, and intelligent infrastructure for your business.',
  alternates: {
    canonical: 'https://vriso.ai/contact',
  },
  openGraph: {
    title: "Let's Talk | Invisigent",
    description:
      'Start a conversation with Invisigent about enterprise AI systems, automation workflows, and intelligent infrastructure.',
    url: 'https://vriso.ai/contact',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Let's Talk — Invisigent",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Let's Talk | Invisigent",
    description:
      'Start a conversation with Invisigent about enterprise AI systems and intelligent infrastructure.',
    images: ['/og-image.png'],
  },
};

const WHAT_HAPPENS = [
  {
    step: '01',
    title: 'We read every brief',
    body: 'No autoresponders. A real person at Invisigent reviews your message personally within 24 hours.',
  },
  {
    step: '02',
    title: 'Scoping call',
    body: "If there's a fit, we schedule a focused 30-minute call to understand your environment, constraints, and goals.",
  },
  {
    step: '03',
    title: 'Proposal or referral',
    body: "We either send a tailored proposal or — if we're not the right fit — point you in the right direction.",
  },
];

const TRUST = [
  'Response within 24 hours',
  'Limited engagements per quarter',
  'No cold-call follow-ups',
];

export default function ContactPage() {
  return (
    <>
      <main className="lets-talk-page relative min-h-screen overflow-hidden bg-bg-primary">
        <div className="lets-talk-orb" aria-hidden="true" />
        <div className="section-grid-overlay" aria-hidden="true" />

        <div className="lets-talk-shell section-wrapper">

          {/* ── Hero ───────────────────────────────────────────────── */}
          <header className="lets-talk-hero">
            <p className="lets-talk-eyebrow">
              <span className="lets-talk-eyebrow-dot" aria-hidden="true" />
              Invisigent · Engagements
            </p>
            <h1 className="lets-talk-heading font-serif">
              Let&apos;s Talk.
              <span className="lets-talk-heading-accent font-mono">
                // start a conversation
              </span>
            </h1>
            <p className="lets-talk-subheading font-serif">
              Tell us what you&apos;re building. We&apos;ll tell you if we can help.
            </p>
          </header>

          {/* ── Two-column body ─────────────────────────────────────── */}
          <div className="lets-talk-body">

            {/* Left: trust + timeline */}
            <aside className="lets-talk-left">

              <ul className="lets-talk-trust-list">
                {TRUST.map(label => (
                  <li key={label} className="lets-talk-trust-item">
                    <span className="lets-talk-trust-dot" aria-hidden="true" />
                    <span className="font-display text-sm text-text-secondary">{label}</span>
                  </li>
                ))}
              </ul>

              <hr className="lets-talk-divider" />

              <div>
                <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-text-tertiary uppercase mb-5">
                  What happens next
                </p>
                <ol className="lets-talk-timeline">
                  {WHAT_HAPPENS.map(item => (
                    <li key={item.step} className="lets-talk-timeline-item">
                      <span className="lets-talk-timeline-step">{item.step}</span>
                      <div>
                        <p className="font-display text-sm font-semibold text-text-primary leading-snug">
                          {item.title}
                        </p>
                        <p className="font-display text-sm text-text-secondary leading-relaxed mt-1">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <hr className="lets-talk-divider" />

              <div className="flex flex-col gap-1">
                <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-text-tertiary uppercase">
                  Direct line
                </p>
                <a
                  href="mailto:hello@vriso.ai"
                  className="font-display text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  aria-label="Email Invisigent at hello@vriso.ai"
                >
                  hello@vriso.ai
                </a>
              </div>
            </aside>

            {/* Right: form */}
            <div className="lets-talk-right">
              <LetsTalkForm />
            </div>
          </div>

        </div>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
