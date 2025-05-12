import { imageMap } from "../assets/imageMaps";

type CardImageProps = {
  image?: string;
};

export const CardImage: React.FC<CardImageProps> = ({ image }) => {
  // controllo se l'immagine esiste
  const imageSrc = image ? imageMap[image] : undefined;
  return (
    <>
      {imageSrc ? (
        <img src={imageSrc} alt="" className="absolute -top-6 left-8" />
      ) : null}
    </>
  );
};
