interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-soft-red p-2 px-7 text-sm font-bold uppercase tracking-widest"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
