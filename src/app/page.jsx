"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import About from "../components/About";
import TrustedBy from "../components/TrustedBy";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import ContactModal from "../components/ContactModal";
import ResumeModal from "../components/ResumeModal";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Selected Work */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Services Section */}
        <Services onOpenContact={() => setIsContactOpen(true)} />

        {/* About Me & Skills */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Trusted By Client Logos Marquee */}
        <TrustedBy />

        {/* Call to Action & Footer */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      {/* Interactive Let's Talk Inquiry Drawer */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
