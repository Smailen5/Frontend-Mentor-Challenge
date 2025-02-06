/**
 * @file Sidebar.tsx
 * @description Mobile navigation sidebar component with overlay
 */

import iconClose from "@/assets/images/icon-close.svg";
import Image from "@/components/atoms/Image";
import { linksNav } from "@/data/links/linksNav";
import { SidebarProps } from "@/data/types";

/**
 * Sidebar component
 * @component
 * @description Mobile navigation sidebar with dark overlay and animated transitions
 *
 * @example
 * ```tsx
 * <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
 * ```
 *
 * @param {SidebarProps} props - Component props
 * @returns {JSX.Element} Sidebar with navigation links and overlay
 */
export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Overlay scuro */}
      <div
        className={`bg-foreground fixed inset-0 z-20 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-80" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar effettiva */}
      <div
        className={`bg-background fixed top-0 left-0 z-30 h-screen w-2/3 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full space-y-14 p-6">
          <Image
            src={iconClose}
            alt="close"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />

          <ul className="flex flex-col gap-6">
            {linksNav.map((link) => {
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xl font-bold capitalize"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
