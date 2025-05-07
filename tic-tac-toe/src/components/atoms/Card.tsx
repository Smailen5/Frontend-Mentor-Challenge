interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-semi-dark-navy text-silver rounded-2xl p-4 uppercase">
      {children}
    </div>
  );
};

export default Card;
