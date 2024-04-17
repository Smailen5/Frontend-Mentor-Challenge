/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
    "Dark-Grayish-Blue": "hsl(217, 19%, 35%)",
    "Dark-Blue": "hsl(214, 17%, 51%)",
    "Grayish-Blue": "hsl(212, 23%, 69%)",
    "Light-Grayish-Blue": "hsl(210, 46%, 95%)",
    "white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      sm: "11px",
      base: "13px",
      lg: "15px",
      xl: "17px",
    },
    extend: {
      letterSpacing: {
        ultraWide: "0.3em",
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [],
}

