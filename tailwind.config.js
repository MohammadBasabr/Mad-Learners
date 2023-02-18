/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      dark: {
        primary: "#181818",
        secondary: "#313131",
        heading: "#ffffff",
        content: "#AAAAAA",
        error: "#9474b8",
        hover: "#d7b932",
      },
      light: {
        primary: "#cdcdcd",
        secondary: "#e0e0e0",
        heading: "#3d3d3d",
        content: "#555555",
        error: "#30106b",
        hover: "#937820",
      },
    },
    extend: {
      keyframes: {
        enlarge: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        enlarge: "enlarge 5s linear",
      },
    },
  },
  plugins: [],
};
