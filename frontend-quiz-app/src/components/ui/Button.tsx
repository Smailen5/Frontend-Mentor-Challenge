import { iconMaps } from "../../assets/images";

type ButtonProps = {
  children: React.ReactNode;
  icon?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, icon }) => {
    const iconSrc = icon? iconMaps[icon] : undefined;
    console.log(iconSrc);
    
  return (
    <button className="bg-slate-400 rounded-lg flex items-center gap-4 p-4">
      <img src={iconSrc} alt="icona" />
      {children}
    </button>
  );
};
