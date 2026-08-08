"use client";

import { personalInfo, experienceData } from "../data/portfolioData";
import { X, Download, Check, Award, Briefcase, GraduationCap } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
            borderBottom: "1px solid var(--border-subtle)",
            paddingBottom: "1rem"
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--color-red)",
                fontWeight: 700,
                letterSpacing: "0.08em"
              }}
            >
              CURRICULUM VITAE
            </span>
            <h3
              className="font-display"
              style={{
                fontSize: "2.8rem",
                lineHeight: 0.9,
                color: "var(--text-main)",
                letterSpacing: "0.02em"
              }}
            >
              MARIANA DESIGNER
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
              {personalInfo.location} • {personalInfo.email} • {personalInfo.phone}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Resume Modal"
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

        {/* Experience Timeline */}
        <div style={{ marginBottom: "2rem" }}>
          <h4
            className="font-display"
            style={{
              fontSize: "1.4rem",
              color: "var(--color-red)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <Briefcase size={18} /> WORK EXPERIENCE
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {experienceData.map((exp, idx) => (
              <div key={idx} style={{ borderLeft: "2px solid var(--color-red)", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <h5 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--text-main)" }}>
                    {exp.role}
                  </h5>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-red)" }}>
                    {exp.period}
                  </span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-main)", fontWeight: 600, marginBottom: "0.25rem" }}>
                  {exp.company}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div style={{ marginBottom: "2rem" }}>
          <h4
            className="font-display"
            style={{
              fontSize: "1.4rem",
              color: "var(--color-red)",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <Award size={18} /> EXPERTISE & TOOLS
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {["Figma", "Next.js", "React 19", "Art Direction", "Interaction Design", "Design Systems", "Webflow", "Typography", "Conversion Optimization", "Brand Identity"].map((tool, i) => (
              <span
                key={i}
                style={{
                  background: "var(--bg-muted)",
                  color: "var(--text-main)",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "2px",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)"
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Download Action */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="mailto:hello@marianadesign.co?subject=Resume%20Request%20-%20Mariana%20Design"
            className="btn-primary"
            style={{ flex: 1, textDecoration: "none", padding: "0.8rem" }}
          >
            REQUEST OFFICIAL PDF <Download size={18} />
          </a>
          <button onClick={onClose} className="btn-outline" style={{ padding: "0.8rem 1.5rem" }}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
