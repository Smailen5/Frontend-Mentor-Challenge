import { PatternCurvedRight } from "@/assets/images";
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
  function chunkCards(cards: Card[]): { cards: Card[]; rowNumber: number }[] {
    const rows: { cards: Card[]; rowNumber: number }[] = [];
    let index = 0;
    let rowNumber = 1;
    for (let rowSize = 1; index < cards.length; rowSize++) {
      rows.push({
        cards: cards.slice(index, index + rowSize),
        rowNumber: rowNumber,
      });
      index += rowSize;
      rowNumber++;
    }
    return rows;
  }

  return (
    <Layout className="xl:py-[104px]">
      <div className="mx-2 space-y-14 xl:relative xl:m-0 xl:min-h-[704px]">
        <div className="space-y-8 pt-10 text-center md:pt-4 xl:max-w-[564px] xl:p-0 xl:text-left">
          <h2 className="text-preset-3 xl:text-preset-2 text-blue-900">
            {limitation.title}
          </h2>
          <p className="text-grey-500 text-preset-6-regular">
            {limitation.description}
          </p>
        </div>

        {/* Mobile e Tablet Layout */}
        <div className="space-y-4 md:flex md:flex-wrap md:justify-center md:space-y-0 md:gap-x-4 md:gap-y-6 xl:hidden">
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
        <div className="top-0 right-0 hidden xl:absolute xl:flex xl:flex-col xl:space-y-8">
          {chunkCards(cards).map((row, index) => (
            <div
              key={index}
              className="flex flex-1 justify-end gap-8"
              style={{
                marginRight: `${row.rowNumber % 2 === 0 ? 0 : row.rowNumber * 4}rem`,
              }}
            >
              {row.cards.map((card, index) => (
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

        <PatternCurvedRight className="absolute top-1/3 left-1/12 hidden xl:block" />
      </div>
    </Layout>
  );
};

export default LimitationSection;
