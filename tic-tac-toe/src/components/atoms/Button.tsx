const Button = () => {
  return (
    <>
      <button className="bg-light-yellow text-dark-navy relative w-full cursor-pointer rounded-2xl py-4 text-center uppercase">
        Button
        {/* Ombreggiatura inferiore */}
        <div className="bg-light-yellow brightness-90 absolute inset-0 -z-10 h-16 rounded-2xl" />
      </button>
    </>
  );
};

export default Button;
