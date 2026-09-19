import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { certificationsData, achievementsData } from '../data/portfolioData';
import { Award, Trophy } from 'lucide-react';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeader
          badge="CERTIFICATIONS"
          title="Certifications & Achievements"
          subtitle="Professional skill certifications and hackathon achievements."
          icon={Award}
        />

        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={22} style={{ color: 'var(--accent-blue)' }} />
            <span>Certifications</span>
          </h3>
          <div className="certifications-grid">
            {certificationsData.map((cert) => (
              <Card key={cert.id} className="cert-card">
                <div className="cert-icon-wrapper">
                  <Award size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {cert.title}
                  </h4>
                  {cert.issuer && (
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {cert.issuer}
                    </p>
                  )}
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {cert.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Trophy size={22} style={{ color: 'var(--accent-emerald)' }} />
            <span>Key Achievements</span>
          </h3>
          <div className="certifications-grid">
            {achievementsData.map((ach) => (
              <Card key={ach.id} className="cert-card">
                <div className="cert-icon-wrapper" style={{ background: 'var(--accent-emerald-glow)', color: 'var(--accent-emerald)' }}>
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {ach.title}
                  </h4>
                  {ach.organization && (
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {ach.organization}
                    </p>
                  )}
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {ach.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
