/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        BgColorMain: "var(--bg-color-main)",
        BgColorSecond: "var(--bg-color-secondary)",
        FontColor1: "var(--font-color1)",
        FontColor2: "var(--font-color2)",
        ButtonColor: "var(--button-color)",
      },
      scale: {
        200: "2",
      },
    },
  },
  plugins: [],
};
