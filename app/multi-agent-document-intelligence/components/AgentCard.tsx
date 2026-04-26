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
    <div className={`relative w-full rounded-2xl border-2 p-4 sm:p-5 transition-all duration-500 ${STATUS_RING[status]}`}>

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-bg-primary border border-white/10 flex items-center justify-center text-lg shrink-0">
          {meta.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-widest">
              Agent {agentNumber}
            </span>
            <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[status]}`} />
          </div>
          <h3 className="font-semibold text-text-primary text-xs sm:text-sm leading-snug mt-0.5 font-serif">
            {meta.name}
          </h3>
          {status === "pending" && (
            <p className="text-[11px] text-text-tertiary mt-0.5 leading-snug">{meta.description}</p>
          )}
        </div>

        {STATUS_BADGE[status] && (
          <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${STATUS_BADGE[status]}`}>
            {status}
          </span>
        )}
      </div>

      {/* Streaming text */}
      {(status === "running" || (status === "done" && streamText)) && (
        <div className="text-[11px] text-text-secondary bg-bg-primary border border-white/8 rounded-lg p-3 max-h-36 overflow-y-auto whitespace-pre-wrap break-words leading-relaxed font-mono">
          {streamText || (
            <span className="text-text-tertiary italic">Waiting for response…</span>
          )}
          {status === "running" && (
            <span className="inline-block w-1.5 h-3.5 bg-link ml-0.5 align-text-bottom animate-pulse rounded-sm" />
          )}
        </div>
      )}

      {/* Error */}
      {status === "error" && error && (
        <p className="text-xs text-red-400 mt-2 bg-red-950/40 rounded-lg p-2 border border-red-800/40">
          {error}
        </p>
      )}

      {/* Agent 2 risk summary */}
      {status === "done" && result && agentNumber === 2 && (
        <RiskSummary result={result as ComplianceResult} />
      )}

      {/* Cache metrics */}
      {status === "done" && metrics && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-[11px]">
          {metrics.cache_read_tokens > 0 && agentNumber > 1 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-trust-amber/10 text-trust-amber border border-trust-amber/25 font-medium">
              ⚡ cache hit · {metrics.cache_read_tokens.toLocaleString()} tokens saved
            </span>
          )}
          <span className="text-text-tertiary font-mono">
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
    <div className="mt-3 flex flex-wrap gap-2">
      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-text-secondary">
        Risk score: <strong className="text-text-primary">{result.overall_risk_score}/10</strong>
      </span>
      {criticalCount > 0 && (
        <span className="text-xs px-2 py-0.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-400">
          {criticalCount} critical
        </span>
      )}
      {highCount > 0 && (
        <span className="text-xs px-2 py-0.5 rounded-full bg-orange-950/60 border border-orange-800/50 text-orange-400">
          {highCount} high
        </span>
      )}
    </div>
  );
}
