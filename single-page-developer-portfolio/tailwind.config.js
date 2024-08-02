/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      textColor: {
        skin: {
          base: 'var(--color-text)',
          paragraph: 'var(--color-text-paragraph)',
        }
      }
    },
  },
  plugins: [],
}