/**
 * @file Navbar.tsx
 * @description Main navigation component with mobile menu, cart and user profile
 */

import { IconCart, IconMenu, imageAvatar, logo } from "@/assets/images";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
// import Cart from "./Cart";
import { useCart } from "@/lib/hooks/useCart";
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
  const { cartOpen, setCartOpen } = useCart();
  const { cart } = useCart();

  return (
    <>
      <nav className="bg-background relative container mx-auto flex justify-between p-4 pb-6">
        <div className="flex items-center gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            rounded={"lg"}
            onClick={() => setIsOpen(true)}
          >
            <IconMenu aria-hidden={true} />
          </Button>

          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Button
              variant={"ghost"}
              size={"icon"}
              rounded={"lg"}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <IconCart aria-hidden={true} />
            </Button>
            {cart.quantity > 0 && (
              <span
                className="bg-primary absolute top-1 right-0 cursor-pointer rounded-xl px-2 text-xs text-white"
                onClick={() => setCartOpen(!cartOpen)}
              >
                {cart.quantity}
              </span>
            )}
          </div>
          <img src={imageAvatar} alt="user" className="h-8 w-8" />
        </div>
        {/* <Cart isOpen={cartOpen} /> */}
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
