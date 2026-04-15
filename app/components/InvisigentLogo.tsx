'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

const WORD = 'Invisigent';
// Fixed-length — one value per letter (10 chars)
const LEN = WORD.length;

interface InvisigentLogoProps {
  size?: 'sm' | 'lg' | 'full';
}

export function InvisigentLogo({ size = 'sm' }: InvisigentLogoProps) {
  const hasHover = useMediaQuery('(hover: hover)');
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // One pulse value (0→1→0) per letter — declared at top level (fixed count)
  const p0 = useMotionValue(0);
  const p1 = useMotionValue(0);
  const p2 = useMotionValue(0);
  const p3 = useMotionValue(0);
  const p4 = useMotionValue(0);
  const p5 = useMotionValue(0);
  const p6 = useMotionValue(0);
  const p7 = useMotionValue(0);
  const p8 = useMotionValue(0);
  const p9 = useMotionValue(0);
  const pulses = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9];

  // Derived: color and scale per letter
  const c0 = useTransform(p0, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c1 = useTransform(p1, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c2 = useTransform(p2, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c3 = useTransform(p3, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c4 = useTransform(p4, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c5 = useTransform(p5, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c6 = useTransform(p6, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c7 = useTransform(p7, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c8 = useTransform(p8, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const c9 = useTransform(p9, [0, 1], ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)']);
  const colors = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9];

  const s0 = useTransform(p0, [0, 1], [1, 1.15]);
  const s1 = useTransform(p1, [0, 1], [1, 1.15]);
  const s2 = useTransform(p2, [0, 1], [1, 1.15]);
  const s3 = useTransform(p3, [0, 1], [1, 1.15]);
  const s4 = useTransform(p4, [0, 1], [1, 1.15]);
  const s5 = useTransform(p5, [0, 1], [1, 1.15]);
  const s6 = useTransform(p6, [0, 1], [1, 1.15]);
  const s7 = useTransform(p7, [0, 1], [1, 1.15]);
  const s8 = useTransform(p8, [0, 1], [1, 1.15]);
  const s9 = useTransform(p9, [0, 1], [1, 1.15]);
  const scales = [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9];

  const y0 = useTransform(p0, [0, 0.5, 1], [0, -6, 0]);
  const y1 = useTransform(p1, [0, 0.5, 1], [0, -6, 0]);
  const y2 = useTransform(p2, [0, 0.5, 1], [0, -6, 0]);
  const y3 = useTransform(p3, [0, 0.5, 1], [0, -6, 0]);
  const y4 = useTransform(p4, [0, 0.5, 1], [0, -6, 0]);
  const y5 = useTransform(p5, [0, 0.5, 1], [0, -6, 0]);
  const y6 = useTransform(p6, [0, 0.5, 1], [0, -6, 0]);
  const y7 = useTransform(p7, [0, 0.5, 1], [0, -6, 0]);
  const y8 = useTransform(p8, [0, 0.5, 1], [0, -6, 0]);
  const y9 = useTransform(p9, [0, 0.5, 1], [0, -6, 0]);
  const ys = [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9];

  const runPulse = useCallback(() => {
    pulses.forEach((mv, i) => {
      setTimeout(() => {
        animate(mv, [0, 1, 0], {
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        });
      }, i * 100);
    });
  // pulses array is stable — values declared at top level
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9]);

  useEffect(() => {
    const t = setTimeout(() => {
      runPulse();
      const id = setInterval(runPulse, 4000);
      return () => clearInterval(id);
    }, 800);
    return () => clearTimeout(t);
  }, [runPulse]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hasHover) return;
      const rect = e.currentTarget.getBoundingClientRect();
      rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * 18);
      rotateY.set((0.5 - (e.clientX - rect.left) / rect.width) * 18);
    },
    [hasHover, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const handleHoverStart = useCallback(() => {
    if (hasHover) runPulse();
  }, [hasHover, runPulse]);

  const fontSize =
    size === 'full'
      ? 'clamp(2rem, 12vw, 160px)'
      : size === 'lg'
        ? 'clamp(42px, 6vw, 72px)'
        : 'clamp(18px, 2.5vw, 24px)';

  return (
    <motion.div
      className={`relative flex items-center ${size === 'full' ? 'max-w-full min-w-0' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={handleHoverStart}
      style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
    >
      <span
        className="font-display font-medium tracking-[0.08em]"
        style={{ fontSize, fontWeight: 500, display: 'inline-flex', alignItems: 'baseline' }}
      >
        {Array.from({ length: LEN }, (_, i) => (
          <motion.span
            key={i}
            style={{
              display: 'inline-block',
              color: colors[i],
              scaleY: scales[i],
              y: ys[i],
              originY: '100%',
              willChange: 'transform, color',
            }}
          >
            {WORD[i]}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}
