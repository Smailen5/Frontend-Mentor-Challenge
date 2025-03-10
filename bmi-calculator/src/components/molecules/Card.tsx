import {
  IconAge,
  IconEating,
  IconExercise,
  IconGender,
  IconMuscle,
  IconPregnancy,
  IconRace,
  IconSleep,
} from "@/assets/images";
import { CardProps, LimitationCardProps } from "@/types";

const iconMap = {
  IconEating: IconEating,
  IconExercise: IconExercise,
  IconSleep: IconSleep,
};

const iconLimitationMap = {
  IconGender: IconGender,
  IconAge: IconAge,
  IconMuscle: IconMuscle,
  IconPregnancy: IconPregnancy,
  IconRace: IconRace,
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

export const LimitationCard = ({
  icon,
  title,
  description,
  limitation,
}: LimitationCardProps) => {
  const IconComponent =
    iconLimitationMap[icon as keyof typeof iconLimitationMap];

  if (limitation)

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
