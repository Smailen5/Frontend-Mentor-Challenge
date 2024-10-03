type BackgroundProps = {
  children: React.ReactNode;
};

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <div className="h-full w-full bg-green-200">{children}</div>;
};
