import { imageProducts } from "@/assets/images";
import { useImageGallery } from "@/lib/hooks/useImageGallery";
import Image from "../atoms/Image";
import Ring from "../atoms/Ring";
import GalleryButton from "./GalleryButton";

interface ProductGalleryProps {
  setOverlay?: (overlay: boolean) => void;
}

const ProductGallery = ({ setOverlay }: ProductGalleryProps) => {
  const { currentImage, handleImage, handlePrevImage, handleNextImage } =
    useImageGallery(imageProducts);

  const handleOverlay = () => {
    if (setOverlay) {
      setOverlay(true);
    }
  };

  return (
    <>
      <div className="space-y-8">
        {!setOverlay ? (
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
        ) : (
          <Image
            src={imageProducts[currentImage]}
            alt={`product image ${currentImage + 1}`}
            className="cursor-pointer rounded-2xl"
            onClick={handleOverlay}
          />
        )}

        <div className="flex h-20 w-full flex-wrap justify-between gap-4">
          {imageProducts.map((image, index) => {
            return (
              <div key={index} className="relative">
                <Image
                  src={image}
                  alt={`product image ${index + 1}`}
                  className={`size-20 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:opacity-50 ${!setOverlay && currentImage === index ? "opacity-75" : currentImage === index && "opacity-25"}`}
                  onClick={() => handleImage(index)}
                />

                {/* Ring ha bisogno di gestire l'immagine perche crea un overlay */}
                {!setOverlay && currentImage === index ? (
                  <Ring className="bg-white/75" />
                ) : !setOverlay ? (
                  <Ring
                    noRing
                    className="hover:bg-white/50"
                    onClick={() => handleImage(index)}
                  />
                ) : (
                  currentImage === index && <Ring />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
