import { Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <React.Fragment>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}
