"use client";

import { personalInfo } from "../data/portfolioData";

export default function TrustedBy() {
  const brands = personalInfo.trustedBy;

  return (
    <section style={{ padding: "3.5rem 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-surface)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            alignItems: "center",
            gap: "2rem"
          }}
          className="trusted-grid"
        >
          {/* Label: TRUSTED BY */}
          <div>
            <span
              className="font-display"
              style={{
                fontSize: "1.4rem",
                color: "var(--color-red)",
                letterSpacing: "0.08em",
                lineHeight: 1
              }}
            >
              TRUSTED BY
            </span>
          </div>

          {/* Marquee or Grid of Client Logos */}
          <div className="marquee-container">
            <div className="marquee-content">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <span
                  key={index}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.85rem",
                    letterSpacing: "0.06em",
                    color: "var(--text-main)",
                    opacity: 0.85,
                    cursor: "default",
                    transition: "opacity var(--transition-fast)"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .trusted-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
