const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      blue: "#1B546F",
      lightBlue:"#2E8EBC",
      lightGray:"#797878",
      lightPink:"#FAEFDE",
      white:colors.white
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
