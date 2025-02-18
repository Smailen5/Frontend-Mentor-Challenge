import { imageProducts } from "@/assets/images";
import { useState } from "react";
import Image from "../atoms/Image";

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImage = (index: number) => {
    setCurrentImage(index);
  };

  console.log(currentImage);
  return (
    <div className="space-y-8">
      <Image
        src={imageProducts[currentImage]}
        alt={`product image ${currentImage + 1}`}
        className="rounded-2xl"
      />

      <div className="flex h-20 w-full flex-wrap justify-between gap-4">
        {imageProducts.map((image, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`product image ${index + 1}`}
                className={`size-20 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:opacity-50 ${currentImage === index && "opacity-25"}`}
                onClick={() => handleImage(index)}
              />
              {currentImage === index && (
                <div className="ring-primary absolute inset-0 rounded-xl ring-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
