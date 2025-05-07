import { twMerge } from 'tailwind-merge';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className={twMerge("mx-auto flex h-screen w-full flex-col items-center justify-center px-4 py-4", className)}>
      {children}
    </main>
  );
};

export default Layout;
