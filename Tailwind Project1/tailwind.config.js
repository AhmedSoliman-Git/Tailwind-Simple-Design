/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}"],
    theme: {
    extend: {
      fontFamily: {
        'mf':["Nunito", "sans-serif"]
      },

      spacing: {
        '111': '50vh',
        "big" : "800px",
        "big2" : "500px",
        'fs' : '300px',
        "big3":'1200px',
        "imgSp":"48%"
      },
      screens: {
        'sm': '640px',
      },
    },
  },
  plugins: [],
}

