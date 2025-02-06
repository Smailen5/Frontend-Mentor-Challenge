/**
 * @file button-variants.ts
 * @description Button component variants and styles
 */

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "font-medium transition-colors duration-300 ease-in-out focus:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:opacity-80",
        ghost: "hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10 p-2 flex items-center justify-center",
      },
      rounded: {
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        xs: "rounded-xs",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
