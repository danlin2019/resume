/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue' :'#003c5b',
        'regal-orange':'#f67410'
      },
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translate(-50%,0)' },
          '50%': { transform: 'translate(-50%,-10px)' },
        },
        fadeIn: {
          "0%" : {opacity :0},
          "100%" : {opacity :1},
        },
      },
      animation: {
        bounceUpDown: 'bounceUpDown  1s linear infinite',
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
}

