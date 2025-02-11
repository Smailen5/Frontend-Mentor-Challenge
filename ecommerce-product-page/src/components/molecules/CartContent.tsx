import { iconDelete } from "@/assets/images";
import { CartContentProps } from "@/types";
import { Button } from "../atoms/Button";

const CartContent = ({ thumbnail, quantity }: CartContentProps) => {
  return (
    <main
      className={`${quantity > 0 ? "space-y-6 p-6 pb-8" : "flex h-48 items-center justify-center"}`}
    >
      {quantity > 0 ? (
        <>
          <article className="flex items-center gap-3">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="h-14 w-14 rounded-lg"
            />

            {/* Testo prodotto e costo */}
            <div className="text-accent-foreground flex-1">
              <h4 className="text-sm">Fall Limited Edition Sneakers</h4>
              <p className="mt-1">
                <span className="text-sm">$125.00 x 3 </span>
                <span className="text-foreground font-bold">$375.00</span>
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              rounded={"lg"}
              className="h-auto self-center"
            >
              <img src={iconDelete} alt="delete" className="h-5 w-4" />
            </Button>
          </article>

          <Button className="text-primary-foreground h-14 w-full rounded-lg font-bold">
            Checkout
          </Button>
        </>
      ) : (
        <p className="text-accent-foreground font-bold">
          <span className="sr-only">the cart is empty</span>Your cart is empty.
        </p>
      )}
    </main>
  );
};

export default CartContent;
