import { newsContents } from "../../config/contents";
import { Heading } from "../atoms/Heading";
import { NewsItem } from "./NewsItem";

interface NewSectionProps {
  id: string;
}

export const NewSection = ({ id }: NewSectionProps) => {
  return (
    <div className="my-14 w-full space-y-6 bg-very-dark-blue p-4 py-6 xl:my-0 xl:p-6 xl:py-8">
      <Heading
        id={id}
        className="text-3xl font-semibold text-soft-orange xl:text-4.5xl"
      >
        New
      </Heading>

      <div>
        {newsContents.map((news, index) => (
          <NewsItem
            key={index}
            heading={news.title}
            paragraph={news.content}
            isLast={index === newsContents.length - 1}
            containerClass="xl:my-8"
            headingClass='xl:text-xl lg:hover:text-soft-orange'
            paragraphClass='xl:text-sm'
          />
        ))}
      </div>
    </div>
  );
};
