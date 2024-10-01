import { useState } from "react";
import { IconPlus, IconMinus } from "@/assets/images/index";
import accordion from "@/assets/data/accordion.json"

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per gestire la pressione dei tasti
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Evita lo scroll della pagina
      toggleAccordion();
    }
  };

  // Gli passi un title e un content poi gestisce tutto lui
  return (
    <div className="border-b">
      <div
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown} // Aggiungi l'handler per i tasti
        tabIndex={0} // Rende l'elemento navigabile tramite tastiera
        aria-expanded={isOpen} // Indica se l'accordion è aperto o chiuso
        className="flex cursor-pointer items-center justify-between py-4"
      >
        <h2 className="text-lg font-bold">{title}</h2>
        {/* Icona per l'apertura e la chiusura */}
        <span>{isOpen ? <IconMinus /> : <IconPlus />}</span>
      </div>
      {/* Contenuto accordion */}
      {isOpen && (
        <div
          className="overflow-hidden pb-4 text-base"
          role="region"
          aria-labelledby={title}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {

  return (
    <div>
      {accordion.map((item, index) => (
        <AccordionItem key={"item-"+index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export { Accordion };
