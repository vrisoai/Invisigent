'use client';

import { useEffect, useRef, type ReactNode } from 'react';

const MD_MIN = 768;

/**
 * Mobile: horizontal scroll strip — middle card default, ~80vw width, ~7vw peek of neighbors.
 * md+: inert shell (md:contents); track is a normal 3-column grid.
 * Middle card aligns when the carousel enters the viewport (not only on first paint).
 */
export function InteractiveDemoDeploymentCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const wasIntersectingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const alignMiddleCard = () => {
      if (typeof window === 'undefined' || window.innerWidth >= MD_MIN) {
        el.scrollLeft = 0;
        return;
      }
      const slides = el.querySelectorAll('article.interactive-demo-deployment-card');
      const mid = slides[1] as HTMLElement | undefined;
      if (!mid) return;
      const peek = el.clientWidth * 0.07;
      el.scrollLeft = Math.max(0, mid.offsetLeft - peek);
    };

    const runAlign = () => {
      requestAnimationFrame(() => requestAnimationFrame(alignMiddleCard));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (window.innerWidth >= MD_MIN) return;

        if (entry.isIntersecting) {
          if (!wasIntersectingRef.current) {
            wasIntersectingRef.current = true;
            runAlign();
          }
        } else {
          wasIntersectingRef.current = false;
        }
      },
      { threshold: 0.14, root: null, rootMargin: '0px' }
    );

    observer.observe(el);

    window.addEventListener('resize', alignMiddleCard);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', alignMiddleCard);
    };
  }, []);

  return (
    <div className="interactive-demo-deployment-carousel-shell w-full md:contents">
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        aria-label="From demo to deployment steps"
        className="interactive-demo-deployment-carousel-track interactive-demo-deployment-grid grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:items-stretch"
      >
        {children}
      </div>
    </div>
  );
}
