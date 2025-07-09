import { twMerge } from "tailwind-merge";

interface HeadingProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ id, children, className }: HeadingProps) => {
  return (
    <h2 id={id} className={twMerge("text-very-dark-blue text-4.5xl font-extrabold", className)}>{children}</h2>
  );
};
