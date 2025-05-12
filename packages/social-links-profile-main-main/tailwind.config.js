/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Green': 'hsl(75, 94%, 57%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 20%)',
        'DarkGrey': 'hsl(0, 0%, 12%)',
        'OffBlack': 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};
