/* eslint-disable react/prop-types */
 const Button = ({ children, type }) => {
  // ricordati di modificare il mt-8 in mt-4 e di adeguare il codice dove viene usato il componente
  return (
    <button
      type={type}
      className="inline-block border-b-2 border-emerald-400 pb-3 text-xl uppercase"
    >
      {children}
    </button>
  );
};

export default Button;