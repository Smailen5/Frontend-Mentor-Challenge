import { useLayoutEffect, useRef, useState } from "react";
import { IconPlus, IconMinus } from "@/assets/images/index";
import accordion from "@/assets/data/accordion.json";

type AccordionItemProps = {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  index,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string | undefined>("0px");

  useLayoutEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Evita lo scroll della pagina
      onToggle();
    }
  };

  return (
    <article className="border-b">
      <header
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center justify-between py-4 transition-all duration-500 ease-in-out"
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <span>{isOpen ? <IconMinus /> : <IconPlus />}</span>
      </header>
      {/* Contenuto dell'accordion */}
      <div
        ref={contentRef}
        className="pb- transition-max-height overflow-hidden text-base duration-500 ease-in-out"
        style={{ maxHeight }}
        role="region"
        aria-labelledby={`accordion-item-${index}`}
      >
        <p>{content}</p>
      </div>
    </article>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      {accordion.map((item, index) => (
        <AccordionItem
          key={"item-" + index}
          title={item.title}
          content={item.content}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </section>
  );
};

export { Accordion };
