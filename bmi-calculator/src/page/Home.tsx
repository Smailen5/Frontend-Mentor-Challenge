import { ManEating } from "@/assets/images";
import IntroHeader from "@/components/molecules/IntroHeader";
import CardForm from "@/components/organisms/CardForm";

const Home = () => {
  return (
    <>
      <IntroHeader />

      <CardForm />

      <img src={ManEating} alt="Man Eating" className="scale-110" />
    </>
  );
};

export default Home;
