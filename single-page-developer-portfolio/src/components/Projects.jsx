/* eslint-disable no-unused-vars */
import { ContactMe } from "./ContactMe";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="font-spaceGrotesk px-4">
      <header className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <ContactMe>Contact me</ContactMe>
      </header>

    </div>
  );
};

export default Projects;
