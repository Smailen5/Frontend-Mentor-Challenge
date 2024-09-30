type BackgroundProps = {
  children: React.ReactNode;
};

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-full bg-background">
      <picture>
        <img
          src="../src/assets/images/background-pattern-mobile.svg"
          alt="background image"
        />
      </picture>
      {children}
    </div>
  );
};
