import { iconCart, iconMinus, iconPlus } from "@/assets/images";
import Layout from "../layout/Layout";
import CarouselImage from "../molecules/CarouselImage";

function ProductTemplate() {
  return (
    <Layout>
      <CarouselImage />

      {/* Componente descrizione */}
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
            <p className="text-3xl">
              <span className="sr-only">Current price:</span>
              $125.00
            </p>
            <span className="flex items-center justify-center rounded-lg bg-black px-3 text-white">
              <span className="sr-only">Discount:</span>
              50%
            </span>
          </div>
          <p className="text-accent-foreground text-base">
            <span className="sr-only">Original price:</span>
            <del className="decoration-accent-foreground line-through decoration-1">
              $250.00
            </del>
          </p>
        </div>

        {/* Componente quantità */}
        <div
          className="bg-secondary flex h-14 items-center justify-between rounded-lg px-6"
          role="group"
          aria-label="Quantity selector"
        >
          <button type="button" aria-label="Decrease quantity">
            <img src={iconMinus} aria-hidden="true" />
          </button>
          <output className="font-bold" aria-label="Current quantity">
            0
          </output>
          <button type="button" aria-label="Increase quantity">
            <img src={iconPlus} aria-hidden="true" />
          </button>
        </div>

        {/* Componente aggiungi al carrello */}
        <button
          type="button"
          className="bg-primary shadow-primary/25 focus:ring-primary/50 text-primary-foreground flex h-14 w-full items-center justify-center gap-4 rounded-lg font-bold shadow-xl hover:opacity-75 focus:ring-2 focus:outline-none"
          aria-label="Add to cart"
        >
          <img src={iconCart} aria-hidden="true" className="h-5 w-5" />
          <span>Add to cart</span>
        </button>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
