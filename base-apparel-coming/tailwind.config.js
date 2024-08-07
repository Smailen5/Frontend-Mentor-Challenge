/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--clr-desaturated-red)",
      secondary: "var(--clr-soft-red)",
      neutral: "var(--clr-neutral)",
      gradientPrimaryFrom: "var(--clr-gradient-primary-from)",
      gradientPrimaryTo: "var(--clr-gradient-primary-to)",
      gradientSecondaryFrom: "var(--clr-gradient-secondary-from)",
      gradientSecondaryTo: "var(--clr-gradient-secondary-to)",
    },
    backgroundImage: {
      "gradient-primary":
        "linear-gradient(135deg, var(--clr-gradient-primary-from), var(--clr-gradient-primary-to))",
      "gradient-secondary":
        "linear-gradient(135deg, var(--clr-gradient-secondary-from), var(--clr-gradient-secondary-to))",
    },
    extend: {},
  },
  plugins: [],
};
