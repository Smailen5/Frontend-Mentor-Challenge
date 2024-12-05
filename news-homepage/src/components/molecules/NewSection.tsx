import { Heading } from "../atoms/Heading";
// import { Paragraph } from "../atoms/Paragraph";
import { NewsItem } from "./NewsItem";

export const NewSection = () => {
  const newsItems = {
    heading: "Hydrogen VS Electric Cars",
    paragraph: "Will hydrogen-fueled cars ever catch up to EVs?",
  };
  return (
    <div className="w-full bg-very-dark-blue p-4 space-y-6">
      <Heading className="text-2xl font-semibold text-soft-orange">New</Heading>

      <div>
        <NewsItem heading={newsItems.heading} paragraph={newsItems.paragraph} />
        <NewsItem heading={newsItems.heading} paragraph={newsItems.paragraph} />
        <NewsItem
          heading={newsItems.heading}
          paragraph={newsItems.paragraph}
          isLast
        />
      </div>
    </div>
  );
};
