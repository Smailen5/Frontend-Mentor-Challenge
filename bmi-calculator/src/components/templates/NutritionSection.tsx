import { ManEating } from "@/assets/images";
import mainContent from "@/data/mainContent.json";
import Layout from "../atoms/Layout";
const NutritionSection = () => {
  return (
    <div className="space-y-4">
      <img src={ManEating} alt="Man Eating" className="" />

      <Layout>
        <div className="space-y-8 px-2">
          <h4 className="text-preset-3 text-blue-900">
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
