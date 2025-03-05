import { Logo } from "@/assets/images";
import { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="relative container mx-auto px-4 pt-8">
        {/* Background gradiente */}
        <div className="from-gradient-2 absolute inset-0 -z-10 max-h-[calc(50%-5rem)] w-full rounded-br-4xl bg-linear-to-l to-white" />
        <div className="flex w-full justify-center">
          <Logo className="size-10" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
