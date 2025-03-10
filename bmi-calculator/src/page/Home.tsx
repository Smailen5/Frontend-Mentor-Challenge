import CardsSection from '@/components/templates/CardsSection';
import HeroSection from "@/components/templates/HeroSection";
import LimitationSection from '@/components/templates/LimitationSection';
import NutritionSection from "@/components/templates/NutritionSection";

const Home = () => {
  return (
    <>
      <div className="space-y-16 pb-24">
        <HeroSection />
        <NutritionSection />
        <CardsSection />
        <LimitationSection />
      </div>
    </>
  );
};

export default Home;
