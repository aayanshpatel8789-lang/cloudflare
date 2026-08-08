"use client";

import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { 
  Mail, 
  Send, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Sparkles, 
  Phone
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Next.js Full-Stack App",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", projectType: "Next.js Full-Stack App", message: "" });
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <br />
            <span className="gradient-text">Extraordinary Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need technical leadership, or want to hire a full-stack Next.js engineer? Send a message below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "1050px",
            margin: "0 auto"
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info */}
          <div 
            className="glass-card"
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text-primary)" }}>
                Contact Information
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "2rem" }}>
                I am currently open to exciting full-time remote opportunities, contract development, and technical consulting.
              </p>

              {/* Direct Info List */}
              <div style={{ display: "grid", gap: "1.25rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(0, 242, 254, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)"
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Email</div>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(16, 185, 129, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-emerald)"
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Response Time</div>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      Within 24 Hours
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(168, 85, 247, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-violet)"
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Location</div>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Copy Button */}
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                <span>{copied ? "Email Copied to Clipboard!" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div 
            className="glass-card"
            style={{
              padding: "2.5rem"
            }}
          >
            {formStatus === "success" ? (
              <div 
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem"
                }}
              >
                <div 
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid var(--accent-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-emerald)"
                  }}
                >
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Message Received!</h3>
                <p style={{ color: "var(--text-secondary)", maxWidth: "400px" }}>
                  Thank you for reaching out, Aniket Kumar will review your message and respond promptly within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: "1rem" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                  Send a Direct Message
                </h3>

                {/* Name */}
                <div>
                  <label 
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "inherit",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "inherit",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                {/* Project Category */}
                <div>
                  <label 
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    Project Type / Inquired Service
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "#131926",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "inherit",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  >
                    <option value="Next.js Full-Stack App">Next.js Full-Stack Web App</option>
                    <option value="Frontend & UI/UX Modernization">Frontend &amp; UI/UX Modernization</option>
                    <option value="E-Commerce Platform">Headless E-Commerce Platform</option>
                    <option value="API Integration & Backend">API Integration &amp; Backend</option>
                    <option value="Full-Time Developer Hiring">Full-Time / Contract Developer Role</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label 
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your goals, requirements, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "inherit",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical"
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Send size={16} />
                  <span>{formStatus === "sending" ? "Sending Message..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 880px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
