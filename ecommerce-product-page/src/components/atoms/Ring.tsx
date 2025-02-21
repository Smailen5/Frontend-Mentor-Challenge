interface RingProps {
  className?: string;
}

const Ring = ({ className }: RingProps) => {
  return (
    <div
      className={`ring-primary absolute inset-0 rounded-xl ring-2 ${className}`}
    />
  );
};

export default Ring;
