type PageProps = {
  children: React.ReactNode;
};
export const Page: React.FC<PageProps> = ({ children }) => {
  return <section className="px-4 py-10">{children}</section>;
};
