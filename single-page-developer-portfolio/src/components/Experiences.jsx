/* eslint-disable no-unused-vars */
import experiences from "../data/experiences.json";
import rings from "../assets/images/pattern-rings.svg";
import { useGlobalContext } from "../context";

const Experiences = () => {
  const { useWindowWidth } = useGlobalContext();
  const width = useWindowWidth();
  const isTablet = width >= 768;
  return (
    <div className="relative overflow-x-clip py-8 md:py-16 xl:py-24">
      <hr className="mx-4 md:mx-8 xl:mx-36" />
      <div className="flex flex-col gap-8 py-8 text-center md:mx-8 md:grid md:grid-cols-2 md:gap-12 md:text-left xl:mx-36 xl:grid-cols-3 xl:py-16">
        {experiences.map((experience) => (
          <div key={experience.skill}>
            <h3 className="text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
              {experience.skill}
            </h3>
            <h4 className="mt-2 text-skin-variant md:mt-6 xl:text-xl 2xl:text-4xl">
              {experience.years}
            </h4>
          </div>
        ))}
      </div>
      <hr className="mx-4 md:hidden" />
      <img
        src={rings}
        alt="icon rings"
        className="absolute -right-1/3 bottom-0 translate-x-1/3 md:-right-2/3 md:bottom-6 md:-translate-x-1/3 lg:-right-1/2 lg:-translate-x-1/2 xl:-right-1/3 xl:-translate-x-1/4 xl:bottom-28"
      />
    </div>
  );
};

export default Experiences;
