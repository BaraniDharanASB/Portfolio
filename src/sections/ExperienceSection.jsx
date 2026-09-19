import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          badge="EXPERIENCE"
          title="Professional Journey"
          subtitle="Full Stack Java Development internships and practical web engineering experience."
          icon={Briefcase}
        />

        <div className="timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={18} />
              </div>
              <div className="timeline-date">{exp.period}</div>
              <h3 className="timeline-title">{exp.role}</h3>
              <p className="timeline-subtitle">
                {exp.company}{exp.location ? ` • ${exp.location}` : ''}
              </p>
              <p className="timeline-description" style={{ marginBottom: 'var(--spacing-sm)' }}>
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
