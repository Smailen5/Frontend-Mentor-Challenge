/* eslint-disable no-unused-vars */
import Button from "./Button";
import Project from "./Project";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="px-4 pt-4 md:px-10 md:pt-12">
      <header className="mb-8 flex items-center justify-between md:mb-16">
        <h2 className="text-4xl font-semibold md:text-7xl">Projects</h2>
        <Button>Contact me</Button>
      </header>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:mb-12">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
