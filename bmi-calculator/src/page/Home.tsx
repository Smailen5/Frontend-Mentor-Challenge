import InputMisure from "@/components/molecules/InputMisure";
import IntroHeader from "@/components/molecules/IntroHeader";

const Home = () => {
  return (
    <>
      <IntroHeader />

      <div className="mt-8 flex h-96 w-full flex-col space-y-6 rounded-xl bg-black px-8">
        <h3 className="text-preset-4 pt-6 text-white">
          Enter your details below
        </h3>

        <div className="flex items-center justify-between">
          <InputMisure name="metric" />

          <InputMisure name="imperial" />
        </div>
      </div>
    </>
  );
};

export default Home;
