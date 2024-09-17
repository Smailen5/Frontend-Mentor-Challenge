import mobileLight from "../../assets/images/pattern-background-mobile-light.svg";
import tabletLight from "../../assets/images/pattern-background-tablet-light.svg";
import desktopLight from "../../assets/images/pattern-background-desktop-light.svg";
import mobileDark from "../../assets/images/pattern-background-mobile-dark.svg";
import tabletDark from "../../assets/images/pattern-background-tablet-dark.svg";
import desktopDark from "../../assets/images/pattern-background-desktop-dark.svg";
import { useDarkModeContext } from "../../utils/darkModeContext";

type PageProps = {
  children: React.ReactNode;
};
export const Page: React.FC<PageProps> = ({ children }) => {
  const { darkMode } = useDarkModeContext();
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* colore di sfondo */}
        <div className="absolute inset-0 z-0 bg-gray-100 dark:bg-gray-900" />
        <picture className="absolute z-0">
          {/* Tema chiaro/scuro - desktop */}
          <source
            srcSet={darkMode ? desktopDark : desktopLight}
            media="(min-width: 1024px)"
            className="block dark:hidden"
          />
          {/* Tema chiaro/scuro - tablet */}
          <source
            srcSet={darkMode ? tabletDark : tabletLight}
            media="(min-width: 768px)"
            className="block dark:hidden"
          />
          {/* Tema chiaro/scuro - mobile */}
          <source
            srcSet={darkMode ? mobileDark : mobileLight}
            media="(max-width: 767px)"
            className="block dark:hidden"
          />

          {/* Fallback per browser senza supporto <picture> */}
          <img
            src={darkMode ? mobileDark : mobileLight}
            alt="Background pattern"
            className="relative z-0"
          />
        </picture>
        <section className="font-rubik relative z-10 mx-auto p-4">
          {children}
        </section>
      </div>
    </>
  );
};
