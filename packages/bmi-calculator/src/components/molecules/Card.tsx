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
import { CardProps } from "@/types";

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

export const Card = ({ icon, title, description }: CardProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return (
    <div className="md:flex md:gap-10 xl:flex-col xl:gap-12">
      <IconComponent className="md:h-24 md:w-24 md:items-center xl:h-16 xl:w-16" />
      <div className="space-y-6">
        <h4 className="text-preset-4 text-blue-900">{title}</h4>
        <p className="text-preset-6-regular text-grey-500">{description}</p>
      </div>
    </div>
  );
};

export const LimitationCard = ({ icon, title, description }: CardProps) => {
  const IconComponent =
    iconLimitationMap[icon as keyof typeof iconLimitationMap];

  return (
    <div
      className="w-full space-y-4 rounded-2xl bg-white p-6 md:w-[calc(50%-8px)] md:p-8 xl:max-w-[365px]"
      style={{ filter: "drop-shadow(16px 32px 56px hsl(228, 94%, 94%))" }}
    >
      <div className="items-left flex space-x-4">
        <IconComponent />
        <h4 className="text-preset-5 text-blue-900 capitalize">{title}</h4>
      </div>
      <div className="space-y-6">
        <p className="text-preset-6-regular text-grey-500">{description}</p>
      </div>
    </div>
  );
};
