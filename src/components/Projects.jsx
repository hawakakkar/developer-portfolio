import { useEffect, useState } from "react";
import projects from "../data/project";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdates((prev) => [
        ...prev,
        `Project update received at ${new Date().toLocaleTimeString()}`,
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(filter));

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>

        <button onClick={() => setFilter("React")}>React</button>

        <button onClick={() => setFilter("JavaScript")}>JavaScript</button>

        <button onClick={() => setFilter("CSS")}>CSS</button>
        <button onClick={() => setFilter("Python")}>Python</button>
      </div>

      {filteredProjects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <div className="updates">
        <h3>Live Project Updates</h3>

        {updates.length === 0 ? (
          <p>No updates yet.</p>
        ) : (
          <ul>
            {updates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Projects;
