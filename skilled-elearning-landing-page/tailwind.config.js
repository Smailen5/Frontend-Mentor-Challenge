/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-blue": "var(--primary-clr-blue)",
        "clr-light-blue": "var(--primary-clr-light-blue)",
        "clr-pink": "var(--primary-clr-pink)",
        "clr-light-pink": "var(--primary-clr-light-pink)",
        "clr-white": "var(--primary-clr-white)",
        "clr-grey": "var(--primary-clr-grey)",
      },
      backgroundImage: {
        "gradient-pink": "var(--gradient-clr-pink)",
        "gradient-blue": "var(--gradient-clr-blue)",
      },
    },
  },
  plugins: [],
};
