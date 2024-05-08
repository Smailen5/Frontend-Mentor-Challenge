import Form from "./components/Form";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <main className="grid justify-center items-center w-10/12 lg:grid-cols-2 lg:gap-4">
        <Heading />
        <Form />
      </main>
    </>
  );
}

export default App;
