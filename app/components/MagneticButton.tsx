'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  primary?: boolean;
};

export default function MagneticButton(props: MagneticButtonProps) {
  const {
    children,
    primary = false,
    className,
    style,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
    onClick,
    disabled,
    type = 'button',
    id,
    'aria-label': ariaLabel,
  } = props;
  const hasHover = useMediaQuery('(hover: hover)');
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMoveInternal = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!hasHover) return;
    const node = btnRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });

    onMouseMove?.(e);
  };

  const handleMouseLeaveInternal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPos({ x: 0, y: 0 });
    onMouseLeave?.(e);
  };

  const whileHover = hasHover
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
    : {};

  const motionStyle: React.CSSProperties = {
    ...style,
  };

  return (
    <motion.button
      ref={btnRef}
      type={type}
      id={id}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
      className={className}
      style={motionStyle}
      onMouseMove={handleMouseMoveInternal}
      onMouseLeave={handleMouseLeaveInternal}
      animate={{ x: hasHover ? pos.x : 0, y: hasHover ? pos.y : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={whileHover}
    >
      {children}
    </motion.button>
  );
}
