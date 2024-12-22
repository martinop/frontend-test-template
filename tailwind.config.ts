import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-primary": "#FFFFFF",
        "surface-secondary": "#EEEEEE",
        "neutral-dark": "#585660",
        "neutral-500": "#737373",
        "neutral-700": "#404040",
        "gray-medium": "#3B3B3B",
        // Duplicated (?
        primary: "#3B3B3B",
        "stroke-secondary": "#3B3B3B",
        "item-fill": "#3B3B3B",
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
