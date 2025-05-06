interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button className="bg-light-yellow text-dark-navy relative w-full cursor-pointer rounded-2xl py-4 text-center uppercase">
        {children}
        {/* Ombreggiatura inferiore */}
        <div className="bg-light-yellow absolute inset-0 -z-10 h-16 rounded-2xl brightness-90" />
      </button>
    </>
  );
};

export default Button;
