/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },  
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
      },
      backgroundColor: {
        'cool-gray-900': '#121f21',
      },
    },
  },
  plugins: [require("daisyui")],
}

// module.exports = {
//   // ... other config options ...

//   darkMode: 'class', // Enable dark mode as a CSS class
//   // ...
// };






