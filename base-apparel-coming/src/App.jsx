import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero>
        <Header className="hidden xl:block" classImg="scale-125" />
      </Hero>
    </>
  );
}

export default App;
