'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  readTime: string;
  heading: string;
  excerpt: string;
  author: string;
  href: string;
}

export default function BlogCard({
  imageSrc,
  imageAlt,
  category,
  readTime,
  heading,
  excerpt,
  author,
  href,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none', display: 'block' }}
      aria-label={`Read: ${heading}`}
    >
      <article
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: '0.875rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 300ms ease, box-shadow 300ms ease',
          cursor: 'pointer',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            '0 12px 48px rgba(59,130,246,0.18)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', flexShrink: 0 }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Body */}
        <div
          style={{
            padding: 'clamp(1.25rem, 3vw, 1.75rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            flex: 1,
          }}
        >
          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-trust-amber)',
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
                borderRadius: '0.25rem',
                padding: '0.2rem 0.5rem',
              }}
            >
              {category}
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              {readTime}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              fontWeight: 600,
              lineHeight: 1.3,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {heading}
          </h2>

          {/* Excerpt */}
          <p
            style={{
              fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              margin: 0,
              flex: 1,
            }}
          >
            {excerpt}
          </p>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '0.875rem',
              marginTop: 'auto',
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.1em',
                color: 'var(--color-text-tertiary)',
                textTransform: 'uppercase',
              }}
            >
              {author}
            </span>

            <span
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-link)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
