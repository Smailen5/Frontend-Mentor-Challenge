interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h2 className="text-very-dark-blue text-4xl font-extrabold">{children}</h2>
  );
};
