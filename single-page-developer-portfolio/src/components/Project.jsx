/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// singolo progetto
import React from "react";
import images from "../data/images.js";
import Button from "./Button.jsx";

const Project = ({ image, title, technologies, liveSite, github }) => {
  // console.log(image);
  return (
    <article>
      <img src={images[image]} alt={title} className="w-full" />
      <h4 className="pb-4 pt-6 text-3xl font-bold uppercase">{title}</h4>
      <div className="flex gap-4">
        {technologies.map((tech) => {
          return (
            <h5 key={tech} className="text-xl uppercase text-neutral-400">
              {tech}
            </h5>
          );
        })}
      </div>
      <div className="flex gap-8 pb-12">
        <Button>view project</Button>
        <Button>view code</Button>
      </div>
    </article>
  );
};

export default Project;
