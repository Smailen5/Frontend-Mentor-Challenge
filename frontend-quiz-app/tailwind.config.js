/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pureWhite: "hsl(var(--clr-pureWhite))",
      lightGrey: "hsl(var(--clr-lightGrey ))",
      lightBluish: "hsl(var(--clr-lightBluish ))",
      greyNavy: "hsl(var(--clr-greyNavy ))",
      navy: "hsl(var(--clr-navy ))",
      darkNavy: "hsl(var(--clr-darkNavy ))",
      purple: "hsl(var(--clr-purple ))",
      green: "hsl(var(--clr-green ))",
      red: "hsl(var(--clr-red ))",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
