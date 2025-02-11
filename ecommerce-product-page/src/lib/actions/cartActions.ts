/**
 * @file cartActions.ts
 * @description Cart management actions and utilities
 */

import { thumbnailProduct1 } from "@/assets/images";
import { Dispatch, SetStateAction } from "react";

interface CartActions {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

export const handleAddToCart = ({ quantity, setQuantity }: CartActions) => {
  setQuantity(quantity + 1);
};

export const handleRemoveFromCart = ({ quantity, setQuantity }: CartActions) => {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }
};

export const cartDefaults = {
  thumbnailProduct1,
};
