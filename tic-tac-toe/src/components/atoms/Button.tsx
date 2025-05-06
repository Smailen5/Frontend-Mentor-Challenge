import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative cursor-pointer rounded-2xl py-4 text-center text-dark-navy uppercase transition-colors ease-in-out duration-500",
  {
    variants: {
      variant: {
        primary: "w-full",
        secondary: "px-2",
      },
      size: {
        default: "h-14",
        sm: "h-12",
      },
      styleColor: {
        default: "bg-light-yellow hover:bg-light-yellow-hover",
        blue: "bg-light-blue hover:bg-light-blue-hover",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      styleColor: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, styleColor = "default", children, ...props },
    ref,
  ) => {
    return (
      <>
        <button
          className={cn(
            buttonVariants({ variant, size, styleColor, className }),
          )}
          ref={ref}
          {...props}
        >
          {children}
          {/* Ombreggiatura inferiore */}
          <div
            className={cn(
              "absolute inset-0 -z-10 h-16 rounded-2xl brightness-90",
              styleColor === "default" ? "bg-light-yellow" : "bg-light-blue",
            )}
          />
        </button>
      </>
    );
  },
);

export default Button;
