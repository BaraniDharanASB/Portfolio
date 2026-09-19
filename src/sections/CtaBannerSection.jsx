import React from 'react';
import { Button } from '../components/ui/Button';
import { personalDetails } from '../data/portfolioData';
import { Mail, Download, Sparkles } from 'lucide-react';

export const CtaBannerSection = () => {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-badge">
            <Sparkles size={16} />
            <span>Recruiter Outreach</span>
          </div>

          <h2 className="cta-banner-title">
            Open to Java Full Stack Developer & Software Developer Opportunities
          </h2>

          <p className="cta-banner-text">
            Looking for a skilled, motivated Java Full Stack Developer fresher to join your engineering team? Let's connect and discuss how I can add value to your organization!
          </p>

          <div className="cta-banner-buttons">
            <Button href="#contact" variant="primary" icon={Mail} size="lg">
              Get In Touch
            </Button>
            <Button
              href={personalDetails.resumeUrl}
              variant="emerald"
              icon={Download}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
