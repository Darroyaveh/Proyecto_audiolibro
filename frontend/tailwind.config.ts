import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%': { boxShadow: '0 0 0 0 rgba(234, 94, 40, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(234, 94, 40, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(234, 94, 40, 0)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
