/// <reference types="vite-plugin-svgr/client" />
import { RouterProvider } from "react-router-dom";
import { Page } from "./components";
import { router } from "./routes/routes";
import { DarkModeProvider, useDarkModeContext } from "./utils/darkModeContext";


function AppContent() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Page>
        <RouterProvider router={router} />
      </Page>
    </div>
  );
}

function App() {
  return (
    <>
      <DarkModeProvider>
        <AppContent />
      </DarkModeProvider>
    </>
  );
}

export default App;
