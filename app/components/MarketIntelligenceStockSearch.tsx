'use client';

import { useCallback, useId, useState } from 'react';

export function MarketIntelligenceStockSearch() {
  const formId = useId();
  const [stock, setStock] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const clearError = useCallback(() => setError(null), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const q = stock.trim();
    if (!q) {
      setError('Enter a stock name or ticker symbol.');
      return;
    }

    setPending(true);
    try {
      const res = await fetch('/api/market-intelligence-engine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stock: q,
          _honeypot: (e.currentTarget.elements.namedItem('fax') as HTMLInputElement)?.value ?? '',
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string };

      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setSuccess(data.message ?? 'Request received.');
      setStock('');
    } catch {
      setError('Network error. Check your connection and try again.');
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      id={formId}
      className="market-intelligence-stock-form"
      onSubmit={onSubmit}
      noValidate
      aria-describedby={error ? `${formId}-err` : undefined}
    >
      <input
        type="text"
        name="fax"
        tabIndex={-1}
        autoComplete="off"
        className="search-visibility-honeypot"
        aria-hidden="true"
      />

      <label htmlFor={`${formId}-stock`} className="search-visibility-field-label">
        Stock name or symbol
      </label>
      <p id={`${formId}-hint`} className="search-visibility-field-hint">
        Company name or exchange ticker (e.g. Apple, AAPL).
      </p>
      <div className="market-intelligence-stock-row">
        <input
          id={`${formId}-stock`}
          name="stock"
          type="text"
          className="search-visibility-input market-intelligence-stock-input"
          value={stock}
          onChange={(ev) => {
            setStock(ev.target.value);
            clearError();
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={`${formId}-hint${error ? ` ${formId}-err` : ''}`}
          aria-required="true"
          autoComplete="off"
          placeholder="Search e.g. MSFT, Tesla…"
          disabled={pending}
          maxLength={120}
        />
        <button type="submit" className="btn-primary market-intelligence-stock-submit" disabled={pending}>
          {pending ? 'Analyzing…' : 'Analyze'}
        </button>
      </div>

      {error ? (
        <p id={`${formId}-err`} className="search-visibility-form-error" role="alert">
          {error}
        </p>
      ) : null}

      {success ? (
        <p className="search-visibility-form-success" role="status" aria-live="polite">
          {success}
        </p>
      ) : null}
    </form>
  );
}
