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
    },
  },
  plugins: [],
} satisfies Config;
