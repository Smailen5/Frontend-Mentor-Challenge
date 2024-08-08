/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const LogoBrand = ({ className, classImg }) => {
  return (
    <section
      className={twMerge(
        "w-full bg-transparent p-8 xl:hidden xl:p-0 xl:pt-20",
        className,
      )}
    >
      <div className="xl:mx-auto xl:pl-8">
        <div className="xl:mx-auto xl:w-[28rem]">
          <img
            src="/images/logo.svg"
            alt="logo"
            className={twMerge("w-32", classImg)}
          />
        </div>
      </div>
    </section>
  );
};

export default LogoBrand;
