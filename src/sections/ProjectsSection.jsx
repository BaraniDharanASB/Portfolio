import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Server, Activity, Kanban, Compass, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/ui/SocialIcons';

const projectIcons = [
  Server,
  Activity,
  Kanban,
  Compass
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="PROJECTS"
          title="Featured Projects"
          subtitle="Modular applications built with Java Spring Boot backend, REST APIs, and React frontend."
          icon={FolderGit2}
        />

        <div className="featured-projects-list">
          {projectsData.map((project, idx) => {
            const IconComponent = projectIcons[idx % projectIcons.length] || Code2;
            return (
              <div key={project.id} className="project-card">
                <div className={`project-icon-box project-icon-box-${idx + 1}`}>
                  <IconComponent size={24} />
                </div>

                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.subtitle}</span>

                <div className="project-tech-stack">
                  {project.techStack.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="blue">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      variant="secondary"
                      size="sm"
                      icon={GithubIcon}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </Button>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button
                      href={project.liveUrl}
                      variant="outline"
                      size="sm"
                      icon={ExternalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
