import { linksNav } from "@/data/links/linksNav";
import { Link } from 'react-router-dom';

interface NavLinsPros {
  setIsOpen?: (boolean: boolean) => void;
  isSidebar?: boolean;
}

const NavLinks = ({ setIsOpen, isSidebar }: NavLinsPros) => {
  const handleOpen = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {linksNav.map((link) => {
        return (
          <li key={link.label} className="relative">
            <Link
              to={link.href}
              className={`${setIsOpen ? "text-foreground text-xl font-bold" : "text-accent-foreground peer text-sm"} capitalize`}
              onClick={handleOpen}
            >
              {link.label}
            </Link>
            {isSidebar && (
              <div className="peer-hover:bg-primary absolute top-14 left-0 size-10 h-1 w-full transition-all duration-300 ease-in-out" />
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
