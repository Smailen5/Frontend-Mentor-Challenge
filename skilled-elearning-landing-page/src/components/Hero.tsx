import { heroData } from "../data/data";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section>
      <h1>{heroData.title}</h1>
      <p>{heroData.subtitle}</p>
      <Button size={"lg"}>Get Started</Button>
    </section>
  );
};
