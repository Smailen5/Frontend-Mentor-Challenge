import { ManEating } from "@/assets/images";
import mainContent from "@/data/mainContent.json";
import Layout from "../atoms/Layout";
const NutritionSection = () => {
  return (
    <div className="space-y-4 md:relative md:top-6 md:-left-20 md:flex md:w-[840px] md:gap-4 xl:top-0 xl:left-0 xl:w-full xl:px-36 xl:gap-28">
      <img
        src={ManEating}
        alt="Man Eating"
        className="md:relative md:h-[411px] md:w-[435px] xl:h-[533px] xl:w-[564px]"
      />

      <Layout className="xl:p-0 xl:flex xl:items-end xl:pb-20">
        <div className="space-y-8 px-2">
          <h4 className="text-preset-3 xl:text-preset-2 text-blue-900">
            {mainContent[0].title}
          </h4>
          <p className="text-preset-6-regular text-grey-500">
            {mainContent[0].description}
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default NutritionSection;
