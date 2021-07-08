const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      softred: "hsl(345, 95%, 68%)",
      white: "hsl(0, 0%, 100%)",
      blue: {
        light: "hsl(237, 18%, 59%)",
        soft: "#444558",
        DEFAULT: "hsl(236, 21%, 26%)",
        dark: "rgb(30, 31, 41)",
        darkest: "rgb(25, 26, 36)",
      },
    },
    extend: {
      letterSpacing: {
        enormous: "0.4em",
        huge: "0.5em",
      },
    },
    fontFamily: {
      redhat: ["Red Hat Text"],
    },
    screens: {
      xs: '375px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
