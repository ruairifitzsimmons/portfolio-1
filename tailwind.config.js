module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'caveat': ['Caveat', 'cursive']
      },
      colors: {
          cyan: {
            1: '#21D2EE',
            2: '#0EA3E4',
            3: '#15B4EA'
          },
          bloodorange: {
            1: '#F88A40',
            2: '#D92874',
            3: '#EA580C'
          },
          limegreen: {
            1: '#B7F065',
            2: '#14B67D',
            3: '#3EB76D'
          }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
