/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "helvetica-w01-bold",
          "helvetica-w02-bold",
          "helvetica-lt-w10-bold",
          "sans-serif",
        ],
        copyExtraLight: ["worksans-extralight", "work sans", "sans-serif"],
        copy2: [
          "helvetica-w01-roman",
          "helvetica-w02-roman",
          "helvetica-lt-w10-roman",
          "sans-serif",
        ],
        copyLight: ["helvetica-w01-light", "helvetica-w02-light", "sans-serif"],
        sigature: ["mr de haviland", "cursive"],
      },
      colors: {
        primary: "#2B388C",
        secondary: "#1CA17E",
        "secondary-dark": "#157a58",
        info: "#43c8f5",
      },
    },
  },
  plugins: [],
};
