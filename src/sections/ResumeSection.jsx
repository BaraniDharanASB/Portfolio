import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { personalDetails } from '../data/portfolioData';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';

export const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="RESUME"
          title="My Resume"
          subtitle="Download or preview my official resume document highlighting Java Full Stack Developer skills."
          icon={FileText}
        />

        <div className="resume-box">
          <FileText size={48} style={{ color: 'var(--accent-blue)', margin: '0 auto var(--spacing-md) auto' }} />
          <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {personalDetails.name} - Resume
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
            Targeting Java Full Stack Developer / Java Developer Fresher Roles
          </p>

          <div className="resume-preview-placeholder" style={{ borderStyle: 'solid', borderColor: 'var(--border-color)' }}>
            <FileText size={36} style={{ color: 'var(--accent-blue)' }} />
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>BaraniDharan_Resume.pdf</p>
              <p style={{ fontSize: 'var(--font-size-xs)' }}>Verified Official Resume Document</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              href={personalDetails.resumeUrl}
              variant="emerald"
              icon={Download}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume (PDF)
            </Button>
            <Button
              onClick={() => setIsPreviewOpen(true)}
              variant="secondary"
              icon={Eye}
              size="lg"
            >
              Quick Preview
            </Button>
          </div>
        </div>

        <Modal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          title="Resume Document Preview"
        >
          <div style={{ width: '100%', height: '70vh' }}>
            <iframe
              src={personalDetails.resumeUrl}
              title="BaraniDharan Resume Preview"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: 'var(--radius-md)' }}
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ResumeSection;
