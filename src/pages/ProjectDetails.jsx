import { useParams } from "react-router-dom";
import projects from "../data/project";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className="project-details-page">
      <h2>{project.name}</h2>

      <img src={project.image} alt={project.name} className="project-image" />

      <p>{project.description}</p>

      <p>
        <b>Tech Stack:</b> {project.techStack.join(", ")}
      </p>

      <p>
        <b>Status:</b>{" "}
        {project.featured ? "⭐ Featured Project" : "✅ Completed Project"}
      </p>

      <a href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </section>
  );
}

export default ProjectDetails;
