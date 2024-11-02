import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      lg: {
        width: "945px",
        height: "468px",
      },
      maxWidth: {
        "933": "933px",
      },
      maxHeight: {
        "612": "612px",
      },
    },
  },
  plugins: [],
};
export default config;
