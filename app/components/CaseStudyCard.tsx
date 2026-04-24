'use client';

import Link from 'next/link';

interface Tag {
  label: string;
}

interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  tags: Tag[];
  href?: string;
  accentColor?: string;
  icon?: React.ReactNode;
}

export default function CaseStudyCard({
  category,
  title,
  description,
  tags,
  href,
  accentColor = '#3B82F6',
  icon,
}: CaseStudyCardProps) {
  const cardContent = (
    <article
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
        cursor: href ? 'pointer' : 'default',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = `0 16px 56px ${accentColor}28`;
        el.style.borderColor = `${accentColor}40`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
        el.style.borderColor = 'var(--color-border)';
      }}
    >
      {/* Visual header */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          padding: 'clamp(2rem, 4vw, 2.75rem)',
          background: `linear-gradient(135deg, #0D0D0D 0%, #161616 60%, ${accentColor}12 100%)`,
          borderBottom: `1px solid ${accentColor}20`,
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          minHeight: '140px',
        }}
      >
        {/* Grid overlay */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${accentColor}08 1px, transparent 1px), linear-gradient(90deg, ${accentColor}08 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            borderRadius: 'inherit',
          }}
        />

        {/* Icon container */}
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            width: '56px',
            height: '56px',
            borderRadius: '0.75rem',
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon ?? (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
              {/* Three-agent pipeline icon */}
              <circle cx="6" cy="14" r="3.5" stroke={accentColor} strokeWidth="1.5" />
              <circle cx="14" cy="14" r="3.5" stroke={accentColor} strokeWidth="1.5" />
              <circle cx="22" cy="14" r="3.5" stroke={accentColor} strokeWidth="1.5" />
              <path d="M9.5 14h1M17.5 14h1" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 7v3M14 18v3" stroke={accentColor} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              <rect x="11" y="3" width="6" height="4" rx="1" stroke={accentColor} strokeWidth="1" opacity="0.4" />
              <rect x="11" y="21" width="6" height="4" rx="1" stroke={accentColor} strokeWidth="1" opacity="0.4" />
            </svg>
          )}
        </div>

        {/* Title block */}
        <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
          <p
            className="font-mono"
            style={{
              fontSize: '0.575rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: accentColor,
              marginBottom: '0.5rem',
              opacity: 0.85,
            }}
          >
            {category}
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
              fontWeight: 700,
              lineHeight: 1.25,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: 'clamp(1.25rem, 3vw, 1.75rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: 'clamp(0.8125rem, 1.5vw, 0.9rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="font-mono"
              style={{
                fontSize: '0.575rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.25rem',
                padding: '0.25rem 0.6rem',
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1rem',
            marginTop: 'auto',
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '0.575rem',
              letterSpacing: '0.1em',
              color: 'var(--color-text-tertiary)',
              textTransform: 'uppercase',
            }}
          >
            Invisigent Build
          </span>

          {href && (
            <span
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: accentColor,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              View Case Study →
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', display: 'block' }} aria-label={`View case study: ${title}`}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
