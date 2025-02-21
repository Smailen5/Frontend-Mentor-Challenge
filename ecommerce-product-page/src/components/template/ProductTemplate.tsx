/**
 * @file ProductTemplate.tsx
 * @description Template component for the product page layout
 */

import { IconClose } from "@/assets/images";
import { lazy, Suspense, useState } from "react";
import { Button } from "../atoms/Button";
import Layout from "../layout/Layout";
import Loading from "../molecules/Loading";
import ProductButton from "../molecules/ProductButton";
import ProductDescription from "../molecules/ProductDescription";
import ProductGallery from "../molecules/ProductGallery";
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
          <ProductGallery setOverlay={setOverlayGallery} />

          {/* Overlay */}
          {overlayGallery && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/75">
              {/* Contenitore overlay */}
              <div className="flex flex-col items-center justify-center">
                {/* Contenitore immagine */}
                <div className="z-50 h-1/2 w-1/2">
                  <div className="flex justify-end">
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      onClick={() => setOverlayGallery(false)}
                    >
                      <IconClose className="hover:[&>path]:fill-primary [&>path]:fill-white" />
                    </Button>
                  </div>
                  <ProductGallery />
                </div>
              </div>
            </div>
          )}
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
