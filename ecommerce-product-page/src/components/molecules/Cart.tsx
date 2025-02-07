import { thumbnailProduct1 } from "@/assets/images";

import CartContent from "./CartContent";

interface CartProps {
  isOpen: boolean;
}

const Cart = ({ isOpen }: CartProps) => {
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

        <CartContent thumbnail={thumbnailProduct1} items={0} />
      </section>
    </aside>
  );
};

export default Cart;
