import { Cards, Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="font-plus-jakarta">
        <Navbar />
        <Hero />
        <Cards />
        <div>App</div>
      </div>
    </>
  );
}

export default App;
