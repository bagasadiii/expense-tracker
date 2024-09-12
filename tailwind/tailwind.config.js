/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**',
    './module/**'
  ],
  theme: {
    extend: {
      height: {
        'screen-80': '80vh',
      }
    },
  },
  plugins: [],
}

