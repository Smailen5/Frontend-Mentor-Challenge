/**
 * @file routes.tsx
 * @description Application routes configuration
 */

import Documentation from "@/components/pages/Documentation";
import { Product } from "@/page/Product";
import { RouteObject } from "react-router-dom";

/**
 * Application routes configuration
 * @type {RouteObject[]}
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/docs",
    element: <Documentation />,
  },
];
