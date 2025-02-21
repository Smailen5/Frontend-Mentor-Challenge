import { imageProducts } from "@/assets/images";
import { useState } from "react";
import Image from "../atoms/Image";
import Ring from "../atoms/Ring";

interface ProductGalleryProps {
  setOverlay?: (overlay: boolean) => void;
}

const ProductGallery = ({ setOverlay }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleOverlay = () => {
    if (setOverlay) {
      setOverlay(true);
    }
  };

  console.log(currentImage);
  return (
    <>
      <div className="space-y-8">
        <Image
          src={imageProducts[currentImage]}
          alt={`product image ${currentImage + 1}`}
          className={`rounded-2xl ${setOverlay && "cursor-pointer"}`}
          onClick={handleOverlay}
        />

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
                {/* {currentImage === index && (
                  <div className="ring-primary absolute inset-0 rounded-xl ring-2" />
                )} */}
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
