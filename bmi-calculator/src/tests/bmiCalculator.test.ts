import { describe, expect, it } from "vitest";
import { calculateBMIResult, getBMICategory } from "../utils/bmiCalculator";

describe("BMI Calculator", () => {
  describe("Metric System", () => {
    it("should calculate correct BMI for metric units", () => {
      // Test case: 180cm, 80kg
      const result = calculateBMIResult(180, 80, true);
      expect(result.value).toBe(24.7);
      expect(result.category).toBe("healthy");
    });

    it("should calculate correct BMI for underweight", () => {
      // Test case: 180cm, 50kg
      const result = calculateBMIResult(180, 50, true);
      expect(result.value).toBe(15.4);
      expect(result.category).toBe("underweight");
    });

    it("should calculate correct BMI for overweight", () => {
      // Test case: 180cm, 90kg
      const result = calculateBMIResult(180, 90, true);
      expect(result.value).toBe(27.8);
      expect(result.category).toBe("overweight");
    });
  });

  describe("Imperial System", () => {
    it("should calculate correct BMI for imperial units", () => {
      // Test case: 5ft 10in (70 inches), 160lbs
      const result = calculateBMIResult(70, 160, false);
      expect(result.value).toBe(23);
      expect(result.category).toBe("healthy");
    });

    it("should calculate correct BMI for obese", () => {
      // Test case: 5ft 10in (70 inches), 220lbs
      const result = calculateBMIResult(70, 220, false);
      expect(result.value).toBe(31.6);
      expect(result.category).toBe("obese");
    });
  });

  describe("BMI Categories", () => {
    it("should correctly categorize BMI values", () => {
      expect(getBMICategory(17)).toBe("underweight");
      expect(getBMICategory(20)).toBe("healthy");
      expect(getBMICategory(27)).toBe("overweight");
      expect(getBMICategory(32)).toBe("obese");
      expect(getBMICategory(40)).toBe("severely obese");
    });
  });
});
