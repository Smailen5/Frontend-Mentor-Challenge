/**
 * @file CartProvider.tsx
 * @description Cart context provider component
 */

import { thumbnailProduct1 } from "@/assets/images";
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
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const value = {
    cartOpen,
    setCartOpen,
    thumbnailProduct1,
    quantity,
    setQuantity,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
