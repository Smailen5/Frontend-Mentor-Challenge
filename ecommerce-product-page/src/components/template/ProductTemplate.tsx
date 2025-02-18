/**
 * @file ProductTemplate.tsx
 * @description Template component for the product page layout
 */

import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import Loading from "../molecules/Loading";
import ProductButton from "../molecules/ProductButton";
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
  return (
    <Layout>
      {/* <div className="lg:hidden"> */}
        {/* Carousel */}
        <Suspense fallback={<Loading />}>
          <Carousel />
        </Suspense>
      {/* </div> */}

      <div className="lg:flex lg:gap-12 lg:px-10 lg:py-20">
        {/* Componente immagini */}
        <div className="hidden w-1/2 bg-red-500 lg:block"></div>

        <div className="flex-1 space-y-4 p-6">
          {/* Componente descrizione */}
          <ProductDescription />

          {/* Componente prezzo */}
          <ProductPrice />

          {/* Componente quantità */}
          <ProductQuantity />

          {/* Componente aggiungi al carrello */}
          <ProductButton />
        </div>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
