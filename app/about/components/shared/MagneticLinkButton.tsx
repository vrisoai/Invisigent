'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const hasHover = useMediaQuery('(hover: hover)');

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasHover || !linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={linkRef}
      href={href}
      className={className}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: hasHover ? pos.x : 0, y: hasHover ? pos.y : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={
        hasHover
          ? primary
            ? {
                borderColor: 'var(--color-action-accent)',
                boxShadow: '0 0 24px rgba(45,91,255,0.25)',
              }
            : {
                borderColor: 'var(--color-trust-amber)',
                color: 'var(--color-trust-amber)',
                boxShadow: '0 0 24px rgba(251,191,36,0.15)',
              }
          : {}
      }
    >
      {children}
    </motion.a>
  );
}
