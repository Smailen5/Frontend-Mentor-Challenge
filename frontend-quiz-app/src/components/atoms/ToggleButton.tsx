import iconSun from "../../assets/images/icon-sun-dark.svg";
import iconMoon from "../../assets/images/icon-moon-dark.svg";
import { useDarkModeContext } from "../../utils/darkModeContext";

export const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <div className={`${darkMode && "dark"}`}>
      <label className="inline-flex cursor-pointer items-center gap-2">
        <span>
          <img src={darkMode ? iconSun : iconSun} alt="icon sun" />
        </span>
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onClick={toggleDarkMode}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-purple-600 after:absolute after:start-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full" />
        <span>
          <img src={darkMode ? iconMoon : iconMoon} alt="icon moon" />
        </span>
      </label>
    </div>
  );
};
