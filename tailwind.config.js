/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#FF530D',
        'light-grey': '#EFEFEF',
        'dark-blue': '#2B3A42',
        'med-blue': '#3F5765',
        'light-blue': '#BDD4DE',
      },
      backgroundImage:{
        'sound': "url('/Sound Wave.svg')",
        'vie-logo': "url('/vie-logo.svg')",
      }
    },
  },
  plugins: [],
}
