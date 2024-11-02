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
        "1920": "1920px",
      },
      maxHeight: {
        "1200": "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
