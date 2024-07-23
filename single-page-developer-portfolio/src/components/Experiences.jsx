import experiences from "../data/experiences.json";
import rings from "../assets/images/pattern-rings.svg";

const Experiences = () => {
  return (
    // controlla il mt-80 quando hai finito con Hero
    <div className="py-20 px-4 font-spaceGrotesk relative overflow-x-hidden md:mt-80">
      <hr />
      <section className="my-10 flex flex-col items-center gap-8 text-center">
        {experiences.map((experience) => {
          const { skill, years } = experience;
          return (
            <article key={skill} className="flex flex-col gap-2">
              <h4 className="text-4xl font-semibold">{skill}</h4>
              <h5 className="text-neutral-400">{years}</h5>
            </article>
          );
        })}
      </section>
      <hr />
      <img src={rings} alt="rings" className="absolute -right-72 bottom-7 -z-10 scale-125" />
    </div>
  );
};

export default Experiences;
