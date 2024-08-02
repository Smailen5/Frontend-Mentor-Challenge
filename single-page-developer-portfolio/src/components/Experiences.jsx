import experiences from "../data/experiences.json";
import rings from "../assets/images/pattern-rings.svg";
import { useGlobalContext } from "../context";

const Experiences = () => {
  const { useWindowWidth } = useGlobalContext();
  const width = useWindowWidth();
  const isTablet = width >= 768;
  return (
    // controlla il mt-80 quando hai finito con Hero
    <div className="relative overflow-x-hidden px-4 pt-20 md:mt-24 md:px-10 xl:mx-[10%] xl:mt-48 xl:overflow-visible xl:px-0">
      <hr />
      <section className="my-10 flex flex-col items-center gap-8 text-center md:my-20 md:grid md:grid-cols-2 md:justify-items-start md:gap-16 xl:grid-cols-3">
        {experiences.map((experience) => {
          const { skill, years } = experience;
          return (
            <article
              key={skill}
              className="flex flex-col gap-2 md:items-start md:gap-6"
            >
              <h4 className="text-4xl font-semibold md:text-6xl">{skill}</h4>
              <h5 className="text-skin-variant md:text-2xl">{years}</h5>
            </article>
          );
        })}
      </section>
      {/* se isTablet e true non mostra niente, altrimenti <hr /> */}
      {!isTablet && <hr />}
      <img
        src={rings}
        alt="rings"
        className="absolute -right-72 bottom-7 -z-10 scale-125 lg:-right-24 lg:bottom-24 lg:translate-x-1/2 xl:-bottom-20 xl:-right-36"
      />
    </div>
  );
};

export default Experiences;
