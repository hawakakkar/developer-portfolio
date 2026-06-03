import { useState } from "react";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      {project.featured && (
        <span className="featured-badge">🌟 Featured Project</span>
      )}

      <img src={project.image} alt={project.name} className="project-image" />

      <h3>{project.name}</h3>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="details-btn"
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="project-details">
          <p>{project.description}</p>

          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
