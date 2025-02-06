/**
 * @file ProductQuantity.tsx
 * @description Component for managing product quantity selection with increment/decrement controls.
 */

import { iconMinus, iconPlus } from "@/assets/images";
import { Button } from "../atoms/Button";

/**
 * ProductQuantity component
 * @component
 * @description Renders a quantity selector with increase/decrease buttons and current quantity display
 *
 * @example
 * ```tsx
 * <ProductQuantity />
 * ```
 *
 * @returns {JSX.Element} A quantity selector group containing:
 * - Decrease button
 * - Current quantity display
 * - Increase button
 *
 * @accessibility
 * - Uses semantic button and output elements
 * - Includes aria-labels for screen readers
 * - Groups related controls with role="group"
 */
const ProductQuantity = () => {
  return (
    <div
      className="bg-secondary flex h-14 items-center justify-between rounded-lg px-6"
      role="group"
      aria-label="Quantity selector"
    >
      <Button
        type="button"
        aria-label="Decrease quantity"
        variant={"ghost"}
        size={"icon"}
        rounded={"lg"}
      >
        <img src={iconMinus} aria-hidden="true" />
      </Button>
      <output className="font-bold" aria-label="Current quantity">
        0
      </output>
      <Button
        type="button"
        aria-label="Increase quantity"
        variant={"ghost"}
        size={"icon"}
        rounded={"lg"}
      >
        <img src={iconPlus} aria-hidden="true" />
      </Button>
    </div>
  );
};

export default ProductQuantity;
