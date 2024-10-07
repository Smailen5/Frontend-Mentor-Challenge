// Copiato da shadcn ui XD
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("space-y-2 pb-4", {
  variants: {
    variant: {
      default: "pb-6 flex-1 flex flex-col gap-2 md:gap-1",
      input: "space-y-4 pb-6",
      radio:
        "flex space-y-0 rounded-md border border-input py-2 px-6 gap-3 md:flex-1",
      checkbox: "flex items-center space-y-0 rounded-md gap-4 pb-2",
      flex: "flex flex-col gap-4 md:flex-row md:items-center md:gap-4 space-y-0 md:pb-0",
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
