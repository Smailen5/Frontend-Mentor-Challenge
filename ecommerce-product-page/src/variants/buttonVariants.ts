/**
 * @file button-variants.ts
 * @description Button component variants and styles
 */

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded-lg font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:opacity-80",
        ghost: "hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
