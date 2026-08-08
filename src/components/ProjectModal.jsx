"use client";

import { X, ExternalLink, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.75rem",
            borderBottom: "1px solid var(--border-subtle)",
            paddingBottom: "1.25rem"
          }}
        >
          <div>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.4rem" }}>
              <span
                style={{
                  background: "var(--color-red-subtle)",
                  color: "var(--color-red)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "2px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700
                }}
              >
                {project.category}
              </span>
              <span
                style={{
                  background: "var(--bg-muted)",
                  color: "var(--text-muted)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "2px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)"
                }}
              >
                {project.year}
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "3.2rem",
                lineHeight: 0.9,
                color: "var(--text-main)",
                letterSpacing: "0.02em"
              }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            style={{
              background: "var(--bg-muted)",
              border: "none",
              color: "var(--text-main)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero Image */}
        <div
          style={{
            width: "100%",
            height: "320px",
            borderRadius: "var(--radius-xs)",
            overflow: "hidden",
            marginBottom: "1.75rem",
            backgroundColor: "#0c0c0e"
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Project Metrics Callout */}
        {project.metrics && (
          <div
            style={{
              background: "var(--color-red-subtle)",
              borderLeft: "3px solid var(--color-red)",
              padding: "1rem 1.25rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-red)", fontWeight: "bold" }}>
              KEY RESULT:
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--text-main)" }}>
              {project.metrics}
            </span>
          </div>
        )}

        {/* Case Study Details Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-red)", marginBottom: "0.4rem" }}>
              THE CHALLENGE
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-red)", marginBottom: "0.4rem" }}>
              THE SOLUTION
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.6rem" }}>
            DELIVERABLES & TOOLS
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.deliverables?.map((del, i) => (
              <span
                key={i}
                style={{
                  background: "var(--bg-muted)",
                  color: "var(--text-main)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "2px",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)"
                }}
              >
                {del}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            className="btn-primary"
            style={{ flex: 1, padding: "0.75rem" }}
          >
            START SIMILAR PROJECT <ArrowUpRight size={18} />
          </button>
          <button
            onClick={onClose}
            className="btn-outline"
            style={{ padding: "0.75rem 1.5rem" }}
          >
            CLOSE PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
