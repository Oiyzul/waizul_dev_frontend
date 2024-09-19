import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularDark:
          "repeating-radial-gradient(rgb(255,255,255) 2px, rgba(255,255,255,0) 5px, rgba(0,0,0,0) 90px)",
      },
      transitionDuration: {
        "10000": "10000ms",
        "5000": "5000ms",
        "3000": "3000ms",
        "2000": "2000ms",
      },
    },
  },
  plugins: [],
};
export default config;
