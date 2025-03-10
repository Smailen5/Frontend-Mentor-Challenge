import { IconEating, IconExercise, IconSleep } from "@/assets/images";
import { CardProps } from "@/types";

const iconMap = {
  IconEating: IconEating,
  IconExercise: IconExercise,
  IconSleep: IconSleep,
};

const Card = ({ icon, title, description }: CardProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return (
    <>
      <IconComponent />
      <div className="space-y-6">
        <h4 className="text-preset-4 text-blue-900">{title}</h4>
        <p className="text-preset-6-regular text-grey-500">{description}</p>
      </div>
    </>
  );
};

export default Card;
