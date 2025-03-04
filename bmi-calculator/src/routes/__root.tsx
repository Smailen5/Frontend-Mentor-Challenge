import Layout from "@/components/atoms/Layout";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <React.Fragment>
      <Layout>
        <main>
          <Outlet />
        </main>
      </Layout>
    </React.Fragment>
  );
}
