import IconAccessibility from "./icon-accessibility.svg?react";
import IconCss from "./icon-css.svg?react";
import IconHtml from "./icon-html.svg?react";
import IconJavascript from "./icon-js.svg?react";

type IconComponents = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const iconMaps:IconComponents = {
  IconCss,
  IconHtml,
  IconJavascript,
  IconAccessibility,
};
