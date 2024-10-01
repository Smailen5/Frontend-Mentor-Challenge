import { BackgroundMobile, BackgroundDesktop } from "@/assets/images";

type BackgroundProps = {
  children: React.ReactNode;
};

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-full bg-background">
      <picture className="w-full">
        <source media="(min-width: 1024px)" srcSet={BackgroundDesktop} />
        <img
          srcSet={BackgroundMobile}
          alt="background image"
          className="w-full"
        />
      </picture>
      {children}
    </div>
  );
};
