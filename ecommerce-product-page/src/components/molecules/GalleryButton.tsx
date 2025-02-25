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
  const leftButton = productGallery && "-left-8 size-14";
  const rightButton = productGallery && "-right-8 size-14";

  return (
    <>
      <button
        aria-label="previous image"
        className={twMerge(
          "bg-background group/prev absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
          leftButton,
        )}
        onClick={handlePrevImage}
      >
        <IconPrevious
          aria-hidden={true}
          className="group-hover/prev:[&>path]:stroke-primary"
        />
      </button>

      {children}

      <button
        aria-label="next image"
        className={twMerge(
          "bg-background group/next absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
          rightButton,
        )}
        onClick={handleNextImage}
      >
        <IconNext
          aria-hidden={true}
          className="group-hover/next:[&>path]:stroke-primary"
        />
      </button>
    </>
  );
};

export default GalleryButton;
