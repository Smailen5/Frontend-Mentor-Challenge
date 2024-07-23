/* eslint-disable no-unused-vars */
import Button from "./Button";
import Project from "./Project";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="px-4 font-spaceGrotesk pt-4">
      <header className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <Button>Contact me</Button>
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
