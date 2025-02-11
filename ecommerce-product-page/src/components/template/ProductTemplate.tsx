/**
 * @file ProductTemplate.tsx
 * @description Template component for the product page layout
 */

import { iconCart } from "@/assets/images";
import Layout from "../layout/Layout";
// import CarouselImage from "../molecules/CarouselImage";
import { sneakers } from "@/data";
import { useCart } from "@/lib/hooks/useCart";
import { lazy, Suspense } from "react";
import Loading from "../molecules/Loading";
import ProductDescription from "../molecules/ProductDescription";
import ProductPrice from "../molecules/ProductPrice";
import ProductQuantity from "../molecules/ProductQuantity";

const Carousel = lazy(() => import("../molecules/CarouselImage"));

/**
 * ProductTemplate component
 * @component
 * @description Renders the main product page layout including carousel, description, price, quantity selector and add to cart button
 *
 * @example
 * ```tsx
 * <ProductTemplate />
 * ```
 *
 * @returns {JSX.Element} A complete product page layout
 */
function ProductTemplate() {
  const { thumbnailProduct1, quantity, handleCart } = useCart();
  const { price } = sneakers;

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Carousel />
      </Suspense>

      {/* Componente descrizione */}
      <div className="space-y-4 p-6">
        <ProductDescription />

        {/* Componente prezzo */}
        <ProductPrice />

        {/* Componente quantità */}
        <ProductQuantity />

        {/* Componente aggiungi al carrello */}
        <button
          type="button"
          className="bg-primary shadow-primary/25 focus:ring-primary/50 text-primary-foreground flex h-14 w-full items-center justify-center gap-4 rounded-lg font-bold shadow-xl hover:opacity-75 focus:ring-2 focus:outline-none"
          aria-label="Add to cart"
          onClick={() =>
            handleCart({
              thumbnail: thumbnailProduct1,
              quantity,
              price: price.original,
            })
          }
        >
          <img src={iconCart} aria-hidden="true" className="h-5 w-5" />
          <span>Add to cart</span>
        </button>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
