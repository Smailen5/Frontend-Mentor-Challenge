import Button from "./components/atoms/Button";

function App() {
  return (
    <>
      <div>App Home</div>
      <div className="space-y-4">
        <Button>button</Button>
        <Button variant={"secondary"}>button</Button>
      </div>
    </>
  );
}

export default App;
