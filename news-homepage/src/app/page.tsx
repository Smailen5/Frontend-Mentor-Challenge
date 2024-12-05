import { ArticleSection } from "@/components/molecules/ArticleSection";
import { NewSection } from "@/components/molecules/NewSection";
import { TopArticleSection } from "@/components/organisms/TopArticleSection";
import { ButtonProvider } from "@/config/buttonContext";
import Image from "next/image";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3 from "../assets/images/image-web-3-mobile.jpg";

export default function Home() {
  return (
    <div className="p-4">
      <picture>
        <source srcSet={web3Desktop.src} media="(min-width:768px)" />
        <Image
          src={web3.src}
          alt="web"
          layout="responsive"
          width={375}
          height={250}
        />
      </picture>
      <ButtonProvider>
        <ArticleSection
          title="The Bright Future of Web 3.0?"
          content="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
          buttonText="Read More"
          onButtonClick="readMore"
        />
      </ButtonProvider>

      <NewSection />

      <TopArticleSection />
    </div>
  );
}
