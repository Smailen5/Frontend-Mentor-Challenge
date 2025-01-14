import { ButtonProvider } from "@/config/buttonContext";
import { ArticleSection } from "../molecules/ArticleSection";
import { NewSection } from "../molecules/NewSection";
import { TopArticleSection } from "./TopArticleSection";

import Image from "next/image";
import web3Desktop from "../../assets/images/image-web-3-desktop.jpg";
import web3 from "../../assets/images/image-web-3-mobile.jpg";

/**
 * MainContent - Componente organismo che raggruppa le sezioni principali della pagina
 *
 * Questo componente organizza e gestisce il layout delle tre sezioni principali:
 * - ArticleSection (sezione principale con il bottone)
 * - NewSection (sezione delle novità)
 * - TopArticlesSection (sezione degli articoli numerati)
 *
 * Incapsula anche il ButtonProvider per gestire le azioni dei bottoni.
 *
 * @component
 * @example
 * ```tsx
 * <MainContent />
 * ```
 */
export const MainContent = () => {
  return (
    <main className="lg:space-y-16">
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="lg:col-span-2 lg:grid lg:grid-rows-[auto_1fr]">
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
        </div>

        <NewSection id="new" />
      </div>

      <TopArticleSection id="popular" />
    </main>
  );
};
