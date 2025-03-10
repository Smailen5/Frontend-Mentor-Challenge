import Layout from "../atoms/Layout";
import BenefitCards from "../organisms/BenefitCards";

const CardsSection = () => {
  return (
    <>
      <Layout>
        {/* la sfumatura del gradiente deve scendere ancora sotto il componente, aggiungendo altro padding si sminchia il layout di tutta la pagina, va rivisto Layout */}
        <div className="from-gradient-2/25 absolute inset-0 -z-10 bg-gradient-to-l to-white" />
        {/* aggiungere pb-16 */}
        <div className="mx-2 space-y-10 pt-6">
          <BenefitCards />
        </div>
      </Layout>
    </>
  );
};

export default CardsSection;
