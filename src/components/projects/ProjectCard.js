

const ProjectsCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectsCard;
