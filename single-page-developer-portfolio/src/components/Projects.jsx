/* eslint-disable no-unused-vars */
import Button from "./Button";
import Project from "./Project";
// fai la chiamata API qui e passa i dati a project
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="m-4">
      <header className="flex items-center justify-between">
        <h3 className="text-3xl font-bold">Projects</h3>
        <Button href="#" type="button">
          contact me
        </Button>
      </header>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
