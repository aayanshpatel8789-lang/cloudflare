"use client";

import { personalInfo } from "../data/portfolioData";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" style={{ padding: "4rem 0 2rem", position: "relative" }}>
      <div className="container">
        {/* Giant Red CTA Banner */}
        <div className="footer-cta-card">
          <h3 className="footer-cta-title">
            LET&apos;S CREATE
            <br />
            SOMETHING GREAT
            <br />
            TOGETHER.
          </h3>

          <button
            onClick={onOpenContact}
            aria-label="Open Contact Drawer"
            className="footer-circle-button"
          >
            <ArrowUpRight size={46} color="#0c0c0e" strokeWidth={2.4} />
          </button>
        </div>

        {/* Footer Columns Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            padding: "4.5rem 0 3.5rem",
            borderBottom: "1px solid var(--border-subtle)"
          }}
          className="footer-details-grid"
        >
          {/* Get In Touch */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-red)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: "1.25rem"
              }}
            >
              GET IN TOUCH
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  color: "var(--text-main)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.03em",
                  transition: "color var(--transition-fast)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-main)")}
              >
                {personalInfo.email}
              </a>
              <span style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                {personalInfo.phone}
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                {personalInfo.city}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-red)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: "1.25rem"
              }}
            >
              FOLLOW
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "1.05rem",
                    transition: "color var(--transition-fast)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>© 2026 {personalInfo.name.toUpperCase()} DESIGN</div>

          <button
            onClick={scrollToTop}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-main)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-main)")}
          >
            BACK TO TOP <ArrowUp size={14} />
          </button>

          <div>ALL RIGHTS RESERVED</div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 650px) {
          .footer-details-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
