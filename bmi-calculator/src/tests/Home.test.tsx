import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "../page/Home";

// Mock dei componenti importati
vi.mock("../components/templates/CardsSection", () => ({
  default: () => <div data-testid="cards-section" />,
}));

vi.mock("../components/templates/HeroSection", () => ({
  default: () => <div data-testid="hero-section" />,
}));

vi.mock("../components/templates/LimitationSection", () => ({
  default: () => <div data-testid="limitation-section" />,
}));

vi.mock("../components/templates/NutritionSection", () => ({
  default: () => <div data-testid="nutrition-section" />,
}));

describe("Home", () => {
  it("should render the main sections", () => {
    render(<Home />);

    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("cards-section")).toBeInTheDocument();
    expect(screen.getByTestId("limitation-section")).toBeInTheDocument();
    expect(screen.getByTestId("nutrition-section")).toBeInTheDocument();
  });
});
