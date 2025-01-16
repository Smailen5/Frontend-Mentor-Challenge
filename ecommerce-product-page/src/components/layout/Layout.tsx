import Navbar from "../molecules/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout ({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
