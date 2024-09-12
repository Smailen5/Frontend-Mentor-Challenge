import { dataCards } from "../data/data";
import { Card } from "./Card";
import { Page } from "./Page";

export const Cards = () => {
  return (
    <Page isOpacity>
      <section className="grid grid-cols-1 gap-14 pb-6 md:grid-cols-2 md:gap-x-6 md:pb-32 md:pt-8 lg:grid-cols-3">
        {dataCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </Page>
  );
};
