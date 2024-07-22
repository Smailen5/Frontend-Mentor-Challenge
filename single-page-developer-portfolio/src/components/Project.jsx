/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// singolo progetto
import images from "../data/images.js";
import { ContactMe } from "./ContactMe";

const Project = ({ image, title, technologies, liveSite, github }) => {
  // console.log(image);
  return (
    <article>
      <img src={images[image]} alt={title} className="w-full" />
      <h4>{title}</h4>
      <h5>{technologies}</h5>
      <div className="flex justify-between pb-4">
        <ContactMe>view project</ContactMe>
        <ContactMe>view code</ContactMe>
      </div>
    </article>
  );
};

export default Project;
