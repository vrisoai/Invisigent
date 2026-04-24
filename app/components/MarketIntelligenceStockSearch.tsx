'use client';

import { useCallback, useId, useState } from 'react';

/* ── Types ─────────────────────────────────────────────────────────────────── */
type Financials = {
  ticker: string;
  company_name: string;
  current_price: number;
  previous_close: number;
  pe_ratio: number | null;
  forward_pe: number | null;
  price_to_book: number | null;
  revenue_growth: number | null;
  earnings_growth: number | null;
  market_cap: number | null;
  '52_week_high': number | null;
  '52_week_low': number | null;
  dividend_yield: number | null;
  beta: number | null;
  sector: string | null;
  industry: string | null;
  analyst_target_price: number | null;
  recommendation: string;
  market: string;
  currency: string;
};

type AnalysisResult = {
  ticker: string;
  market: string;
  report: string;
  sentiment_score: number;
  financials: Financials;
  news_summary: string;
};

/* ── Helpers ────────────────────────────────────────────────────────────────── */
function fmt(n: number | null | undefined, decimals = 2): string {
  if (n == null) return '—';
  return n.toFixed(decimals);
}

function fmtPct(n: number | null | undefined): string {
  if (n == null) return '—';
  return `${(n * 100).toFixed(1)}%`;
}

function fmtMarketCap(n: number | null | undefined, currency: string): string {
  if (n == null) return '—';
  if (n >= 1e12) return `${currency}${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9)  return `${currency}${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6)  return `${currency}${(n / 1e6).toFixed(2)}M`;
  return `${currency}${n.toFixed(0)}`;
}

function recLabel(rec: string): string {
  return rec.replace(/_/g, ' ').toUpperCase();
}

function recClass(rec: string): string {
  const r = rec.toLowerCase();
  if (r === 'strong_buy' || r === 'buy') return 'mi-rec--buy';
  if (r === 'strong_sell' || r === 'sell') return 'mi-rec--sell';
  return 'mi-rec--hold';
}

/** Split the markdown-style report into heading+body pairs */
function parseReport(text: string): { heading: string; body: string }[] {
  const sections: { heading: string; body: string }[] = [];
  let heading = '';
  let bodyLines: string[] = [];

  for (const line of text.split('\n')) {
    if (line.startsWith('## ')) {
      if (heading || bodyLines.length) {
        sections.push({ heading, body: bodyLines.join('\n').trim() });
      }
      heading = line.replace(/^##\s*/, '').trim();
      bodyLines = [];
    } else {
      bodyLines.push(line);
    }
  }
  if (heading || bodyLines.length) {
    sections.push({ heading, body: bodyLines.join('\n').trim() });
  }
  return sections.filter(s => s.body);
}

/* ── Result card ─────────────────────────────────────────────────────────── */
function AnalysisResultCard({ result }: { result: AnalysisResult }) {
  const { financials, report, news_summary, market } = result;

  if (!financials) {
    return (
      <div className="mi-result">
        <p className="search-visibility-form-error" role="alert">
          The analysis service returned incomplete data. Please try again.
        </p>
      </div>
    );
  }

  const cur          = financials.currency || '';
  const rec          = (financials.recommendation || '').toLowerCase();
  const currentPrice = financials.current_price  ?? 0;
  const prevClose    = financials.previous_close ?? 0;
  const priceChange    = currentPrice - prevClose;
  const priceChangePct = prevClose ? (priceChange / prevClose) * 100 : 0;
  const isUp = priceChange >= 0;

  const metrics: { label: string; value: string }[] = [
    { label: 'P/E Ratio',       value: fmt(financials.pe_ratio) },
    { label: 'Forward P/E',     value: fmt(financials.forward_pe) },
    { label: 'Price / Book',    value: fmt(financials.price_to_book) },
    { label: 'Market Cap',      value: fmtMarketCap(financials.market_cap, cur) },
    { label: '52W High',        value: financials['52_week_high'] != null ? `${cur}${fmt(financials['52_week_high'])}` : '—' },
    { label: '52W Low',         value: financials['52_week_low']  != null ? `${cur}${fmt(financials['52_week_low'])}` : '—' },
    { label: 'Revenue Growth',  value: fmtPct(financials.revenue_growth) },
    { label: 'Earnings Growth', value: fmtPct(financials.earnings_growth) },
    { label: 'Beta',            value: fmt(financials.beta, 3) },
    { label: 'Dividend Yield',  value: fmtPct(financials.dividend_yield) },
    { label: 'Analyst Target',  value: financials.analyst_target_price != null ? `${cur}${fmt(financials.analyst_target_price)}` : '—' },
    { label: 'Sector',          value: financials.sector || '—' },
  ];

  const reportSections = parseReport(report);
  const newsLines = (news_summary || '').split('\n').filter(Boolean);

  return (
    <div className="mi-result" role="status" aria-live="polite">

      {/* ── Company header ── */}
      <div className="mi-result-header">
        <div className="mi-result-company">
          <h3 className="mi-result-company-name">{financials.company_name}</h3>
          <p className="mi-result-company-meta">
            <span className="mi-ticker-chip">{financials.ticker}</span>
            <span aria-hidden="true"> · </span>
            <span>{market}</span>
          </p>
        </div>
        <span className={`mi-rec-badge ${recClass(rec)}`} aria-label={`Recommendation: ${recLabel(rec)}`}>
          {recLabel(rec)}
        </span>
      </div>

      {/* ── Price ── */}
      <div className="mi-result-price-row">
        <span className="mi-result-price">{cur}{fmt(currentPrice)}</span>
        <span className={`mi-result-change ${isUp ? 'mi-result-change--up' : 'mi-result-change--down'}`}>
          {isUp ? '+' : ''}{fmt(priceChange)} ({isUp ? '+' : ''}{priceChangePct.toFixed(2)}%)
        </span>
        <span className="mi-result-prev-close">prev close {cur}{fmt(prevClose)}</span>
      </div>

      {/* ── Key metrics ── */}
      <div className="mi-result-metrics" aria-label="Key financial metrics">
        {metrics.map(({ label, value }) => (
          <div key={label} className="mi-metric">
            <span className="mi-metric-label">{label}</span>
            <span className="mi-metric-value">{value}</span>
          </div>
        ))}
      </div>

      {/* ── Report ── */}
      {reportSections.length > 0 && (
        <div className="mi-result-report">
          {reportSections.map(({ heading, body }, i) => (
            <div key={i} className="mi-report-section">
              {heading && (
                <h4 className="mi-report-heading">{heading}</h4>
              )}
              <p className="mi-report-body">{body}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── News summary ── */}
      {newsLines.length > 0 && (
        <div className="mi-result-news">
          <h4 className="mi-news-heading">
            <span className="mi-news-dot" aria-hidden="true" />
            News Summary
          </h4>
          <ul className="mi-news-list">
            {newsLines.map((line, i) => (
              <li key={i} className="mi-news-item">
                {line.replace(/^[•·]\s*/, '')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────────────── */
export function MarketIntelligenceStockSearch() {
  const formId = useId();
  const [stock, setStock] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [pending, setPending] = useState(false);

  const clearError = useCallback(() => setError(null), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
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
      const data = (await res.json()) as { ok?: boolean; error?: string; data?: AnalysisResult };

      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      // Handle both flat response and extra-nested { data: { data: ... } }
      const payload = data.data as AnalysisResult & { data?: AnalysisResult };
      setResult((payload?.financials ? payload : payload?.data) ?? null);
      setStock('');
    } catch {
      setError('Network error. Check your connection and try again.');
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="market-intelligence-stock-form-wrap">
      <form
        id={formId}
        className="market-intelligence-stock-form"
        onSubmit={onSubmit}
        noValidate
        aria-describedby={error ? `${formId}-err` : undefined}
      >
        {/* Honeypot */}
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
            onChange={(ev) => { setStock(ev.target.value); clearError(); }}
            aria-invalid={Boolean(error)}
            aria-describedby={`${formId}-hint${error ? ` ${formId}-err` : ''}`}
            aria-required="true"
            autoComplete="off"
            placeholder="Search e.g. MSFT, Tesla…"
            disabled={pending}
            maxLength={120}
          />
          <button
            type="submit"
            className="btn-primary market-intelligence-stock-submit"
            disabled={pending}
          >
            {pending
              ? <><span className="mi-spinner" aria-hidden="true" />Analyzing…</>
              : 'Analyze'}
          </button>
        </div>

        {error && (
          <p id={`${formId}-err`} className="search-visibility-form-error" role="alert">
            {error}
          </p>
        )}
      </form>

      {result && <AnalysisResultCard result={result} />}
    </div>
  );
}
