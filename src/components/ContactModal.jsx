"use client";

import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { X, Send, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Design",
    budget: "$5k - $10k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = ["Web Design", "UI/UX Design", "Branding", "Full-Stack Development"];
  const budgets = ["$3k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

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
              LET&apos;S TALK
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
              START A PROJECT
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Contact Modal"
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

        {submitted ? (
          <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "var(--color-red-subtle)",
                color: "var(--color-red)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem"
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h4 className="font-display" style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
              MESSAGE RECEIVED!
            </h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: "420px", margin: "0 auto 2rem" }}>
              Thank you for reaching out. Mariana will review your project brief and respond within 24 hours to schedule an introduction call.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Service Selector */}
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                INTERESTED SERVICE
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {services.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: srv })}
                    style={{
                      background: formData.service === srv ? "var(--color-red)" : "var(--bg-muted)",
                      color: formData.service === srv ? "#ffffff" : "var(--text-main)",
                      border: "none",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "2px",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selector */}
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                ESTIMATED BUDGET
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {budgets.map((bdg) => (
                  <button
                    key={bdg}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: bdg })}
                    style={{
                      background: formData.budget === bdg ? "var(--color-red)" : "var(--bg-muted)",
                      color: formData.budget === bdg ? "#ffffff" : "var(--text-main)",
                      border: "none",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "2px",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    {bdg}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email Fields */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.35rem" }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "2px",
                    border: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--bg-muted)",
                    color: "var(--text-main)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem"
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.35rem" }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "2px",
                    border: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--bg-muted)",
                    color: "var(--text-main)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem"
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.35rem" }}>
                PROJECT DETAILS & GOALS
              </label>
              <textarea
                rows={3}
                placeholder="Tell Mariana about your vision, timeline, and key goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "2px",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-muted)",
                  color: "var(--text-main)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  resize: "vertical"
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1.15rem",
                marginTop: "0.5rem"
              }}
            >
              SEND INQUIRY <ArrowUpRight size={20} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
