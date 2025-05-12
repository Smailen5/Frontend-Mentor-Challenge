/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      'tomato-light': "hsl(4, 100%, 90%)",
      "gray-slate": "hsl(234, 29%, 20%)",
      "gray-charcoal": "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '20px',
      'xl': '40px',
      '2xl': '64px',
      '3xl': '72px',
    },
    extend: {},
  },
  plugins: [],
}

