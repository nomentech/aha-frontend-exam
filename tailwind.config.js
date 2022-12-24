/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customblack: "#181818",
        customgray: "#FFF8",
        primary: "#00A3FF",
        secondary: "#00D1FF"
      }
    },
  },
  plugins: [],
}
