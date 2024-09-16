import { RouterProvider } from "react-router-dom";
import { Page } from "./components";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <Page>
        <RouterProvider router={router} />
      </Page>
    </>
  );
}

export default App;
