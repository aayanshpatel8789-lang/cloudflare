"use client";

import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Download, Check, Sparkles } from "lucide-react";

export default function About({ onOpenResume }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    if (onOpenResume) {
      onOpenResume();
    }
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="about" style={{ padding: "6rem 0 4rem", position: "relative" }}>
      <div className="container">
        {/* 3-Column Layout Matching Reference Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.9fr 1.15fr",
            gap: "2.5rem",
            alignItems: "center"
          }}
          className="about-3col-grid"
        >
          {/* Column 1: Story, Headline & Signature */}
          <div>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-red)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: "0.85rem"
              }}
            >
              {personalInfo.aboutTag}
            </span>

            <h3
              className="font-display"
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                lineHeight: 0.92,
                color: "var(--text-main)",
                letterSpacing: "0.01em",
                marginBottom: "1.5rem"
              }}
            >
              {personalInfo.aboutHeadline}
            </h3>

            <p
              style={{
                fontSize: "0.98rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                marginBottom: "2rem"
              }}
            >
              {personalInfo.aboutDescription}
            </p>

            {/* Handwritten Signature */}
            <div>
              <span
                className="font-script"
                style={{
                  fontSize: "3.5rem",
                  color: "var(--text-main)",
                  lineHeight: 1,
                  display: "inline-block",
                  transform: "rotate(-4deg)"
                }}
              >
                {personalInfo.signature}
              </span>
            </div>
          </div>

          {/* Column 2: Portrait with Red Geometry Backdrop */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "380px"
            }}
          >
            {/* Red Accent Geometry Box */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                width: "65%",
                height: "80%",
                backgroundColor: "var(--color-red)",
                zIndex: 1
              }}
            />

            {/* Portrait Cutout Photo */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "90%",
                maxWidth: "320px",
                height: "360px",
                overflow: "hidden"
              }}
            >
              <img
                src="/images/about_portrait.png"
                alt="Mariana Designer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: "contrast(1.08)"
                }}
              />
            </div>
          </div>

          {/* Column 3: Skill Progress Bars & Resume Button */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
              {personalInfo.skills.map((skill) => (
                <div key={skill.name}>
                  {/* Skill Label & Percentage */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem"
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: "1.1rem",
                        letterSpacing: "0.05em",
                        color: "var(--text-main)"
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-main)"
                      }}
                    >
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <button
              onClick={handleDownload}
              className="btn-outline"
              style={{
                width: "100%",
                padding: "0.85rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                fontSize: "1.05rem"
              }}
            >
              {downloaded ? (
                <>
                  <Check size={18} color="var(--color-red)" />
                  RESUME DOWNLOADED
                </>
              ) : (
                <>
                  DOWNLOAD RESUME <Download size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .about-3col-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
