'use client';

/**
 * CustomCursor — dot + lagging ring, mouse devices only.
 * Dot  : follows instantly  (quickTo duration 0.08s)
 * Ring : follows with lag   (quickTo duration 0.5s)
 * Hidden on touch / coarse-pointer devices via CSS media query.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Only activate on fine-pointer (mouse) devices */
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* Start both off-screen so they don't flash at (0,0) */
    gsap.set([dot, ring], { x: -200, y: -200, opacity: 0 });

    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.08, ease: 'power3.out' });
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.08, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3.out' });

    let visible = false;

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        visible = true;
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    /* Scale ring up on interactive elements */
    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 1.7, duration: 0.25, ease: 'power2.out' });
      gsap.to(dot,  { scale: 0.5, duration: 0.2,  ease: 'power2.out' });
    };
    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1,   duration: 0.3, ease: 'elastic.out(1, 0.5)' });
      gsap.to(dot,  { scale: 1,   duration: 0.2, ease: 'power2.out' });
    };

    const addListeners = () => {
      document.querySelectorAll<HTMLElement>('a, button, [role="button"], input, textarea, select, label[for]').forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };
    addListeners();

    /* Re-attach if new interactive elements are added (e.g. after navigation) */
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      document.querySelectorAll<HTMLElement>('a, button, [role="button"], input, textarea, select, label[for]').forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
