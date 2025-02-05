/**
 * @file App.tsx
 * @description Main application component with routing setup
 */

import { routes } from "@/routes/routes";
import { BrowserRouter, useRoutes } from "react-router-dom";

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
