// singolo progetto
import images from "../data/images.js";
import Button from "./Button.jsx";
import { useGlobalContext } from "../context";
import PropTypes from "prop-types";

// controlla le chiavi che ricevi dalla chiamata API e sostituiscile di conseguenza
const Project = ({ image, title, technologies, liveSite, github }) => {
  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1280;
  // console.log(image);
  return (
    <article className="xl:mb-10">
      <picture className="group xl:relative">
        <source media="(min-width: 1280px)" srcSet={images[image].large} />
        <img src={images[image].small} alt={title} className="w-full" />
        {isDesktop && (
          <div className="absolute right-0 top-0 grid h-full w-full max-w-full place-items-center bg-black/70 opacity-0 transition-opacity duration-500 group-[&:hover]:opacity-100">
            <div className="flex flex-col items-center gap-14">
              <Button href={liveSite} target="_blank">
                view project
              </Button>
              <Button href={github} target="_blank">
                view code
              </Button>
            </div>
          </div>
        )}
      </picture>
      <h4 className="pb-4 pt-6 text-3xl font-bold uppercase">{title}</h4>
      <div className="flex gap-4">
        {technologies.map((tech) => {
          return (
            <h5 key={tech} className="text-xl uppercase text-skin-variant">
              {tech}
            </h5>
          );
        })}
      </div>
      <div className="flex gap-8 pb-12 pt-6 xl:hidden">
        <Button href={liveSite} target="_blank">
          view project
        </Button>
        <Button href={github} target="_blank">
          view code
        </Button>
      </div>
    </article>
  );
};

Project.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  technologies: PropTypes.array,
  liveSite: PropTypes.string,
  github: PropTypes.string,
};

export default Project;
