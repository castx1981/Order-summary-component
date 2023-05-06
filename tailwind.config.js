/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Red Hat Display"', 'sans-serif']
      },
      colors: {
        'desaturatedBlue': 'hsl(224, 23%, 55%)',
        'veryDarkBlue': 'hsl(228, 87%, 39%)',
        'darkBlue': 'hsl(223, 46%, 23%)',
        'paleBlue': 'hsl(228, 100%, 99%)',
        'brightBlue': 'hsl(245, 75%, 52%)',
        'brightPurple': 'hsl(245, 83%, 68%)',
      },
    }
  },
  plugins: [],
}
