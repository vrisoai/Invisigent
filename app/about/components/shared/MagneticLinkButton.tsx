'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

interface MagneticLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  primary?: boolean;
}

export function MagneticLinkButton({
  href,
  children,
  className,
  ariaLabel,
  primary = false,
}: MagneticLinkButtonProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const hasHover = useMediaQuery('(hover: hover)');

  // quickTo — zero React state, zero re-renders on every mousemove
  const xTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (!hasHover || !linkRef.current) return;
    xTo.current = gsap.quickTo(linkRef.current, 'x', { duration: 0.4, ease: 'power3.out' });
    yTo.current = gsap.quickTo(linkRef.current, 'y', { duration: 0.4, ease: 'power3.out' });
  }, [hasHover]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasHover || !linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    xTo.current?.((e.clientX - rect.left - rect.width  / 2) * 0.28);
    yTo.current?.((e.clientY - rect.top  - rect.height / 2) * 0.28);
  };

  const handleMouseLeave = () => {
    xTo.current?.(0);
    yTo.current?.(0);
    // Restore default border
    if (linkRef.current) {
      gsap.to(linkRef.current, {
        borderColor: primary ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.10)',
        boxShadow: 'none',
        color: primary ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        duration: 0.3,
      });
    }
  };

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    gsap.to(linkRef.current, {
      borderColor: primary ? 'var(--color-action-accent)' : '#fbbf24',
      boxShadow: primary
        ? '0 0 24px rgba(45,91,255,0.25)'
        : '0 0 20px rgba(251,191,36,0.18)',
      color: primary ? 'var(--color-text-primary)' : '#fbbf24',
      duration: 0.28,
    });
  };

  return (
    <a
      ref={linkRef}
      href={href}
      className={className}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  );
}
