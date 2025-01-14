interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-soft-red p-3 px-8 text-sm font-bold uppercase tracking-[0.2rem] lg:transition-colors lg:duration-500 lg:ease-in-out lg:hover:bg-very-dark-blue lg:hover:text-off-white xl:font-extrabold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
