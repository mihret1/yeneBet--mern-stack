/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs':'340px',
      'sm': '640px',
      'md': '768px',
      'ml': '860px',
      'lg': '1024px',
      'lgg':'1124px',
      'xl': '1280px',
    },
  },
  plugins: [],
}