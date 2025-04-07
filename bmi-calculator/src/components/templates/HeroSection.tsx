import { Logo } from "@/assets/images";
import Layout from "../atoms/Layout";
import IntroHeader from "../molecules/IntroHeader";
import CardForm from "../organisms/CardForm";

const HeroSection = () => {
  return (
    <>
      <Layout className="xl:space-y-6">
        {/* Background gradiente */}
        <div className="from-gradient-2 absolute inset-0 -z-10 max-h-[70vh] w-full rounded-br-4xl bg-linear-to-l to-white md:max-h-[62vh]" />
        <div className="flex w-full justify-center xl:justify-start">
          <Logo className="size-10 xl:size-16" />
        </div>
        <div className="xl: xl:flex xl:gap-8">
          <IntroHeader />

          <CardForm />
        </div>
      </Layout>
    </>
  );
};

export default HeroSection;
