import { twMerge } from 'tailwind-merge';
import { Heading } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";

/**
 * Interfaccia che definisce le proprietà del componente NewsItem
 * @interface NewsItemProps
 * @property {string} heading - Il titolo della news
 * @property {string} paragraph - Il contenuto della news
 * @property {boolean} [isLast] - Flag opzionale che indica se l'elemento è l'ultimo della lista
 */
interface NewsItemProps {
  heading: string;
  paragraph: string;
  isLast?: boolean;
  headingClass?:string;
  paragraphClass?: string;
}

/**
 * NewsItem - Componente molecolare che rappresenta un singolo elemento news
 *
 * Questo componente combina un titolo (Heading) e un paragrafo (Paragraph) per creare
 * un elemento news riutilizzabile. Include anche una linea di separazione opzionale
 * che può essere nascosta per l'ultimo elemento della lista.
 *
 * @component
 * @example
 * ```tsx
 * <NewsItem
 *   heading="Hydrogen VS Electric Cars"
 *   paragraph="Will hydrogen-fueled cars ever catch up to EVs?"
 *   isLast={false}
 * />
 * ```
 */
export const NewsItem = ({ heading, paragraph, isLast, headingClass, paragraphClass }: NewsItemProps) => {
  return (
    <>
      <div className="space-y-2">
        <Heading className={twMerge("text-xl font-semibold text-off-white", headingClass)}>
          {heading}
        </Heading>
        <Paragraph className={twMerge("text-grayish-blue tracking-wider text-sm", paragraphClass)}>{paragraph}</Paragraph>
      </div>

      {/* Mostra la linea di separazione solo se non è l'ultimo elemento */}
      {!isLast && <hr className="my-6 border-dark-grayish-blue" />}
    </>
  );
};
