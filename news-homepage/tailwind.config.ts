import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "soft-orange": "var(--Soft-orange)",
        "soft-red": "var(--Soft-red)",
        "off-white": "var(--Off-white)",
        "grayish-blue": "var(--Grayish-blue)",
        "dark-grayish-blue": "var(--Dark-grayish-blue)",
        "very-dark-blue": "var(--Very-dark-blue)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "4.5xl": ["2.5rem", {
          lineHeight: "2.5rem",
        }],
      },
    },
  },
  plugins: [],
} satisfies Config;
