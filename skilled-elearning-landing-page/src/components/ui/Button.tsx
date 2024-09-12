import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-clr-blue text-clr-white text-xl font-semibold shadow hover:opacity-60 md:h-12 md:px-6",
        orange:
          "bg-gradient-pink text-clr-white text-xl font-semibold shadow-sm hover:opacity-60 md:h-12 md:px-6",
        blue: "bg-gradient-blue text-clr-white text-xl font-semibold shadow-sm hover:opacity-60",
        ghost: "hover:opacity-60 font-bold text-xl text-clr-pink",
      },
      size: {
        default: "h-9",
        sm: "h-12 px-6 lg:h-16 lg:px-10",
        lg: "h-14 px-8 md:h-12 md:px-6 lg:h-16 lg:px-10",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
