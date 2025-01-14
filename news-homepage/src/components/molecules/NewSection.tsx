import { newsContents } from "../../config/contents";
import { Heading } from "../atoms/Heading";
import { NewsItem } from "./NewsItem";

interface NewSectionProps {
  id: string;
}

export const NewSection = ({id}:NewSectionProps) => {
  return (
    <div className="my-14 w-full space-y-6 bg-very-dark-blue p-4 py-6 lg:my-0">
      <Heading id={id} className="text-3xl font-semibold text-soft-orange">New</Heading>

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
