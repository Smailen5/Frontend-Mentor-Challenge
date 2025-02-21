import { IconClose } from "@/assets/images";
import { Button } from "../atoms/Button";
import ProductGallery from "./ProductGallery";

interface OverlayGalleryProps {
  overlay: boolean;
  setOverlay: (overlay: boolean) => void;
}

const OverlayGallery = ({ overlay, setOverlay }: OverlayGalleryProps) => {
  return (
    <>
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
          {/* Contenitore overlay */}
          <div className="flex flex-col items-center justify-center">
            {/* Contenitore immagine */}
            <div className="z-50 h-1/2 w-1/2">
              <div className="flex justify-end">
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => setOverlay(false)}
                  className="group/close"
                >
                  <IconClose className="group-hover/close:[&>path]:fill-primary [&>path]:fill-white" />
                </Button>
              </div>
              <ProductGallery />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayGallery;
