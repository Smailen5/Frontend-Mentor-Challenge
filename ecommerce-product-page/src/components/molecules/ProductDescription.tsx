import { sneakers } from "@/data";

const ProductDescription = () => {
  const { company, title, description } = sneakers;
  return (
    <>
      <h2 className="text-accent-foreground text-sm font-bold uppercase">
        {company}
      </h2>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-base text-gray-500">{description}</p>
    </>
  );
};

export default ProductDescription;
