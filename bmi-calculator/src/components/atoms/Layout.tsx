import { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="mx-auto px-4 pt-4">{children}</div>
    </>
  );
};

export default Layout;
