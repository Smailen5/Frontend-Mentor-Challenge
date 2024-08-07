/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge"

const Header = ({ className }) => {
  return (
    <header className={twMerge("bg-transparent w-full p-8 xl:hidden", className)}>
      <div>
        <img src="/images/logo.svg" alt="logo" className="w-32" />
      </div>
    </header>
  );
};

export default Header;
