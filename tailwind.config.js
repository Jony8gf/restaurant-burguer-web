module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        'darkmode': {
          DEFAULT: '#1d2521'
        },
        'regal': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0-1': '0.1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 5s linear infinite;'
      },
      skew: {
        'ultimate': 'skew(0deg, 13deg)',
      },

    },
  },
  plugins: [],
}