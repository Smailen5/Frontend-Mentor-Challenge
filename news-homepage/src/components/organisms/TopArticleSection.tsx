import { ArticleCard } from "../molecules/ArticleCard";
import { articleContents } from "../../config/contents";

interface TopArticleSectionProps {
  id: string;
}

export const TopArticleSection = ({id}:TopArticleSectionProps) => {
  return (
    <div id={id} className='flex flex-col gap-8'>
      {articleContents.map((article) => (
        <ArticleCard key={article.number} {...article} />
      ))}
    </div>
  );
};
