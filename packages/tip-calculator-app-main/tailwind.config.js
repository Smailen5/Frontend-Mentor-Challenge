/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      'strong-cyan': "hsl(172, 67%, 45%)",
      'very-dark-cyan': "hsl(183, 100%, 15%)",
      'dark-grayish-cyan': "hsl(186, 14%, 43%)",
      'grayish-cyan': "hsl(184, 14%, 56%)",
      'light-grayish-cyan': "hsl(185, 41%, 84%)",
      'very-light-grayish-cyan': "hsl(189, 41%, 97%)",
      'white': "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      'space-mono': ['Space Mono', 'sans-serif'],
    },
    fontSize: {
      'xs': '14px',
      'sm': '20px',
      'base': '24px',
      'lg': '40px',
      'xl': '64px',
      '2xl': '72px',
    },
    extend: {
      letterSpacing: {
        'ultra-wide': '0.3em',
      }
    },
  },
  plugins: [],
}

