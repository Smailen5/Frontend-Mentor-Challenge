type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  onClick?:()=>void;
};

function Image({ src, alt, className = "", onClick }: ImageProps) {
  return <img src={src} alt={alt} className={className} onClick={onClick} />;
}

export default Image;
