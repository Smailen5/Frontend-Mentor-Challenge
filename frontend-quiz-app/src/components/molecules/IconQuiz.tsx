import { iconMaps } from "../../assets/images";

type IconQuizProps = {
  title: string;
  icon: string;
};
const IconQuiz: React.FC<IconQuizProps> = ({ title, icon }) => {
  const iconSrc = iconMaps[icon];

  return (
    <>
      {iconSrc ? (
        <img src={iconSrc} alt={`${title} icon`} />
      ) : (
        <span>Icon not found</span>
      )}
    </>
  );
};

export default IconQuiz;
