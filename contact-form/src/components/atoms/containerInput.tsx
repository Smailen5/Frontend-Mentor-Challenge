// Copiato da shadcn ui XD
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("space-y-2 pb-4", {
  variants: {
    variant: {
      default: "space-y-2 pb-6",
      input: "space-y-4 pb-6",
      radio: "flex space-y-0 rounded-md border border-input py-2 px-6 gap-3",
      checkbox: "flex items-center space-y-0 rounded-md gap-4 pt-4 pb-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof containerVariants>;

export const Container: React.FC<ContainerProps> = ({
  children,
  variant,
  className,
}) => {
  return (
    <div className={cn(containerVariants({ variant, className }))}>
      {children}
    </div>
  );
};
