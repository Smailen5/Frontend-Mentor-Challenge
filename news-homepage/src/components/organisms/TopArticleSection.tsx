import { ArticleCard } from "../molecules/ArticleCard";
import { articleContents } from "../../config/contents";

export const TopArticleSection = () => {
  return (
    <div className='flex flex-col gap-8'>
      {articleContents.map((article) => (
        <ArticleCard key={article.number} {...article} />
      ))}
    </div>
  );
};
