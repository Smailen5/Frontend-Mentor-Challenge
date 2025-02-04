import {
  iconNext,
  iconPrevious,
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
} from "@/assets/images";
import { useState } from "react";
import Layout from "../layout/Layout";

const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

function ProductTemplate() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Layout>
      <div className="relative h-80">
        <button
          className="bg-background absolute top-1/2 left-4 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
          onClick={handlePrevImage}
        >
          <img src={iconPrevious} alt="previous" className="scale-90" />
        </button>
        <img
          src={images[currentImage]}
          alt="product"
          className="h-full w-full object-cover"
        />
        <button
          className="bg-background absolute top-1/2 right-4 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
          onClick={handleNextImage}
        >
          <img src={iconNext} alt="next" className="scale-90" />
        </button>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
