import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Server, Layout, Database, Wrench } from 'lucide-react';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          badge="SKILLS"
          title="Technical Skills"
          subtitle="Clean breakdown of languages, frameworks, databases, core concepts, and developer tools."
          icon={Cpu}
        />

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const IconComp = iconMap[cat.icon] || Cpu;
            return (
              <Card key={idx}>
                <div className="skill-category-title">
                  <IconComp size={20} style={{ color: 'var(--accent-blue)' }} />
                  <span>{cat.category}</span>
                </div>
                <div className="skill-tags-list">
                  {cat.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant={idx % 2 === 0 ? 'blue' : 'emerald'}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
