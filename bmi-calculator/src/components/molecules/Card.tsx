import { CardProps } from "@/types";

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <>
      {icon}
      <div className="space-y-6">
        <h4 className="text-preset-4 text-blue-900">{title}</h4>
        <p className="text-preset-6-regular text-grey-500">{description}</p>
      </div>
    </>
  );
};

export default Card;
