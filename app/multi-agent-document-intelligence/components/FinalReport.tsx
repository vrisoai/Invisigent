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

/** Section label — replaces h3 to avoid global h3 { font-size: 1.375rem } override */
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p style={{
      fontSize: "0.625rem", fontWeight: 600, textTransform: "uppercase",
      letterSpacing: "0.14em", color: "var(--color-text-tertiary)",
      fontFamily: "var(--font-mono)", margin: "0 0 0.875rem",
    }}>
      {children}
    </p>
  );
}

/** Minimal markdown renderer — avoids react-markdown dep and global heading overrides */
function SimpleMarkdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: ReactNode[] = [];
  let paraBuffer: string[] = [];

  function flushPara() {
    if (!paraBuffer.length) return;
    const content = paraBuffer.join(" ").trim();
    if (content) {
      elements.push(
        <p key={elements.length} style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: "1.7", margin: 0 }}>
          {renderInline(content)}
        </p>
      );
    }
    paraBuffer = [];
  }

  function renderInline(str: string): ReactNode[] {
    return str.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**")
        ? <strong key={i} style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{part.slice(2, -2)}</strong>
        : part
    );
  }

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^#{1,3}\s/.test(line)) {
      flushPara();
      /* Use p not h4 — global h4 { font-size: 1.125rem } would override */
      elements.push(
        <p key={elements.length} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-primary)", marginTop: "1rem", marginBottom: "0.25rem", fontFamily: "var(--font-serif)" }}>
          {line.replace(/^#+\s/, "")}
        </p>
      );
    } else if (/^[-*]\s/.test(line)) {
      flushPara();
      elements.push(
        <div key={elements.length} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
          <span style={{ color: "var(--color-link)", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.75rem" }}>▸</span>
          <span>{renderInline(line.replace(/^[-*]\s/, ""))}</span>
        </div>
      );
    } else if (line === "") {
      flushPara();
    } else {
      paraBuffer.push(line);
    }
  }
  flushPara();

  return <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>{elements}</div>;
}

export default function FinalReport({ extraction, compliance, summary, traceUrl }: Props) {
  const recConfig = RECOMMENDATION_CONFIG[summary.recommendation] ?? RECOMMENDATION_CONFIG.seek_legal_review;

  return (
    <div className="glass-card overflow-hidden w-full">

      {/* ── Report header ── */}
      <div style={{
        padding: "clamp(0.875rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        gap: "0.75rem", flexWrap: "wrap",
      }}>
        <div style={{ minWidth: 0 }}>
          {/* p not h2 — global h2 { font-size: clamp(1.75rem…) } would override text-lg */}
          <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-primary)", margin: 0, fontFamily: "var(--font-serif)", lineHeight: "1.3" }}>
            Final Report
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)", margin: "0.2rem 0 0", wordBreak: "break-word" }}>
            {extraction.document_type}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
          <span style={{
            padding: "0.25rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600,
            border: `1px solid currentColor`,
          }} className={`${recConfig.color} ${recConfig.bg} ${recConfig.border}`}>
            {recConfig.label}
          </span>

          {traceUrl && (
            <a
              href={traceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.375rem",
                padding: "0.25rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500,
                background: "rgba(59,130,246,0.1)", color: "var(--color-link)",
                border: "1px solid rgba(59,130,246,0.3)", textDecoration: "none", transition: "background 150ms",
              }}
            >
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View trace →
            </a>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: "clamp(1.25rem, 4vw, 1.75rem) clamp(1rem, 4vw, 1.5rem)", display: "flex", flexDirection: "column", gap: "clamp(1.25rem, 4vw, 2rem)" }}>

        {/* Key points */}
        {summary.key_points.length > 0 && (
          <div>
            <SectionLabel>Key Points</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {summary.key_points.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: "1.65" }}>
                  <span style={{ color: "var(--color-link)", flexShrink: 0, marginTop: "0.2rem", fontSize: "0.75rem" }}>▸</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Executive summary */}
        <div>
          <SectionLabel>Executive Summary</SectionLabel>
          <SimpleMarkdown text={summary.executive_summary_markdown} />
        </div>

        {/* Risk flags */}
        {compliance.risk_flags.length > 0 && (
          <div>
            <SectionLabel>
              Risk Flags
              <span style={{ marginLeft: "0.5rem", fontWeight: 400, textTransform: "none", letterSpacing: "normal", color: "var(--color-text-tertiary)" }}>
                overall score: {compliance.overall_risk_score}/10
              </span>
            </SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {compliance.risk_flags.map((flag) => (
                <div
                  key={flag.flag_id}
                  className={`rounded-xl border ${SEVERITY_COLORS[flag.severity]}`}
                  style={{ fontSize: "0.8125rem", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.8 }}>
                      {flag.severity}
                    </span>
                    <span style={{ fontWeight: 600 }}>{flag.title}</span>
                  </div>
                  <p style={{ opacity: 0.8, lineHeight: "1.6", margin: 0 }}>{flag.description}</p>
                  <p style={{ fontWeight: 500, opacity: 0.9, margin: 0 }}>→ {flag.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Entities */}
        {extraction.entities.length > 0 && (
          <div>
            <SectionLabel>Extracted Entities</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {extraction.entities.map((e, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.375rem",
                    padding: "0.2rem 0.75rem", borderRadius: "9999px",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "0.5625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                    {e.entity_type}
                  </span>
                  <span style={{ color: "var(--color-text-secondary)" }}>{e.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Rationale */}
        <div style={{
          borderRadius: "0.75rem", background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)", padding: "0.875rem 1rem",
          fontSize: "0.8125rem", color: "var(--color-text-secondary)", lineHeight: "1.7",
        }}>
          <span style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>Rationale: </span>
          {summary.recommendation_rationale}
        </div>

      </div>
    </div>
  );
}
