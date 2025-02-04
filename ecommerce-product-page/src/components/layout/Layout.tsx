import Navbar from "@/components/molecules/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
