type PageProps = {
  children: React.ReactNode;
  isOpacity?: boolean;
};
export const Page: React.FC<PageProps> = ({ children, isOpacity }) => {
  return (
    <section className="px-4 py-14 bg-opacity-5 relative overflow-hidden">
      {isOpacity && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-clr-light-blue to-clr-white">
            <div className="absolute inset-0 bg-clr-white opacity-85" />
          </div>
        </>
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
};
