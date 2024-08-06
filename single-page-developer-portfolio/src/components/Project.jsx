/* eslint-disable no-unused-vars */
// singolo progetto
import images from "../data/images.js";
import Button from "./Button.jsx";
import { useGlobalContext } from "../context.jsx";
import PropTypes from "prop-types";

// controlla le chiavi che ricevi dalla chiamata API e sostituiscile di conseguenza
const Project = ({ image, title, technologies, liveSite, github }) => {
  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1280;

  console.log(images[image].large);

  // console.log(image);
  return (
    <article className="">
      <picture>
        <source media="(min-width: 1280px)" srcSet={images[image].large} />
        <img src={images[image].small} alt={title} />
      </picture>

      <div className="my-4 flex flex-col gap-4">
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        <div className="flex flex-wrap gap-4 uppercase text-skin-variant md:text-xl">
          {technologies.map((tech) => (
            <h4 key={tech}>{tech}</h4>
          ))}
        </div>
        <div className="flex gap-8">
          <Button href={liveSite} target="_blank">
            view project
          </Button>
          <Button href={github} target="_blank">
            view code
          </Button>
        </div>
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
