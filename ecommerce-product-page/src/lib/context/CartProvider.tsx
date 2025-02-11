/**
 * @file CartProvider.tsx
 * @description Cart context provider component
 */

import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import { thumbnailProduct1 } from '@/assets/images';

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
  const items = 1;

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, thumbnailProduct1, items }}>
      {children}
    </CartContext.Provider>
  );
};
