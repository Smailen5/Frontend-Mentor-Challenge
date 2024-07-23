/* eslint-disable no-unused-vars */
import { ContactMe } from "./Button";
import Project from "./Project";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="px-4 font-spaceGrotesk">
      <header className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <ContactMe>Contact me</ContactMe>
      </header>
      <section>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
