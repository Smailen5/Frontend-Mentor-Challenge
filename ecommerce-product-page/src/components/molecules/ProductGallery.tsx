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
        alt="image 1"
        className="rounded-2xl"
      />

      <div className="flex h-20 w-full justify-between gap-4">
        {imageProducts.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt="image 1"
              className="rounded-xl"
              onClick={() => handleImage(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
