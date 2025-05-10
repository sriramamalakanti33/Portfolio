import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projectsData';
import './Projects.css';

const ProjectsList = () => {
  const categories = ['Frontend', 'Backend', 'Full-Stack'];

  return (
    <section className="projects-list">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on, showcasing my skills and passion for building web applications.</p>

      <div className="projects-categories">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h3>{category} Projects</h3>
            <div className="project-cards">
              {projectsData.filter(project => project.category === category).length > 0 ? (
                projectsData.filter(project => project.category === category).map(project => (
                  <ProjectCard key={project.title} project={project} />
                ))
              ) : (
                <p className="no-projects-message">No projects available in this category yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
