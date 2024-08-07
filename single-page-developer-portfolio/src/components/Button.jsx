import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
const Button = ({ children, type, className, href, target }) => {
  // ricordati di modificare il mt-8 in mt-4 e di adeguare il codice dove viene usato il componente
  return (
    <button
      type={type}
      className={twMerge(
        "inline-block border-b-2 border-skin-accent pb-3 text-xl uppercase hover:text-skin-accent",
        className,
      )}
    >
      <a href={href} target={target}>
        {children}
      </a>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
