import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#EDF2F7",
          secondary: "#E2E8F0",
          card: "#FDFCFA",
          elevated: "#F7FAFC",
        },
        border: {
          DEFAULT: "#CBD5E0",
          subtle: "#E2E8F0",
        },
        navy: {
          DEFAULT: "#1A365D",
          dark: "#0F2044",
          light: "#2A4A7F",
          50: "#EBF0F7",
        },
        gold: {
          DEFAULT: "#C6930A",
          bright: "#D4A017",
          light: "#F6E9C8",
          dark: "#8B6914",
        },
        text: {
          primary: "#1A202C",
          secondary: "#4A5568",
          muted: "#718096",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
