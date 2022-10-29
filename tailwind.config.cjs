/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ["Prata", "serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

