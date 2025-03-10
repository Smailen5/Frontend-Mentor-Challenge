// import { IconGender } from "@/assets/images";
import cards from "@/data/cards.json";
import limitation from "@/data/limitation.json";
import Layout from "../atoms/Layout";
import { LimitationCard } from "../molecules/Card";

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
          {/* <IconGender /> */}
          {cards.map((card, index) => {
            return (
              <>
                <div
                  key={index}
                  className="h-20 w-full rounded-2xl bg-black text-white"
                >
                  <LimitationCard
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                  />
                </div>
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default LimitationSection;
