import { iconCart, iconMinus, iconPlus } from "@/assets/images";
import Layout from "../layout/Layout";
import CarouselImage from "../molecules/CarouselImage";

function ProductTemplate() {
  return (
    <Layout>
      <CarouselImage />
      <div className="space-y-4 p-6">
        <h2 className="text-accent-foreground text-sm font-bold uppercase">
          Sneaker Company
        </h2>
        <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
        <p className="text-base text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        {/* Componente prezzo */}
        <div className="my-8 flex h-8 items-center justify-between font-bold">
          <div className="flex gap-4">
            <div className="text-3xl">$125.00</div>
            <span className="flex items-center justify-center rounded-lg bg-black px-3 text-white">
              50%
            </span>
          </div>
          <span className="text-accent-foreground text-base">$250.00</span>
        </div>

        {/* Componente quantità */}
        <div className="bg-secondary flex h-14 items-center justify-between rounded-lg px-6">
          <button>
            <img src={iconMinus} alt="rimuovi quantità" />
          </button>
          <span className="font-bold">0</span>
          <button>
            <img src={iconPlus} alt="aggiungi quantità" />
          </button>
        </div>

        {/* Componente aggiungi al carrello */}
        <button className="bg-primary shadow-primary/25 flex h-14 w-full items-center justify-center gap-4 rounded-lg font-bold shadow-xl">
          <img src={iconCart} alt="cart" />
          Add to cart
        </button>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
