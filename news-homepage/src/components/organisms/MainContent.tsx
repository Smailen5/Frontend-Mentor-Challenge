import { ButtonProvider } from "@/config/buttonContext";
import { ArticleSection } from "../molecules/ArticleSection";
import { NewSection } from "../molecules/NewSection";
import { TopArticleSection } from "./TopArticleSection";

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
    <main>
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
    </main>
  );
};
