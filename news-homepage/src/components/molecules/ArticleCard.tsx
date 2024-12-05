import Image from "next/image";
import retroPc from "../../assets/images/image-retro-pcs.jpg";
import { NewsItem } from "./NewsItem";

export const ArticleCard = () => {
  return (
    <div className="flex gap-4">
      <Image src={retroPc} alt="retro pc" width={100} height={150} />
      <div className="flex flex-col justify-between">
        <div className="text-4xl font-bold text-soft-red">01</div>
        <NewsItem
          headingClass="text-very-dark-blue text-lg"
          paragraphClass="text-dark-grayish-blue text-base"
          heading="Reviving Retro PCs"
          paragraph="What happens when old PCs are given modern upgrades?"
          isLast
        />
      </div>
    </div>
  );
};
