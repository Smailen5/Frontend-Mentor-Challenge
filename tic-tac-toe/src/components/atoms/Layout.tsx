interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="mx-auto flex h-screen w-full flex-col items-center justify-center px-4 py-4">
      {children}
    </main>
  );
};

export default Layout;
