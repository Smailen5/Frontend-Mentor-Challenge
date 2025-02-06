/**
 * @file Navbar.tsx
 * @description Main navigation component with mobile menu, cart and user profile
 */

import { iconCart, iconMenu, imageAvatar, logo } from "@/assets/images";
import { Button } from "@/components/atoms/Button";
import Image from "@/components/atoms/Image";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

/**
 * Navbar component
 * @component
 * @description Main navigation bar with mobile menu toggle, logo, cart and user profile
 *
 * @example
 * ```tsx
 * <Navbar />
 * ```
 *
 * @returns {JSX.Element} Navigation bar with mobile menu integration
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-background container mx-auto flex justify-between p-4 pb-6">
        <div className="flex items-center gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            rounded={"lg"}
            className=""
            onClick={() => setIsOpen(true)}
          >
            <Image src={iconMenu} alt="menu" />
          </Button>

          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <img src={iconCart} alt="cart" />
          </button>
          <img src={imageAvatar} alt="user" className="h-8 w-8" />
        </div>
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
