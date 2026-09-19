import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { aboutHighlights, personalDetails } from '../data/portfolioData';
import { User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="about-container">
        <SectionHeader
          badge="ABOUT"
          title="About Me"
          subtitle="Targeting Java Full Stack Developer & Java Developer fresher positions with strong foundation in backend microservices and frontend engineering."
          icon={User}
        />

        <div className="about-summary-card">
          <h3 className="about-card-heading">
            Professional Summary
          </h3>
          <p className="about-summary-text">
            {personalDetails.summary}
          </p>
        </div>

        <div className="about-strengths-wrapper">
          <h3 className="about-card-heading strengths-heading">
            Core Technical Strengths
          </h3>
          <div className="core-strengths-grid">
            {aboutHighlights.map((item, index) => (
              <div key={index} className="about-highlight-card">
                <h4 className="about-highlight-title">{item.title}</h4>
                <p className="about-highlight-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
