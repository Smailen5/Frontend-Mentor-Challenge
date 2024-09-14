import { RouterProvider } from "react-router-dom";
import { Navbar } from "./components";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
