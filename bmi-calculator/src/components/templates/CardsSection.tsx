import Layout from "../atoms/Layout";
import BenefitCards from "../organisms/BenefitCards";

const CardsSection = () => {
  return (
    <>
      <Layout className="md:px-10 md:py-12 xl:py-24">
        {/* la sfumatura del gradiente deve scendere ancora sotto il componente, aggiungendo altro padding si sminchia il layout di tutta la pagina, va rivisto Layout */}
        <div className="from-gradient-2/25 absolute inset-0 -z-10 bg-gradient-to-l to-white xl:rounded-4xl" />
        {/* aggiungere pb-16 */}
        <div className="mx-2 space-y-10 pt-6 md:pt-12 xl:m-0 xl:flex xl:gap-8 xl:space-y-0 xl:p-0">
          <BenefitCards />
        </div>
      </Layout>
    </>
  );
};

export default CardsSection;
