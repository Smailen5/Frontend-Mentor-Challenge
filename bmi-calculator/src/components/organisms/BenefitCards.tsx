import benefitCards from "@/data/benefitCards.json";
import Card from "../molecules/Card";

const BenefitCards = () => {
  return (
    <>
      {benefitCards.map((card, index) => {
        const { icon, title, description } = card;
        return (
          <Card
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        );
      })}
    </>
  );
};

export default BenefitCards;
