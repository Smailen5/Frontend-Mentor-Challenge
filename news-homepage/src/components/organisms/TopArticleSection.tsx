import { articleContents } from "../../config/contents";
import { ArticleCard } from "../molecules/ArticleCard";

interface TopArticleSectionProps {
  id: string;
}

export const TopArticleSection = ({ id }: TopArticleSectionProps) => {
  return (
    <div id={id} className="flex flex-col gap-8 xl:h-40 xl:flex-row">
      {articleContents.map((article) => (
        <ArticleCard key={article.number} {...article} />
      ))}
    </div>
  );
};
