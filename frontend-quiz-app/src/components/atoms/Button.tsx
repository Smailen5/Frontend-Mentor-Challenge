import { iconMaps } from "../../assets/images";

type ButtonProps = {
  children: React.ReactNode;
  icon?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, icon }) => {
  const iconSrc = icon ? iconMaps[icon] : undefined;

  return (
    <button className="flex w-full items-center gap-4 rounded-lg bg-slate-400 p-4">
      <img src={iconSrc} alt="icona" />
      {children}
    </button>
  );
};
