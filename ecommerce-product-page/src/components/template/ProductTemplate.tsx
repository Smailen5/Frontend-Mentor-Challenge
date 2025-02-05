import { iconCart, iconMinus, iconPlus } from "@/assets/images";
import Layout from "../layout/Layout";
import CarouselImage from "../molecules/CarouselImage";

function ProductTemplate() {
  return (
    <Layout>
      <CarouselImage />

      {/* Componente descrizione */}
      <div className="space-y-4 p-6">
        <div className="mb-2">
          <h2 className="text-accent-foreground text-sm font-bold uppercase">
            Sneaker Company
          </h2>
          <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
        </div>
        <p className="text-base text-gray-500" role="contentinfo">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        {/* Componente prezzo */}
        <div
          className="my-8 flex h-8 items-center justify-between font-bold"
          role="contentinfo"
          aria-label="Product price"
        >
          <div className="flex gap-4">
            <div className="text-3xl" aria-label="Current price">
              $125.00
            </div>
            <span
              className="flex items-center justify-center rounded-lg bg-black px-3 text-white"
              aria-label="Discount"
            >
              50%
            </span>
          </div>
          <span
            className="text-accent-foreground text-base"
            aria-label="Original price"
          >
            $250.00
          </span>
        </div>

        {/* Componente quantità */}
        <div
          className="bg-secondary flex h-14 items-center justify-between rounded-lg px-6"
          role="group"
          aria-label="Quantity selector"
        >
          <button aria-label="Decrease quantity">
            <img src={iconMinus} alt="" aria-hidden="true" />
          </button>
          <span className="font-bold" aria-label="Current quantity">
            0
          </span>
          <button aria-label="Increase quantity">
            <img src={iconPlus} alt="" aria-hidden="true" />
          </button>
        </div>

        {/* Componente aggiungi al carrello */}
        <button
          className="bg-primary shadow-primary/25 focus:ring-primary/50 flex h-14 w-full items-center justify-center gap-4 rounded-lg font-bold text-white shadow-xl hover:opacity-90 focus:ring-2 focus:outline-none"
          aria-label="Add to cart"
        >
          <img src={iconCart} alt="" aria-hidden="true" className="h-5 w-5" />
          <span>Add to cart</span>
        </button>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
