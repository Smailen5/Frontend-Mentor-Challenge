/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '4.5xl': ['2.5rem', '2.75rem'],
        '7xl': ['4.5rem', '4.5rem'],
        '8xl': ['5.60rem', '6rem'],
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      textColor: {
        skin: {
          base: 'var(--color-text-primary)',
          variant: 'var(--color-text-secondary)',
          accent: 'var(--color-accent-secondary)',
          error: 'var(--color-text-error)',
        }
      },
      backgroundColor:{
        skin: {
          base: 'var(--color-bg-primary)',
          semiBlack: 'var(--color-bg-secondary)',
          accent: 'var(--color-accent-secondary)',
        }
      },
      borderColor:{
        skin: {
          base: 'var(--color-accent-primary)',
          accent: 'var(--color-accent-secondary)',
          error: 'var(--color-text-error)',
        }
      },
      fill: {
        skin: {
          accent: 'var(--color-accent-secondary)',
        }
      }
    },
  },
  plugins: [],
}