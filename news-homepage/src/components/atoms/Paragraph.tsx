interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-dark-grayish-blue">{children}</p>;
};
