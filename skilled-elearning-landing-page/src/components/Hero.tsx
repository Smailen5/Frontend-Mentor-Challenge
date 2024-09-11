import { heroData } from "../data/data";
import { HeroImage, Page } from "./index";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <Page>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-4.5xl font-extrabold text-clr-blue">
            {heroData.title}
          </h1>
          <p className="text-xl text-clr-grey">{heroData.subtitle}</p>
          <Button variant={"orange"} size={"lg"}>
            Get Started
          </Button>
        </div>
        <div className="relative h-full w-full md:h-auto md:w-auto">
          <HeroImage />
        </div>
      </div>
    </Page>
  );
};
