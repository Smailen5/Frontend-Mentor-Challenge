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
    <>
      <IconComponent />
      <div className="space-y-6">
        <h4 className="text-preset-4 text-blue-900">{title}</h4>
        <p className="text-preset-6-regular text-grey-500">{description}</p>
      </div>
    </>
  );
};

export const LimitationCard = ({ icon, title, description }: CardProps) => {
  const IconComponent =
    iconLimitationMap[icon as keyof typeof iconLimitationMap];

  return (
    <>
      <div className="w-full space-y-4 rounded-2xl bg-white p-6 shadow-xl shadow-blue-100">
        <div className="flex items-left space-x-4">
          <IconComponent />
          <h4 className="text-preset-5 text-blue-900 capitalize">{title}</h4>
        </div>
        <div className="space-y-6">
          <p className="text-preset-6-regular text-grey-500">{description}</p>
        </div>
      </div>
    </>
  );
};
