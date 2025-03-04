import { Logo } from "@/assets/images";
import { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="container mx-auto px-4 pt-8">
        <div className="flex w-full justify-center">
          <Logo className="size-10" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
