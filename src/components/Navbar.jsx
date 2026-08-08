"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme check
    const savedTheme = localStorage.getItem("mariana_theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("mariana_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: isScrolled ? "0.9rem 0" : "1.75rem 0",
          backgroundColor: isScrolled ? "var(--bg-glass)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent"
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo "M." with red square */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              textDecoration: "none",
              color: "var(--text-main)",
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              lineHeight: 1,
              letterSpacing: "-0.03em"
            }}
          >
            A
            <span
              style={{
                display: "inline-block",
                width: "9px",
                height: "9px",
                backgroundColor: "var(--color-red)",
                marginLeft: "2px",
                marginBottom: "4px"
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2.5rem"
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "var(--text-main)",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  transition: "color var(--transition-fast)",
                  position: "relative"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-main)")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xs)",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-main)",
                cursor: "pointer",
                transition: "all var(--transition-fast)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-red)";
                e.currentTarget.style.color = "var(--color-red)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-main)";
              }}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{
                padding: "0.55rem 1.4rem",
                fontSize: "1.05rem",
                borderRadius: "var(--radius-xs)"
              }}
            >
              LET&apos;S TALK <ArrowUpRight size={18} />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="mobile-nav-toggle"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-main)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem"
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "var(--bg-body)",
            zIndex: 99,
            padding: "6rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            animation: "fadeIn 0.25s ease-out"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  color: "var(--text-main)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  borderBottom: "1px solid var(--border-subtle)",
                  paddingBottom: "0.75rem"
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="btn-primary"
              style={{ width: "100%", padding: "1rem", fontSize: "1.3rem" }}
            >
              LET&apos;S TALK <ArrowUpRight size={22} />
            </button>
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
              {personalInfo.location} • {personalInfo.email}
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
