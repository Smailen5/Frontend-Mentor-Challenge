import experiences from "../data/experiences.json";

const Experiences = () => {
  return (
    <div className="mt-8 px-4">
      <hr />
      <section>
        {experiences.map((experience) => {
          const { skill, years } = experience;
          return (
            <article key={skill}>
              <h4>{skill}</h4>
              <h5>{years}</h5>
            </article>
          );
        })}
      </section>
      <hr />
    </div>
  );
};

export default Experiences;
