import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Invisigent',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      <p
        className="font-mono text-xs tracking-[0.2em] uppercase"
        style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.16em' }}
      >
        [ 404 · NOT FOUND ]
      </p>

      <h1
        className="font-serif font-semibold mt-6"
        style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          lineHeight: 1.1,
          color: 'var(--color-text-primary)',
        }}
      >
        This page doesn&apos;t exist.
      </h1>

      <p
        className="font-display mt-4 max-w-sm"
        style={{
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
        }}
      >
        The URL may have changed or the page was removed. Start from the homepage.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/"
          className="btn-base btn-primary"
          aria-label="Go to Invisigent homepage"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="btn-base btn-secondary"
          aria-label="Contact Invisigent"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
