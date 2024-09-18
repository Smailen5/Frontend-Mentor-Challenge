import IconAccessibility from "./icon-accessibility.svg?react";
import IconCss from "./icon-css.svg?react";
import IconHtml from "./icon-html.svg?react";
import IconJavascript from "./icon-js.svg?react";
import IconMoonDark from "./icon-moon-dark.svg?react";
import IconMoonLight from "./icon-moon-light.svg?react";
import IconSunDark from "./icon-sun-dark.svg?react";
import IconSunLight from "./icon-sun-light.svg?react";
import IconCorrect from './icon-correct.svg'
import IconError from './icon-error.svg'

type IconComponents = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

type IconDarkMode = {
  light: {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  };
  dark: {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  };
};

export const iconMaps: IconComponents = {
  IconCss,
  IconHtml,
  IconJavascript,
  IconAccessibility,
};

export const iconDarkMode: IconDarkMode = {
  light: {
    IconSun: IconSunLight,
    IconMoon: IconMoonLight,
  },
  dark: {
    IconSun: IconSunDark,
    IconMoon: IconMoonDark,
  },
};

export const iconAnswer ={
  IconCorrect,
  IconError
}
