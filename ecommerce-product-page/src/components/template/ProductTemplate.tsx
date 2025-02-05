import { iconCart, iconMinus, iconPlus } from "@/assets/images";
import Layout from "../layout/Layout";
import CarouselImage from "../molecules/CarouselImage";
import ProductDescription from '../molecules/ProductDescription';
import ProductPrice from '../molecules/ProductPrice';

function ProductTemplate() {
  return (
    <Layout>
      <CarouselImage />

      {/* Componente descrizione */}
      <div className="space-y-4 p-6">
        <ProductDescription />

        {/* Componente prezzo */}
        <ProductPrice />

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
