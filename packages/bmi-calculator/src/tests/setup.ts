import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

// Estende Vitest con i matchers di jest-dom
expect.extend(matchers);

// Pulisce l'ambiente dopo ogni test
afterEach(() => {
  cleanup();
});
