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
    body: "We either send a tailored proposal outlining scope, approach, and investment — or, if we're not the right fit, we'll point you toward someone who is. No pressure, no awkward follow-up sequences.",
  },
];

const TRUST = [
  'Response within 24 hours',
  'Limited to 4 engagements per quarter',
  'No cold-call follow-ups',
  'NDA available on request before scoping call',
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
              Start an AI Infrastructure Engagement
              <span className="lets-talk-heading-accent font-mono">
                // start a conversation
              </span>
            </h1>
            <p className="lets-talk-subheading font-serif">
              Tell us what you&apos;re building. We&apos;ll tell you if we can help — and what it would look like if we did.
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

      {/* Engagement Types */}
      <section
        aria-labelledby="engagement-types-heading"
        style={{
          background: '#121212',
          paddingTop: 'clamp(60px, 8vw, 120px)',
          paddingBottom: 'clamp(60px, 8vw, 120px)',
          paddingLeft: 'max(clamp(1.5rem, 5vw, 4rem), env(safe-area-inset-left))',
          paddingRight: 'max(clamp(1.5rem, 5vw, 4rem), env(safe-area-inset-right))',
        }}
      >
        <div className="section-container section-inner">
          <p
            className="font-mono text-center"
            style={{ fontSize: 12, letterSpacing: '0.14em', fontWeight: 500, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}
          >
            [ ENGAGEMENT TYPES ]
          </p>
          <h2
            id="engagement-types-heading"
            className="font-serif text-center"
            style={{ fontSize: 'clamp(24px, 3vw, 56px)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 'clamp(32px, 4vw, 56px)' }}
          >
            How Organizations Engage With Invisigent
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                label: '[ AI STRATEGY ]',
                title: 'Strategy & Architecture Review',
                body: 'A focused engagement to audit your current AI infrastructure, identify gaps, and produce a prioritized technical roadmap. Ideal for organizations planning their first production AI deployment.',
              },
              {
                label: '[ SYSTEM BUILD ]',
                title: 'Full System Build',
                body: 'End-to-end design, development, and deployment of a production AI system — from orchestration architecture to monitoring infrastructure. Our most common engagement type.',
              },
              {
                label: '[ PARTNERSHIP ]',
                title: 'Ongoing AI Partnership',
                body: 'Continuous optimization, monitoring, and expansion of AI systems already in production. Includes monthly performance reviews, model updates, and architecture evolution as your usage scales.',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="glass-card"
                style={{ padding: 'clamp(24px, 2.5vw, 36px)' }}
              >
                <p className="font-mono" style={{ fontSize: 11, letterSpacing: '0.12em', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: 12 }}>
                  {card.label}
                </p>
                <h3 className="font-serif" style={{ fontSize: 'clamp(18px, 1.6vw, 32px)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 12 }}>
                  {card.title}
                </h3>
                <p className="font-serif" style={{ fontSize: 'clamp(14px, 1.1vw, 22px)', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
