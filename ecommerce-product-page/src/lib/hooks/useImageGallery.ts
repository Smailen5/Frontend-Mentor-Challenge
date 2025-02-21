import { useState } from "react";

export const useImageGallery = (images: string[]) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImage = (index: number) => setCurrentImage(index);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return {
    currentImage,
    handleImage,
    handlePrevImage,
    handleNextImage,
  };
};
