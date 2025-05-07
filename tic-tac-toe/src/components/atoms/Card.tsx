interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-semi-dark-navy text-silver rounded-2xl p-4 uppercase shadow-[0_8px_0_0_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
};

export default Card;
