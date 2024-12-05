import { ArticleCard } from "../molecules/ArticleCard";

export const TopArticleSection = () => {
  return (
    <div className='flex flex-col gap-8'>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};
