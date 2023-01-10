/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1023px" },

      lg: { max: "991px" },

      md: { max: "767px" },

      sm: { max: "479px" },
      ms: { min: "476px" },
      dm: { min: "767px" },
      gl: { min: "991px" },
      lx: { min: "1023px" },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],

      archivo: ["Archivo", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
