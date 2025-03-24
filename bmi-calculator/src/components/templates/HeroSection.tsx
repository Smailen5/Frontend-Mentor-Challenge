import { Logo } from "@/assets/images";
import Layout from "../atoms/Layout";
import IntroHeader from "../molecules/IntroHeader";
import CardForm from "../organisms/CardForm";

const HeroSection = () => {
  return (
    <>
      <Layout>
        {/* Background gradiente */}
        <div className="from-gradient-2 absolute inset-0 -z-10 max-h-[70vh] w-full rounded-br-4xl bg-linear-to-l to-white md:max-h-[62vh]" />
        <div className="flex w-full justify-center">
          <Logo className="size-10" />
        </div>
        <IntroHeader />

        <CardForm />
      </Layout>
    </>
  );
};

export default HeroSection;
