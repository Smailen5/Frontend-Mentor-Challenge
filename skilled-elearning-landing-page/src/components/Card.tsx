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
      <article className="rounded-2xl bg-gradient-pink p-8">
        <h3 className="text-2xl font-bold text-clr-white">{title}</h3>
      </article>
    );
  }

  return (
    <article className="relative space-y-4 rounded-2xl bg-clr-white p-8 pt-12">
      <CardImage image={image} />
      <h3 className="text-2xl font-bold text-clr-blue">{title}</h3>
      <p className="font-semibold text-clr-grey">{description}</p>
      <Button variant={"ghost"}>Get Started</Button>
    </article>
  );
};
