import { useState } from "react";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      {/* STATUS BADGE */}
      {project.featured && <span className="featured-badge">🌟 Featured</span>}

      {/* IMAGE OR FALLBACK */}
      {project.image ? (
        <img src={project.image} alt={project.name} className="project-image" />
      ) : (
        <div className="project-fallback">{project.name.charAt(0)}</div>
      )}

      {/* TITLE */}
      <h3>{project.name}</h3>

      {/* PROGRESS BAR (REQUIRED) */}
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={project.progress || 0}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-fill"
          style={{ width: `${project.progress || 0}%` }}
        />
      </div>

      {/* TOGGLE DETAILS */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="details-btn"
        aria-expanded={showDetails}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {/* DETAILS SECTION */}
      {showDetails && (
        <div className="project-details">
          <p>{project.description}</p>

          {/* TECH STACK (REUSABLE COMPONENT) */}
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="project-links">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Code
              </a>
            )}
          </div>

          {/* EXTRA INFO (OPTIONAL EXTENSION) */}
          {project.longDescription && (
            <p className="extra-info">{project.longDescription}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
