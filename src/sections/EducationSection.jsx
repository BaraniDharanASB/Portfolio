import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="EDUCATION"
          title="Education"
          subtitle="Academic degree, institutional background, and performance metrics."
          icon={GraduationCap}
        />

        <div className="education-container">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-card-header">
                <div className="education-icon-box">
                  <GraduationCap size={22} />
                </div>
                <div className="education-period">
                  <Calendar size={14} className="education-period-icon" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="education-card-body">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">
                  <Building2 size={15} className="education-inst-icon" />
                  <span>{edu.institution}</span>
                </p>
                <div className="education-score-badge">
                  <Award size={14} />
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
