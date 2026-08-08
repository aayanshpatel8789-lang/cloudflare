"use client";

import { useState } from "react";
import { servicesData } from "../data/portfolioData";
import { Monitor, Edit3, Star, Code, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Services({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "monitor":
        return <Monitor size={24} />;
      case "pencil":
        return <Edit3 size={24} />;
      case "star":
        return <Star size={24} />;
      case "code":
        return <Code size={24} />;
      default:
        return <Monitor size={24} />;
    }
  };

  return (
    <section id="services" style={{ padding: "5rem 0", position: "relative" }}>
      <div className="container">
        {/* Split Grid: Left Big Red Card + Right 2x2 Services */}
        <div className="services-layout-grid">
          {/* Left Solid Red Card */}
          <div
            className="service-red-card"
            style={{ cursor: "pointer" }}
            onClick={onOpenContact}
          >
            {/* Top Right Black Diagonal Arrow */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ArrowUpRight size={52} color="#0c0c0e" strokeWidth={2.2} />
            </div>

            {/* Bottom Giant Black Title "SERVICES" */}
            <div>
              <h3 className="service-red-card-title">
                SERVICES
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "#0c0c0e",
                  marginTop: "0.75rem",
                  letterSpacing: "0.05em",
                  fontWeight: 600
                }}
              >
                BESPOKE DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* Right 2x2 Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.25rem"
            }}
            className="services-2x2-grid"
          >
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="service-card-item"
                onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                style={{ cursor: "pointer" }}
              >
                {/* Outlined Red Circular Icon */}
                <div className="service-icon-circle">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h4 className="service-item-title">
                    {service.title}
                  </h4>
                  <p className="service-item-desc">
                    {service.description}
                  </p>

                  {/* Expandable Deliverables Badge */}
                  {selectedService?.id === service.id && (
                    <div
                      style={{
                        marginTop: "1.25rem",
                        paddingTop: "1rem",
                        borderTop: "1px dashed var(--border-subtle)",
                        animation: "fadeIn 0.2s ease"
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-red)", marginBottom: "0.5rem" }}>
                        KEY DELIVERABLES:
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {service.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: "var(--color-red-subtle)",
                              color: "var(--color-red)",
                              padding: "0.25rem 0.6rem",
                              borderRadius: "2px",
                              fontSize: "0.8rem",
                              fontFamily: "var(--font-mono)"
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-2x2-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
