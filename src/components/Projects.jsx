import { useEffect, useState } from "react";
import projects from "../data/project";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [updates, setUpdates] = useState([]);

  // LIVE PROJECT UPDATES (POLLING)
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdates((prev) => [
        ...prev,
        `Project update received at ${new Date().toLocaleTimeString()}`,
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // FILTER LOGIC
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(filter));

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "React" ? "active" : ""}
          onClick={() => setFilter("React")}
        >
          React
        </button>

        <button
          className={filter === "JavaScript" ? "active" : ""}
          onClick={() => setFilter("JavaScript")}
        >
          JavaScript
        </button>

        <button
          className={filter === "CSS" ? "active" : ""}
          onClick={() => setFilter("CSS")}
        >
          CSS
        </button>

        <button
          className={filter === "Python" ? "active" : ""}
          onClick={() => setFilter("Python")}
        >
          Python
        </button>
      </div>

      {/* PROJECT GRID */}
      {filteredProjects.length === 0 ? (
        <p className="empty-state">No projects found</p>
      ) : (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* LIVE UPDATES SECTION */}
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
