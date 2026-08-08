"use client";

import { useState, useRef, useEffect } from "react";
import { personalInfo, skillsData } from "../data/portfolioData";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, Trash2 } from "lucide-react";

export default function Terminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Aniket Kumar's Interactive Developer Terminal v2.4" },
    { type: "system", text: "Type 'help' to view available commands, or click the quick command chips below." }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: "user", text: `$ ${cmdStr}` }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • help           - Show this manual
  • about          - Display Aniket's developer bio & background
  • skills         - List core technical proficiencies
  • projects       - Show top Next.js & Full-Stack projects
  • contact        - Display email, phone, and social channels
  • hire           - Fast-track to contact & hire form
  • theme dark     - Switch site to Cyber Dark theme
  • theme light    - Switch site to Clean Light theme
  • cat resume.txt - View developer resume summary
  • clear          - Clear terminal display`
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: `[ANIKET KUMAR - FULL STACK NEXT.JS DEVELOPER]
• Role: Full-Stack Web Developer & UI Engineer
• Location: India (Available worldwide / Remote)
• Focus: Next.js 15, React 19, TypeScript, PostgreSQL, REST/GraphQL APIs
• Experience: 3+ years delivering high-speed web apps with 99%+ satisfaction.`
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `[CORE TECH STACK]
• Frontend: Next.js (App Router), React 19, TypeScript, Vanilla CSS, Tailwind, Zustand
• Backend: Node.js, Express, Next.js Server Actions, REST APIs, GraphQL
• Databases: PostgreSQL, Prisma, MongoDB, Supabase, Redis
• DevOps: Docker, Git & GitHub, Vercel CI/CD, Lighthouse 100/100 Audits`
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `[FEATURED BUILDS]
1. NexusCloud    - Multi-tenant SaaS Platform (Next.js 15, PostgreSQL, Stripe)
2. PulseAI       - AI Content & Analytics Studio (OpenAI API, Streaming UI)
3. DevSphere     - Developer Knowledge Hub & Live Markdown Forum
4. OmniStore     - Ultra-Fast Headless E-Commerce with sub-500ms transitions`
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `[GET IN TOUCH]
• Email:    ${personalInfo.email}
• GitHub:   ${personalInfo.github}
• LinkedIn: ${personalInfo.linkedin}
• Location: ${personalInfo.location}`
        });
        break;

      case "hire":
        newHistory.push({
          type: "output",
          text: "Navigating to contact form... Ready to build something extraordinary together!"
        });
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
        break;

      case "theme dark":
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("ak_theme", "dark");
        newHistory.push({ type: "output", text: "Theme switched to Cyber Dark." });
        break;

      case "theme light":
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("ak_theme", "light");
        newHistory.push({ type: "output", text: "Theme switched to Clean Light." });
        break;

      case "cat resume.txt":
        newHistory.push({
          type: "output",
          text: `ANIKET KUMAR - RESUME SUMMARY
==================================================
Experience:
- Senior Full-Stack Developer (2023 - Present)
- Frontend Developer @ TechNova (2022 - 2023)
- Junior Web Developer @ WebCraft (2021 - 2022)

Key Achievements:
- Boosted web performance by 65% across 20+ client platforms.
- Architected enterprise Next.js App Router applications with zero downtime.
- Integrated high-throughput Stripe & database workflows.`
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not found: "${cmdStr}". Type 'help' for the list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputVal.trim()) {
        executeCommand(inputVal);
      }
    }
  };

  const quickCommands = ["help", "about", "skills", "projects", "contact", "cat resume.txt", "theme dark", "theme light"];

  return (
    <section id="terminal" style={{ backgroundColor: "rgba(7, 9, 14, 0.6)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive CLI</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">Playground &amp; Terminal</span>
          </h2>
          <p className="section-subtitle">
            An interactive command line experience built directly into the browser. Test commands and explore my portfolio in real time.
          </p>
        </div>

        {/* Terminal Window Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 242, 254, 0.15)",
            background: "#080b12"
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.85rem 1.25rem",
              background: "rgba(18, 24, 38, 0.9)",
              borderBottom: "1px solid var(--border-color)",
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
            </div>

            <div
              style={{
                fontSize: "0.825rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
                fontWeight: 600
              }}
            >
              aniket@web-developer-os:~
            </div>

            <button
              onClick={() => setHistory([])}
              title="Clear Terminal"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.75rem"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Trash2 size={14} />
            </button>
          </div>

          {/* Quick Command Chips */}
          <div
            style={{
              padding: "0.75rem 1.25rem",
              background: "rgba(13, 17, 26, 0.7)",
              borderBottom: "1px solid var(--border-color)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
              Quick Commands:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  padding: "0.2rem 0.55rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-cyan)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body */}
          <div
            style={{
              padding: "1.5rem",
              minHeight: "280px",
              maxHeight: "420px",
              overflowY: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              lineHeight: 1.65,
              color: "#e2e8f0"
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "0.75rem" }}>
                {item.type === "system" && (
                  <div style={{ color: "var(--accent-cyan)", fontWeight: 500 }}>
                    {item.text}
                  </div>
                )}
                {item.type === "user" && (
                  <div style={{ color: "#38bdf8", fontWeight: 600 }}>
                    {item.text}
                  </div>
                )}
                {item.type === "output" && (
                  <div style={{ whiteSpace: "pre-wrap", color: "#cbd5e1", paddingLeft: "0.5rem" }}>
                    {item.text}
                  </div>
                )}
                {item.type === "error" && (
                  <div style={{ color: "#f87171", paddingLeft: "0.5rem" }}>
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem" }}>
              <span style={{ color: "var(--accent-emerald)", fontWeight: 700 }}>aniket@dev:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'skills', 'about', 'help')..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#f8fafc",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem"
                }}
                autoFocus
              />
              <button
                onClick={() => {
                  if (inputVal.trim()) executeCommand(inputVal);
                }}
                style={{
                  background: "var(--accent-cyan)",
                  border: "none",
                  borderRadius: "4px",
                  width: "26px",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#000"
                }}
              >
                <CornerDownLeft size={14} />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
