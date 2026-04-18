'use client';

/**
 * InvisigentLogo — GSAP "Organic Emerge" (2026)
 *
 * Entry   : Letters float up from below, staggered outward from the centre
 *           letter — expo.out ease, blur clears as they settle.
 * Shimmer : A thin diagonal white-glass highlight sweeps across the full word
 *           every 5 s (like light catching polished metal) — separate overlay
 *           div so it never fights the letter tweens.
 * Tilt    : Full-word 3-D perspective tilt on mouse-move via gsap.quickTo
 *           (zero GC pressure on every mousemove).
 * Hover   : Neighbour-aware magnetic lift — hovered letter rises 12 px and
 *           brightens; ±1 letters rise 5 px; ±2 scale down slightly; all
 *           return with elastic.out so they spring back naturally.
 */

import { useRef, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

gsap.registerPlugin(useGSAP);

// ─── constants ────────────────────────────────────────────────────────────────
const WORD = 'Invisigent';

// Alternating bright/dim gives the logo its signature two-tone look.
// I(b) n(d) v(b) i(d) s(b) i(d) g(b) e(b) n(d) t(b)
const DIM_INDICES = new Set([1, 3, 5, 8]);
const BRIGHT = 'rgba(255,255,255,0.90)';
const DIM    = 'rgba(255,255,255,0.38)';
const baseColor = (i: number) => DIM_INDICES.has(i) ? DIM : BRIGHT;

// ─── component ────────────────────────────────────────────────────────────────
interface InvisigentLogoProps {
  size?: 'sm' | 'lg' | 'full';
}

export function InvisigentLogo({ size = 'sm' }: InvisigentLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shimmerRef   = useRef<HTMLDivElement>(null);
  const letterRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const tiltX        = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const tiltY        = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const shimmerTween = useRef<ReturnType<typeof gsap.to> | null>(null);

  const hasHover   = useMediaQuery('(hover: hover)');
  const isFullSize = size === 'full';

  const fontSize =
    size === 'full'
      ? 'clamp(2rem, 12vw, 160px)'
      : size === 'lg'
        ? 'clamp(42px, 6vw, 72px)'
        : 'clamp(18px, 2.5vw, 24px)';

  // ── GSAP setup ──────────────────────────────────────────────────────────────
  useGSAP(() => {
    const letters   = letterRefs.current.filter(Boolean) as HTMLSpanElement[];
    const container = containerRef.current;
    const shimmer   = shimmerRef.current;
    if (!container || !letters.length) return;

    // 3-D perspective so rotateX/Y look realistic
    gsap.set(container, { transformPerspective: 1200 });

    // ── initial letter state ────────────────────────────────────────────────
    gsap.set(letters, {
      opacity : 0,
      y       : 36,
      scale   : 0.88,
      filter  : 'blur(5px)',
      color   : (i) => baseColor(i),
    });

    // ── ENTRY — centre-out stagger ──────────────────────────────────────────
    gsap.to(letters, {
      opacity : 1,
      y       : 0,
      scale   : 1,
      filter  : 'blur(0px)',
      duration: 0.85,
      ease    : 'expo.out',
      delay   : isFullSize ? 0.65 : 0.25,
      stagger : {
        each : 0.055,
        from : 'center',
      },
    });

    // ── SHIMMER — diagonal light-sweep every 5 s ────────────────────────────
    if (shimmer) {
      const containerW = container.offsetWidth;
      // Park shimmer fully off-screen left; skewX gives the diagonal slash look
      gsap.set(shimmer, { x: -(containerW * 0.25 + 80), skewX: -14 });

      shimmerTween.current = gsap.to(shimmer, {
        x           : containerW + 80,
        duration    : 1.1,
        ease        : 'power1.inOut',
        delay       : isFullSize ? 2.2 : 1.4,   // wait for entry to finish
        repeat      : -1,
        repeatDelay : 4.8,
      });
    }

    // ── quickTo for zero-lag 3-D tilt ──────────────────────────────────────
    tiltX.current = gsap.quickTo(container, 'rotateX', { duration: 0.55, ease: 'power3.out' });
    tiltY.current = gsap.quickTo(container, 'rotateY', { duration: 0.55, ease: 'power3.out' });
  }, { scope: containerRef });

  // ── cleanup ────────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => { shimmerTween.current?.kill(); };
  }, []);

  // ── 3-D tilt ───────────────────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasHover || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    tiltX.current?.(((e.clientY - rect.top)  / rect.height - 0.5) * 11);
    tiltY.current?.((0.5 - (e.clientX - rect.left) / rect.width)  * 11);
  }, [hasHover]);

  const handleMouseLeave = useCallback(() => {
    tiltX.current?.(0);
    tiltY.current?.(0);
    // Reset all letters in case cursor left mid-hover
    const letters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];
    gsap.to(letters, {
      y      : 0,
      scale  : 1,
      color  : (i) => baseColor(i),
      filter : 'none',
      duration: 0.5,
      ease   : 'elastic.out(1, 0.4)',
      overwrite: 'auto',
    });
  }, []);

  // ── neighbour-aware letter hover ───────────────────────────────────────────
  const handleLetterEnter = useCallback((hoveredIdx: number) => {
    if (!hasHover) return;
    const letters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];

    letters.forEach((letter, j) => {
      const dist = Math.abs(j - hoveredIdx);
      const vars: gsap.TweenVars = {
        duration : 0.28,
        ease     : 'power2.out',
        overwrite: 'auto',
      };

      if (dist === 0) {
        Object.assign(vars, {
          y      : isFullSize ? -13 : -7,
          scale  : 1.13,
          color  : '#ffffff',
          filter : 'brightness(1.35)',
        });
      } else if (dist === 1) {
        Object.assign(vars, {
          y    : isFullSize ? -5 : -3,
          scale: 1.05,
        });
      } else if (dist === 2) {
        Object.assign(vars, {
          scale: 0.97,
        });
      } else {
        Object.assign(vars, {
          scale: 0.96,
        });
      }

      gsap.to(letter, vars);
    });
  }, [hasHover, isFullSize]);

  const handleLetterLeave = useCallback((i: number) => {
    const letters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];
    gsap.to(letters, {
      y        : 0,
      scale    : 1,
      color    : (j) => baseColor(j),
      filter   : 'none',
      duration : 0.55,
      ease     : 'elastic.out(1, 0.38)',
      overwrite: 'auto',
    });
  // i intentionally unused — we reset all letters together
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── render ──────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className={`relative flex items-center select-none overflow-hidden${size === 'full' ? ' max-w-full min-w-0' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={WORD}
    >
      {/* ── glass shimmer overlay ── */}
      <div
        ref={shimmerRef}
        aria-hidden="true"
        style={{
          position      : 'absolute',
          top           : '-10%',
          left          : 0,
          width         : '18%',
          height        : '120%',
          background    : `linear-gradient(
            90deg,
            transparent        0%,
            rgba(255,255,255,0.07) 40%,
            rgba(255,255,255,0.13) 50%,
            rgba(255,255,255,0.07) 60%,
            transparent        100%
          )`,
          pointerEvents : 'none',
          zIndex        : 5,
          willChange    : 'transform',
        }}
      />

      {/* ── word ── */}
      <span
        className="font-display font-medium"
        style={{
          fontSize,
          fontWeight   : 500,
          display      : 'inline-flex',
          alignItems   : 'baseline',
          letterSpacing: '0.08em',
          position     : 'relative',
          zIndex       : 6,
        }}
      >
        {Array.from({ length: WORD.length }, (_, i) => (
          <span
            key={i}
            ref={el => { letterRefs.current[i] = el; }}
            style={{ display: 'inline-block', willChange: 'transform, color, filter' }}
            onMouseEnter={() => handleLetterEnter(i)}
            onMouseLeave={() => handleLetterLeave(i)}
          >
            {WORD[i]}
          </span>
        ))}
      </span>
    </div>
  );
}
