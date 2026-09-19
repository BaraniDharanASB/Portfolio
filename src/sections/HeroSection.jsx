import React from 'react';
import { personalDetails, heroMetrics } from '../data/portfolioData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Download, Mail, Code, Terminal, Server } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-availability-tag">
              <span className="status-dot"></span>
              <span>{personalDetails.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-highlight">{personalDetails.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalDetails.title}</h2>

            <p className="hero-description">{personalDetails.headline}</p>

            <div className="hero-cta-group">
              <Button href="#projects" variant="primary" icon={ArrowRight} size="lg">
                View Projects
              </Button>
              <Button
                href={personalDetails.resumeUrl}
                variant="secondary"
                icon={Download}
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </div>

            <div className="hero-metrics-grid">
              {heroMetrics.map((metric, idx) => (
                <div key={idx} className="hero-metric-item">
                  <span className="hero-metric-value">{metric.value}</span>
                  <span className="hero-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-profile-card">
            <div className="hero-avatar-wrapper">
              <img
                src="/profile-photo.jpeg"
                alt="Barani Dharan A S B - Java Full Stack Developer"
                className="hero-profile-img"
              />
            </div>

            <h3 className="hero-profile-name">{personalDetails.name}</h3>
            <p className="hero-profile-role">{personalDetails.title}</p>

            <div className="hero-quick-tech">
              <Badge variant="blue">Java 17</Badge>
              <Badge variant="emerald">Spring Boot</Badge>
              <Badge variant="blue">React</Badge>
              <Badge variant="amber">MySQL</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
