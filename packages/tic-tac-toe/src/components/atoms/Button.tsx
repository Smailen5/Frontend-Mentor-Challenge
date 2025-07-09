import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative cursor-pointer rounded-2xl py-4 text-center text-dark-navy uppercase transition-all ease-in-out duration-500",
  {
    variants: {
      variant: {
        primary: "w-full h-13",
        secondary: "p-3 px-4 rounded-lg",
        icon: "p-0 size-10 text-semi-dark-navy flex items-center justify-center rounded-md",
      },
      styleColor: {
        yellow: "bg-light-yellow hover:bg-light-yellow-hover",
        blue: "bg-light-blue hover:bg-light-blue-hover",
        silver: "bg-silver hover:bg-silver-hover",
      },
      shadowSize: {
        large: "",
        small: "",
      },
    },
    compoundVariants: [
      {
        styleColor: "yellow",
        shadowSize: "large",
        className:
          "shadow-[0_8px_0_0_rgba(242,176,54,0.75)] hover:shadow-[0_8px_0_0_rgba(255,200,97,0.75)]",
      },
      {
        styleColor: "yellow",
        shadowSize: "small",
        className:
          "shadow-[0_4px_0_0_rgba(242,176,54,0.75)] hover:shadow-[0_4px_0_0_rgba(255,200,97,0.75)]",
      },
      {
        styleColor: "blue",
        shadowSize: "large",
        className:
          "shadow-[0_8px_0_0_rgba(49,196,191,0.75)] hover:shadow-[0_8px_0_0_rgba(99,233,228,0.75)]",
      },
      {
        styleColor: "blue",
        shadowSize: "small",
        className:
          "shadow-[0_4px_0_0_rgba(49,196,191,0.75)] hover:shadow-[0_4px_0_0_rgba(99,233,228,0.75)]",
      },
      {
        styleColor: "silver",
        shadowSize: "large",
        className:
          "shadow-[0_8px_0_0_rgba(167,190,200,0.6)] hover:shadow-[0_8px_0_0_rgba(218,231,236,0.75)]",
      },
      {
        styleColor: "silver",
        shadowSize: "small",
        className:
          "shadow-[0_4px_0_0_rgba(167,190,200,0.6)] hover:shadow-[0_4px_0_0_rgba(218,231,236,0.75)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      styleColor: "yellow",
      shadowSize: "large",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      styleColor = "yellow",
      shadowSize = "large",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, styleColor, shadowSize, className }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
