import { useCart } from "@/lib/hooks/useCart";
import { CartComponentProps } from "@/types";
import CartContent from "./CartContent";

const Cart = ({ isOpen }: CartComponentProps) => {
  const { cart } = useCart();
  const { thumbnail, quantity, price } = cart;
  console.log(cart);
  return (
    <aside
      className={`absolute top-0 z-20 flex h-full w-full items-start justify-center p-2 ${
        isOpen ? "absolute" : "hidden"
      }`}
    >
      <section
        className={`bg-background text-foreground h-auto w-full rounded-lg shadow-xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Header */}
        <header className="p-4 px-6 pb-6">
          <h3 className="text-lg font-bold">Cart</h3>
        </header>

        <hr className="border-muted-foreground" />

        <CartContent thumbnail={thumbnail} quantity={quantity} price={price} />
      </section>
    </aside>
  );
};

export default Cart;
