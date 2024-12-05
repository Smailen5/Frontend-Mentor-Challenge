import { twMerge } from "tailwind-merge";
interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p className={twMerge("text-dark-grayish-blue", className)}>{children}</p>
  );
};
