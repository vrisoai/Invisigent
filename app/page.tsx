'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  HeroSection,
  ValueProposition,
  CoreServices,
  WhyInvisigent,
  StrategicCTASection,
  InvisigentLogoSection,
  FooterSection,
} from '@/app/components';
import { EASE } from '@/app/lib/animations';
import { setLoopingAnimationsPaused } from '@/app/lib/pauseAnimations';

/* Opacity only — no translateY: transforms on the inner motion layer still confuse stacking with 3D sections above. */
const sectionReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Opaque outer wrapper holds z-index. Slabs 5+ skip Framer opacity on the inner wrapper — a transparent motion layer
 *  composites wrong vs How We Work’s backdrop-filter / 3D cards (CTA looks “under” the insight strip). CTA still animates in-section. */
function HomeOverHeroSlab({ slab, children }: { slab: number; children: ReactNode }) {
  const innerClass = 'min-w-0 w-full';
  if (slab >= 5) {
    return (
      <div className={`home-over-hero-slab home-over-hero-slab--${slab}`}>
        <div className={innerClass}>{children}</div>
      </div>
    );
  }
  return (
    <div className={`home-over-hero-slab home-over-hero-slab--${slab}`}>
      <motion.div
        className={innerClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionReveal}
      >
        {children}
      </motion.div>
    </div>
  );
}

function HomeMobileSlab({ slab, children }: { slab: number; children: ReactNode }) {
  const innerClass = 'home-mobile-section-snap min-w-0 w-full';
  if (slab >= 5) {
    return (
      <div className={`home-mobile-slab home-mobile-slab--${slab}`}>
        <div className={innerClass}>{children}</div>
      </div>
    );
  }
  return (
    <div className={`home-mobile-slab home-mobile-slab--${slab}`}>
      <motion.div
        className={innerClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionReveal}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Mobile: sticky hero fills viewport below nav; stage adds scroll room so section 2 slides over (matches lg+ behavior). */
const NAV = 'var(--nav-h, 64px)';
const HOME_MOBILE_HERO_H = `calc(100svh - ${NAV})`;
const HOME_MOBILE_STAGE_H = `calc(200svh - ${NAV})`;
/** Pull content up so its top sits at 100svh — first paint is hero only, then scroll reveals overlap */
const HOME_MOBILE_CONTENT_MARGIN = `calc(${NAV} - 100svh)`;

/** Tailwind `lg` — must match the `hidden lg:block` / `block lg:hidden` split below */
const DESKTOP_QUERY = '(min-width: 64rem)';

export default function Home() {
  /* Both layouts are server-rendered and CSS picks one (no hydration mismatch, no layout shift).
     Once mounted, drop the layout that CSS is hiding anyway so its DOM, observers and
     animations stop costing anything. null = not measured yet → keep both. */
  const [viewport, setViewport] = useState<'desktop' | 'mobile' | null>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const contentTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const update = () => setViewport(mq.matches ? 'desktop' : 'mobile');
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /* Desktop: the sticky hero never leaves the viewport, it just gets covered by the opaque
     content sheet. Once the sheet's top edge is well above the viewport the hero can't be seen,
     so stop painting it and pause its looping animations until the user scrolls back up. */
  useEffect(() => {
    if (viewport === 'mobile') return;
    const wrapper = heroWrapperRef.current;
    const contentTop = contentTopRef.current;
    if (!wrapper || !contentTop || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(([entry]) => {
      /* height > 0 rules out the display:none case (mobile viewport, before this tree's content unmounts) */
      const covered = !entry.isIntersecting && entry.boundingClientRect.height > 0;
      wrapper.style.visibility = covered ? 'hidden' : '';
      setLoopingAnimationsPaused(wrapper, covered);
    });
    io.observe(contentTop);
    return () => {
      io.disconnect();
      wrapper.style.visibility = '';
      setLoopingAnimationsPaused(wrapper, false);
    };
  }, [viewport]);

  return (
    <main className="home-page" style={{ position: 'relative' }}>
      {/* ── DESKTOP (lg+): sticky hero cover ── */}
      <div className="hidden lg:block">
        {/* Kept mounted on mobile too: it holds the page's only <h1> */}
        <div ref={heroWrapperRef} className="sticky-hero-wrapper" data-pause-managed>
          <HeroSection />
        </div>

        {viewport !== 'mobile' && (
        <div className="content-over-hero">
          {/* Hero-cover sentinel: spans one viewport above the sheet's top edge to 200px below it, so it is
              on-screen exactly while any of the hero could be exposed (plus 200px of lead when scrolling back up).
              Tall rather than zero-height so a jump scroll straight past it still flips its intersection state. */}
          <div
            ref={contentTopRef}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-100vh',
              left: 0,
              width: 1,
              height: 'calc(100vh + 200px)',
              visibility: 'hidden',
              pointerEvents: 'none',
            }}
          />
          <HomeOverHeroSlab slab={1}>
            <ValueProposition />
          </HomeOverHeroSlab>
          <HomeOverHeroSlab slab={2}>
            <CoreServices />
          </HomeOverHeroSlab>
          <HomeOverHeroSlab slab={3}>
            <WhyInvisigent />
          </HomeOverHeroSlab>
          <HomeOverHeroSlab slab={5}>
            <StrategicCTASection />
          </HomeOverHeroSlab>
          <HomeOverHeroSlab slab={6}>
            <InvisigentLogoSection />
          </HomeOverHeroSlab>
          <HomeOverHeroSlab slab={7}>
            <FooterSection />
          </HomeOverHeroSlab>
        </div>
        )}
      </div>

      {/* ── MOBILE/TABLET (<lg): sticky hero + content slides over (no overflow:hidden on main — breaks sticky) ── */}
      {viewport !== 'desktop' && (
      <div className="block lg:hidden" style={{ position: 'relative' }}>
        <div
          className="home-mobile-hero-stage"
          style={{
            position: 'relative',
            zIndex: 0,
            height: HOME_MOBILE_STAGE_H,
          }}
        >
          <div
            id="home-hero-mobile"
            style={{
              position: 'sticky',
              top: NAV,
              height: HOME_MOBILE_HERO_H,
              width: '100%',
              zIndex: 0,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                flex: 1,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <HeroSection headingLevel="div" />
            </div>
          </div>
        </div>

        <div
          className="home-mobile-content-sheet"
          style={{
            position: 'relative',
            zIndex: 1,
            marginTop: HOME_MOBILE_CONTENT_MARGIN,
            background: 'var(--color-bg-section)',
            borderRadius: '20px 20px 0 0',
            borderTop: '1px solid rgba(251, 191, 36, 0.15)',
            boxShadow: '0 -8px 40px rgba(0, 0, 0, 0.45), 0 -1px 0 rgba(251, 191, 36, 0.08)',
            /* Single-axis overflow-x clips/clip + default y:visible makes y compute to auto → nested scrollbar */
            overflow: 'hidden',
          }}
        >
          <HomeMobileSlab slab={1}>
            <ValueProposition />
          </HomeMobileSlab>
          <HomeMobileSlab slab={2}>
            <CoreServices />
          </HomeMobileSlab>
          <HomeMobileSlab slab={3}>
            <WhyInvisigent />
          </HomeMobileSlab>
          <HomeMobileSlab slab={5}>
            <StrategicCTASection />
          </HomeMobileSlab>
          <HomeMobileSlab slab={6}>
            <InvisigentLogoSection />
          </HomeMobileSlab>
          <HomeMobileSlab slab={7}>
            <FooterSection />
          </HomeMobileSlab>
        </div>
      </div>
      )}
    </main>
  );
}
