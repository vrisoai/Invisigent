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
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* Only active on fine-pointer (mouse) devices. Must track the query live, not just at mount:
       the same query in globals.css hides the native cursor, so if the device class changes after
       load (DevTools device mode, hybrid laptops) and we didn't follow it, there'd be no pointer at all. */
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    let deactivate: (() => void) | null = null;
    const sync = () => {
      deactivate?.();
      deactivate = mq.matches ? activate(dot, ring) : null;
    };
    sync();
    mq.addEventListener('change', sync);

    return () => {
      mq.removeEventListener('change', sync);
      deactivate?.();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

/** Wires the dot + ring to the mouse; returns a teardown. */
function activate(dot: HTMLDivElement, ring: HTMLDivElement) {
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

  /* Delegated on document so elements added later (navigation, chatbot, etc.) are covered
     without re-scanning the DOM. Matches mouseenter/mouseleave semantics: only fires when
     the pointer crosses the interactive element's own boundary, not between its children. */
  const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label[for]';

  const crossedBoundary = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return false;
    const el = e.target.closest(INTERACTIVE);
    if (!el) return false;
    return !(e.relatedTarget instanceof Node && el.contains(e.relatedTarget));
  };
  const onOver = (e: MouseEvent) => { if (crossedBoundary(e)) onEnterInteractive(); };
  const onOut  = (e: MouseEvent) => { if (crossedBoundary(e)) onLeaveInteractive(); };

  document.addEventListener('mouseover', onOver);
  document.addEventListener('mouseout', onOut);
  window.addEventListener('mousemove', onMove);

  return () => {
    window.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseover', onOver);
    document.removeEventListener('mouseout', onOut);
  };
}
