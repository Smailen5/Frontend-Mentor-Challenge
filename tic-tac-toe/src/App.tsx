import Button from "./components/atoms/Button";

function App() {
  return (
    <>
      <div>App Home</div>
      <div className="space-y-6">
        <div className="space-y-4">
          <Button>button 1</Button>
          <Button styleColor={"blue"} >button 2</Button>
        </div>
        <div className="space-y-4">
          <Button variant={"secondary"}>secondary button 1</Button>
          <Button variant={"secondary"}>secondary button 2</Button>
        </div>
      </div>
    </>
  );
}

export default App;
