type PageProps = {
  children: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
      {children}
    </div>
  );
};
