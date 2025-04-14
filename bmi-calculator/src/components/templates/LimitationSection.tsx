import cards from "@/data/cards.json";
import limitation from "@/data/limitation.json";
import Layout from "../atoms/Layout";
import { LimitationCard } from "../molecules/Card";

interface Card {
  icon: string;
  title: string;
  description: string;
}

const LimitationSection = () => {
  // funzione per dividere le cards in righe (spostala in utils)
  function chunkCards(cards: Card[]): Card[][] {
    const rows: Card[][] = [];
    let index = 0;
    for (let rowSize = 1; index < cards.length; rowSize++) {
      rows.push(cards.slice(index, index + rowSize));
      index += rowSize;
    }
    return rows;
  }

  return (
    <Layout className="xl:py-[104px]">
      <div className="mx-2 space-y-14 xl:m-0 xl:relative">
        <div className="space-y-8 pt-10 text-center md:pt-4 xl:max-w-[564px] xl:p-0 xl:text-left">
          <h2 className="text-preset-3 xl:text-preset-2 text-blue-900">
            {limitation.title}
          </h2>
          <p className="text-grey-500 text-preset-6-regular">
            {limitation.description}
          </p>
        </div>

        {/* Mobile e Tablet Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:hidden">
          {cards.map((card, index) => (
            <LimitationCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex xl:flex-col xl:space-y-4 xl:absolute top-0">
          {chunkCards(cards).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-start gap-4"
              style={{
                marginRight: `${rowIndex * 2}rem`,
              }}
            >
              {row.map((card, index) => (
                <LimitationCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LimitationSection;
