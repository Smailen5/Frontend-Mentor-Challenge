import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero>
        <Header className="mx-auto w-6/12 px-0 xl:block hidden" classImg="scale-125" />
      </Hero>
    </>
  );
}

export default App;
