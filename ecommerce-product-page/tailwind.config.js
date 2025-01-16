/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--white)",
        foreground: "var(--very-dark-blue)",
        card: {
          DEFAULT: "var(--white)",
          foreground: "var(--very-dark-blue)",
        },
        popover: {
          DEFAULT: "var(--white)",
          foreground: "var(--very-dark-blue)",
        },
        primary: {
          DEFAULT: "var(--orange)",
          foreground: "var(--very-dark-blue)",
        },
        secondary: {
          DEFAULT: "var(--light-grayish-blue)",
          foreground: "var(--very-dark-blue)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "var(--grayish-blue)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "var(--dark-grayish-blue)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
