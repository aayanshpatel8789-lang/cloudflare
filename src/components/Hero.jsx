"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight } from "lucide-react";

export default function Hero({ onOpenContact }) {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Animated Counter for Stats Bar
  useEffect(() => {
    const targets = [6, 80, 40, 12];
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(targets.map((t) => Math.floor(t * Math.min(progress, 1))));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ paddingTop: "7.5rem", position: "relative" }}>
      <div className="container">
        {/* Main Hero Split Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: "2.5rem",
            alignItems: "center",
            minHeight: "calc(82vh - 80px)",
            position: "relative"
          }}
          className="hero-grid"
        >
          {/* Left Column - Bold Editorial Headline */}
          <div style={{ zIndex: 5, paddingBottom: "1.5rem" }}>
            <h1 className="hero-huge-title">
              WEB <span className="hero-asterisk">*</span>
              <br />
              DESIGNER
            </h1>

            <div style={{ marginTop: "1.25rem" }}>
              <h2 className="hero-subtitle-bold">
                {personalInfo.roleHeadline}
                <br />
                <span style={{ color: "var(--color-red)" }}>{personalInfo.roleHighlight}</span>
              </h2>

              <p className="hero-paragraph">
                {personalInfo.subtitle}
              </p>

              {/* View My Work Button */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <a href="#work" className="btn-circle-arrow">
                  <span className="circle-icon">
                    <ArrowRight size={20} />
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "0.05em" }}>
                    VIEW MY WORK
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Editorial Portrait with Red Block & Rotating Badge */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
              minHeight: "560px"
            }}
            className="hero-image-col"
          >
            {/* Red Geometric Background Accent Pillar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "140px",
                height: "92%",
                backgroundColor: "var(--color-red)",
                zIndex: 1,
                display: "flex",
                justifyContent: "flex-end",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-xs)"
              }}
              className="hero-red-block"
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                  fontSize: "1.15rem",
                  letterSpacing: "0.08em",
                  textAlign: "right",
                  lineHeight: 1.15
                }}
              >
                BASED IN
                <br />
                NEW YORK
              </span>
            </div>

            {/* Model Cutout Image with natural 3:4 ratio framed by the red pillar */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: "440px",
                aspectRatio: "3 / 4",
                maxHeight: "560px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                overflow: "hidden",
                marginRight: "45px"
              }}
            >
              <img
                src="/images/hero_model.png"
                alt="Web Designer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  filter: "contrast(1.04)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.4) 86%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.4) 86%, rgba(0,0,0,0) 100%)"
                }}
              />
              {/* Bottom Gradient Blend Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "70px",
                  background: "linear-gradient(to bottom, transparent 0%, var(--bg-body) 100%)",
                  pointerEvents: "none",
                  zIndex: 3
                }}
              />
            </div>

            {/* Circular Floating Rotating Badge */}
            <div
              className="rotating-badge-wrapper"
              style={{
                bottom: "20px",
                left: "5%",
                cursor: "pointer",
                zIndex: 10
              }}
              onClick={onOpenContact}
            >
              {/* Rotating Circular Text SVG */}
              <svg viewBox="0 0 140 140" className="rotating-text-svg">
                <path
                  id="textPathHero"
                  d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                  fill="none"
                />
                <text
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    fill: "var(--text-main)",
                    textTransform: "uppercase"
                  }}
                >
                  <textPath href="#textPathHero" startOffset="0%">
                    • WEB DESIGN • UI/UX • BRANDING
                  </textPath>
                </text>
              </svg>

              {/* Center Inner Badge Text */}
              <div className="rotating-badge-center">
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                  AVAILABLE
                </span>
                <span className="freelance-red" style={{ fontWeight: "bold" }}>
                  FOR FREELANCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Full Width Bar */}
      <div className="stats-bar-full" style={{ marginTop: "3.5rem" }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{counts[0]}+</span>
              <span className="stat-label">YEARS OF EXPERIENCE</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{counts[1]}+</span>
              <span className="stat-label">PROJECTS COMPLETED</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{counts[2]}+</span>
              <span className="stat-label">HAPPY CLIENTS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{counts[3]}</span>
              <span className="stat-label">INDUSTRY AWARDS</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .hero-image-col {
            min-height: 440px !important;
          }
          .hero-red-block {
            width: 65% !important;
          }
          .rotating-badge-wrapper {
            left: 10px !important;
            bottom: 20px !important;
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
