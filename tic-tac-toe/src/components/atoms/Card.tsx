interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-semi-dark-navy">{children}</div>;
};

export default Card;
