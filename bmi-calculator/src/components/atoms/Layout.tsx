import { LayoutProps } from "@/types";
import { twMerge } from "tailwind-merge";

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <div
        className={twMerge(
          "relative container mx-auto px-4 pt-8 xl:px-16 xl:py-[88px]",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
