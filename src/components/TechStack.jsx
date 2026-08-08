"use client";

import { useState } from "react";
import { skillsData } from "../data/portfolioData";
import { 
  Layers, 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Check, 
  Cpu
} from "lucide-react";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Skills", icon: <Layers size={16} /> },
    { id: "frontend", label: "Frontend & UI", icon: <Code2 size={16} /> },
    { id: "backend", label: "Backend & APIs", icon: <Server size={16} /> },
    { id: "databaseCloud", label: "Databases & Cloud", icon: <Database size={16} /> },
    { id: "devopsTools", label: "Tools & DevOps", icon: <Wrench size={16} /> }
  ];

  const getFilteredSkills = () => {
    if (activeTab === "all") {
      return [
        ...skillsData.frontend.map(s => ({ ...s, category: "Frontend" })),
        ...skillsData.backend.map(s => ({ ...s, category: "Backend" })),
        ...skillsData.databaseCloud.map(s => ({ ...s, category: "Databases" })),
        ...skillsData.devopsTools.map(s => ({ ...s, category: "DevOps" }))
      ];
    }
    return (skillsData[activeTab] || []).map(s => ({ ...s, category: activeTab }));
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" style={{ backgroundColor: "rgba(13, 17, 26, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Tech Stack &amp; Competencies</span>
          </div>
          <h2 className="section-title">
            Technologies I Use To Build <br />
            <span className="gradient-text">Modern Web Systems</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical toolkit, modern frameworks, and engineering proficiencies.
          </p>
        </div>

        {/* Tab Selector */}
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "3rem"
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: activeTab === tab.id 
                  ? "1px solid var(--accent-cyan)" 
                  : "1px solid var(--border-color)",
                background: activeTab === tab.id 
                  ? "rgba(0, 242, 254, 0.12)" 
                  : "var(--bg-card)",
                color: activeTab === tab.id 
                  ? "var(--accent-cyan)" 
                  : "var(--text-secondary)",
                boxShadow: activeTab === tab.id 
                  ? "0 0 15px rgba(0, 242, 254, 0.2)" 
                  : "none"
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem"
          }}
        >
          {currentSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem"
              }}
            >
              <div>
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem"
                  }}
                >
                  <span 
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--accent-cyan)",
                      background: "rgba(0, 242, 254, 0.1)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "var(--radius-full)"
                    }}
                  >
                    {skill.tag}
                  </span>
                  <span 
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {skill.name}
                </h4>
              </div>

              {/* Progress Bar */}
              <div>
                <div 
                  style={{
                    width: "100%",
                    height: "6px",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "3px",
                    overflow: "hidden"
                  }}
                >
                  <div 
                    style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      background: "var(--gradient-brand)",
                      borderRadius: "3px",
                      transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div 
          style={{
            marginTop: "3.5rem",
            padding: "2rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-lg)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            textAlign: "center"
          }}
        >
          <div>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-cyan)", marginBottom: "0.3rem" }}>
              React 19 &amp; Next 15
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Latest paradigms &amp; Server Actions
            </div>
          </div>

          <div>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-violet)", marginBottom: "0.3rem" }}>
              TypeScript &amp; Clean JS
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Strict type-safety &amp; modularity
            </div>
          </div>

          <div>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-emerald)", marginBottom: "0.3rem" }}>
              PostgreSQL &amp; Mongo
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Optimized schema design &amp; indexing
            </div>
          </div>

          <div>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-amber)", marginBottom: "0.3rem" }}>
              100/100 Core Vitals
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              SEO, caching &amp; high performance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
