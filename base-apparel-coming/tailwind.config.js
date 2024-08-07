/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--clr-desaturated-red)",
      secondary: "var(--clr-soft-red)",
      neutral: "var(--clr-neutral)",
    },
    backgroundImage: {
      "gradient-primary":
        "linear-gradient(135deg, var(--clr-gradient-primary-from), var(--clr-gradient-primary-to))",
      "gradient-secondary":
        "linear-gradient(135deg, var(--clr-gradient-secondary-from), var(--clr-gradient-secondary-to))",
    },
    extend: {
      fontSize: {
        "4.5xl": ["2.5rem", "2.63rem"],
      },
    },
  },
  plugins: [],
};
