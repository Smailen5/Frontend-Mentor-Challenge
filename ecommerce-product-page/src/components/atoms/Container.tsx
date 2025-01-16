import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

/**
 * Definizione delle varianti del container utilizzando class-variance-authority
 * @property {object} variants - Le varianti disponibili per il container
 * @property {object} defaultVariants - Le varianti predefinite
 */
const containerVariants = cva("", {
  variants: {
    variant: {
      /** Stile base con sfondo predefinito */
      default: "bg-background",
      /** Layout per contenitori di immagini con flex e spaziatura */
      image: "flex items-center gap-6",
      /** Layout per la barra di navigazione con flex e padding */
      navbar: "mx-auto flex h-full items-center justify-between px-6",
      /** Wrapper principale con altezza e larghezza fisse */
      wrapper: "bg-background h-16 w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * Interfaccia per le props del componente Container
 * @extends {React.HTMLAttributes<HTMLDivElement>} - Estende le props HTML native del div
 * @extends {VariantProps<typeof containerVariants>} - Estende le props delle varianti
 */
interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** Contenuto del container */
  children: ReactNode;
  /** Classi CSS aggiuntive */
  className?: string;
}

/**
 * Componente Container che fornisce diversi layout predefiniti attraverso varianti
 * @component
 * @example
 * // Container base
 * <Container>Contenuto</Container>
 *
 * // Container con variante specifica
 * <Container variant="image">
 *   <img src="..." alt="..." />
 * </Container>
 *
 * // Container con classi personalizzate
 * <Container variant="navbar" className="custom-class">
 *   Contenuto navbar
 * </Container>
 */
function Container({ children, className, variant, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}

export default Container;
