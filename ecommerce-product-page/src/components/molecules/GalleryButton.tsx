import { IconNext, IconPrevious } from "@/assets/images";

interface GalleryButtonProps {
  handlePrevImage: () => void;
  handleNextImage: () => void;
  children: React.ReactNode;
}

const GalleryButton = ({
  handlePrevImage,
  handleNextImage,
  children,
}: GalleryButtonProps) => {
  return (
    <>
      <button
        aria-label="previous image"
        className="bg-background absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
        onClick={handlePrevImage}
      >
        <IconPrevious aria-hidden={true} />
      </button>

      {children}

      <button
        aria-label="next image"
        className="bg-background absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
        onClick={handleNextImage}
      >
        <IconNext aria-hidden={true} />
      </button>
    </>
  );
};

export default GalleryButton;
