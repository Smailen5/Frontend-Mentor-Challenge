// Copiato da shadcn ui XD
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("space-y-2 pb-4", {
  variants: {
    variant: {
      default: "space-y-2 pb-4",
      input: "space-y-4",
      radio: "flex space-y-0 rounded-sm border-2 p-2",
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

export const Container: React.FC<ContainerProps> = ({ children, variant, className }) => {
  return <div className={cn(containerVariants({ variant, className }))}>{children}</div>;
};
