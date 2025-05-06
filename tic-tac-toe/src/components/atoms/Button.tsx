import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative cursor-pointer rounded-2xl py-4 text-center text-dark-navy uppercase transition-colors ease-in-out duration-500",
  {
    variants: {
      variant: {
        primary: "w-full h-14",
        secondary: "p-4 h-12 flex items-center",
        icon: "p-4 h-12 size-13 text-semi-dark-navy",
      },
      styleColor: {
        yellow: "bg-light-yellow hover:bg-light-yellow-hover",
        blue: "bg-light-blue hover:bg-light-blue-hover",
        silver: "bg-silver hover:bg-silver-hover",
      },
    },
    defaultVariants: {
      variant: "primary",
      styleColor: "yellow",
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
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, styleColor, className }))}
          ref={ref}
          {...props}
        >
          {children}
          {/* Ombreggiatura inferiore */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-2xl brightness-90",
              styleColor === "yellow"
                ? "bg-light-yellow"
                : styleColor === "blue"
                  ? "bg-light-blue"
                  : "bg-silver",
              variant === "primary"
                ? "h-16"
                : variant === "secondary"
                  ? "h-13"
                  : "h-14",
            )}
          />
        </button>
      </>
    );
  },
);

Button.displayName = "Button";

export default Button;
