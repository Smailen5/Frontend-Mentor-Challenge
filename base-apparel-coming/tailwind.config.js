/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--clr-desaturated-red)",
      secondary: "var(--clr-soft-red)",
      neutral: "var(--clr-neutral)",
      "primary-transparent": "hsla(0, 36%, 70%, .5)",
      transparent: "transparent",
    },
    backgroundImage: {
      "gradient-primary":
        "linear-gradient(135deg, var(--clr-gradient-primary-from), var(--clr-gradient-primary-to))",
      "gradient-secondary":
        "linear-gradient(135deg, var(--clr-gradient-secondary-from), var(--clr-gradient-secondary-to))",
        "gradient-secondary-hover": "linear-gradient(135deg, hsla(0, 80%, 86%, .5), hsla(0, 74%, 74%, .5))",
    },
    extend: {
      fontSize: {
        "4.5xl": ["2.5rem", "2.63rem"],
      },
      letterSpacing: {
        6: ".65rem",
      },
    },
  },
  plugins: [],
};
