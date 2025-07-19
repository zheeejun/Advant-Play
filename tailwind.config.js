/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",  
    "./public/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: { 
        primary: {
          DEFAULT: "#22C55E",
          hover:   "#16A34A",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
  },
},
},
  plugins: []
};
