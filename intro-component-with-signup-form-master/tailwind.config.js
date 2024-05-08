/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "hsl(0, 100%, 74%)",
      green: "hsl(154, 59%, 51%)",
      blue: "hsl(248, 32%, 49%)",
      darkBlue: "hsl(249, 10%, 26%)",
      grayishBlue: "hsl(246, 25%, 77%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "28px",
      "2xl": "60px",
    },
    boxShadow: {
      2: "0px 8px 2px 0px rgba(249, 10%, 26%, 0.1)",
      1: "0px 4px 2px 0px rgba(249, 10%, 26%, 0.1)",
    },
  },
  extend: {},
  plugins: [],
};
