import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient: "var(--gradient)",
        primary: "var(--primary)",
        form: "var(--form)",
        grey: "var(--grey)",
        maincolor: "var(--main-color)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
export default config;
