import type { Config } from "tailwindcss";
/** @type {import('postcss-load-config').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "0.62rem",
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
        accent: "var(--accent)",
        text: "var(--text)",
        error: "var(--error)",
        "error-border": "var(--error-border)",
        "error-text": "var(--error-text)",
        "home-gradient": "var(--home-gradient)",
        "main-text": "var(--main-text)",
        group: "var(--group)",
      },
    },
  },
  plugins: [
     '@tailwindcss/postcss': {},
  ],
};
export default config;
