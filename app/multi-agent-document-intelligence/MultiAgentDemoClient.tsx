"use client";

import Link from "next/link";
import { usePipeline } from "./usePipeline";
import UploadZone from "./components/UploadZone";
import AgentPipeline from "./components/AgentPipeline";
import FinalReport from "./components/FinalReport";
import type { ExtractionResult, ComplianceResult, SummaryResult } from "./types";

export default function MultiAgentDemoClient() {
  const { state, startPipeline, reset } = usePipeline();
  const { phase, agents, traceUrl } = state;

  const isBusy = phase === "uploading" || phase === "streaming";
  const isDone  = phase === "done";

  const agent1Result = agents[0].result as ExtractionResult | null;
  const agent2Result = agents[1].result as ComplianceResult | null;
  const agent3Result = agents[2].result as SummaryResult | null;

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">

      {/* ── Sub-nav bar ── */}
      <div
        className="border-b border-white/5 bg-bg-primary/95 backdrop-blur-sm sticky z-30"
        style={{ top: "calc(var(--nav-h, 64px) + 37px)" }}
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
          <span className="flex-1 text-[10px] font-mono text-text-tertiary uppercase tracking-widest hidden sm:block text-center">
            LangGraph · OpenAI · LangSmith
          </span>
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            {phase === "streaming" && (
              <span className="inline-flex items-center gap-1.5 text-xs text-link font-mono">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-link animate-pulse" />
                Live
              </span>
            )}
            {phase !== "idle" && (
              <button
                type="button"
                onClick={reset}
                disabled={isBusy}
                className="text-xs text-text-tertiary hover:text-text-secondary disabled:opacity-40 transition-colors"
              >
                ← New document
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Page body ── */}
      <div className="w-full px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-center gap-12 sm:gap-16">

        {/* ── Upload section — narrow + centered ── */}
        {(phase === "idle" || phase === "uploading" || phase === "error") && (
          <section className="w-full max-w-xl flex flex-col items-center gap-8">
            <div className="text-center" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <p
                className="font-serif font-bold tracking-tight text-text-primary"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: "1.2", margin: 0, paddingTop: "2rem" }}
              >
                Analyze any contract in seconds
              </p>
              <p
                className="text-text-secondary leading-relaxed"
                style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)", maxWidth: "34ch", margin: "0 auto" }}
              >
                Three AI agents extract entities, assess risk, and generate an executive summary — live.
              </p>
            </div>

            <div className="w-full">
              <UploadZone onFile={startPipeline} disabled={isBusy} />
            </div>

            {phase === "uploading" && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-7 h-7 rounded-full border-2 border-white/10 border-t-link animate-spin" />
                <p className="text-xs text-text-tertiary font-mono text-center">
                  {state.wakingUp ? "Starting up — this may take a moment…" : "Uploading…"}
                </p>
              </div>
            )}
            {phase === "error" && state.errorMessage && (
              <div className="w-full p-4 rounded-xl bg-red-950/40 border border-red-800/50 text-sm text-red-400 text-center">
                {state.errorMessage}
              </div>
            )}
          </section>
        )}

        {/* ── Agent pipeline — full readable width ── */}
        {(phase === "streaming" || phase === "done") && (
          <section className="w-full max-w-5xl pt-4 sm:pt-6">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0", marginBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "var(--font-mono)", margin: 0 }}>
                {phase === "streaming" ? "Agents processing…" : "Analysis complete"}
              </p>
              {phase === "streaming" && (
                <span className="inline-flex items-center gap-1.5 text-xs text-link font-mono">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-link animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <AgentPipeline pipelineState={state} />
          </section>
        )}

        {/* ── Final report ── */}
        {isDone && agent1Result && agent2Result && agent3Result && (
          <section className="w-full max-w-4xl">
            <FinalReport
              extraction={agent1Result}
              compliance={agent2Result}
              summary={agent3Result}
              traceUrl={traceUrl}
            />
          </section>
        )}

        {/* ── Back link ── */}
        {isDone && (
          <Link
            href="/interactive-demo"
            className="text-xs text-text-tertiary hover:text-text-secondary transition-colors font-mono pb-6"
          >
            ← Back to all demos
          </Link>
        )}

      </div>
    </main>
  );
}
