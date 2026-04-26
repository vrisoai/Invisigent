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
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest hidden sm:block">
            LangGraph · Claude · LangSmith
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

            {phase === "uploading" && !state.wakingUp && (
              <p className="text-sm text-link animate-pulse font-mono text-center">
                Uploading and extracting text…
              </p>
            )}
            {phase === "uploading" && state.wakingUp && (
              <div className="w-full rounded-xl border border-trust-amber/25 bg-trust-amber/5 px-5 py-4 text-center space-y-1.5">
                <p className="text-sm font-semibold text-trust-amber font-mono animate-pulse">
                  ⚡ Waking up the server…
                </p>
                <p className="text-xs text-text-tertiary leading-relaxed">
                  The backend is hosted on Render&apos;s free tier and sleeps after inactivity.
                  First request takes <strong className="text-text-secondary">30–60 seconds</strong> — please hold on.
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
          <section className="w-full max-w-5xl">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-widest font-mono">
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
