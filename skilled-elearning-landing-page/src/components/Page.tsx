type PageProps = {
  children: React.ReactNode;
  isOpacity?: boolean;
};
export const Page: React.FC<PageProps> = ({ children, isOpacity }) => {
  return (
    <section className="relative overflow-hidden bg-opacity-5 px-4 py-14 md:overflow-visible md:px-10 md:pt-0 lg:px-16 xl:px-36">
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
