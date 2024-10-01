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

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (event.key === "Enter" || event.key === " ") {
  //     event.preventDefault(); // Evita lo scroll della pagina
  //     onToggle();
  //   }
  // };

  return (
    <article className="border-b border-background last:border-none">
      <button
        onClick={onToggle}
        // onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-8 py-4"
      >
        <h2 className="text-foreground text-base font-bold leading-5 lg:text-lg">
          {title}
        </h2>
        <span>{isOpen ? <IconMinus /> : <IconPlus />}</span>
      </button>
      {/* Contenuto dell'accordion */}
      <div
        ref={contentRef}
        className="pb- transition-max-height overflow-hidden text-sm duration-500 ease-in-out lg:text-base"
        style={{ maxHeight }}
        role="region"
        aria-labelledby={`accordion-item-${index}`}
      >
        <p className="pb-6 text-foreground-muted">{content}</p>
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
