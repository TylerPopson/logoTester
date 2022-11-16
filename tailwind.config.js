/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-pink': '#D96690',
        'med-pink': '#F28DB2',
        'light-pink': '#F2C9E0',
        'dark-blue': '#89C2D9',
        'light-blue': '#88E8F2',
      },
    },
  },
  plugins: [],
}
