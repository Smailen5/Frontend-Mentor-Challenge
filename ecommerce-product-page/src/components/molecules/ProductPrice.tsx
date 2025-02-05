import { sneakers } from "@/data";

const ProductPrice = () => {
  const { price } = sneakers;

  return (
    <div className="my-8 flex h-8 items-center justify-between font-bold">
      <div className="flex gap-4">
        <p className="text-3xl">
          <span className="sr-only">Current price:</span>$
          {price.discount
            ? (price.original * (1 - price.discount / 100)).toFixed(2)
            : price.original}
        </p>
        {price.discount && (
          <span className="flex items-center justify-center rounded-lg bg-black px-3 text-white">
            <span className="sr-only">Discount:</span>
            {price.discount}%
          </span>
        )}
      </div>
      {price.discount && (
        <p className="text-accent-foreground text-base">
          <span className="sr-only">Original price:</span>
          <del className="decoration-accent-foreground line-through decoration-1">
            ${price.original}
          </del>
        </p>
      )}
    </div>
  );
};

export default ProductPrice;
