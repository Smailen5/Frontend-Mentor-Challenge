import cards from "@/data/cards.json";
import limitation from "@/data/limitation.json";
import Layout from "../atoms/Layout";
import { LimitationCard } from "../molecules/Card";

const LimitationSection = () => {
  return (
    <>
      <Layout>
        <div className="mx-2 space-y-14">
          <div className="space-y-8 pt-10 text-center">
            <h2 className="text-preset-3 text-blue-900">{limitation.title}</h2>
            <p className="text-grey-500 text-preset-6-regular">
              {limitation.description}
            </p>
          </div>
          <div className='space-y-4'>

          {cards.map((card, index) => {
            const { icon, title, description } = card;
            return (
              <LimitationCard
              key={index}
              title={title}
              description={description}
              icon={icon}
              />
            );
          })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LimitationSection;
