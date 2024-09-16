type PageProps = {
  children: React.ReactNode;
};
export const Page: React.FC<PageProps> = ({ children }) => {
  return <section className="mx-auto p-4 dark:bg-black">{children}</section>;
};
