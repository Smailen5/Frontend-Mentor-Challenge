import { useDarkModeContext } from "../../utils/darkModeContext";
import { iconDarkMode } from "../../assets/images";

export const ToggleButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const { IconSun, IconMoon } = darkMode
    ? iconDarkMode.light
    : iconDarkMode.dark;

  return (
    <div className={`${darkMode && "dark"}`}>
      <label className="inline-flex cursor-pointer items-center gap-2">
        <span>
          <IconSun aria-label="icon sun" className="size-5" />
        </span>
        <input
          type="checkbox"
          className="peer sr-only"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="peer relative h-6 w-10 rounded-full bg-purple-600 after:absolute after:start-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full" />
        <span>
          <IconMoon aria-label="icon moon" className="size-5" />
        </span>
      </label>
    </div>
  );
};
