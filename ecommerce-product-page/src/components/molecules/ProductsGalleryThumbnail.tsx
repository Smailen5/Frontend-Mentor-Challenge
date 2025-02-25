import Image from "../atoms/Image";
import Ring from "../atoms/Ring";

interface ProductsGalleryThumbnailProps {
  imageProducts?: string[];
  setOverlay?: (overlay: boolean) => void;
  currentImage: number;
  handleImage: (index: number) => void;
}

const ProductsGalleryThumbnail = ({
  imageProducts,
  setOverlay,
  currentImage,
  handleImage,
}: ProductsGalleryThumbnailProps) => {
  return (
    <>
      {imageProducts && imageProducts.map((image, index) => {
        return (
          <div key={index} className="relative">
            <Image
              src={image}
              alt={`product image ${index + 1}`}
              className={`size-20 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:opacity-50 ${!setOverlay && currentImage === index ? "opacity-75" : currentImage === index && "opacity-25"}`}
              onClick={() => handleImage(index)}
            />

            {/* Ring ha bisogno di gestire l'immagine perche crea un overlay */}
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
    </>
  );
};

export default ProductsGalleryThumbnail;
