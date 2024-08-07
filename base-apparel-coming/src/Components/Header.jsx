/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge"

const Header = ({ className, classImg }) => {
  return (
    <header className={twMerge("bg-transparent w-full p-8 xl:hidden", className)}>
      <div>
        <img src="/images/logo.svg" alt="logo" className={twMerge("w-32", classImg)} />
      </div>
    </header>
  );
};

export default Header;
