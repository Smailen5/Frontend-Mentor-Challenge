/* eslint-disable no-unused-vars */
import Button from "./Button";
import Project from "./Project";
// fai la chiamata API qui e passa i dati a project
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="m-4 md:mx-8">
      <header className="flex items-center justify-between">
        <h3 className="text-3xl font-bold md:text-7xl">Projects</h3>
        <Button href="#" type="button">
          contact me
        </Button>
      </header>
      <section className="my-8 flex flex-col gap-8 md:grid md:grid-cols-2 md:my-12 md:gap-y-12">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
