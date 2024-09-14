import { RouterProvider } from "react-router-dom";
import { Navbar, Page } from "./components";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <Navbar />
      <Page>
        <RouterProvider router={router} />
      </Page>
    </>
  );
}

export default App;
