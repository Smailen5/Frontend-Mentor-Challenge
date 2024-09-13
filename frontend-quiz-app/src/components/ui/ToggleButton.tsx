import iconSun from "../../assets/images/icon-sun-dark.svg";
import iconMoon from "../../assets/images/icon-moon-dark.svg";

export const ToggleButton = () => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <span>
        <img src={iconSun} alt="icon sun" />
      </span>
      <input type="checkbox" value="" className="peer sr-only" />
      <div className="peer relative h-6 w-11 rounded-full bg-violet-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-violet-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-violet-800" />
      <span>
        <img src={iconMoon} alt="icon moon" />
      </span>
    </label>
  );
};
