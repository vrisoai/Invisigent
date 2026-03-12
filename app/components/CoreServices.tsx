'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { EASE } from '@/app/lib/animations';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Organization', name: 'VRISO' },
  serviceType: 'Enterprise AI Systems',
  description: 'VRISO builds the infrastructure layer for enterprise AI — from sovereign architecture and agent orchestration to global compliance and machine-indexed systems.',
  areaServed: ['US', 'EU', 'India'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Sovereign AI Architecture', description: 'Design private AI infrastructure that organizations fully own, control, and scale without vendor dependency.' },
      { '@type': 'Offer', name: 'Agentic Orchestration', description: 'Deploy intelligent agents that autonomously execute business workflows across operations, finance, and compliance.' },
      { '@type': 'Offer', name: 'Enterprise Automation Systems', description: 'Automate mission-critical workflows with intelligent decision systems and adaptive automation.' },
      { '@type': 'Offer', name: 'AI Technology Consulting', description: 'Strategic consulting for organizations adopting AI infrastructure, automation systems, and intelligent enterprise platforms.' },
      { '@type': 'Offer', name: 'Enterprise Knowledge Intelligence', description: 'Convert fragmented organizational knowledge into AI-ready intelligence layers for decision systems.' },
      { '@type': 'Offer', name: 'Machine Experience Optimization', description: 'Structure digital infrastructure for discoverability by AI agents, search models, and autonomous systems.' },
    ],
  },
};

const CARDS = [
  { label: '[ SOVEREIGNTY ]', title: 'Sovereign AI Architecture', description: 'Design private AI infrastructure that organizations fully own, control, and scale without vendor dependency.' },
  { label: '[ ORCHESTRATION ]', title: 'Agentic Orchestration', description: 'Deploy intelligent agents that autonomously execute business workflows across operations, finance, and compliance.' },
  { label: '[ AUTOMATION ]', title: 'Enterprise Automation Systems', description: 'Automate mission-critical workflows with intelligent decision systems and adaptive automation.' },
  { label: '[ CONSULTING ]', title: 'AI Technology Consulting', description: 'Strategic consulting for organizations adopting AI infrastructure, automation systems, and intelligent enterprise platforms.' },
  { label: '[ KNOWLEDGE ]', title: 'Enterprise Knowledge Intelligence', description: 'Convert fragmented organizational knowledge into AI-ready intelligence layers for decision systems.' },
  { label: '[ MX-OPTIMIZATION ]', title: 'Machine Experience Optimization', description: 'Structure digital infrastructure for discoverability by AI agents, search models, and autonomous systems.' },
];

const NEURAL_NODES: { x: number; y: number }[] = [
  { x: 12, y: 18 }, { x: 28, y: 8 }, { x: 45, y: 22 }, { x: 62, y: 12 }, { x: 78, y: 28 },
  { x: 18, y: 42 }, { x: 35, y: 55 }, { x: 52, y: 48 }, { x: 68, y: 58 }, { x: 85, y: 45 },
  { x: 8, y: 72 }, { x: 25, y: 85 }, { x: 42, y: 78 }, { x: 58, y: 88 }, { x: 75, y: 72 },
  { x: 92, y: 55 }, { x: 15, y: 35 }, { x: 88, y: 18 },
];

const NEURAL_EDGES = (() => {
  const result: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < NEURAL_NODES.length; i++) {
    for (let j = i + 1; j < NEURAL_NODES.length; j++) {
      const dx = NEURAL_NODES[i].x - NEURAL_NODES[j].x;
      const dy = NEURAL_NODES[i].y - NEURAL_NODES[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < 35) {
        result.push({ x1: NEURAL_NODES[i].x, y1: NEURAL_NODES[i].y, x2: NEURAL_NODES[j].x, y2: NEURAL_NODES[j].y });
      }
    }
  }
  return result;
})();

const CARD_HEIGHT = 280;
const CARD_GAP = 42; /* 15% visible */
const SCROLL_PER_CARD = 238; /* 85% overlap */

export function CoreServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardTransforms, setCardTransforms] = useState<number[]>(CARDS.map(() => 0));
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsEl = cardsRef.current;
    if (!section || !cardsEl) return;

    const animate = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const transforms: number[] = [];
      let active = 0;

      for (let i = 0; i < CARDS.length; i++) {
        const scrollForThisCard = sectionTop - i * SCROLL_PER_CARD;
        if (scrollForThisCard > 0) {
          const moveUp = Math.min(scrollForThisCard, SCROLL_PER_CARD) * (CARD_HEIGHT - CARD_GAP) / SCROLL_PER_CARD;
          transforms.push(-moveUp);
          active = i;
        } else {
          transforms.push(0);
        }
      }
      setCardTransforms(transforms);
      setActiveCard(active);
    };

    animate();
    window.addEventListener('scroll', animate, { passive: true });
    return () => window.removeEventListener('scroll', animate);
  }, []);

  return (
    <section ref={sectionRef} className="core-services-section relative w-full" aria-labelledby="core-services-heading">
      <Script id="core-services-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(JSON_LD)}
      </Script>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {NEURAL_EDGES.map((e, i) => (
          <line key={i} x1={`${e.x1}%`} y1={`${e.y1}%`} x2={`${e.x2}%`} y2={`${e.y2}%`} stroke="var(--color-action-accent)" strokeWidth={0.15} opacity={0.12} />
        ))}
        {NEURAL_NODES.map((n, i) => (
          <circle key={i} cx={`${n.x}%`} cy={`${n.y}%`} r={0.3} fill="var(--color-link)" opacity={0.2} />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 50% at 70% 40%, rgba(59,91,219,0.06) 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="section-grid-overlay" aria-hidden="true" />

      <div className="core-services-layout">
        <div className="core-services-left">
          <motion.p className="section-label font-mono" style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', letterSpacing: '0.14em', fontWeight: 500, color: 'var(--color-text-tertiary)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: EASE }}>
            [ CORE SERVICES ]
          </motion.p>
          <motion.h2 id="core-services-heading" className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, lineHeight: 1.15, marginTop: 'clamp(20px, 3vw, 28px)', color: 'var(--color-text-primary)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}>
            Infrastructure for <span className="gradient-text">Sovereign AI Systems</span>
          </motion.h2>
          <motion.p className="font-serif" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.7, marginTop: 'clamp(18px, 2.5vw, 28px)', color: 'var(--color-text-secondary)', maxWidth: 480 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.2, ease: EASE }}>
            VRISO builds the infrastructure layer for enterprise AI — from sovereign architecture and agent orchestration to global compliance and machine-indexed systems.
          </motion.p>
        </div>

        <div ref={cardsRef} className="core-services-cards-column">
          {CARDS.map((card, i) => (
            <div key={card.title} className="core-services-card-slot" style={{ height: SCROLL_PER_CARD }}>
              <article
                className="core-services-stack-card glass-card"
                style={{
                  zIndex: activeCard === i ? 10 : i + 1,
                  transform: `translateY(${cardTransforms[i]}px)`,
                }}
              >
                <p className="font-mono" style={{ fontSize: 'clamp(9px, 2.2vw, 10px)', letterSpacing: '0.14em', fontWeight: 500, color: 'var(--color-text-micro)', borderLeft: '2px solid var(--color-trust-amber)', paddingLeft: 10 }}>
                  {card.label}
                </p>
                <h3 className="font-serif" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', fontWeight: 600, lineHeight: 1.3, marginTop: 12, color: 'var(--color-text-primary)' }}>
                  {card.title}
                </h3>
                <p className="font-serif" style={{ fontSize: 'clamp(14px, 1vw, 16px)', lineHeight: 1.7, marginTop: 10, color: 'var(--color-text-secondary)' }}>
                  {card.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="sr-only">
        Sovereign AI Architecture. Agentic Orchestration. Enterprise Automation Systems. AI Technology Consulting. Enterprise Knowledge Intelligence. Machine Experience Optimization.
      </div>
    </section>
  );
}
