import { twMerge } from "tailwind-merge";
import { CardProps } from "../../types/atoms.types";

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-semi-dark-navy text-silver rounded-2xl p-4 uppercase shadow-[0_8px_0_0_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
