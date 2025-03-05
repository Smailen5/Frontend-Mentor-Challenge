import { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="relative container mx-auto px-4 pt-8">{children}</div>
    </>
  );
};

export default Layout;
