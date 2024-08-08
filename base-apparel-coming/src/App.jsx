import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero>
        <Header className="mx-auto w-6/12 px-0 xl:block hidden xl:mt-8 xl:pb-0" classImg="scale-125" />
      </Hero>
    </>
  );
}

export default App;
