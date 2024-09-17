import { useDarkModeContext } from "../../utils/darkModeContext";
import { iconDarkMode } from "../../assets/images";

export const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const { IconSun, IconMoon } = darkMode
    ? iconDarkMode.light
    : iconDarkMode.dark;

  return (
    <div className={`${darkMode && "dark"}`}>
      <label className="inline-flex cursor-pointer items-center gap-2">
        <span>
          <IconSun aria-label="icon sun" />
        </span>
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onClick={toggleDarkMode}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-purple-600 after:absolute after:start-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full" />
        <span>
          <IconMoon aria-label="icon moon" />
        </span>
      </label>
    </div>
  );
};
