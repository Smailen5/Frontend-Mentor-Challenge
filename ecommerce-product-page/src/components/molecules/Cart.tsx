import { sneakers } from "@/data";
import { useCart } from "@/lib/hooks/useCart";
import CartContent from "./CartContent";

const Cart = ({ isOpen }: {isOpen: boolean}) => {
  const { cart, setCart } = useCart();
  const { title } = sneakers;

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

        <CartContent
          cartData={cart}
          title={title}
          handleRemoveCart={setCart}
        />
      </section>
    </aside>
  );
};

export default Cart;
