import { iconMaps } from "../../assets/images/";

type IconQuizProps = {
  title?: string;
  icon: keyof typeof iconMaps;
};

const IconQuiz: React.FC<IconQuizProps> = ({ title, icon }) => {
  const IconComponent = iconMaps[icon];
  console.log(icon);

  return (
    <>
      {IconComponent ? (
        <div className="flex items-center gap-2">
          <IconComponent className="h-6 w-6" aria-label={`${title} icon`} />
          {title && <h2>{title}</h2>}
        </div>
      ) : (
        <span>Icon not found</span>
      )}
    </>
  );
};

export default IconQuiz;
