import experiences from "../data/experiences.json";
import rings from "../assets/images/pattern-rings.svg";

const Experiences = () => {
  return (
    // controlla il mt-80 quando hai finito con Hero
    <div className="py-20 px-4 relative overflow-x-hidden md:mt-80 md:px-10">
      <hr />
      <section className="my-10 flex flex-col items-center gap-8 text-center md:grid md:grid-cols-2 md:justify-items-start md:my-20 md:gap-16">
        {experiences.map((experience) => {
          const { skill, years } = experience;
          return (
            <article key={skill} className="flex flex-col gap-2 md:items-start md:gap-6">
              <h4 className="text-4xl font-semibold md:text-6xl">{skill}</h4>
              <h5 className="text-neutral-400 md:text-2xl">{years}</h5>
            </article>
          );
        })}
      </section>
      {/* TODO: devo mettere la funzione handleResize in un context cosi posso usarla anche qui */}
      {/* {window.innerWidth <= 768 && <hr/>} */}
      <hr />
      <img src={rings} alt="rings" className="absolute -right-72 bottom-7 -z-10 scale-125" />
    </div>
  );
};

export default Experiences;
