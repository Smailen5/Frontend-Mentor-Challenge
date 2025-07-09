/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/*.html"],
  theme: {
    colors: {
      "green": "hsl(192, 37%, 48%)",
      "green-marine": "hsl(192, 90%, 77%)",
      "violet-dark": "hsl(268, 34%, 53%)",
      "violet-light": "hsl(268, 100%, 86%)",
      "black": "hsl(240, 21%, 20%)",
      "white": "hsl(0, 0%, 98%)",
      "grey": "hsl(240, 10%, 57%)",
    },
    fontFamily: {
      redhat: ["Red Hat Display", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["16px", { lineHeight: "26px", letterSpacing: "4px" }],
      base: ["18px", "26px"],
      medium: ["24px", "26px"],
      "medium-lg": ["32px", "36px"],
      lg: ["40px", "44px"],
      xl: ["64px", "64px"],
    },
    extend: {},
  },
  plugins: [],
};
