import iconClose from "@/assets/images/icon-close.svg";
import Image from "@/components/atoms/Image";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const links = [
  {
    label: "collections",
    href: "/collections",
  },
  {
    label: "men",
    href: "/men",
  },
  {
    label: "women",
    href: "/women",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

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
        className={`bg-background fixed left-0 top-0 z-30 h-screen w-2/3 transform transition-transform duration-300 ease-in-out ${
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
            {links.map((link) => {
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
