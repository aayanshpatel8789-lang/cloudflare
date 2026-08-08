"use client";

import { testimonialsData } from "../data/portfolioData";
import { MessageSquareQuote, Star, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ backgroundColor: "rgba(13, 17, 26, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={14} />
            <span>Client Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted by Founders &amp; <br />
            <span className="gradient-text">Engineering Teams</span>
          </h2>
          <p className="section-subtitle">
            What clients, product managers, and engineering leaders say about working with Aniket Kumar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}
        >
          {testimonialsData.map((testi, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.5rem"
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "1.25rem" }}>
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic" }}>
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border-color)"
                }}
              >
                <div 
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--gradient-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.9rem"
                  }}
                >
                  {testi.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {testi.name}
                  </h4>
                  <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 500 }}>
                    {testi.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
