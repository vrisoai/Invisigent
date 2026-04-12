'use client';

import { useCallback, useId, useState } from 'react';
import Link from 'next/link';

type FieldErrors = Partial<Record<'keyword' | 'location' | 'websiteUrl' | 'email', string>>;

const initialErrors: FieldErrors = {};

function isLikelyValidUrl(raw: string): boolean {
  const t = raw.trim();
  if (!t) return false;
  try {
    const withProto = /^https?:\/\//i.test(t) ? t : `https://${t}`;
    const u = new URL(withProto);
    return Boolean(
      u.hostname && (u.hostname === 'localhost' || u.hostname.includes('.'))
    );
  } catch {
    return false;
  }
}

export function SearchVisibilityAnalyzerForm() {
  const formId = useId();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FieldErrors>(initialErrors);
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const clearFieldError = useCallback((key: keyof FieldErrors) => {
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }, []);

  const validateClient = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!keyword.trim()) next.keyword = 'Enter the keyword or phrase you want to analyze.';
    if (!location.trim()) next.location = 'Enter a city, region, or market.';
    const urlTrim = websiteUrl.trim();
    if (!urlTrim) {
      next.websiteUrl = 'Enter your website URL.';
    } else if (!isLikelyValidUrl(urlTrim)) {
      next.websiteUrl = 'Enter a valid URL (e.g. example.com or https://example.com).';
    }
    if (!email.trim()) {
      next.email = 'Email is required so we can send your analysis.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [keyword, location, websiteUrl, email]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setSuccess(null);
    if (!validateClient()) return;

    setPending(true);
    try {
      const res = await fetch('/api/search-visibility-analyzer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: keyword.trim(),
          location: location.trim(),
          websiteUrl: websiteUrl.trim(),
          email: email.trim(),
          _honeypot: (e.currentTarget.elements.namedItem('fax') as HTMLInputElement)?.value ?? '',
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string };

      if (!res.ok || !data.ok) {
        setFormError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setSuccess(data.message ?? 'Thank you — we received your request.');
      setKeyword('');
      setLocation('');
      setWebsiteUrl('');
      setEmail('');
      setErrors(initialErrors);
    } catch {
      setFormError('Network error. Check your connection and try again.');
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      id={formId}
      className="search-visibility-form"
      onSubmit={onSubmit}
      noValidate
      aria-describedby={formError ? `${formId}-form-error` : undefined}
    >
      <input
        type="text"
        name="fax"
        tabIndex={-1}
        autoComplete="off"
        className="search-visibility-honeypot"
        aria-hidden="true"
      />

      <div className="search-visibility-field">
        <label htmlFor={`${formId}-keyword`} className="search-visibility-field-label">
          Keyword or phrase
        </label>
        <p id={`${formId}-keyword-hint`} className="search-visibility-field-hint">
          The search term you care about for visibility (e.g. your product category or branded query).
        </p>
        <input
          id={`${formId}-keyword`}
          name="keyword"
          type="text"
          className="search-visibility-input"
          value={keyword}
          onChange={(ev) => {
            setKeyword(ev.target.value);
            clearFieldError('keyword');
          }}
          aria-invalid={Boolean(errors.keyword)}
          aria-describedby={`${formId}-keyword-hint${errors.keyword ? ` ${formId}-keyword-err` : ''}`}
          aria-required="true"
          autoComplete="off"
          placeholder="e.g. enterprise AI consulting"
          disabled={pending}
        />
        {errors.keyword ? (
          <p id={`${formId}-keyword-err`} className="search-visibility-field-error" role="alert">
            {errors.keyword}
          </p>
        ) : null}
      </div>

      <div className="search-visibility-field">
        <label htmlFor={`${formId}-location`} className="search-visibility-field-label">
          Location
        </label>
        <p id={`${formId}-location-hint`} className="search-visibility-field-hint">
          City, region, or country you want results tailored to.
        </p>
        <input
          id={`${formId}-location`}
          name="location"
          type="text"
          className="search-visibility-input"
          value={location}
          onChange={(ev) => {
            setLocation(ev.target.value);
            clearFieldError('location');
          }}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={`${formId}-location-hint${errors.location ? ` ${formId}-location-err` : ''}`}
          aria-required="true"
          autoComplete="address-level2"
          placeholder="e.g. Mumbai, EU, United States"
          disabled={pending}
        />
        {errors.location ? (
          <p id={`${formId}-location-err`} className="search-visibility-field-error" role="alert">
            {errors.location}
          </p>
        ) : null}
      </div>

      <div className="search-visibility-field">
        <label htmlFor={`${formId}-url`} className="search-visibility-field-label">
          Website URL
        </label>
        <p id={`${formId}-url-hint`} className="search-visibility-field-hint">
          The site you want evaluated for this keyword and location.
        </p>
        <input
          id={`${formId}-url`}
          name="websiteUrl"
          type="text"
          inputMode="url"
          className="search-visibility-input"
          value={websiteUrl}
          onChange={(ev) => {
            setWebsiteUrl(ev.target.value);
            clearFieldError('websiteUrl');
          }}
          aria-invalid={Boolean(errors.websiteUrl)}
          aria-describedby={`${formId}-url-hint${errors.websiteUrl ? ` ${formId}-url-err` : ''}`}
          aria-required="true"
          autoComplete="url"
          placeholder="https://yourcompany.com"
          disabled={pending}
        />
        {errors.websiteUrl ? (
          <p id={`${formId}-url-err`} className="search-visibility-field-error" role="alert">
            {errors.websiteUrl}
          </p>
        ) : null}
      </div>

      <div className="search-visibility-field">
        <label htmlFor={`${formId}-email`} className="search-visibility-field-label">
          Email
        </label>
        <p id={`${formId}-email-hint`} className="search-visibility-field-hint">
          We&apos;ll use this to send your visibility summary. See our{' '}
          <Link href="/contact" className="search-visibility-inline-link">
            contact
          </Link>{' '}
          page for other ways to reach us.
        </p>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          className="search-visibility-input"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
            clearFieldError('email');
          }}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={`${formId}-email-hint${errors.email ? ` ${formId}-email-err` : ''}`}
          aria-required="true"
          autoComplete="email"
          placeholder="you@company.com"
          disabled={pending}
        />
        {errors.email ? (
          <p id={`${formId}-email-err`} className="search-visibility-field-error" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p id={`${formId}-form-error`} className="search-visibility-form-error" role="alert">
          {formError}
        </p>
      ) : null}

      {success ? (
        <p className="search-visibility-form-success" role="status" aria-live="polite">
          {success}
        </p>
      ) : null}

      <div className="search-visibility-actions">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={pending}>
          {pending ? 'Sending…' : 'Run visibility check'}
        </button>
      </div>
    </form>
  );
}
