/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// singolo progetto
import React from "react";
import images from "../data/images.js";
import Button from "./Button.jsx";

const Project = ({ image, title, technologies, liveSite, github }) => {
  // console.log(image);
  return (
    <article className="xl:mb-10">
      <picture className="group xl:relative">
        <source media="(min-width: 1280px)" srcSet={images[image].large} />
        <img src={images[image].small} alt={title} className="w-full" />
        <div className="absolute right-0 top-0 h-full max-w-full w-full place-items-center bg-black/70 opacity-0 transition-opacity duration-500 grid group-[&:hover]:opacity-100">
          <div className="flex flex-col items-center gap-14">
            <Button>view project</Button>
            <Button>view code</Button>
          </div>
        </div>
      </picture>
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
      <div className="flex gap-8 pb-12 pt-6 xl:hidden">
        <Button>view project</Button>
        <Button>view code</Button>
      </div>
    </article>
  );
};

export default Project;
