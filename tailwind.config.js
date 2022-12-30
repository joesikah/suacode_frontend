/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      // Add your custom fonts and enjoy.
      'Baloo': ["Baloo 2", "Sans-serif"]
    },
    extend: {},
    colors: {
      default_white: "#fff",
      default_blue: "#000066",
      default_orange: "#FF6600",
      default_grey: "#646464",
      default_green: "#14A44D",
      default_red: "#DC4C64",
      default_black: "#000"
    }
  }
}
