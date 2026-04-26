"use client";

import { AgentState, ComplianceResult } from "../types";
import { AGENT_META } from "../constants";

interface Props {
  agentNumber: 1 | 2 | 3;
  agentState: AgentState;
}

const STATUS_RING: Record<string, string> = {
  pending: "border-white/10 bg-white/[0.02]",
  running: "border-link/50 bg-white/[0.02]",
  done:    "border-white/10 bg-white/[0.02]",
  error:   "border-red-800/60 bg-white/[0.02]",
};

const STATUS_DOT: Record<string, string> = {
  pending: "bg-text-tertiary",
  running: "bg-link animate-pulse",
  done:    "bg-emerald-500",
  error:   "bg-red-500",
};

const STATUS_BADGE: Record<string, string> = {
  running: "bg-link/15 text-link border border-link/30",
  done:    "bg-emerald-950/60 text-emerald-400 border border-emerald-800/50",
  error:   "bg-red-950/60 text-red-400 border border-red-800/50",
};

export default function AgentCard({ agentNumber, agentState }: Props) {
  const meta = AGENT_META[agentNumber - 1];
  const { status, streamText, result, metrics, error } = agentState;

  return (
    <div
      className={`relative w-full rounded-2xl border-2 transition-all duration-500 ${STATUS_RING[status]}`}
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", padding: "1.25rem 1.25rem 1rem" }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: "0.75rem", flexShrink: 0,
            background: "var(--color-bg-primary)", border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
          }}
        >
          {meta.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-mono)" }}>
              Agent {agentNumber}
            </span>
            <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[status]}`} />
          </div>
          {/* Use p not h3 — global h3 { font-size: 1.375rem } would override text-sm */}
          <p style={{ fontWeight: 600, fontSize: "0.9375rem", lineHeight: "1.3", color: "var(--color-text-primary)", margin: "0.25rem 0 0", fontFamily: "var(--font-serif)" }}>
            {meta.name}
          </p>
          {status === "pending" && (
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)", margin: "0.3rem 0 0", lineHeight: "1.5" }}>
              {meta.description}
            </p>
          )}
        </div>

        {STATUS_BADGE[status] && (
          <span
            className={STATUS_BADGE[status]}
            style={{ flexShrink: 0, fontSize: "0.625rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.3rem 0.75rem", borderRadius: "9999px" }}
          >
            {status}
          </span>
        )}
      </div>

      {/* Streaming text */}
      {(status === "running" || (status === "done" && streamText)) && (
        <div style={{ padding: "0 1.25rem" }}>
          <div
            style={{
              fontSize: "0.6875rem", color: "var(--color-text-secondary)", background: "var(--color-bg-primary)",
              border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.625rem", padding: "0.875rem",
              maxHeight: "9rem", overflowY: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word",
              lineHeight: "1.6", fontFamily: "var(--font-mono)",
            }}
          >
            {streamText || <span style={{ color: "var(--color-text-tertiary)", fontStyle: "italic" }}>Waiting for response…</span>}
            {status === "running" && (
              <span style={{ display: "inline-block", width: 6, height: 14, background: "var(--color-link)", marginLeft: 2, verticalAlign: "text-bottom", borderRadius: 2, animation: "pulse 1s ease-in-out infinite" }} />
            )}
          </div>
        </div>
      )}

      {/* Error */}
      {status === "error" && error && (
        <div style={{ padding: "0 1.25rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#f87171", background: "rgba(127,29,29,0.3)", borderRadius: "0.625rem", padding: "0.625rem 0.875rem", border: "1px solid rgba(153,27,27,0.4)", margin: 0 }}>
            {error}
          </p>
        </div>
      )}

      {/* Agent 2 risk summary */}
      {status === "done" && result && agentNumber === 2 && (
        <RiskSummary result={result as ComplianceResult} />
      )}

      {/* Cache metrics */}
      {status === "done" && metrics && (
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.375rem 0.75rem", fontSize: "0.6875rem", padding: "0.875rem 1.25rem", marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {metrics.cache_read_tokens > 0 && agentNumber > 1 && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.2rem 0.7rem", borderRadius: "9999px", background: "rgba(251,191,36,0.08)", color: "var(--color-trust-amber)", border: "1px solid rgba(251,191,36,0.2)", fontWeight: 500 }}>
              ⚡ {metrics.cache_read_tokens.toLocaleString()} tokens saved
            </span>
          )}
          <span style={{ color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)" }}>
            {metrics.total_input_tokens.toLocaleString()} in · {metrics.output_tokens.toLocaleString()} out
          </span>
        </div>
      )}
    </div>
  );
}

function RiskSummary({ result }: { result: ComplianceResult }) {
  const criticalCount = result.risk_flags.filter((f) => f.severity === "critical").length;
  const highCount     = result.risk_flags.filter((f) => f.severity === "high").length;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", padding: "0.875rem 1.25rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--color-text-secondary)" }}>
        Risk score: <strong style={{ color: "var(--color-text-primary)" }}>{result.overall_risk_score}/10</strong>
      </span>
      {criticalCount > 0 && (
        <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(127,29,29,0.4)", border: "1px solid rgba(153,27,27,0.5)", color: "#f87171" }}>
          {criticalCount} critical
        </span>
      )}
      {highCount > 0 && (
        <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(124,45,18,0.4)", border: "1px solid rgba(154,52,18,0.5)", color: "#fb923c" }}>
          {highCount} high
        </span>
      )}
    </div>
  );
}
