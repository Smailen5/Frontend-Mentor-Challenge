import { StaticImageData } from "next/image";
import gaming from "../assets/images/image-gaming-growth.jpg";
import retroPc from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";

export type ContentType = {
  title: string;
  content: string;
};

export type ArticleContentsType = ContentType & {
  number: string;
  image: StaticImageData;
};

export const newsContents: ContentType[] = [
  {
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const articleContents: ArticleContentsType[] = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
    image: retroPc,
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets.",
    image: laptop,
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities.",
    image: gaming,
  },
];
