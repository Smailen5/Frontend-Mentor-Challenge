import { BackgroundMobile, BackgroundDesktop } from "@/assets/images";

type BackgroundProps = {
  children: React.ReactNode;
};

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-full bg-background">
      <picture>
        <source media="(min-width: 1024px)" src={BackgroundDesktop} />
        <img src={BackgroundMobile} alt="background image" className="w-full" />
      </picture>
      {children}
    </div>
  );
};
