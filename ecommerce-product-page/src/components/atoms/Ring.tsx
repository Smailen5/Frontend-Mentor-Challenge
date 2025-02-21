interface RingProps {
  className?: string;
  noRing?: boolean;
  onClick?: () => void;
}

const Ring = ({ className, noRing, onClick }: RingProps) => {
  return (
    <div
      className={`absolute inset-0 cursor-pointer rounded-xl ${!noRing && "ring-primary ring-2"} ${className}`}
      onClick={onClick}
    />
  );
};

export default Ring;
