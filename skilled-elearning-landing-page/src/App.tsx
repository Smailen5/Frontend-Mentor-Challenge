import { Cards, Footer, Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="font-plus-jakarta md:overflow-hidden">
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
