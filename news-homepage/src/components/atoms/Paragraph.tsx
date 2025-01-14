import { twMerge } from "tailwind-merge";
interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={twMerge(
        "text-medium leading-6 text-dark-grayish-blue lg:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};
