import { twMerge } from "tailwind-merge";

interface BoxStatisticsProps {
  children: React.ReactNode;
  className: string;
}

const BoxStatistics = ({ children, className }: BoxStatisticsProps) => {
  return (
    <div
      className={twMerge(
        "flex h-16 w-24 flex-col justify-center rounded-lg text-center uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BoxStatistics;
