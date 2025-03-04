import header from "@/data/headerText.json";

const IntroHeader = () => {
  return (
    <div className="mx-auto space-y-6 pt-8 text-center">
      <h1 className="text-preset-2 font-semibold capitalize">{header.title}</h1>
      <p className="px-3">{header.description}</p>
    </div>
  );
};

export default IntroHeader;
