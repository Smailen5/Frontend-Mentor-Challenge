import { heroData } from "../data/data";
import { Page } from "./Page";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <Page>
      <h1>{heroData.title}</h1>
      <p>{heroData.subtitle}</p>
      <Button size={"lg"}>Get Started</Button>
    </Page>
  );
};
