/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      orange: {
        65: "#FF8D4C",
        70: "#FF9E66",
        75: "#FFAE80",
        80: "#FFBE99",
        90: "#FFDECC",
        95: "#FFEFE5",
        97: "#FFF5F0",
        99: "#FFFCFA",
      },
      grey: {
        10: "#191919",
        15: "#262626",
        20: "#333333",
        30: "#4C4C4D",
        35: "#59595A",
        40: "#656567",
        60: "#98989A",
        70: "#B3B3B3",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
