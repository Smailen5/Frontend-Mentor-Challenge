import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h2 className={twMerge("text-very-dark-blue text-4.5xl font-extrabold", className)}>{children}</h2>
  );
};
