import Layout from "../layout/Layout";
import CarouselImage from "../molecules/CarouselImage";

function ProductTemplate() {
  return (
    <Layout>
      <CarouselImage />
      <div className="space-y-4 p-6">
        <h2 className="text-accent-foreground text-sm font-bold uppercase">
          Sneaker Company
        </h2>
        <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
        <p className="text-base text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
    </Layout>
  );
}

export default ProductTemplate;
