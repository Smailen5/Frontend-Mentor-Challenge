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
            <Image
              key={index}
              src={image}
              alt={`product image ${index + 1}`}
              className="size-20 rounded-xl"
              onClick={() => handleImage(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
