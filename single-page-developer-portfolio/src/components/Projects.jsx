import Button from "./Button";
import Project from "./Project";
// fai la chiamata API qui e passa i dati a project
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="px-4 pt-4 md:px-10 md:pt-12 xl:px-56 xl:mb-32">
      <header className="mb-8 flex items-center justify-between md:mb-16 xl:mb-24">
        <h2 className="text-4xl font-semibold md:text-7xl xl:text-8xl">Projects</h2>
        <Button href="#contact">Contact me</Button>
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
