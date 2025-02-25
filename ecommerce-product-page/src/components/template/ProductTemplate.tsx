/**
 * @file ProductTemplate.tsx
 * @description Template component for the product page layout
 */

import { lazy, Suspense, useState } from "react";
import Layout from "../layout/Layout";
import Loading from "../molecules/Loading";
import OverlayGallery from "../molecules/OverlayGallery";
import ProductButton from "../molecules/ProductButton";
import ProductDescription from "../molecules/ProductDescription";
import ProductPrice from "../molecules/ProductPrice";
import ProductQuantity from "../molecules/ProductQuantity";
import ProductGallery from "../organism/ProductGallery";

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
  const [overlayGallery, setOverlayGallery] = useState<boolean>(false);
  return (
    <Layout>
      {/* Carousel */}
      <Suspense fallback={<Loading />}>
        <Carousel />
      </Suspense>

      <div className="lg:flex lg:items-center lg:gap-24 lg:px-10 lg:py-20">
        {/* Contenitore componente immagini */}
        <div className="hidden w-1/2 flex-1 lg:block">
          <ProductGallery setIsOverlay={setOverlayGallery} />

          {/* Overlay */}
          <OverlayGallery
            overlay={overlayGallery}
            setOverlay={setOverlayGallery}
          />
        </div>

        <div className="flex-1 space-y-4 p-6">
          {/* Componente descrizione */}
          <ProductDescription />

          {/* Componente prezzo */}
          <ProductPrice />

          <div className="gap-4 space-y-4 lg:flex lg:h-12 lg:space-y-0">
            {/* Componente quantità */}
            <ProductQuantity />

            {/* Componente aggiungi al carrello */}
            <ProductButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
