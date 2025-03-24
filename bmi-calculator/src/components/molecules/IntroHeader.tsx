import header from "@/data/headerText.json";

const IntroHeader = () => {
  return (
    <div className="mx-auto space-y-6 pt-8 text-center">
      <h1 className="text-preset-2 font-semibold text-blue-900 capitalize md:mt-2 md:px-44 md:text-center">
        {header.title.split(" ").slice(0, 2).join(" ")}
        <br className="hidden md:block" />
        {header.title.split(" ").slice(2).join(" ")}
      </h1>
      <p className="text-preset-6-regular text-grey-500 px-3">
        {header.description}
      </p>
    </div>
  );
};

export default IntroHeader;
