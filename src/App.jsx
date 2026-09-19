import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ResumeSection from './sections/ResumeSection';
import CtaBannerSection from './sections/CtaBannerSection';
import ContactSection from './sections/ContactSection';

import './styles/global.css';
import './styles/components.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/sections.css';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ResumeSection />
        <CtaBannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
