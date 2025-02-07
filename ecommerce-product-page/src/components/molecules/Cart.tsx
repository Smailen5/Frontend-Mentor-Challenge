import { iconDelete, thumbnailProduct1 } from "@/assets/images";
import { Button } from "../atoms/Button";

interface CartProps {
  isOpen: boolean;
}

const Cart = ({ isOpen }: CartProps) => {
  return (
    <div
      className={`absolute top-0 z-20 flex h-full w-full items-start justify-center bg-black/40 p-2 ${isOpen ? "absolute" : "hidden"}`}
    >
      <div
        className={`h-auto w-full rounded-lg bg-white ${isOpen ? "block" : "hidden"}`}
      >
        {/* Header */}
        <header className="p-4 px-6 pb-6">
          <h3 className="text-lg font-bold">Cart</h3>
        </header>

        <hr className="border-muted-foreground" />

        {/* Body */}
        <div className="space-y-6 p-6 pb-8">
          {/* Componente immagine prodotto e costo */}
          <div className="flex items-center gap-3">
            {/* Immagine prodotto */}
            <img
              src={thumbnailProduct1}
              alt="thumbnail"
              className="h-14 w-14 rounded-lg"
            />

            {/* Testo prodotto e costo */}
            <div className="text-accent-foreground flex-1">
              <p className="text-sm">Fall Limited Edition Sneakers</p>
              <div className="mt-1">
                <span className="text-sm">$125.00 x 3 </span>
                <span className="text-foreground font-bold">$375.00</span>
              </div>
            </div>

            {/* Bottone elimina */}
            <Button
              variant="ghost"
              size="icon"
              rounded={"lg"}
              className="h-auto self-center"
            >
              <img src={iconDelete} alt="delete" className="h-5 w-4" />
            </Button>
          </div>

          <Button className="text-primary-foreground h-14 w-full rounded-lg font-bold">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
