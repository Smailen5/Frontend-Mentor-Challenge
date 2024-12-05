import { Heading } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";

interface NewsItemProps {
  heading: string;
  paragraph: string;
  isLast?: boolean;
}

export const NewsItem = ({ heading, paragraph, isLast }: NewsItemProps) => {
  return (
    <>
      <div className="space-y-2">
        <Heading className="text-lg font-semibold text-off-white">
          {heading}
        </Heading>
        <Paragraph>{paragraph}</Paragraph>
      </div>
      {!isLast && <hr className="my-6" />}
    </>
  );
};
