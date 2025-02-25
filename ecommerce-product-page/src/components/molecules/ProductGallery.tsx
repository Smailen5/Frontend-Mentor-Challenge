import { imageProducts } from "@/assets/images";
import { useImageGallery } from "@/lib/hooks/useImageGallery";
import Image from "../atoms/Image";
import GalleryButton from "./GalleryButton";
import ProductsGalleryThumbnail from "./ProductsGalleryThumbnail";

interface ProductGalleryProps {
  setIsOverlay?: (overlay: boolean) => void;
}

const ProductGallery = ({ setIsOverlay }: ProductGalleryProps) => {
  const { currentImage, handleImage, handlePrevImage, handleNextImage } =
    useImageGallery(imageProducts);

  const handleOverlay = () => {
    if (setIsOverlay) {
      setIsOverlay(true);
    }
  };

  return (
    <>
      <div className="space-y-8">
        {/* Immagine desktop con overlay */}
        {!setIsOverlay ? (
          <>
            <div className="relative">
              <GalleryButton
                handlePrevImage={handlePrevImage}
                handleNextImage={handleNextImage}
                productGallery
              >
                <Image
                  src={imageProducts[currentImage]}
                  alt={`product image ${currentImage + 1}`}
                  className="rounded-2xl"
                  onClick={handleOverlay}
                />
              </GalleryButton>
            </div>
            <div className="flex h-20 w-full flex-wrap justify-between gap-4 px-8">
              <ProductsGalleryThumbnail
                imageProducts={imageProducts}
                setOverlay={setIsOverlay}
                currentImage={currentImage}
                handleImage={handleImage}
              />
            </div>
          </>
        ) : (
          // Immagine desktop senza overlay
          <Image
            src={imageProducts[currentImage]}
            alt={`product image ${currentImage + 1}`}
            className="cursor-pointer rounded-2xl"
            onClick={handleOverlay}
          />
        )}

        {/* Thumbnail senza overlay */}
        {setIsOverlay && (
          <div className="flex h-20 w-full flex-wrap justify-between gap-4">
            <ProductsGalleryThumbnail
              imageProducts={imageProducts}
              setOverlay={setIsOverlay}
              currentImage={currentImage}
              handleImage={handleImage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGallery;
