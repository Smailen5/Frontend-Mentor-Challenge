/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
const Button = ({ children, type, className }) => {
  // ricordati di modificare il mt-8 in mt-4 e di adeguare il codice dove viene usato il componente
  return (
    <button
      type={type}
      className={twMerge(
        "inline-block border-b-2 border-emerald-400 pb-3 text-xl uppercase md:text-2xl",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
