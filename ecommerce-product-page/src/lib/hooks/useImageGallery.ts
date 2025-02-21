import { useState } from "react";

export const useImageGallery = (images: string[]) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const handleImage = (index: number) => setCurrentImage(index);

  const handlePrevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return {
    currentImage,
    direction,
    handleImage,
    handlePrevImage,
    handleNextImage,
  };
};
