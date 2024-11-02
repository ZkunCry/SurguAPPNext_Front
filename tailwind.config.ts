import type { Config } from "tailwindcss";

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
      // screens: {
      //   lg: "1140px",
      // },
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
      },
    },
  },
  plugins: [],
};
export default config;
