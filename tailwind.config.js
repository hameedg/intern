/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1023px" },

      lg: { max: "991px" },

      md: { max: "767px" },

      sm: { max: "479px" },
      ms: { min: "767px" },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      clash: ["Clash Display", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
