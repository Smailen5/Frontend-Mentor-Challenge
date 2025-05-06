interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
