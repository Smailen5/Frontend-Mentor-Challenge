/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'red': 'hsl(0, 78%, 62%)',
      'green': 'hsl(154, 59%, 51%)',
      'blue': 'hsl(248, 32%, 49%)',
      'darkBlue': 'hsl(249, 10%, 26%)',
      'grayishBlue': 'hsl(246, 25%, 77%)',
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '17px',
      'xl': '20px',
      '2xl': '50px',
    }
    extend: {},
  },
  plugins: [],
}