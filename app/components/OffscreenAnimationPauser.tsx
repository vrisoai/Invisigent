'use client';

/**
 * OffscreenAnimationPauser — pauses looping CSS animations in page sections while they are
 * off-screen and resumes them just before they scroll back into view. Renders nothing.
 *
 * Subtrees marked [data-pause-managed] are skipped: their owner pauses them itself
 * (e.g. the home sticky hero, which never leaves the viewport but does get covered).
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setLoopingAnimationsPaused } from '@/app/lib/pauseAnimations';

const TARGETS = 'section, header, footer';

export function OffscreenAnimationPauser() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setLoopingAnimationsPaused(entry.target, !entry.isIntersecting);
      },
      { rootMargin: '150px 0px' },
    );

    const scan = () => {
      io.disconnect();
      document.querySelectorAll(TARGETS).forEach((el) => {
        /* Outermost targets only — a parent's pause/resume already covers nested sections */
        if (el.parentElement?.closest(TARGETS)) return;
        if (el.closest('[data-pause-managed]')) return;
        io.observe(el);
      });
    };

    /* Scan once the route has painted, then again for sections that mount late (dynamic imports) */
    const frame = requestAnimationFrame(scan);
    const late = window.setTimeout(scan, 1500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(late);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
