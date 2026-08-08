"use client";

import { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { ArrowUpRight, Sparkles, Eye } from "lucide-react";

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "WEB DESIGN", "UI/UX DESIGN"];

  const filteredProjects =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" style={{ padding: "6rem 0 4rem", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
        >
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(3.2rem, 7vw, 5.5rem)",
                lineHeight: 0.88,
                color: "var(--text-main)",
                letterSpacing: "0.01em"
              }}
            >
              SELECTED WORK
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {/* Filter Pills */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                background: "var(--bg-surface)",
                padding: "4px",
                borderRadius: "var(--radius-xs)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? "var(--color-red)" : "transparent",
                    color: activeCategory === cat ? "#ffffff" : "var(--text-main)",
                    border: "none",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "2px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View All Projects Link */}
            <a
              href="#work"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--color-red)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
                transition: "transform var(--transition-fast)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              VIEW ALL PROJECTS <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        {/* 3-Column Projects Grid Matching the Reference Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            alignItems: "stretch"
          }}
          className="projects-grid-3"
        >
          {/* Card 1: LUXE STUDIO */}
          <div
            className="project-card"
            style={{
              backgroundColor: "#0d0d10",
              color: "#ffffff",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onClick={() => onSelectProject(projectsData[0])}
          >
            {/* Title & Subtitle */}
            <div style={{ padding: "2rem 1.75rem 1rem", zIndex: 3 }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "3.2rem",
                  lineHeight: 0.88,
                  color: "#ffffff",
                  letterSpacing: "0.02em"
                }}
              >
                LUXE
                <br />
                STUDIO
              </h3>
            </div>

            {/* Image on bottom right / background */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                overflow: "hidden"
              }}
            >
              <img
                src="/images/project_luxe.png"
                alt="Luxe Studio Fashion"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="project-img"
              />
            </div>

            {/* Bottom Meta */}
            <div
              style={{
                padding: "0.85rem 1.75rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "#0d0d10"
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#888890" }}>
                WEB DESIGN
                <br />
                2024
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-display)",
                  color: "var(--color-red)"
                }}
              >
                CASE STUDY <ArrowUpRight size={16} />
              </span>
            </div>
          </div>

          {/* Card 2: ARK HOUSE */}
          <div
            className="project-card"
            style={{
              backgroundColor: "var(--bg-surface)",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onClick={() => onSelectProject(projectsData[1])}
          >
            {/* Title & Subtitle */}
            <div style={{ padding: "2rem 1.75rem 1rem", zIndex: 3 }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "3.2rem",
                  lineHeight: 0.88,
                  color: "var(--text-main)",
                  letterSpacing: "0.02em"
                }}
              >
                ARK
                <br />
                HOUSE
              </h3>
            </div>

            {/* Architecture Image with Angular Red Detail */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                overflow: "hidden"
              }}
            >
              {/* Red geometric block accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "45%",
                  height: "100%",
                  backgroundColor: "var(--color-red)",
                  clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                  zIndex: 2,
                  opacity: 0.95
                }}
              />
              <img
                src="/images/project_ark.png"
                alt="Ark House Architecture"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="project-img"
              />
            </div>

            {/* Bottom Meta */}
            <div
              style={{
                padding: "0.85rem 1.75rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-surface)"
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                WEB DESIGN
                <br />
                2024
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-display)",
                  color: "var(--color-red)"
                }}
              >
                CASE STUDY <ArrowUpRight size={16} />
              </span>
            </div>
          </div>

          {/* Card 3: MODERN LIVING */}
          <div
            className="project-card"
            style={{
              backgroundColor: "#0d0d10",
              color: "#ffffff",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onClick={() => onSelectProject(projectsData[2])}
          >
            {/* Title & Subtitle */}
            <div style={{ padding: "2rem 1.75rem 1rem", zIndex: 3, textAlign: "right" }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "3.2rem",
                  lineHeight: 0.88,
                  color: "#ffffff",
                  letterSpacing: "0.02em"
                }}
              >
                MODERN
                <br />
                LIVING
              </h3>
            </div>

            {/* Phone Mockup Screen */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="/images/project_living.png"
                alt="Modern Living Mobile App"
                style={{
                  width: "85%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="project-img"
              />
            </div>

            {/* Bottom Meta */}
            <div
              style={{
                padding: "0.85rem 1.75rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "#0d0d10"
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#888890" }}>
                UI/UX DESIGN
                <br />
                2023
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-display)",
                  color: "var(--color-red)"
                }}
              >
                CASE STUDY <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .projects-grid-3 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
