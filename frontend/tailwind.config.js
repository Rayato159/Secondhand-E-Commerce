module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mycolor': {
          100: '#FFFFFF',
          200: '#EEE2DC',
          300: '#EDC7B7',
          400: '#BAB2B5',
          500: '#9A9A9A',
          600: '#615C5E',
        },
      },
    },
  },
  plugins: [],
}
