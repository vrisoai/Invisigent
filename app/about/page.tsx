// about/page.tsx
'use client';

import { useEffect, useState } from 'react';
import {
  HeroSection,
  PhilosophySection,
  WhyWeExist,
  HowWeBuild,
  OurFocus,
  WhoWeWorkWith,
  AboutFAQ,
  GlobalContext,
  AboutCTA,
} from '@/app/about/components';
import { InvisigentLogoSection, FooterSection, HowWeWork } from '@/app/components';

/** Native reduced-motion hook — no Framer Motion dependency */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

/**
 * Section 1: sticky hero inside a tall stage — stays pinned while you scroll through the stage.
 * Section 2: normal flow, pulled up with marginTop so it rises from the bottom and paints over the hero (z-index).
 * After the stage scrolls away, everything behaves as a normal document.
 */
const ABOUT_HERO_HEIGHT = '88svh';
/** One viewport of scroll while hero is stuck — time for Philosophy to move up over it */
const ABOUT_OVERLAP_SCROLL = '100svh';
const ABOUT_HERO_STAGE_HEIGHT = `calc(${ABOUT_HERO_HEIGHT} + ${ABOUT_OVERLAP_SCROLL})`;

export default function AboutPage() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="about-page" style={{ position: 'relative' }}>
      {/* Stage: tall enough that sticky hero has room to stay pinned while user scrolls */}
      <div
        style={{
          position: 'relative',
          zIndex: 0,
          height: ABOUT_HERO_STAGE_HEIGHT,
        }}
      >
        <div
          id="hero"
          style={{
            position: 'sticky',
            top: 0,
            height: ABOUT_HERO_HEIGHT,
            width: '100%',
            zIndex: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <HeroSection reducedMotion={reducedMotion} />
        </div>
      </div>

      {/* Philosophy: flows after the stage but pulled up by 100svh so it meets the viewport bottom,
          then scrolls over the stuck hero */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: `-${ABOUT_OVERLAP_SCROLL}`,
          borderRadius: '20px 20px 0 0',
          background: '#121212',
          boxShadow: '0 -8px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <PhilosophySection reducedMotion={reducedMotion} />
      </div>

      <WhyWeExist      reducedMotion={reducedMotion} />
      <HowWeWork />
      <HowWeBuild      reducedMotion={reducedMotion} />
      <OurFocus        reducedMotion={reducedMotion} />
      <WhoWeWorkWith   reducedMotion={reducedMotion} />
      <GlobalContext   reducedMotion={reducedMotion} />
      <AboutFAQ        reducedMotion={reducedMotion} />
      <AboutCTA        reducedMotion={reducedMotion} />
      <InvisigentLogoSection />
      <FooterSection />

      {/* GEO — semantic keyword signals for AI search engines */}
      <div className="sr-only">
        Invisigent enterprise AI infrastructure firm. LangGraph multi-agent orchestration.
        Pinecone RAG pipelines. Enterprise AI consulting. Production AI systems architecture.
        AI automation infrastructure. Agent orchestration systems. Enterprise knowledge systems.
        AI-native product development. GDPR compliant AI. EU AI Act compliance. DPDP Act AI
        infrastructure. Founded in Jaipur, India. Serving global enterprise clients.
        Model-agnostic AI infrastructure. No vendor lock-in AI systems. LangSmith observability.
        n8n FastAPI automation. Docker cloud AI deployment. AI infrastructure engineers.
      </div>
    </main>
  );
}
