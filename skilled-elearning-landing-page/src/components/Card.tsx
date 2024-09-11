import { Button } from "./ui/Button";
import { CardImage } from "./";

type CardProps = {
  title: string;
  description?: string;
  image?: string;
};

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  // se la descrizione non esiste torna una card diversa
  if (!description) {
    return (
      <article className="bg-gradient-pink p-8 rounded-2xl ">
        <h3 className="text-clr-white font-bold text-2xl">{title}</h3>
      </article>
    );
  }

  return (
    <article className="bg-clr-white p-8 pt-12 rounded-2xl space-y-4 relative">
      <CardImage image={image} />
      <h3 className="text-clr-blue font-bold text-2xl">{title}</h3>
      <p className="text-clr-grey font-semibold">{description}</p>
      <Button variant={"ghost"}>Get Started</Button>
    </article>
  );
};
