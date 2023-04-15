/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['"Red Hat Display"', 'sans-serif']
    },
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      backgroundImage: {
        'mobile-pattern': "url('images/pattern-background-mobile.svg')",
        'desktop-pattern': "url('images/pattern-background-desktop.svg')",
      }
    }
  },
  plugins: [],
}

