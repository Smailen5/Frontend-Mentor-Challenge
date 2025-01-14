interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-soft-red p-3 px-8 text-sm font-bold uppercase tracking-[0.2rem] xl:font-extrabold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
