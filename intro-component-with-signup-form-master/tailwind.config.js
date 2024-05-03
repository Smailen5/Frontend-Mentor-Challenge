/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      red: "hsl(0, 100%, 74%)",
      green: "hsl(154, 59%, 51%)",
      blue: "hsl(248, 32%, 49%)",
      darkBlue: "hsl(249, 10%, 26%)",
      gray: "hsl(246, 25%, 77%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "17px",
      lg: "20px",
      xl: "28px",
      "2xl": "60px",
    },
    extend: {},
  },
  plugins: [],
};
