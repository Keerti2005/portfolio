// app/page.jsx
"use client";

import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Achievements from "./components/homepage/achievement/achievement-section";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <ContactSection />
    </div>
  );
}
