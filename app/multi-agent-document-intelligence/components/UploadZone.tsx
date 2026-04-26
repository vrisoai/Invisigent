"use client";

import { useRef, useState, DragEvent, ChangeEvent } from "react";
import { SAMPLE_DOCS } from "../constants";
import { loadSampleFile } from "../api";

interface Props {
  onFile: (file: File) => void;
  disabled: boolean;
}

export default function UploadZone({ onFile, disabled }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loadingSample, setLoadingSample] = useState<string | null>(null);

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    const file = e.dataTransfer.files[0];
    if (file?.type === "application/pdf") onFile(file);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onFile(file);
    e.target.value = "";
  }

  async function handleSample(filename: string) {
    if (disabled) return;
    setLoadingSample(filename);
    try {
      const file = await loadSampleFile(filename);
      onFile(file);
    } catch {
      alert("Could not load sample document.");
    } finally {
      setLoadingSample(null);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }}>

      {/* Drop zone */}
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Upload a PDF contract"
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && !disabled && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        style={{
          border: `2px dashed ${isDragging ? "rgba(45,91,255,0.6)" : "rgba(255,255,255,0.12)"}`,
          borderRadius: "1.25rem",
          background: isDragging ? "rgba(45,91,255,0.06)" : "rgba(255,255,255,0.02)",
          padding: "clamp(2.5rem, 8vw, 5rem) clamp(1.25rem, 6vw, 4rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          textAlign: "center",
          opacity: disabled ? 0.45 : 1,
          transition: "border-color 200ms ease, background 200ms ease",
          userSelect: "none",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "clamp(44px, 10vw, 60px)",
            height: "clamp(44px, 10vw, 60px)",
            borderRadius: "0.875rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.6rem",
            background: isDragging ? "rgba(45,91,255,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isDragging ? "rgba(45,91,255,0.35)" : "rgba(255,255,255,0.1)"}`,
            transition: "background 200ms ease, border-color 200ms ease",
            flexShrink: 0,
          }}
        >
          {isDragging ? "📂" : "📄"}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
          <p style={{ fontWeight: 600, color: "var(--color-text-primary)", fontSize: "1rem", margin: 0 }}>
            {isDragging ? "Drop your PDF here" : "Upload a contract PDF"}
          </p>
          <p style={{ color: "var(--color-text-micro)", fontSize: "0.8125rem", margin: 0 }}>
            Drag &amp; drop or tap to browse · max 10 MB
          </p>
        </div>

        {/* Blue CTA */}
        {!disabled && !isDragging && (
          <span
            className="btn-accent"
            style={{ fontSize: "0.875rem", padding: "0.6rem 1.75rem", pointerEvents: "none", marginTop: "0.25rem" }}
          >
            Choose file
          </span>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleChange}
          disabled={disabled}
        />
      </div>

      {/* Sample documents */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          paddingTop: "0.25rem",
        }}
      >
        <span style={{ fontSize: "0.8125rem", color: "var(--color-text-tertiary)", fontWeight: 500, flexShrink: 0 }}>
          Try a sample:
        </span>
        {SAMPLE_DOCS.map((doc) => (
          <button
            key={doc.filename}
            type="button"
            onClick={() => handleSample(doc.filename)}
            disabled={disabled || loadingSample !== null}
            style={{
              fontSize: "0.8125rem",
              padding: "0.35rem 0.9rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--color-text-secondary)",
              opacity: disabled || loadingSample !== null ? 0.35 : 1,
              transition: "border-color 150ms ease, background 150ms ease, color 150ms ease",
              minHeight: 34,
            }}
            onMouseEnter={(e) => {
              if (!disabled && !loadingSample) {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "rgba(45,91,255,0.5)";
                el.style.color = "var(--color-link)";
                el.style.background = "rgba(45,91,255,0.08)";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(255,255,255,0.15)";
              el.style.color = "var(--color-text-secondary)";
              el.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            {loadingSample === doc.filename ? "Loading…" : doc.label}
          </button>
        ))}
      </div>

    </div>
  );
}
