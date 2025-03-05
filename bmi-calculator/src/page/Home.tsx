import { ManEating } from "@/assets/images";
import IntroHeader from "@/components/molecules/IntroHeader";
import CardForm from "@/components/organisms/CardForm";
import mainContent from "@/data/mainContent.json";

const Home = () => {
  return (
    <>
      <IntroHeader />

      <CardForm />

      <img src={ManEating} alt="Man Eating" className="scale-110" />

      <div className="mt-16 px-2 space-y-8">
        <h4 className="text-preset-3 text-blue-900">{mainContent[0].title}</h4>
        <p className="text-preset-6-regular text-grey-500">
          {mainContent[0].description}
        </p>
      </div>
    </>
  );
};

export default Home;
