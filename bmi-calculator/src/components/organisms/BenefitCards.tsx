import benefitCards from "@/data/benefitCards.json";
import Card from "../molecules/Card";

const BenefitCards = () => {
  return (
    <>
      {benefitCards.map((card, index) => {
        const { icon, title, description } = card;
        return (
          <div className="space-y-8" key={index}>
            <Card icon={icon} title={title} description={description} />
          </div>
        );
      })}
    </>
  );
};

export default BenefitCards;
