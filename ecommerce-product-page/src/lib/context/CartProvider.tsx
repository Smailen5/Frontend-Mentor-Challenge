/**
 * @file CartProvider.tsx
 * @description Cart context provider component
 */

import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

/**
 * Cart context provider component
 * @component
 * @description Provides cart state and setter to child components
 */
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
