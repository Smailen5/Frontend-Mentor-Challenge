import { Heading } from "../atoms/Heading";
import { newsContents } from "../../config/contents";
import { NewsItem } from "./NewsItem";

export const NewSection = () => {
  return (
    <div className="w-full space-y-6 bg-very-dark-blue p-4 my-14">
      <Heading className="text-3xl font-semibold text-soft-orange">New</Heading>

      <div>
        {newsContents.map((news, index) => (
          <NewsItem
            key={index}
            heading={news.title}
            paragraph={news.content}
            isLast={index === newsContents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
