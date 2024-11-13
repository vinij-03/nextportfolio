import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-slow-reverse": "spin 30s linear infinite reverse",
      },
      colors: {
        // Light theme colors
        light: {
          primary: '#3b82f6',
          secondary: '#22c55e',
          background: '#f9fafb',
          text: '#1f2937',
        },
        // Dark theme colors
        dark: {
          primary: '#2563eb',
          secondary: '#16a34a',
          background: '#1f2937',
          text: '#f9fafb',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
