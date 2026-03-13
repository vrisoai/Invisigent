// FooterSection.tsx
'use client';

import Script from 'next/script';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { EASE } from '@/app/lib/animations';

const JSON_LD_PROFESSIONAL_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VRISO',
  serviceType: 'Enterprise AI Infrastructure Consulting',
  description:
    'Enterprise AI infrastructure and automation architecture consulting specializing in scalable AI systems and agent orchestration.',
  areaServed: 'Global',
  url: 'https://vriso.ai',
};

const footerColumns = {
  services: [
    'AI & Technology Strategy Consulting',
    'Agent Orchestration & AI Workflows',
    'RAG & Knowledge Retrieval Systems',
    'AI Performance & Latency Optimization',
    'AI-Native Product Development',
    'Compliance-Ready AI Systems',
  ],
  company: ['Home', 'Services', 'About', 'Contact'],
} as const;

const complianceTags = ['GDPR Compliant', 'SOC2 Ready', 'DPDP Ready'] as const;

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-40px' });
  const [servicesOpen, setServicesOpen] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    if (mq.matches) {
      setServicesOpen(false);
    }
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="vriso-footer-section relative w-full border-t border-white/5"
      aria-labelledby="vriso-footer-heading"
    >
      <Script id="vriso-footer-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(JSON_LD_PROFESSIONAL_SERVICE)}
      </Script>

      {/* Radial glow + subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(59,91,219,0.12) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
      <div className="section-grid-overlay" aria-hidden="true" />

      <div className="section-container section-inner relative vriso-footer-inner">
        {/* Top grid */}
        <motion.div
          className="vriso-footer-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Brand column */}
          <div className="vriso-footer-brand">
            <div className="flex items-center gap-3">
              <div className="vriso-footer-neural-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <circle cx="12" cy="12" r="5" className="vriso-footer-neural-core" />
                  <circle cx="6" cy="8" r="2" className="vriso-footer-neural-node" />
                  <circle cx="18" cy="9" r="2" className="vriso-footer-neural-node" />
                  <circle cx="8" cy="17" r="2" className="vriso-footer-neural-node" />
                  <path
                    d="M6 8 L9 11 M18 9 L14 11 M8 17 L11 13"
                    className="vriso-footer-neural-link"
                  />
                </svg>
              </div>
              <div>
                <p
                  id="vriso-footer-heading"
                  className="font-serif text-lg"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
                >
                  VRISO
                </p>
                <p className="font-serif text-xs text-footer-muted">
                  Enterprise AI Infrastructure
                </p>
              </div>
            </div>

            <p className="vriso-footer-brand-desc font-serif">
              VRISO designs enterprise AI infrastructure and automation architecture for modern organizations.
            </p>
          </div>

          {/* Quick Links column with Services dropdown underneath */}
          <nav aria-label="VRISO quick links" className="vriso-footer-column vriso-footer-quicklinks">
            <h3 className="vriso-footer-heading">Quick Links</h3>
            <ul className="vriso-footer-list">
              {footerColumns.company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="vriso-footer-link vriso-footer-link--company"
                    aria-label={item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="vriso-footer-quicklinks-services">
              <button
                type="button"
                className="vriso-footer-services-toggle"
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                aria-controls="footer-services"
                id="footer-services-trigger"
              >
                <span className="vriso-footer-services-label">Services</span>
                <span className="vriso-footer-services-arrow" aria-hidden="true">
                  {servicesOpen ? '▾' : '▸'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {servicesOpen && (
                  <motion.ul
                    id="footer-services"
                    aria-labelledby="footer-services-trigger"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="vriso-footer-list vriso-footer-services-list"
                  >
                    {footerColumns.services.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="vriso-footer-link vriso-footer-link--services"
                          aria-label={item}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Contact section */}
          <div className="vriso-footer-column vriso-footer-contact-column">
            <h3 className="vriso-footer-heading">Contact</h3>
            <div className="vriso-footer-contact-items">
              <a
                href="mailto:hello@vriso.ai"
                className="vriso-footer-email vriso-footer-contact-item"
                aria-label="Email VRISO at hello@vriso.ai"
              >
                hello@vriso.ai
              </a>
              <div className="vriso-footer-contact-actions">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="VRISO on LinkedIn"
                  className="vriso-footer-linkedin vriso-footer-contact-item"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 17V10" />
                    <circle cx="8" cy="8" r="1" />
                    <path d="M12 17V10M12 12.5c0-1.38 1.12-2.5 2.5-2.5S17 11.12 17 12.5V17" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="vriso-footer-cta-btn vriso-footer-contact-item"
                  aria-label="Book a call with VRISO"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GEO row */}
        <div className="vriso-footer-geo-row">
          <p className="font-mono text-[11px] tracking-[0.16em] text-footer-muted">
            GLOBAL OPERATIONS
          </p>
          <p className="font-serif text-sm text-footer-subtle">US • EU • India</p>
        </div>

        {/* Compliance row */}
        <div className="vriso-footer-compliance-row" aria-label="Compliance readiness">
          {complianceTags.map((tag) => (
            <div key={tag} className="vriso-footer-compliance-tag glass-tag">
              <span className="vriso-footer-compliance-dot" aria-hidden="true" />
              <span className="font-mono text-[11px] tracking-[0.12em] text-footer-subtle">
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* System status row */}
        <div className="vriso-footer-status-row" aria-label="VRISO system status">
          <span className="font-mono text-[11px] tracking-[0.16em] text-footer-muted">
            SYSTEM STATUS
          </span>
          <div className="flex items-center gap-2">
            <span className="vriso-footer-status-dot" aria-hidden="true" />
            <p className="font-mono text-xs tracking-[0.12em] text-footer-subtle">
              VRISO NETWORK — ACTIVE
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="vriso-footer-bottom">
          <p className="font-mono text-[11px] tracking-[0.16em] text-footer-muted">
            © 2026 VRISO. All rights reserved.
          </p>
          <p className="font-serif text-xs text-footer-subtle">
            Enterprise AI Infrastructure &amp; Automation Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}

