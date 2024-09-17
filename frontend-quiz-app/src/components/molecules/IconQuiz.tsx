import { iconMaps } from "../../assets/images/";

type IconQuizProps = {
  title: string;
  icon: keyof typeof iconMaps;
};

// Devo inserire manualmente i colori, al momento non riesco a recuperare il fill degli svg
const iconsBackground: { [key: string]: string } = {
  IconCss: "#E0FDEF",
  IconHtml: "#FFF1E9",
  IconJavascript: "#EBF0FF",
  IconAccessibility: "#F6E7FF",
};

const IconQuiz: React.FC<IconQuizProps> = ({ title, icon }) => {
  const IconComponent = iconMaps[icon];
  const iconBackground = iconsBackground[icon] || "#ffffff";

  return (
    <>
      {IconComponent ? (
        <div className="flex items-center gap-4">
          <IconComponent
            style={{ background: iconBackground }}
            className="size-11 rounded-md p-2"
            aria-label={`${title} icon`}
          />
          {title && <h2 className="text-xl font-bold">{title}</h2>}
        </div>
      ) : (
        <span>Icon not found</span>
      )}
    </>
  );
};

export default IconQuiz;
