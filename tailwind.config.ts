import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      colors: {
        "surface-primary": "#FFFFFF",
        "surface-secondary": "#EEEEEE",
        "neutral-dark": "#585660",
        "neutral-500": "#737373",
        "neutral-700": "#404040",
        "gray-medium": "#3B3B3B",
        "stone-100": "#F5F5F4",
        // Duplicated (?
        primary: "#3B3B3B",
        "stroke-secondary": "#3B3B3B",
        "item-fill": "#3B3B3B",
        "cta-fill-primary": "#585660",
        "cta-content-item": "#3B3B3B",
        "cta-content-secondary": "#3B3B3B",
        "cta-stroke-primary": "#3B3B3B",
        // End of duplicated by Figma
        "stroke-tertiary": "#EFEDF3",
        "stroke-alternative": "#8F8F8F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
