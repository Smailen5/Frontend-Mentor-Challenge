import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

// Test per verificare che il componente App venga renderizzato correttamente
describe("App", () => {
  it("should render", () => {
    // renderizza il componente App
    render(<App />);
    // verifica che il testo "Esempio di Preset 1" sia presente nel documento
    expect(screen.getByText("Esempio di Preset 1")).toBeInTheDocument();
  });
});
