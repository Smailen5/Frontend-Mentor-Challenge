import PropsType from "prop-types";
import { twMerge } from "tailwind-merge";
import logo from "../assets/logo.svg";

const LogoBrand = ({ className, classImg }) => {
  return (
    <header
      className={twMerge(
        "w-full bg-transparent p-8 xl:hidden xl:p-0 xl:pt-20",
        className,
      )}
    >
      <div className="xl:mx-auto xl:pl-8">
        <div className="xl:mx-auto xl:w-[28rem]">
          <img
            src={logo}
            alt="logo"
            className={twMerge("w-32", classImg)}
          />
        </div>
      </div>
    </header>
  );
};

LogoBrand.propTypes = {
  className: PropsType.string,
  classImg: PropsType.string,
};

export default LogoBrand;
