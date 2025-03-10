import { IconGender } from "@/assets/images";
import cards from "@/data/cards.json";
import limitation from "@/data/limitation.json";
import Layout from "../atoms/Layout";

const LimitationSection = () => {
  return (
    <>
      <Layout>
        <div className="mx-2 space-y-8">
          <div className="space-y-8 py-10 text-center">
            <h2 className="text-preset-3 text-blue-900">{limitation.title}</h2>
            <p className="text-grey-500 text-preset-6-regular">
              {limitation.description}
            </p>
          </div>
          <div className="h-20 w-full rounded-2xl bg-black text-white">
            <IconGender />
            {cards.map((card, index) => {
              return (
                <>
                  <h3 key={index}>{card.title}</h3>
                  <p>{card.description}</p>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LimitationSection;
