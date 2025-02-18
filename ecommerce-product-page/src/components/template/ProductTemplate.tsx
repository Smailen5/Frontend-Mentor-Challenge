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
        <ProductButton />
      </div>
    </Layout>
  );
}

export default ProductTemplate;
