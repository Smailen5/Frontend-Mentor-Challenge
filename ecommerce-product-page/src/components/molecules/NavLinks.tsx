import { linksNav } from "@/data/links/linksNav";

interface NavLinsPros {
  setIsOpen?: (boolean: boolean) => void;
}

const NavLinks = ({ setIsOpen }: NavLinsPros) => {
  const handleOpen = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {linksNav.map((link) => {
        return (
          <li key={link.label}>
            <a
              href={link.href}
              className={`${setIsOpen ? "text-foreground text-xl font-bold" : "text-accent-foreground text-sm"} capitalize`}
              onClick={handleOpen}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
