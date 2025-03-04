import { LayoutProps } from "@/test/layout";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
