import { dataCards } from "../data/data";
import { Card } from "./Card";
import { Page } from "./Page";

export const Cards = () => {
  return (
    <Page>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </Page>
  );
};
