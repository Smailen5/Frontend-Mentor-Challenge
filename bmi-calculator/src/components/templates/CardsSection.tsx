import Layout from "../atoms/Layout";
import BenefitCards from "../organisms/BenefitCards";

const CardsSection = () => {
  return (
    <>
      <Layout>
        <div className="mx-2 space-y-8 pt-6">
          <BenefitCards />
        </div>
      </Layout>
    </>
  );
};

export default CardsSection;
