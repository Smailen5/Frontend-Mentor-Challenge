import { heroData } from "../data/data";
import { HeroImage } from "./HeroImage";
import { Page } from "./Page";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <Page>
      <div className="flex flex-col gap-8 items-start">
        <h1 className="text-4.5xl font-extrabold text-clr-blue">
          {heroData.title}
        </h1>
        <p className="text-clr-grey text-xl">{heroData.subtitle}</p>
        <Button variant={"orange"} size={"lg"}>
          Get Started
        </Button>

        <HeroImage />
      </div>
    </Page>
  );
};
