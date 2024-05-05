/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        quicksand: ['Quicksand', 'sans-serif'],
        monoton: ["Monoton",'cursiv'] 
      },
      colors:{
        customColor: '#5a3e2b', 
      },
      fontSize: {
        '2.4rem': '2.3rem',
      },
    },
  },
  plugins: [],
}

