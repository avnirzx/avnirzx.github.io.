/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      "blue-custom": "#3258E8",
      "blue-light-custom": "#466BF3",
      "blue-dark-custom": "#232631",
      "orange-custom": "#FEB137",
      "gray-custom": "#9C9C9C",
      "gray-custom-2": "#7B7B7B",
      "white-custom": "#FAFAFA",
    },
  },
  plugins: [],
};
