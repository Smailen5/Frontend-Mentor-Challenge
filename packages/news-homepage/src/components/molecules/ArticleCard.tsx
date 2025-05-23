import Image, { StaticImageData } from "next/image";
import { NewsItem } from "./NewsItem";

/**
 * Interfaccia che definisce le proprietà del componente ArticleCard
 *
 * @interface ArticleCardProps
 * @property {string} number - Il numero identificativo dell'articolo
 * @property {string} title - Il titolo dell'articolo
 * @property {string} content - Il contenuto dell'articolo
 * @property {StaticImageData} image - L'immagine associata all'articolo
 */
interface ArticleCardProps {
  number: string;
  title: string;
  content: string;
  image: StaticImageData;
}

/**
 * ArticleCard - Componente molecolare che rappresenta una card di articolo
 *
 * Questo componente combina un'immagine, un numero, un titolo e un contenuto
 * per creare una card di articolo completa. Utilizza il componente NewsItem
 * per la gestione del titolo e del contenuto.
 *
 * @component
 * @example
 * ```tsx
 * <ArticleCard
 *   number="01"
 *   title="Reviving Retro PCs"
 *   content="What happens when old PCs are given modern upgrades?"
 *   image={retroPcImage}
 * />
 * ```
 */
export const ArticleCard = ({
  number,
  title,
  content,
  image,
}: ArticleCardProps) => {
  return (
    <div className="flex gap-4">
      {/* Immagine dell'articolo */}
      <Image
        src={image}
        alt="retro pc"
        width={100}
        height={150}
        className="aspect-[4/5] xl:h-32"
      />

      {/* Contenuto dell'articolo */}
      <div className="flex flex-col justify-between xl:justify-start xl:space-y-2">
        <div className="text-start text-4xl font-bold text-soft-red">
          {number}
        </div>
        <NewsItem
          containerClass="xl:flex xl:flex-col xl:justify-between xl:h-full"
          headingClass="text-very-dark-blue text-lg xl:text-base xl:font-extrabold lg:hover:text-soft-red"
          paragraphClass="text-dark-grayish-blue text-sm xl:text-sm"
          heading={title}
          paragraph={content}
          isLast
        />
      </div>
    </div>
  );
};
