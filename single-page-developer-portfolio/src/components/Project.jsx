/* eslint-disable no-unused-vars */
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
  return <article className="">project</article>;
};

Project.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  technologies: PropTypes.array,
  liveSite: PropTypes.string,
  github: PropTypes.string,
};

export default Project;
