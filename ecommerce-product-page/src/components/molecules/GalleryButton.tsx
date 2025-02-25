import { IconNext, IconPrevious } from "@/assets/images";
import { twMerge } from "tailwind-merge";

interface GalleryButtonProps {
  handlePrevImage: () => void;
  handleNextImage: () => void;
  children: React.ReactNode;
  productGallery?: boolean;
}

const GalleryButton = ({
  handlePrevImage,
  handleNextImage,
  children,
  productGallery,
}: GalleryButtonProps) => {
  const leftButton = productGallery && "left-1/3 -translate-x-3/4 size-12";
  const rightButton = productGallery && "right-1/3 translate-x-3/4 size-12";

  return (
    <>
      <button
        aria-label="previous image"
        className={twMerge(
          "bg-background absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
          leftButton,
        )}
        onClick={handlePrevImage}
      >
        <IconPrevious aria-hidden={true} />
      </button>

      {children}

      <button
        aria-label="next image"
        className={twMerge(
          "bg-background absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
          rightButton,
        )}
        onClick={handleNextImage}
      >
        <IconNext aria-hidden={true} />
      </button>
    </>
  );
};

export default GalleryButton;
