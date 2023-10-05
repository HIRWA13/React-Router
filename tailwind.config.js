/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FF8C38",
        secondary: "#FFF7ED",
        darkGray: "#252525"
      }
    },
  },
  plugins: [],
}

