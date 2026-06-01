import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        elevated: "0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.04)",
        "card": "0 1px 2px 0 rgb(0 0 0 / 0.03)",
        "card-hover": "0 8px 24px -4px rgb(0 0 0 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.04)",
        "header": "0 1px 0 0 rgb(0 0 0 / 0.05)",
      },
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
          600: "#1e3354",
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
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        "content": "72rem",
        "prose": "42rem",
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
