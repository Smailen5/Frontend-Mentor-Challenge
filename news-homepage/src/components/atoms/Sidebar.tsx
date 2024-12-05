import { navigationLinks } from "@/config/navigation";
import Image from "next/image";
import Link from 'next/link';

export const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-foreground transition-opacity duration-300 md:hidden ${isOpen ? "opacity-80" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`border-1 fixed inset-y-0 right-0 top-0 z-50 w-64 transform bg-background shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="p-4">
          <div className="flex w-full justify-end">
            <button onClick={() => setIsOpen(false)}>
              <Image
                src={"/icon-menu-close.svg"}
                alt="close"
                width={25}
                height={25}
              />
            </button>
          </div>

          <ul>
            {navigationLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
