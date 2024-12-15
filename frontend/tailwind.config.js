/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        themeHeading: ["Cinzel Decorative"],
        themeText: ["Epilogue", "sans-serif"],
      },
      colors: {
        themeGreen: "#004B39",
        themeYellow: "#DB9E30",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
