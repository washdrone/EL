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
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc5fb",
          400: "#36a8f6",
          500: "#0c8de7",
          600: "#006fc5",
          700: "#0159a0",
          800: "#064b84",
          900: "#0b3f6e",
          950: "#072849",
        },
        accent: {
          50: "#effefb",
          100: "#c8fff4",
          200: "#91feea",
          300: "#53f5dd",
          400: "#1fe0ca",
          500: "#07c4b1",
          600: "#029e92",
          700: "#067e76",
          800: "#0a645f",
          900: "#0d524f",
          950: "#003332",
        },
        navy: {
          700: "#1a2942",
          800: "#111d32",
          900: "#0b1525",
          950: "#060d18",
        },
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        card: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.03)",
        elevated: "0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
