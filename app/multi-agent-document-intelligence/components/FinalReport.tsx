"use client";

import type { ReactNode } from "react";
import { SummaryResult, ComplianceResult, ExtractionResult } from "../types";
import { RECOMMENDATION_CONFIG, SEVERITY_COLORS } from "../constants";

interface Props {
  extraction: ExtractionResult;
  compliance: ComplianceResult;
  summary: SummaryResult;
  traceUrl: string | null;
}

/** Render markdown text without an external dependency.
 *  Handles: ## headings, **bold**, bullet lines (- / *), blank lines → paragraphs. */
function SimpleMarkdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: ReactNode[] = [];
  let paraBuffer: string[] = [];

  function flushPara() {
    if (paraBuffer.length === 0) return;
    const content = paraBuffer.join(" ").trim();
    if (content) {
      elements.push(
        <p key={elements.length} className="text-sm text-text-secondary leading-relaxed">
          {renderInline(content)}
        </p>
      );
    }
    paraBuffer = [];
  }

  function renderInline(str: string): ReactNode[] {
    const parts = str.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**")
        ? <strong key={i} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>
        : part
    );
  }

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (/^#{1,3}\s/.test(line)) {
      flushPara();
      const headingText = line.replace(/^#+\s/, "");
      elements.push(
        <h4 key={elements.length} className="text-sm font-semibold text-text-primary mt-4 mb-1 font-serif">
          {headingText}
        </h4>
      );
    } else if (/^[-*]\s/.test(line)) {
      flushPara();
      const itemText = line.replace(/^[-*]\s/, "");
      elements.push(
        <li key={elements.length} className="flex gap-2 text-sm text-text-secondary">
          <span className="text-link mt-0.5 shrink-0 text-xs">▸</span>
          <span>{renderInline(itemText)}</span>
        </li>
      );
    } else if (line === "") {
      flushPara();
    } else {
      paraBuffer.push(line);
    }
  }
  flushPara();

  return <div className="space-y-2">{elements}</div>;
}

export default function FinalReport({ extraction, compliance, summary, traceUrl }: Props) {
  const recConfig = RECOMMENDATION_CONFIG[summary.recommendation] ?? RECOMMENDATION_CONFIG.seek_legal_review;

  return (
    <div className="glass-card overflow-hidden">

      {/* Report header */}
      <div className="px-5 sm:px-6 py-4 border-b border-white/8 flex items-center justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-bold text-text-primary leading-snug font-serif">
            Final Report
          </h2>
          <p className="text-xs text-text-tertiary mt-0.5 truncate">{extraction.document_type}</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${recConfig.color} ${recConfig.bg} ${recConfig.border}`}>
            {recConfig.label}
          </span>

          {traceUrl && (
            <a
              href={traceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-link/10 text-link border border-link/30 hover:bg-link/20 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View trace →
            </a>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">

        {/* Key points */}
        {summary.key_points.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
              Key Points
            </h3>
            <ul className="space-y-2">
              {summary.key_points.map((pt, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                  <span className="text-link mt-0.5 shrink-0 text-xs">▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Executive summary */}
        <div>
          <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
            Executive Summary
          </h3>
          <SimpleMarkdown text={summary.executive_summary_markdown} />
        </div>

        {/* Risk flags */}
        {compliance.risk_flags.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
              Risk Flags
              <span className="ml-2 font-normal text-text-tertiary normal-case tracking-normal">
                overall score: {compliance.overall_risk_score}/10
              </span>
            </h3>
            <div className="space-y-2">
              {compliance.risk_flags.map((flag) => (
                <div
                  key={flag.flag_id}
                  className={`rounded-xl border px-4 py-3 text-xs ${SEVERITY_COLORS[flag.severity]}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold uppercase tracking-widest text-[9px] opacity-80">
                      {flag.severity}
                    </span>
                    <span className="font-semibold">{flag.title}</span>
                  </div>
                  <p className="opacity-80 leading-relaxed">{flag.description}</p>
                  <p className="mt-1.5 font-medium opacity-90">→ {flag.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Entities */}
        {extraction.entities.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
              Extracted Entities
            </h3>
            <div className="flex flex-wrap gap-2">
              {extraction.entities.map((e, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs"
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest text-text-tertiary font-mono">
                    {e.entity_type}
                  </span>
                  <span className="text-text-secondary">{e.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Rationale */}
        <div className="rounded-xl bg-white/[0.03] border border-white/8 px-4 py-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <span className="font-semibold text-text-primary">Rationale: </span>
          {summary.recommendation_rationale}
        </div>

      </div>
    </div>
  );
}
